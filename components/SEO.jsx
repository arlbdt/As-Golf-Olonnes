import Head from "next/head";

const SEO = ({
  title,
  description,
  ogImage,
  ogType = "website",
  url,
  article = null,
}) => {
  // Default values
  const siteTitle = "Association Sportive du Golf des Sables d'Olonne";
  const defaultDescription =
    "Site internet de l'Association Sportive du golf des Sables d'Olonne en Vendée, France.";
  const defaultOgImage = "/og-default.png"; // Create this default image
  const baseUrl = "https://as-golfdessablesdolonne.vercel.app"; // Remove trailing slash

  // Use provided values or defaults
  const pageTitle = title ? `${siteTitle} - ${title}` : siteTitle;
  const pageDescription = description || defaultDescription;

  // Ensure ogImage is an absolute URL
  const pageOgImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${baseUrl}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`
    : `${baseUrl}${defaultOgImage}`;

  const pageUrl = url
    ? `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`
    : baseUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageOgImage} />

      {/* Article-specific tags */}
      {article && (
        <>
          <meta
            property="article:published_time"
            content={article.publishedAt}
          />
          {article.updatedAt && article.majorUpdate && (
            <meta
              property="article:modified_time"
              content={article.updatedAt}
            />
          )}
          {article.categories?.map(category => (
            <meta
              key={category.slug}
              property="article:tag"
              content={category.nom}
            />
          ))}
        </>
      )}

      {/* JSON-LD Structured Data */}
      {/* For article pages */}
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              image: [pageOgImage],
              datePublished: article.publishedAt,
              dateModified: article.updatedAt || article.publishedAt,
              author: [
                {
                  "@type": "Person",
                  name: article.auteur?.nom || "AS Golf des Sables d'Olonne",
                },
              ],
            }),
          }}
        />
      )}

      {/* Favicon Tags (keeping your existing ones) */}
      <link rel="icon" href="/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default SEO;
