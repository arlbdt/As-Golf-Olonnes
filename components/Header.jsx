import React from "react";
import Link from "next/link";
import { GiGolfFlag } from "react-icons/gi";

const Header = () => (
  <div className="border-b mb-20 bg-white">
    <div className="container mx-auto px-10 border-gray-300 py-4">
      <Link href="/">
        <div className="flex items-center gap-6">
          <GiGolfFlag
            size={48}
            className="hidden sm:block text-gray-700 border border-green-400 rounded-full p-[5px] cursor-pointer"
          />
          <span className="cursor-pointer font-bold text-2xl sm:text-3xl text-gray-700">
            AS Golf des Sables d&#39;Olonnes
          </span>
        </div>
      </Link>
    </div>
  </div>
);

export default Header;
