import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import SEO from "../components/SEO";
import { getPageBySlug } from "../services";

const richTextRenderers = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold my-2 py-1 text-gray-700">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold py-1 text-gray-700">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold py-1 text-gray-700">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold py-1 text-gray-700">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-lg font-semibold py-1 text-gray-700">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-base font-semibold py-1 text-gray-700">{children}</h6>
  ),
  p: ({ children }) => (
    <p className="text-base font-normal py-1 text-gray-700">{children}</p>
  ),
  bold: ({ children }) => (
    <span className="font-semibold">{children}</span>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside my-4 space-y-1 text-gray-700">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside my-4 space-y-1 text-gray-700">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="py-0.5">{children}</li>,
  a: ({ children, href, openInNewTab }) => (
    <a
      href={href || "#"}
      target={openInNewTab ? "_blank" : "_self"}
      className="text-green-700 font-semibold underline"
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="pl-4 border-l-4 border-gray-700 text-base my-4 text-gray-700">
      {children}
    </blockquote>
  ),
};

const Informations = ({ page }) => {
  if (!page) {
    return null;
  }

  // Hygraph Rich Text: use "raw" (json only exists when embeds are enabled)
  const rawContent = page.content?.raw;
  const content = Array.isArray(rawContent)
    ? rawContent
    : rawContent?.children ?? [];
  const references = page.content?.references ?? [];

  return (
    <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 mb-20">
      <SEO
        title={page.title}
        description={page.metaDescription || undefined}
        url="/informations"
      />

      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-700 mt-12 mb-8 text-center">
          {page.title}
        </h1>

        <div className="text-gray-700 bg-white shadow-lg rounded-lg p-6 sm:p-8">
          {content.length > 0 ? (
            <RichText
              content={content}
              references={references}
              renderers={richTextRenderers}
            />
          ) : (
            <p className="text-gray-500">Aucun contenu pour le moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Informations;

export async function getStaticProps() {
  const page = await getPageBySlug("informations");

  if (!page) {
    return { notFound: true };
  }

  return {
    props: { page },
    revalidate: 600,
  };
}
