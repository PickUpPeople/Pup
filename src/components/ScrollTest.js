import React, { useEffect } from "react";
import { Link } from "gatsby";

import logo from "../assets/images/pup-logo.svg";

const ScrollTest = () => {
  useEffect(() => {
    const sectionLeft = document.querySelector("#section-left");
    const left = document.querySelector("#left-col");

    const startPosition = left.offsetHeight - window.innerHeight;

    window.scrollTo(0, startPosition);

    window.addEventListener("scroll", listener);
    document.querySelector("html").classList.add("scroller-loader");

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const listener = event => {
    const target = document.querySelector("#view");
    const sectionLeft = document.querySelector("#section-left");
    const left = document.querySelector("#left-col");
    const right = document.querySelector("#right2");
    var winPos = window.scrollY;
    var loop_height = sectionLeft.offsetHeight - window.innerHeight;
    var startPosition = left.offsetHeight - window.innerHeight;

    if (winPos >= loop_height) {
      window.scrollTo(0, startPosition);
    } else if (winPos <= 0) {
      window.scrollTo(0, startPosition + window.innerHeight);
    }

    right.style.transform =
      "translate3d(0, " + (loop_height - window.scrollY) * -1 + "px, 0)";
  };

  return (
    <>
      <img src={logo} alt="" className="c-scroller__logo" />
      <div className="c-scroller" id="view">
        <div className="container">
          <div className="row justify-content-between">
            <div id="section-left" className="c-scroller__column">
              <div id="left">
                <div id="left-col">
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/940"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/920"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/960"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/980"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/880"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/1000"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                </div>
                <div id="clone1" className="c-scroll__clone">
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/940"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/920"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/960"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/980"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/880"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/800/1000"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div id="section-right" className="c-scroller__column">
              <div id="right2">
                <div id="right-col">
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/820/940"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/820/940"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/820/960"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/880/980"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/880/990"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/980/1060"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                </div>
                <div id="clone" className="c-scroll__clone">
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/820/940"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/820/940"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/820/960"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/880/980"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/880/990"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                  <Link
                    to="/content"
                    className="c-scroller__link"
                    data-scroll
                    data-scroll-repeat="true"
                  >
                    <img
                      src="https://www.fillmurray.com/980/1060"
                      alt=""
                      className="c-scroller__image"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollTest;
