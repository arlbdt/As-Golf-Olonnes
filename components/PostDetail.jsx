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
              <span>{moment(post.publishedAt).format("DD MMM YYYY")}</span>
            </div>
          </div>
          <div className="text-gray-700">
            <RichText
              content={post.contenu.json.children}
              references={post.contenu.references}
              renderers={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold my-2 py-1">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold py-1">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold py-1">{children}</h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-lg font-semibold py-1">{children}</h4>
                ),
                h5: ({ children }) => (
                  <h5 className="text-base font-semibold py-1">{children}</h5>
                ),
                h6: ({ children }) => (
                  <h6 className="text-base font-semibold py-1">{children}</h6>
                ),
                p: ({ children }) => (
                  <p className="text-base font-normal py-1">{children}</p>
                ),
                bold: ({ children }) => (
                  <span className="font-semibold">{children}</span>
                ),
                a: ({ children, href, openInNewTab }) => (
                  <a
                    href={href}
                    target={openInNewTab ? "_blank" : "_self"}
                    className="text-green-700 font-semibold"
                    rel="noreferrer"
                  >
                    {children}
                  </a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="pl-4 border-l-4 border-gray-700 text-base my-4">
                    {children}
                  </blockquote>
                ),
                code_block: ({ children }) => {
                  return (
                    <pre className="line-numbers language-none">
                      <code>{children}</code>
                    </pre>
                  );
                },
                Asset: {
                  application: ({ children, url }) => (
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-700 font-semibold"
                    >
                      {children}
                    </a>
                  ),
                  "application/pdf": ({ url }) => {
                    return (
                      <iframe
                        src={url}
                        style={{ border: "none" }}
                        width="100%"
                        height="500px"
                      ></iframe>
                    );
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;

// "application/pdf": (url, nodeId) => {
//   return (
//     <div className="post" key={nodeId}>
//       <span>{url}</span>
//     </div>
//   );
// },
