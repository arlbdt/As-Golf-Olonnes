import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { FcCalendar } from "react-icons/fc";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 pb-4 lg:px-6 lg:pt-6 mb-10">
      <Link href={`/article/${post.slug}`}>
        <div className="relative h-64 md:h-72 lg:h-80 cursor-pointer mb-6">
          <div
            className="absolute rounded-t-lg lg:rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-64 md:h-72 lg:h-80"
            style={{ backgroundImage: `url('${post.imagePrincipale.url}')` }}
          />
          <div className="absolute rounded-t-lg lg:rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-64 md:h-72 lg:h-80" />
          <div className="flex px-4 py-6 items-center justify-center absolute w-full h-full">
            <p className="text-white text-2xl font-semibold text-center">
              {`${post.titre.slice(0, 75)}${
                post.titre.length > 74 ? "..." : ""
              }`}
            </p>
          </div>
        </div>
      </Link>

      <div className="flex flex-col text-center items-center gap-8 mb-8 w-full">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-24">
          <div className="flex items-center gap-4">
            <Image
              src={post.auteur.photo.url}
              alt={post.auteur.nom}
              height="30px"
              width="30px"
              unoptimized
              className="rounded-full"
            />
            <p className="text-gray-700 text-sm md:text-base">
              {post.auteur.nom}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <FcCalendar size={28} />
            <span className="text-sm md:text-base text-gray-700">
              {moment(post.createdAt).format("DD MMM YYYY")}
            </span>
          </div>
        </div>

        {post.extrait && (
          <p className="text-base md:text-lg text-gray-700 font-normal px-4 lg:px-20">
            {post.extrait}
          </p>
        )}

        <div>
          <Link href={`/article/${post.slug}`}>
            <span className="shadow-2xl transition duration-500 transform hover:-translate-y-1 inline-block bg-green-600 text-sm md:text-base font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Lire la suite...
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;

{
  /* <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.imagePrincipale.url}
          alt={post.titre}
          className="object-top absolute h-80 w-full shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>

      <h1 className="transition duration-400 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/article/${post.slug}`}>{post.titre}</Link>
      </h1>

      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <Image
            src={post.auteur.photo.url}
            alt={post.auteur.nom}
            height="30px"
            width="30px"
            unoptimized
            className="align-middle rounded-full h-8 w-8"
          />
          <p className="inline align-middle text-gray-700 ml-4 text-lg">
            {post.auteur.nom}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <FcCalendar size={24} />
          <span>{moment(post.createdAt).format("DD MMM YYYY")}</span>
        </div>
      </div>

      {post.extrait && (
        <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
          {post.extrait}
        </p>
      )}

      <div className="text-center">
        <Link href={`/article/${post.slug}`}>
          <span className="shadow-2xl transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Lire la suite...
          </span>
        </Link>
      </div> */
}
