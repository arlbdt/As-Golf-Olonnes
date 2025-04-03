import React from "react";
import {useRouter} from 'next/router';
import {getPosts, getPostDetails} from "../../services";
import SEO from "../../components/SEO";
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
            <SEO
                title={post.titre}
                description={post.extrait || `Article: ${post.titre}`}
                ogImage={post.imagePrincipale.url}
                ogType="article"
                url={`/articles/${post.slug}`}
                article={{
                    publishedAt: post.publishedAt,
                    updatedAt: post.updatedAt,
                    majorUpdate: post.majorUpdate,
                    categories: post.categories
                }}
            />

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
    try {
        const data = await getPostDetails(params.slug);

        // If no data was found, return 404
        if (!data) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                post: data,
            },
            // Revalidate every 10 minutes
            revalidate: 600,
        };
    } catch (error) {
        console.error('Error fetching post:', error);
        return {
            notFound: true,
        };
    }
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const posts = await getPosts();

    // Only pre-render the 20 most recent posts at build time
    const recentPosts = posts.slice(0, 20);

    const paths = recentPosts.map(({slug}) => ({
        params: {slug},
    }));

    return {
        paths,
        // Change fallback to 'blocking'
        // This will server-render pages on-demand if the path doesn't exist.
        fallback: 'blocking',
    };
}