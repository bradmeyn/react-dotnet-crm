export default function DashboardHeader() {
  return (
    <header className="flex justify-between bg-slate-800 text-white py-4">
      <div className="container flex items-center justify-between">
        <span className="text-2xl font-extrabold text-white">CRM</span>

        <nav className="flex items-center gap-4">
          <a href="/">Account</a>
        </nav>
      </div>
    </header>
  );
}
