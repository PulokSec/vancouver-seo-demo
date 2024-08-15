import "@/faust.config.js";
import "./globals.css";
import { Rubik } from "next/font/google";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
const rubik = Rubik({ subsets: ["latin"] });
import { getClient } from "@faustwp/experimental-app-router";
import { gql } from "@apollo/client";

export const metadata = {
  icons: {
    icon: '../public/favicon.ico',
  },
};
export default async function RootLayout({ children }) {
  let client = await getClient();
  const { data } = await client.query({
    query: gql`
      query {
      menus(where: {location: PRIMARY}) {
    nodes {
      name
      slug
      menuItems(first: 100) {
        nodes {
          url
          target
          parentId
          label
          childItems {
            nodes {
              uri
              label
              childItems {
                nodes {
                  uri
                  label
                }
              }
            }
          }
        }
      }
    }
  }
  }`,
  });
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header headerItems={data?.menus?.nodes[0]?.menuItems?.nodes}/>
        {children}
        <Footer footerItems={data?.menus?.nodes[0]?.menuItems?.nodes}/>
      </body>
    </html>
  );
}
