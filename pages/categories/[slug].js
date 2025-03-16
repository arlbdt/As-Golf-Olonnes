import React from 'react';
import {useRouter} from 'next/router';
import {getCategories, getCategoryPost} from '../../services';
import SEO from '../../components/SEO';
import Pagination from "../../components/Pagination";
import Categories from '../../components/Categories';
import Loader from '../../components/Loader';

const CategoryPost = ({posts, category}) => {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    return (
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-8">
            <SEO
                title={`Catégorie: ${category?.nom || 'Catégories'}`}
                description={`Articles de la catégorie ${category?.nom || ''} - Blog de l'Association Sportive du golf des Sables d'Olonne`}
                url={`/categories/${router.query.slug}`}
            />

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

    // Get category information
    const categories = await getCategories();
    const category = categories.find(cat => cat.slug === params.slug) || null;

    return {
        props: {
            posts,
            category
        },
        revalidate: 10
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