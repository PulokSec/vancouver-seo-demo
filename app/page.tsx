import { getClient } from "@faustwp/experimental-app-router";
import { gql } from "@apollo/client";
import Link from "next/link";
import HomeLanding from "@/components/pages/HomeLanding";

export default async function Home() {
  let client = await getClient();

  const { data } = await client.query({
    query: gql`
      query {
  pages(where: {id: 2}) {
    nodes {
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      homePage {
        aboutSection {
          bgImage {
            node {
              altText
              sourceUrl
            }
          }
          description
          title
          image {
            node {
              altText
              sourceUrl
            }
          }
        }
        choiceSection {
          featuredData {
            description
            title
          }
          linkText
          linkUrl
          title
          description
          image {
            node {
              altText
              sourceUrl
            }
          }
        }
        serviceSection {
          bgImage {
            node {
              altText
              sourceUrl
            }
          }
          description
          shortTitle
          title
          featuredData {
            description
            linkText
            linkUrl
            title
          }
          image {
            node {
              altText
              sourceUrl
            }
          }
        }
        homeBannerSection {
          applyButton
          applyUrl
          bannerDescription
          bannerTitle
          bgImage {
            node {
              altText
              sourceUrl
            }
          }
          contactUrl
          contactButton
        }
        importanceSection {
          description
          linkText
          linkUrl
          title
          featuredData {
            description
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        investingSection {
          description
          linkText
          linkUrl
          title
          featuredData {
            description
            title
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
        necessarySection {
          description
          linkUrl
          linkText
          title
          featuredData {
            description
            image {
              node {
                altText
                sourceUrl
              }
            }
            title
          }
        }
        partnerSection {
          url
          title
          image {
            node {
              altText
              sourceUrl
            }
          }
        }
        pointSection {
          description
          linkUrl
          linkText
          title
          featuredData {
            description
            image {
              node {
                sourceUrl
              }
            }
            title
          }
        }
        powerSection {
          description
          linkUrl
          linkText
          title
          featuredData {
            description
            image {
              node {
                sourceUrl
              }
            }
            title
          }
        }
      }
      seo {
        title
        jsonLd {
          raw
        }
        openGraph {
          image {
            url
          }
        }
        description
        canonicalUrl
      }
    }
  }
}
    `,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });
  return (
    <main>
      <HomeLanding data={data?.pages?.nodes[0]?.homePage}/>
    </main>
  );
}
