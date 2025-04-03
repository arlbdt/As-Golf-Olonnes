import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

// Add delay helper function
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Add throttled request function
const throttledRequest = async (query, variables = {}) => {
  try {
    await delay(250); // Add 250ms delay between requests
    return await request(graphqlAPI, query, variables);
  } catch (error) {
    if (error.response?.status === 429) {
      console.log('Rate limit hit, waiting 2 seconds before retry...');
      await delay(2000);
      return await request(graphqlAPI, query, variables);
    }
    throw error;
  }
};

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      articles(
        last: 150, 
        stage: PUBLISHED
      ) {
        auteur {
          nom
          description
          id
          photo {
            url
          }
        }
        createdAt
        publishedAt
        updatedAt
        majorUpdate
        slug
        titre
        extrait
        imagePrincipale {
          url
        }
        categories {
          nom
          slug
        }
      }
    }
  `;

  const result = await throttledRequest(query);

  // Sort articles by their "effective date"
  const sortedArticles = [...result.articles].sort((a, b) => {
    // For articles with majorUpdate=true, use updatedAt as the effective date
    // Otherwise, use publishedAt (or createdAt as fallback)
    const aEffectiveDate = a.majorUpdate ? new Date(a.updatedAt) : new Date(a.publishedAt || a.createdAt);
    const bEffectiveDate = b.majorUpdate ? new Date(b.updatedAt) : new Date(b.publishedAt || b.createdAt);

    // Sort by effective date, newest first
    return bEffectiveDate - aEffectiveDate;
  });

  return sortedArticles;
};

export const getRecentPosts = async () => {
  const query = gql`
  query getRecentPosts() {
    articles(last: 3, orderBy: publishedAt_ASC) {
      titre
      imagePrincipale {
        url
      }
      slug
      createdAt
      publishedAt
    }
  }
`;
  const result = await throttledRequest(query);

  return result.articles;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query getSimilarPosts($slug: String!, $categories: [String!]) {
      articles(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        titre
        imagePrincipale {
          url
        }
        createdAt
        publishedAt
        slug
      }
    }
  `;
  const result = await throttledRequest(query, {slug, categories});

  return result.articles;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          nom
          slug
          sortOrder
        }
    }
  `;

  const result = await throttledRequest(query);

  return result.categories;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      article(where: {slug: $slug}) {
        titre
        extrait
        imagePrincipale {
          width
          height
          url
        }
        auteur {
          nom
          description
          photo {
            url
          }
        }
        createdAt
        publishedAt
        updatedAt
        majorUpdate
        slug
        contenu {
          json
          references {
            ... on Asset {
              id
              url
              mimeType
            }
          }
        }
        categories {
          nom
          slug
        }
      }
    }
  `;

  const result = await throttledRequest(query, {slug});
  return result.article;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:articles(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        titre
        imagePrincipale {
          url
        }
        createdAt
        publishedAt
        slug
      }
      previous:articles(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        titre
        imagePrincipale {
          url
        }
        createdAt
        publishedAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, {slug, createdAt});

  return {next: result.next[0], previous: result.previous[0]};
};

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      articles(
        last: 150, 
        where: {categories_some: {slug: $slug}}
      ) {
        auteur {
          nom
          description
          id
          photo {
            url
          }
        }
        createdAt
        publishedAt
        updatedAt
        majorUpdate
        slug
        titre
        extrait
        imagePrincipale {
          url
        }
        categories {
          nom
          slug
        }
      }
    }
  `;

  const result = await throttledRequest(query, {slug});

  // Sort articles by their "effective date", just like in getPosts
  const sortedArticles = [...result.articles].sort((a, b) => {
    // For articles with majorUpdate=true, use updatedAt as the effective date
    // Otherwise, use publishedAt (or createdAt as fallback)
    const aEffectiveDate = a.majorUpdate ? new Date(a.updatedAt) : new Date(a.publishedAt || a.createdAt);
    const bEffectiveDate = b.majorUpdate ? new Date(b.updatedAt) : new Date(b.publishedAt || b.createdAt);

    // Sort by effective date, newest first
    return bEffectiveDate - aEffectiveDate;
  });

  return sortedArticles;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query getFeaturedPosts() {
      articles(where: {articleVedette: true}, orderBy: publishedAt_DESC) {
        auteur {
          nom
          photo {
            url
          }
        }
        imagePrincipale {
          url
        }
        titre
        slug
        createdAt
        publishedAt
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.articles;
};

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      commentaires(where: {article: {slug:$slug}}){
        nom
        createdAt
        commentaire
      }
    }
  `;

  const result = await request(graphqlAPI, query, {slug});

  return result.commentaires;
};