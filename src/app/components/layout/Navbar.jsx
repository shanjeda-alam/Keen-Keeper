"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome, GoClock } from "react-icons/go";
import { FiTrendingUp } from "react-icons/fi";

const navLinks = [
  { href: "/", label: "Home", icon: GoHome },
  { href: "/timeline", label: "Timeline", icon: GoClock },
  { href: "/stats", label: "Stats", icon: FiTrendingUp },
];

const baseLink =
  "flex items-center gap-1.5 px-4 py-2.5 rounded-md text-sm font-medium transition";

const desktopLink = (isActive) =>
  `${baseLink} ${
    isActive
      ? "bg-[#244d3f] text-gray-100 font-semibold"
      : "text-slate-500 hover:bg-gray-100"
  }`;

const mobileLink = (isActive) =>
  `${baseLink} ${
    isActive
      ? "bg-[#244d3f] text-gray-100 font-semibold"
      : "text-gray-300 hover:bg-gray-800 hover:text-gray-100"
  }`;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="navbar bg-white border-b border-gray-200 px-2 sm:px-8 min-h-16">
     
      <div className="flex-none lg:hidden">
        <div className="dropdown">
          <button
            tabIndex={0}
            aria-label="Open menu"
            className="btn btn-square bg-gray-900 text-white border-none shadow-none hover:bg-gray-700"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-50 mt-3 w-52 gap-1 rounded-box border border-gray-700 bg-gray-900 p-2 shadow-lg"
          >
            {navLinks.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link href={href} className={mobileLink(pathname === href)}>
                  <Icon size={18} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1">
        <Link
          href="/"
          className="btn btn-ghost text-xl sm:text-2xl font-bold tracking-tight hover:bg-transparent"
        >
          <span className="text-gray-900">Keen</span>
          <span className="text-[#244d3f] -ml-2">Keeper</span>
        </Link>
      </div>

      <div className="flex-none hidden lg:block">
        <ul className="flex items-center gap-3">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <Link href={href} className={desktopLink(pathname === href)}>
                <Icon size={18} />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}