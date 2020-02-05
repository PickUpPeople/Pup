import React from "react";
import Layout from "components/Layout";
import Scroller from "components/Scroller";
import SEO from "components/Seo";
import Cursor from "components/Cursor";
import { shuffle } from "../libs/Utility";
import { graphql } from "gatsby";

export const query = graphql`
  {
    allPrismicItem(filter: { data: { type: { eq: "Hoop" } } }) {
      nodes {
        data {
          type
          image {
            alt
            localFile {
              childImageSharp {
                fluid(webpQuality: 100, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        uid
      }
    }
  }
`;

const Hoops = ({ data }) => {
  const sortedHoopsData = shuffle(data.allPrismicItem.nodes);

  return (
    <Layout>
      <SEO title="Hoops" pageName="home" />
      <div className="page-home__circle">
        <svg viewBox="0 0 679 681">
          <path d="M445.77 341.44c0-42-25.61-80.69-64-97.54-38.14-16.73-84.25-8.77-114.66 19.64-30.66 28.65-41.89 73.67-27.91 113.3s51 67.55 92.85 70.67c41.49 3.08 82.43-19.78 101.59-56.71a107.26 107.26 0 0012.13-49.36z" />
          <path d="M658.42 341.5c-.37-40.94-7.67-81.89-23.37-119.83a319 319 0 00-168.7-172.81c-37.8-16.58-78.61-25-119.77-26.26a309.58 309.58 0 00-120 20.56c-38.4 14.89-74.09 36.43-104.2 64.64A319.12 319.12 0 0020.8 326.92a319.06 319.06 0 0080.28 226.53A324.08 324.08 0 00199.15 628c37.14 18.29 77.57 28.73 118.8 31.79a318.94 318.94 0 00227.66-74.85 319.08 319.08 0 00111.55-215c.9-9.47 1.18-18.94 1.26-28.44z" />
        </svg>
      </div>
      <div className="page-home__thed">
        <svg viewBox="0 0 1106 1041">
          <path d="M152.24 1019V414c0-220.35 178.63-399 399-399s399 178.63 399 399v609.83M10.5 407.67h1081.45" />
        </svg>
      </div>
      <Scroller prismicdata={sortedHoopsData} />
      <Cursor pageName="home" />
    </Layout>
  );
};

export default Hoops;
