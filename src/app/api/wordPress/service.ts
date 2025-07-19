/**
 * Fetches a list of posts from the WordPress API.
 *
 * @param {number} [first=10] - The number of posts to fetch. Defaults to 10.
 * @param {string} [language='fr'] - The language code to filter posts. Defaults to 'fr'.
 * @returns {Promise<Array<{ excerpt: string; featuredImage: { node: { sourceUrl: string } }; slug: string; title: string }>>}
 * A promise that resolves to an array of post objects, each containing the excerpt, featured image URL, slug, and title.
 */
import { fetchWPAPI } from './base';

// To gets posts
export async function getPosts(first = 10, language = 'fr') {
  const data = await fetchWPAPI(
    `query FetchPosts($first: Int = 10, $language: LanguageCodeFilterEnum = FR) {
      posts(first: $first, where: { language: $language }) {
        nodes {
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          language {
            code
            locale
          }
          title
          date
          tags {
            nodes {
              name
            }
          }
        }
      }
    }`,
    { variables: { first, language: language.toUpperCase() } },
  );

  return data?.posts?.nodes;
}

// To get a single post
export async function getPostBySlug(slug: string, language = 'fr') {
  const data = await fetchWPAPI(
    `query GetPost($slug: String!, $language: LanguageCodeFilterEnum!) {
    posts(where: { language: $language, nameIn: [$slug] }, first: 1) {
      nodes {
        databaseId
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        language {
          code
          locale
        }
        translations {
          slug
          language {
            code
            locale
          }
        }
        seo {
          metaDesc
          title
          fullHead
          focuskw
          opengraphImage {
            id
            uri
            link
          }
          opengraphDescription
          opengraphTitle
          opengraphUrl
        }
        title
        date
        author {
          node {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
      }
    }
  }`,
    { variables: { slug, language: language.toUpperCase() } },
  );

  // Return the first post from the nodes array, or null if no posts found
  return data?.posts?.nodes?.[0] || null;
}

// To get comments for a post
export async function getCommentsByPostId(postId: string) {
  const data = await fetchWPAPI(
    `query GetComments($postId: ID!) {
      post(id: $postId, idType: SLUG) {
        comments {
          nodes {
            id
            content(format: RENDERED)
            date
            parentId
            author {
              node {
                name
              }
            }
            replies {
              nodes {
                id
                content(format: RENDERED)
                date
                parentId
                author {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }`,
    { variables: { postId } },
  );

  return data?.post?.comments?.nodes || [];
}

// To add a comment to a post
export async function addComment(
  postSlug: string,
  author: string,
  content: string,
  email: string,
) {
  // First, get the post's database ID
  const post = await getPostBySlug(postSlug);
  if (!post?.databaseId) {
    throw new Error("Impossible de trouver l'ID de l'article");
  }

  const data = await fetchWPAPI(
    `mutation CreateComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        success
        comment {
          id
          content
          date
          status
          author {
            node {
              name
            }
          }
        }
      }
    }`,
    {
      variables: {
        input: {
          commentOn: post.databaseId,
          content,
          author,
          authorEmail: email,
        },
      },
    },
  );

  return data?.createComment;
}

// To add a reply to a comment
export async function addReply(
  postSlug: string,
  parentCommentId: string,
  author: string,
  content: string,
  email: string,
) {
  // First, get the post's database ID
  const post = await getPostBySlug(postSlug);
  if (!post?.databaseId) {
    throw new Error("Impossible de trouver l'ID de l'article");
  }

  const data = await fetchWPAPI(
    `mutation CreateComment($input: CreateCommentInput!) {
      createComment(input: $input) {
        success
        comment {
          id
          content
          date
          status
          author {
            node {
              name
            }
          }
        }
      }
    }`,
    {
      variables: {
        input: {
          commentOn: post.databaseId,
          content,
          author,
          authorEmail: email,
          parent: parentCommentId,
        },
      },
    },
  );

  return data?.createComment;
}
