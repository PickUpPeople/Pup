import React from "react";
import Layout from "components/Layout";
import SEO from "components/Seo";
import Cursor from "components/Cursor";
import { graphql, useStaticQuery } from "gatsby";

const exhibitionData = graphql`
  {
    prismicExhibition {
      data {
        exhibition_name {
          text
        }
        content {
          html
        }
        visible
      }
    }
  }
`;

const About = () => {
  const data = useStaticQuery(exhibitionData);

  return (
    <Layout>
      <SEO title="About" pageName="about" />
      <div className="container">
        <div className="row">
          <section>
            <h1 className="heading">Pick up People</h1>
            <p>
              Pick Up People is a photographic and storytelling project based in
              Sydney Australia. Primarily speaking through portrait photography,
              the project aims to explore themes of human experience, social
              integration and cohesion, viewed through the lens of pick up /
              social basketball participants. Additionally, the project hopes to
              highlight the importance of public spaces for pick-up/social
              sport, in terms of building community, particularly for new
              migrants.
            </p>
            <p>
              The project aims to interview and photograph willing subjects,
              with their portraits and stories to be published and shared via a
              website and social media platforms.The eventual goal is to also
              publish a book and exhibition combining a selection of these
              portraits and a catalogue of diverse and unique stories.
            </p>
          </section>
          <section>
            <h2 className="heading">Nick Lawrence</h2>
            <ul>
              <li>
                <a
                  href="http://nicklawrence.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  nicklawrence.com.au
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@nicklawrence.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  hello@nicklawrence.com.au
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/pick_up_people/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/Pick-Up-People-432145574209223/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </section>

          {data.prismicExhibition.data.visible === "visible" ? (
            <section>
              <h1 className="heading">
                {data.prismicExhibition.data.exhibition_name.text}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicExhibition.data.content.html
                }}
              />
            </section>
          ) : null}
          <section>
            <h1 className="heading">Credits</h1>
            <ul>
              <li>
                <a
                  href="https://thisworks.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  This Works
                </a>
              </li>
              <li>
                <a
                  href="http://www.craigjackson.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Craig Jackson
                </a>
              </li>
              <li>
                <a
                  href="https://adamjw3.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Adam Wright
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Cursor pageName="about" />
    </Layout>
  );
};

export default About;
