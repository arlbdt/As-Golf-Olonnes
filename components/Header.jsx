import React from "react";
import Link from "next/link";

const Header = () => (
  <div className="border-b mb-20 bg-white">
    <div className="container mx-auto px-10 border-gray-300 py-6">
      <Link href="/">
        <span className="cursor-pointer font-bold text-2xl sm:text-3xl text-gray-700">
          AS Golf Olonnes
        </span>
      </Link>
    </div>
  </div>
);

export default Header;
