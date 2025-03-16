import React from "react";
import SEO from "../components/SEO";
import Categories from "../components/Categories";
import PostWidget from "../components/PostWidget";
import Pagination from "../components/Pagination";
import FeaturedPosts from "../sections/FeaturedPosts";
import {getPosts} from "../services";

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-8">
      <SEO
        url="/"
      />

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:mb-10">
        <div className="lg:col-span-8 col-span-1">
          <Pagination posts={posts} />
        </div>
        <div className="lg:col-span-4 col-span-1 mb-10 lg:mb-0">
          <div className="lg:sticky relative top-8">
            {/* <PostWidget /> */}
            <Categories />
          </div>
        </div>
      </div>

    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {posts},
    revalidate: 10
  };
}
