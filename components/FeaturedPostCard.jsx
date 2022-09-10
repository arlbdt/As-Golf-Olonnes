import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72">
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-xl inline-block w-full h-72"
      style={{ backgroundImage: `url('${post.imagePrincipale.url}')` }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col rounded-lg px-4 py-6 items-center justify-between absolute w-full h-full">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("DD MMM YYYY")}
      </p>
      <p className="text-white mb-4 text-shadow font-semibold text-xl text-center">
        {`${post.titre.slice(0, 50)}${post.titre.length > 49 ? "..." : ""}`}
      </p>
      <div className="flex items-center w-full justify-center">
        <Image
          unoptimized
          alt={post.auteur.nom}
          height="30px"
          width="30px"
          className="align-middle drop-shadow-lg rounded-full"
          src={post.auteur.photo.url}
        />
        <p className="inline align-middle text-white text-shadow ml-2 font-medium">
          {post.auteur.nom}
        </p>
      </div>
    </div>
    <Link href={`/article/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
