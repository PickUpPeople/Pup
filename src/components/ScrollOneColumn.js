import React, { useEffect } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ScrollOneColumn = ({ Scroll1ColData }) => {
  useEffect(() => {
    const sectionLeft = document.querySelector("#section-main");
    window.scrollTo(0, sectionLeft.offsetHeight - window.innerHeight);
    document.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, []);

  const scroll = () => {
    const target = document.querySelector("#view");
    const sectionLeft = document.getElementById("section-main");
    let winPos = window.scrollY;
    let loop_height = target.offsetHeight;

    if (winPos >= loop_height - window.innerHeight) {
      window.scrollTo(0, sectionLeft.offsetHeight - window.innerHeight);
    } else if (winPos <= 0) {
      window.scrollTo(target, sectionLeft.offsetHeight);
    }

    document.querySelector("html").classList.add("scroller-loader");
  };

  return (
    <>
      <div id="section-main" className="c-scroller__column" data-scroll-section>
        <div data-scroll data-scroll-repeat="true">
          {Scroll1ColData.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/${item.data.type}/${item.uid}`}
                className="c-scroller__link"
                data-scroll
                data-scroll-repeat="true"
              >
                <Img
                  fluid={item.data.image.localFile.childImageSharp.fluid}
                  alt={item.uid}
                  className="c-scroller__image"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div
        id="section-clone"
        className="c-scroller__column"
        data-scroll-section
      >
        <div data-scroll data-scroll-repeat="true">
          {Scroll1ColData.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/${item.data.type}/${item.uid}`}
                className="c-scroller__link"
                data-scroll
                data-scroll-repeat="true"
              >
                <Img
                  fluid={item.data.image.localFile.childImageSharp.fluid}
                  alt={item.uid}
                  className="c-scroller__image"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ScrollOneColumn;
