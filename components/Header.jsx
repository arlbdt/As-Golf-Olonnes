import React from "react";
import Link from "next/link";
import { GiGolfFlag } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Header = () => (
  <div className="mb-20 bg-green-700 shadow-lg">
    <nav className="container mx-auto px-10 py-4 flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center gap-6">
          <GiGolfFlag
            size={48}
            className="text-slate-100 border border-slate-100 rounded-full p-[5px] cursor-pointer"
          />
          <span className="hidden sm:block cursor-pointer font-medium sm:text-xl lg:text-2xl text-slate-100">
            AS - Golf des Sables d&#39;Olonne
          </span>
        </div>
      </Link>
      <div className="flex gap-4 md:gap-8 items-center">
        <a
          href="mailto:asgolfolonne85@gmail.com"
          className="text-slate-100 uppercase text-base sm:text-lg font-medium"
        >
          <MdOutlineAlternateEmail
            className="text-slate-100 cursor-pointer"
            size={32}
          />
        </a>
        <Link href="/contact">
          <a className="text-slate-100 uppercase text-base sm:text-lg font-medium">
            Liens Utiles
          </a>
        </Link>
      </div>
    </nav>
  </div>
);

export default Header;
