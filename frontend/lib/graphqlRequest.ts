export default async function graphqlRequest(query: unknown) {
  const url = "https://travel-blog-wp.local/graphql";
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  return await res.json();
}
