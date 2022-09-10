import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { getSimilarPosts, getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then(result => setRelatedPosts(result));
    } else {
      getRecentPosts().then(result => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 lg:px-4 xl:px-8 mb-16">
      <h3 className="text-gray-700 text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Articles Similaires" : "Articles Récents"}
      </h3>
      {relatedPosts.map((post, i) => (
        <div key={i} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <Image
              src={post.imagePrincipale.url}
              alt={post.titre}
              height="60px"
              width="60px"
              unoptimized
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-sm font-thin">
              {moment(post.createdAt).format("DD MMM YYYY")}
            </p>
            <Link href={`/article/${post.slug}`}>
              <p className="text-base font-medium text-gray-700">{`${post.titre.slice(
                0,
                75
              )}${post.titre.length > 74 ? "..." : ""}`}</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
