import React from "react";
import moment from "moment";
import Link from "next/link";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const AdjacentPostCard = ({ post, position }) => (
  <>
    <div
      className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72"
      style={{ backgroundImage: `url('${post.imagePrincipale.url}')` }}
    />
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72" />
    <div className="flex flex-col items-center justify-center gap-4 rounded-lg p-6 sm:p-8 lg:p-12 text-center absolute w-full h-full">
      <p className="text-white text-shadow font-normal text-base">
        {moment(post.createdAt).format("DD MMM YYYY")}
      </p>
      <p className="text-white text-shadow font-semibold text-lg md:text-xl lg:text-2xl">
        {`${post.titre.slice(0, 75)}${post.titre.length > 74 ? "..." : ""}`}
      </p>
    </div>
    <Link href={`/articles/${post.slug}`}>
      <span className="z-10 cursor-pointer absolute w-full h-full" />
    </Link>
    {position === "LEFT" && (
      <div className="absolute left-0 top-[50%] transform translate-y-[-50%] cursor-pointer">
        <BsFillArrowLeftCircleFill size={40} color="white" />
      </div>
    )}
    {position === "RIGHT" && (
      <div className="absolute right-0 top-[50%] transform translate-y-[-50%] cursor-pointer">
        <BsFillArrowRightCircleFill size={40} color="white" />
      </div>
    )}
  </>
);

export default AdjacentPostCard;
