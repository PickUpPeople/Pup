import React, { useEffect } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

const ScrollTwoColumns = ({ Scroll2ColData }) => {
  const half_length = Math.ceil(Scroll2ColData.length / 2);
  const leftSide = Scroll2ColData.slice(0, half_length);
  const rightSide = Scroll2ColData.slice(half_length, Scroll2ColData.length);

  useEffect(() => {
    const left = document.querySelector("#left-col");
    const right = document.querySelector("#right2");

    const startPosition = left.offsetHeight - window.innerHeight;
    right.style.width = left.getBoundingClientRect().width + "px";

    window.scrollTo(0, startPosition);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", listener);
    document.querySelector("html").classList.add("scroller-loader");

    return () => {
      window.removeEventListener("scroll", listener);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onResize = () => {
    const left = document.querySelector("#left-col");
    const right = document.querySelector("#right2");

    right.style.width = left.getBoundingClientRect().width + "px";
  };

  const listener = () => {
    const sectionLeft = document.querySelector("#section-left");
    const left = document.querySelector("#left-col");
    const right = document.querySelector("#right2");
    const item = document.querySelector(".c-scroller__link");
    //console.log("item", item);
    let itemStyle = window.getComputedStyle(item, "");
    let winPos = window.scrollY;
    let loop_height = sectionLeft.offsetHeight - window.innerHeight;
    let startPosition = left.offsetHeight - window.innerHeight;

    if (winPos >= loop_height) {
      window.scrollTo(0, startPosition + parseInt(itemStyle.marginBottom));
    } else if (winPos <= 0) {
      window.scrollTo(
        0,
        startPosition + parseInt(itemStyle.marginBottom) + window.innerHeight
      );
    }

    right.style.transform =
      "translate3d(0, " + (loop_height - window.scrollY) * -1 + "px, 0)";
  };
  return (
    <>
      <div id="section-left" className="c-scroller__column">
        <div id="left">
          <div id="left-col">
            {leftSide.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/${item.data.type}/${item.uid}`}
                  className="c-scroller__link"
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
          <div id="clone1" className="c-scroll__clone">
            {leftSide.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/${item.data.type}/${item.uid}`}
                  className="c-scroller__link"
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
      </div>
      <div id="section-right" className="c-scroller__column">
        <div id="right2">
          <div id="right-col">
            {rightSide.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/${item.data.type}/${item.uid}`}
                  className="c-scroller__link"
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
          <div id="clone" className="c-scroll__clone">
            {rightSide.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/${item.data.type}/${item.uid}`}
                  className="c-scroller__link"
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
      </div>
    </>
  );
};

export default ScrollTwoColumns;
