import React from 'react';
import {useRouter} from 'next/router';
import {getCategories, getCategoryPost} from '../../services';
import Head from 'next/head';
import Pagination from "../../components/Pagination";
import Categories from '../../components/Categories';
import Loader from '../../components/Loader';

const CategoryPost = ({posts}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-8">
            <Head>
                <title>{`AS | Golf Olonnes - Catégorie: ${posts[0].categories[0] ? posts[0].categories[0].nom : ""}`}</title>
                <meta name="description" content={`Blog de l'Association Sportive du golf des Sables d'Olonne - Catégorie: ${posts[0].categories[0] ? posts[0].categories[0].nom : ""}`} />

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
                    <Pagination posts={posts} />
                </div>
                <div className="col-span-1 lg:col-span-4">
                    <div className="relative lg:sticky top-8">
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({params}) {
    const posts = await getCategoryPost(params.slug);

    return {
        props: {posts},
    };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
    const categories = await getCategories();
    return {
        paths: categories.map(({slug}) => ({params: {slug}})),
        fallback: true,
    };
}