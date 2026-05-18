"use client";

export default function Error({
  reset
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  return (
    <main className="error-screen">
      <section className="error-card" role="alert">
        <p className="eyebrow">Something broke</p>
        <h1>That page hit a wall.</h1>
        <p>Try again and the page will reload cleanly.</p>
        <button className="button button-primary" type="button" onClick={reset}>
          Try again
        </button>
      </section>
    </main>
  );
}
