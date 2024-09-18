import { Outlet, createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import DashboardHeader from "./_dashboard/-components/DashboardHeader";

export const Route = createFileRoute("/_protected/_dashboard")({
  component: ClientsLayout,
});

export default function ClientsLayout() {
  return (
    <div className="flex-1 flex flex-col h-full bg-tremor-background-muted">
      <DashboardHeader />
      <div className="container flex justify-between items-center">
        <nav className="py-4">
          <ul className="flex justify-start gap-2 items-center">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 p-2 rounded-lg"
                activeProps={{ className: "text-tremor-brand" }}
                inactiveProps={{ className: "text-slate-700 bg-transparent" }}
              >
                Clients
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <main className="flex-1 bg-tremor-background-muted rounded-lg container">
        <Outlet />
      </main>
    </div>
  );
}
