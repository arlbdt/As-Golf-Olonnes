import Head from "next/head";
import PostCard from "../components/PostCard";
import Categories from "../components/Categories";
import PostWidget from "../components/PostWidget";
import FeaturedPosts from "../sections/FeaturedPosts";
import {getPosts} from "../services";

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-8">
      <Head>
        <title>AS | Golf Olonnes</title>
        <meta name="description" content="Site internet de l'Association sportive du golf des Sables d'Olonne" />

        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <FeaturedPosts />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
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
  };
}
