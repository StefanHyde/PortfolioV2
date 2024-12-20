/**
 * Fetches a list of posts from the WordPress API.
 *
 * @param {number} [first=10] - The number of posts to fetch. Defaults to 10.
 * @returns {Promise<Array<{ excerpt: string; featuredImage: { node: { sourceUrl: string } }; slug: string; title: string }>>}
 * A promise that resolves to an array of post objects, each containing the excerpt, featured image URL, slug, and title.
 */
import { fetchWPAPI } from './base';

export async function getPosts(first = 10) {
  const data = await fetchWPAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`,
    {
      variables: {
        first,
      },
    },
  );

  return data?.posts?.nodes;
}
