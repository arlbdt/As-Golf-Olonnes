import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-700">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-10 flex flex-col text-center sm:flex-row gap-2 sm:items-center sm:justify-between text-slate-100">
        <p className="text-sm font-light">
          &copy;2022 AS - Golf des Sables d'Olonnes. All rights reserved.
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
