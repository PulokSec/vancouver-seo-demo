import { getClient } from "@faustwp/experimental-app-router";
import { gql } from "@apollo/client";
import Link from "next/link";
import HomeLanding from "@/components/pages/HomeLanding";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const client = await getClient();
  const { data } = await client.query({
    query: gql`
      {
        pages(where: { id: 2 }) {
          nodes {
            seo {
              title
              description
              canonicalUrl
              focusKeywords
              openGraph {
                image {
                  url
                }
              }
              jsonLd {
                raw
              }
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
  
  const path = new URL(data?.pages?.nodes[0]?.seo?.canonicalUrl).pathname;
  const canonical_url = `${process.env.NEXT_PUBLIC_BASEURL}${path}`;
  return {
    title: data?.pages?.nodes[0]?.seo?.title,
    description: data?.pages?.nodes[0]?.seo?.description,
    alternates: {
      canonical: canonical_url,
    },
    robots: { index: true, follow: true },
    openGraph: {
      url: canonical_url,
      title: data?.pages?.nodes[0]?.seo?.title,
      description: data?.pages?.nodes[0]?.seo?.description,
      siteName: 'https://vancouverseo.com/',
      images: data?.pages?.nodes[0]?.seo?.openGraph?.image?.url,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: data?.pages?.nodes[0]?.seo?.title,
      description: data?.pages?.nodes[0]?.seo?.description,
      creator: '@PulokSec',
    },
    authors: [
      {
        name: 'Cansoft Tech',
        url: 'https://cansoft.com/',
      },
    ],
  };
}

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
          linkText
          linkUrl
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
          bgImage {
            node {
              altText
              sourceUrl
            }
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
          homeContactSection {
          leftImage {
            node {
              altText
              sourceUrl
            }
          }
          bgImage {
            node {
              altText
              sourceUrl
            }
          }
          rightImage {
            node {
              altText
              sourceUrl
            }
          }
          title
          description
        }
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
