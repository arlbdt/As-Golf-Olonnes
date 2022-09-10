import React from "react";
import Image from "next/image";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { FcCalendar } from "react-icons/fc";

const PostDetail = ({ post }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-10">
        <Image
          src={post.imagePrincipale.url}
          alt={post.titre}
          width="1200px"
          height="800px"
          className="aspect-[3/2] shadow-lg rounded-t-lg lg:rounded-lg"
        />
        <div className="px-4 sm:px-8 lg:px-0">
          <div className="flex flex-col gap-4 my-8 ">
            <h1 className="text-gray-700 text-xl sm:text-2xl lg:text-3xl font-semibold">
              {post.titre}
            </h1>
            <div className="flex items-center gap-4">
              <FcCalendar size={24} />
              <span>{moment(post.createdAt).format("DD MMM YYYY")}</span>
            </div>
          </div>
          <div className="text-gray-700">
            <RichText content={post.contenu.raw.children} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
