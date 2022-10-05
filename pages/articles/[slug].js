import React from "react";
import {useRouter} from 'next/router';
import {getPosts, getPostDetails} from "../../services";
import Head from "next/head";
import PostDetail from "../../components/PostDetail";
import Categories from "../../components/Categories";
import PostWidget from "../../components/PostWidget";
import Author from "../../components/Author";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import Loader from "../../components/Loader";
import AdjacentPosts from "../../sections/AdjacentPosts";


const PostDetails = ({post}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-8">
            <Head>
                <title>{`AS | Golf des Sables d'Olonne - ${post.titre}`}</title>
                <meta name="description" content={`Blog de l'Association Sportive du golf des Sables d'Olonne - Article: ${post.titre}`} />

                <link rel="icon" href="/favicon/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="col-span-1 lg:col-span-8">
                    <PostDetail post={post} />
                    {post.auteur && <Author author={post.auteur} />}
                    <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;

// Fetch data at build time
export async function getStaticProps({params}) {
    const data = await getPostDetails(params.slug);
    return {
        props: {
            post: data,
        },
        revalidate: 10
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({slug}) => ({params: {slug}})),
        fallback: true,
    };
}