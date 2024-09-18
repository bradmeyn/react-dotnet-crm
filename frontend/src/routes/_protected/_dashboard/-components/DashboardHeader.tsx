import { Link } from "@tanstack/react-router";

export default function DashboardHeader() {
  return (
    <header className="flex justify-between bg-slate-800 text-white py-4">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <span className="font-bold text-xl">CRM</span>
        </Link>
      </div>
    </header>
  );
}
