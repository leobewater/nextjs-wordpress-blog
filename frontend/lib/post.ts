import graphqlRequest from "@/lib/graphqlRequest";

export async function getAllPosts() {
  const query = {
    query: `query getAllPosts {
      posts {
        nodes {
          date
          slug
          title
          excerpt
          featuredImage {
            node {
              mediaDetails {
                file
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }`,
  };

  try {
    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;
    // console.log(allPosts);
    return allPosts;  
  } catch (error) {
    console.log(error);
  }
}
