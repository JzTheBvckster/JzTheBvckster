import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(process.env.PLAYWRIGHT_REQUIRE_FROM ?? import.meta.url);
const { chromium } = require("playwright");

const outDir = path.resolve("public/projects");
const viewport = { width: 1440, height: 1000 };
const created = [];
const notes = [];

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function settle(page) {
  await page.waitForLoadState("domcontentloaded", { timeout: 15000 }).catch(() => {});
  await page.waitForLoadState("networkidle", { timeout: 12000 }).catch(() => {});
  await wait(800);
}

async function shot(page, filename, description, fullPage = true) {
  const filePath = path.join(outDir, filename);
  await settle(page);
  await page.screenshot({ path: filePath, fullPage });
  created.push({ filename, description, url: page.url() });
}

async function clickFirst(page, patterns) {
  for (const pattern of patterns) {
    const target = page.getByRole("button", { name: pattern }).first();
    if (await target.count().catch(() => 0)) {
      await target.click({ timeout: 6000 }).catch(() => {});
      return true;
    }
    const link = page.getByRole("link", { name: pattern }).first();
    if (await link.count().catch(() => 0)) {
      await link.click({ timeout: 6000 }).catch(() => {});
      return true;
    }
  }
  return false;
}

async function fillLogin(page, email, password) {
  const emailInput = page.locator('input[type="email"], input[name*="email" i], input[placeholder*="email" i]').first();
  const passwordInput = page.locator('input[type="password"], input[name*="password" i], input[placeholder*="password" i]').first();
  await emailInput.fill(email, { timeout: 10000 });
  await passwordInput.fill(password, { timeout: 10000 });
  const submit = page.locator('button[type="submit"], input[type="submit"]').first();
  if (await submit.count().catch(() => 0)) {
    await submit.click({ timeout: 8000 });
  } else {
    await page.getByRole("button", { name: /login to|log in|sign in|continue/i }).last().click({ timeout: 8000 });
  }
  await settle(page);
}

async function visitAndCapture(page, base, candidates, prefix, labels) {
  for (const [slug, route] of candidates) {
    try {
      await page.goto(new URL(route, base).toString(), { waitUntil: "domcontentloaded", timeout: 25000 });
      await settle(page);
      const url = page.url().toLowerCase();
      const body = (await page.locator("body").innerText({ timeout: 5000 }).catch(() => "")).toLowerCase();
      if (url.includes("login") || url.includes("signin") || body.includes("login") && body.includes("password")) {
        notes.push(`${prefix} ${slug}: route appeared unauthenticated or redirected to login (${page.url()})`);
        continue;
      }
      await shot(page, `${prefix}-${slug}.png`, labels[slug] ?? `${prefix} ${slug}`);
    } catch (error) {
      notes.push(`${prefix} ${slug}: ${error.message.split("\n")[0]}`);
    }
  }
}

async function discoverLinks(page, base) {
  const links = await page.locator("a[href]").evaluateAll((anchors) =>
    anchors.map((anchor) => ({
      text: anchor.textContent?.replace(/\s+/g, " ").trim() ?? "",
      href: anchor.href,
    })),
  ).catch(() => []);
  return [...new Map(
    links
      .filter((link) => link.href.startsWith(base))
      .map((link) => [new URL(link.href).pathname, link]),
  ).values()];
}

async function captureKaziFlow(browser) {
  const page = await browser.newPage({ viewport });
  const base = "https://kaziflow-eta.vercel.app";
  await page.goto(base, { waitUntil: "domcontentloaded", timeout: 30000 });
  await settle(page);
  await clickFirst(page, [/log in/i, /login/i, /sign in/i]);
  await settle(page);
  await fillLogin(page, "human@email.com", "Human-31");
  await settle(page);
  await page.goto(`${base}/projects`, { waitUntil: "domcontentloaded", timeout: 25000 });
  await settle(page);
  await page.getByRole("link", { name: /dashboard/i }).click({ timeout: 8000 }).catch(() => {});
  await settle(page);
  await shot(page, "kaziflow-auth-dashboard.png", "KaziFlow authenticated dashboard");

  await visitAndCapture(
    page,
    base,
    [
      ["projects", "/projects"],
      ["team", "/team"],
      ["settings", "/settings"],
    ],
    "kaziflow-auth",
    {
      projects: "KaziFlow projects area with authenticated demo data",
      team: "KaziFlow team/member management area",
      settings: "KaziFlow authenticated settings area",
    },
  );
  await page.goto(`${base}/projects`, { waitUntil: "domcontentloaded", timeout: 25000 });
  await settle(page);
  const projectLink = page.getByRole("link", { name: /Launch Readiness/i }).first();
  if (await projectLink.count().catch(() => 0)) {
    await projectLink.click({ timeout: 8000 });
    await settle(page);
    await shot(page, "kaziflow-auth-project-detail.png", "KaziFlow project detail page with demo project");
  }
  await page.close();
}

async function shenanigansDemoLogin(page, base, role) {
  await page.goto(base, { waitUntil: "domcontentloaded", timeout: 30000 });
  const result = await page.evaluate(async (requestedRole) => {
    const response = await fetch("/api/auth/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({ role: requestedRole }),
    });
    return response.json();
  }, role);
  if (!result?.ok) {
    throw new Error(result?.error || `${role} demo login failed`);
  }
  await page.goto(new URL(result.data.redirect, base).toString(), { waitUntil: "domcontentloaded", timeout: 30000 }).catch(() => {});
  await settle(page);
}

async function captureShenanigans(browser) {
  const page = await browser.newPage({ viewport });
  const base = "https://shenanigans10.vercel.app";

  await shenanigansDemoLogin(page, base, "MANAGING_DIRECTOR");
  await shot(page, "shenanigans-demo-dashboard.png", "Shenanigans MD demo dashboard with operations summary");
  await shot(page, "shenanigans-demo-md.png", "Shenanigans Managing Director demo console");
  await page.goto(`${base}/app/projects`, { waitUntil: "domcontentloaded", timeout: 30000 });
  await shot(page, "shenanigans-demo-projects.png", "Shenanigans MD project governance view");

  await shenanigansDemoLogin(page, base, "PROJECT_MANAGER");
  await shot(page, "shenanigans-demo-pm.png", "Shenanigans Project Manager workspace");
  await page.goto(`${base}/pm-workspace/tasks`, { waitUntil: "domcontentloaded", timeout: 30000 });
  await shot(page, "shenanigans-demo-tasks.png", "Shenanigans PM task board with demo work items");

  await shenanigansDemoLogin(page, base, "EMPLOYEE");
  await shot(page, "shenanigans-demo-employee.png", "Shenanigans employee workspace dashboard");
  await page.goto(`${base}/workspace/profile`, { waitUntil: "domcontentloaded", timeout: 30000 });
  await shot(page, "shenanigans-demo-profile.png", "Shenanigans employee profile page");
  await page.close();
}

const browser = await chromium.launch({ headless: true });
try {
  await captureKaziFlow(browser);
  await captureShenanigans(browser);
} finally {
  await browser.close();
}

console.log(JSON.stringify({ created, notes }, null, 2));
