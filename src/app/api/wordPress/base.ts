/**
 * Fetches data from the WordPress API using a GraphQL query.
 *
 * @param {string} [query=''] - The GraphQL query to be sent to the API.
 * @param {Record<string, unknown>} [variables={}] - An object containing the variables for the GraphQL query.
 * @returns {Promise<any>} - A promise that resolves to the data returned by the API.
 * @throws {Error} - Throws an error if the API request fails or if there are errors in the response.
 */
const WP_API_URL = <string>process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT;

export async function fetchWPAPI(
  query = '',
  { variables }: Record<string, unknown> = {},
) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(WP_API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    const errorMessage = json.errors
      .map((error: { message: string }) => error.message)
      .join(', ');
    throw new Error(
      errorMessage || 'Une erreur est survenue lors de la requête API',
    );
  }

  return json.data;
}
