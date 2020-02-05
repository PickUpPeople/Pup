import React, { useEffect } from "react";
import { Link } from "gatsby";
import _ from "lodash";
import locomotiveScroll from "locomotive-scroll";

const ScrollTwoColumns = ({ prismicdata }) => {
  var half_length = Math.ceil(prismicdata.length / 2);
  var leftSide = prismicdata.splice(0, half_length);

  let scroll = null;

  useEffect(() => {
    locomotive();

    return () => {
      document.getElementsByTagName("html")[0].removeAttribute("class");
      document
        .querySelectorAll(`[data-scroll-section="true"]`)
        .forEach(item => {
          item.removeAttribute("style");
        });
      document.querySelectorAll(`[data-scroll-repeat="true"]`).forEach(item => {
        item.removeAttribute("style");
      });
      scroll.destroy();
    };
  }, []);

  const locomotive = () => {
    const target = document.querySelector("#view");
    const sectionLeft = document.querySelector("#section-left");
    const left = document.querySelector("#left-col");

    scroll = new locomotiveScroll({
      el: target,
      inertia: 12, //18,
      smooth: true,
      smoothMobile: true
    });

    //scroll.scrollTo(sectionRight, clone.offsetTop + 360);
    scroll.scrollTo(sectionLeft, left.offsetHeight - window.innerHeight);

    const onLmsScroll = obj => {
      var winPos = obj.scroll.y;
      var loop_height = obj.limit;

      if (winPos >= loop_height) {
        scroll.scrollTo(
          sectionLeft,
          left.offsetHeight + 60 - window.innerHeight
        );
      } else if (winPos <= 0) {
        scroll.scrollTo(sectionLeft, left.offsetHeight + 40);
      }
    };

    scroll.on("scroll", _.throttle(onLmsScroll, 100));
    document.querySelector("html").classList.add("scroller-loader");
  };

  return (
    <>
      <div id="section-left" className="c-scroller__column" data-scroll-section>
        <div data-scroll data-scroll-repeat="true">
          <div id="left">
            <div id="left-col">
              {leftSide.map((item, index) => {
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
            <div id="clone1" className="c-scroll__clone">
              {leftSide.map((item, index) => {
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
        </div>
      </div>
      <div
        id="section-right"
        className="c-scroller__column"
        data-scroll-section
      >
        <div data-scroll data-scroll-speed="-20" data-scroll-repeat="true">
          <div id="right">
            <div id="right-col">
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
            <div id="clone" className="c-scroll__clone">
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
        </div>
      </div>
    </>
  );
};

export default ScrollTwoColumns;
