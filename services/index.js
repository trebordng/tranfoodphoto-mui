import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GPAPHCMS_ENDPOINT;
export const getBackgroundImages = async () => {
  const query = gql`
    query MyQuery {
      backgrounds {
        alt
        title
        image {
          url
        }
      }
    }
  `;
  const results = await request(graphqlAPI, query);
  return results.backgrounds;
};
