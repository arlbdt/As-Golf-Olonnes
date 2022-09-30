import React from "react";
import Image from "next/image";

const Author = ({ author }) => (
  <div className="text-center mt-24 mb-10 py-12 px-8 relative rounded-lg bg-white shadow-lg">
    <div className="absolute left-0 right-0 -top-14">
      {author.photo ? (
        <Image
          src={author.photo.url}
          alt={author.nom}
          height="100px"
          width="100px"
          unoptimized
          className="rounded-full shadow-lg"
        />
      ) : (
        <Image
          src="/golf.png"
          alt="golf"
          height="100px"
          width="100px"
          unoptimized
          className="rounded-full"
        />
      )}
    </div>
    <h3 className="text-slate-700 mt-4 mb-4 text-xl font-bold">{author.nom}</h3>
    <p className="text-slate-700 text-ls">{author.description}</p>
  </div>
);

export default Author;
