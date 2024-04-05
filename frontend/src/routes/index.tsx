import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  const date = new Date().getFullYear();
  return (
    <>
      <header className="flex justify-between container py-4">
        <span className="text-slate-900 font-bold">CRM</span>
        <Link
          to="/dashboard"
          className="rounded bg-tremor-brand text-white py-2 px-4 font-semibold"
        >
          Dashboard
        </Link>
      </header>

      <main className="flex-1 container">
        <section className="py-12">
          <div className="mb-4 text-center w-full">
            <h1 className="text-slate-800 text-8xl font-semibold mb-4 max-w-[800px] mx-auto">
              <div>Less admin, more advice.</div>
            </h1>
            <p className="text-slate-700 text-xl max-w-[600px] mb-8 mx-auto">
              Clientify is a modern CRM for financial advisors. Spend less time
              struggling with old software and more time helping your clients
              reach their financial goals.
            </p>

            <Link
              href="/dashboard"
              className="rounded bg-tremor-brand text-white py-3 px-4  text-lg"
            >
              Get Started
            </Link>
          </div>
        </section>

        <section className="py-12"></section>

        <section className="py-12"></section>
      </main>

      <footer className="container">
        <p>© {date}. All rights reserved.</p>
      </footer>
    </>
  );
}
