const { chromium } = require("playwright");
const path = require("node:path");

const out = (...parts) => path.join(process.cwd(), "public", "projects", ...parts);

async function screenshot(page, name) {
  await page.waitForTimeout(1400);
  await page.screenshot({ path: out(name), fullPage: true });
}

async function isBlockedCapture(page) {
  const body = (await page.locator("body").innerText().catch(() => "")).toLowerCase();
  return (
    page.url().includes("/login") ||
    (body.includes("login") && body.includes("password")) ||
    body.includes("page not found")
  );
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
  const page = await context.newPage();

  await page.goto("https://kaziflow-eta.vercel.app/login", { waitUntil: "networkidle" });
  await page.fill("#login-email", "human@email.com");
  await page.fill("#login-password", "Human-31");
  await page.getByRole("button", { name: /login to kaziflow/i }).click();
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.waitForTimeout(2500);

  if (await isBlockedCapture(page)) {
    throw new Error(`KaziFlow login did not complete; current URL is ${page.url()}`);
  }

  await screenshot(page, "kaziflow-auth-dashboard.png");

  const links = await page.locator("a").evaluateAll((anchors) =>
    anchors.map((anchor) => ({
      text: anchor.textContent?.trim().replace(/\s+/g, " "),
      href: anchor.href,
    }))
  );
  console.log(JSON.stringify({ currentUrl: page.url(), links }, null, 2));

  const routes = [
    ["dashboard", "/"],
    ["projects", "/projects"],
    ["team", "/team"],
    ["settings", "/settings"],
    ["workspaces", "/workspaces"],
  ];

  const origin = "https://kaziflow-eta.vercel.app";
  for (const [name, route] of routes) {
    await page.goto(`${origin}${route}`, { waitUntil: "networkidle" }).catch(() => {});
    if (!(await isBlockedCapture(page))) {
      await screenshot(page, `kaziflow-auth-${name}.png`);
    }
  }

  await browser.close();
})();
