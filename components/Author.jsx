import React from "react";
import Image from "next/image";

const Author = ({ author }) => (
  <div className="text-center mt-24 mb-10 py-12 px-8 relative rounded-lg bg-white bg-opacity-20">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        src={author.photo.url}
        alt={author.nom}
        unoptimized
        height="100px"
        width="100px"
        className="rounded-full"
      />
    </div>
    <h3 className="text-slate-700 mt-4 mb-4 text-xl font-bold">{author.nom}</h3>
    <p className="text-slate-700 text-ls">{author.description}</p>
  </div>
);

export default Author;
