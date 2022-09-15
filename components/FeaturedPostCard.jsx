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
    <div className="flex flex-col items-center justify-center text-center rounded-lg px-4 py-6 absolute w-full h-full">
      <div>
        <p className="text-white mb-4 text-shadow font-semibold text-xs">
          {moment(post.createdAt).format("DD MMM YYYY")}
        </p>
        <p className="text-white mb-4 text-shadow font-semibold text-xl text-center">
          {`${post.titre.slice(0, 50)}${post.titre.length > 49 ? "..." : ""}`}
        </p>
      </div>

      {post.auteur && (
        <div className="absolute bottom-4 flex items-center w-full justify-center">
          {post.auteur.photo ? (
            <Image
              src={post.auteur.photo.url}
              alt={post.auteur.nom}
              height="30px"
              width="30px"
              unoptimized
              className="rounded-full"
            />
          ) : (
            <Image
              src="/golf.png"
              alt="golf"
              height="30px"
              width="30px"
              unoptimized
              className="rounded-full"
            />
          )}
          <p className="inline align-middle text-white text-shadow ml-2 font-medium">
            {post.auteur.nom}
          </p>
        </div>
      )}
    </div>
    <Link href={`/article/${post.slug}`}>
      <span className="cursor-pointer absolute w-full h-full" />
    </Link>
  </div>
);

export default FeaturedPostCard;
