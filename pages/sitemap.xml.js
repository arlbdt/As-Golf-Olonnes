import {getPosts, getCategories} from '../services';

const Sitemap = () => {};

export const getServerSideProps = async ({res}) => {
  const baseUrl = 'https://as-golfdessablesdolonne.vercel.app/'; // Replace with your domain

  // Get all posts and categories
  const posts = await getPosts();
  const categories = await getCategories();

  // Create sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${baseUrl}/contact</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      ${posts
      .map((post) => {
        return `
            <url>
              <loc>${baseUrl}/articles/${post.slug}</loc>
              <lastmod>${post.updatedAt || post.publishedAt || post.createdAt}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
          `;
      })
      .join('')}
      ${categories
      .map((category) => {
        return `
            <url>
              <loc>${baseUrl}/categories/${category.slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.6</priority>
            </url>
          `;
      })
      .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap; 