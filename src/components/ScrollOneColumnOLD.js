import React, { useEffect } from "react";
import { Link } from "gatsby";

const ScrollOneColumn = ({ prismicdata }) => {
  useEffect(() => {
    const sectionLeft = document.querySelector("#section-main");
    window.scrollTo(0, sectionLeft.offsetHeight - window.innerHeight);
    document.addEventListener("scroll", locomotive);
    return () => {
      document.removeEventListener("scroll", locomotive);
    };
  }, []);

  const locomotive = () => {
    const target = document.querySelector("#view");
    const sectionLeft = document.getElementById("section-main");
    var winPos = window.scrollY;
    var loop_height = target.offsetHeight;

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
          {prismicdata.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/${item.data.type}/${item.uid}`}
                className="c-scroller__link"
                data-scroll
                data-scroll-repeat="true"
              >
                <img
                  src={item.data.image.localFile.childImageSharp.fluid.src}
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
          {prismicdata.map((item, index) => {
            return (
              <Link
                key={index}
                to={`/${item.data.type}/${item.uid}`}
                className="c-scroller__link"
                data-scroll
                data-scroll-repeat="true"
              >
                <img
                  src={item.data.image.localFile.childImageSharp.fluid.src}
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
