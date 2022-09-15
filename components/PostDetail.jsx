import React from "react";
import Image from "next/image";
import moment from "moment";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { FcCalendar } from "react-icons/fc";

const PostDetail = ({ post }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-10">
        <div className="flex justify-center items-center">
          <Image
            src={post.imagePrincipale.url}
            alt={post.titre}
            width={post.imagePrincipale.width}
            height={post.imagePrincipale.height}
            className="shadow-lg rounded-t-lg lg:rounded-lg"
          />
        </div>
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
            <RichText
              content={post.contenu.raw.children}
              renderers={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold my-2">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-lg font-semibold">{children}</h4>
                ),
                h5: ({ children }) => (
                  <h5 className="text-base font-semibold">{children}</h5>
                ),
                h6: ({ children }) => (
                  <h6 className="text-base font-semibold">{children}</h6>
                ),
                p: ({ children }) => (
                  <p className="text-base font-normal">{children}</p>
                ),
                bold: ({ children }) => (
                  <span className="font-semibold">{children}</span>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
