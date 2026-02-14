import React from "react";
import SEO from "../components/SEO";
import Categories from "../components/Categories";
import PostWidget from "../components/PostWidget";
import Pagination from "../components/Pagination";
import SponsorsCarousel from "../sections/SponsorsCarousel";
import FeaturedPosts from "../sections/FeaturedPosts";
import { getPosts, getSponsors } from "../services";

export default function Home({ posts, sponsors }) {
  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-8">
      <SEO url="/" />
          <FeaturedPosts />

      <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-6 lg:gap-12 mb-10">
        <div className="col-span-8 min-w-0">
          {/* <SponsorsCarousel sponsors={sponsors} /> */}
          <Pagination posts={posts} />
        </div>
        <div className="col-span-4 min-w-[140px]">
          <div className="sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const [posts, sponsors] = await Promise.all([
    getPosts().then((p) => p || []),
    getSponsors(),
  ]);
  return {
    props: { posts, sponsors },
    revalidate: 600,
  };
}
