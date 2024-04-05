import {
  RiMoneyDollarCircleLine,
  RiRefund2Line,
  RiPieChartLine,
  RiAccountCircleFill,
} from "@remixicon/react";
import { Divider } from "@tremor/react";
import { Link } from "@tanstack/react-router";

export default function Navbar() {
  const links = [
    {
      name: "Dashboard",
      href: "/dashboard/",
      Icon: RiPieChartLine,
    },
    {
      name: "Budget",
      href: "/dashboard/budget/",
      Icon: RiMoneyDollarCircleLine,
    },
    {
      name: "Subscriptions",
      href: "/dashboard/subscriptions/",
      Icon: RiRefund2Line,
    },
  ];

  return (
    <nav>
      <Link
        to={"/"}
        className="text-3xl font-semibold md:mb-10 text-white hidden md:block"
      >
        Supabudget
      </Link>
      <ul className="flex md:flex-col gap-2 justify-center  w-full">
        {links.map((link) => (
          <NavbarLink
            key={link.href}
            name={link.name}
            href={link.href}
            Icon={link.Icon}
          />
        ))}

        <Divider />

        <button className="mb-3 p-2 font-semibold flex gap-4 transition-all duration-200 ease-in-out rounded-lg text-slate-100 hover:text-indigo-300">
          <RiAccountCircleFill size={20} />
          Sign Out
        </button>
      </ul>
    </nav>
  );
}

type NavbarLinkProps = {
  name: string;
  href: string;
  Icon: React.ElementType;
};

function NavbarLink({ name, href, Icon }: NavbarLinkProps) {
  const activeClasses =
    "bg-tremor-brand text-slate-100 rounded-lg text-white hover:text-white ";
  const inactiveClasses = "text-slate-100 hover:text-indigo-300";

  return (
    <li>
      <Link
        to={href}
        activeProps={{ className: activeClasses }}
        inactiveProps={{ className: inactiveClasses }}
        className={
          "mb-3 p-2 font-semibold flex gap-4 transition-all duration-200 ease-in-out rounded-lg"
        }
      >
        <Icon className="inline-block" />
        <span className="hidden md:inline">{name}</span>
      </Link>
    </li>
  );
}
