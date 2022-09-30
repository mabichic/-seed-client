import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });
  console.log(data);
  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
