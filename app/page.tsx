// import { getClient } from "@faustwp/experimental-app-router";
// import { gql } from "@apollo/client";
import Link from "next/link";
import HomeLanding from "@/components/pages/HomeLanding";

export default async function Home() {
  // let client = await getClient();

  // const { data } = await client.query({
  //   query: gql`
  //     query GetPosts {
  //       posts {
  //         nodes {
  //           id
  //           title
  //           uri
  //           slug
  //         }
  //       }
  //     }
  //   `,
  // });

  return (
    <main>
      <HomeLanding/>
    </main>
  );
}
