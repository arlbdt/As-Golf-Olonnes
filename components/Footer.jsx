import React from "react";

const Footer = () => {
  return (
    <div className="border-t-2 bg-white">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-10 flex gap-2 items-center justify-between text-gray-600">
        <p className="text-sm font-light">
          &copy;2022 AS Golf Olonnes. All rights reserved.
        </p>
        <p className="text-sm font-light">
          Site internet crée par{" "}
          <a
            href="https://aurelien-bedouet.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            AB
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
