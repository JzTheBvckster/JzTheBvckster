import Link from "next/link";

export default function NotFound() {
  return (
    <main className="error-screen">
      <section className="error-card">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The route exists somewhere else in the imagination.</p>
        <Link className="button button-primary" href="/">
          Back home
        </Link>
      </section>
    </main>
  );
}
