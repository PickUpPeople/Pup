import React, { useEffect, useState } from "react";
import ScrollTwoColumns from "./ScrollTwoColumns";
import ScrollOneColumn from "./ScrollOneColumn";
import logo from "../assets/images/pup-logo.svg";

const Scroller = ({ prismicdata }) => {
  const [layout, setLayout] = useState();

  useEffect(() => {
    window.addEventListener("resize", deviceSize);
    deviceSize();

    return () => {
      window.removeEventListener("resize", deviceSize);
    };
  }, []);

  const deviceSize = () => {
    if (window.innerWidth <= 767) {
      setLayout("mobile");
    } else {
      setLayout("desktop");
    }
  };

  return (
    <>
      <div className="c-scroller__logo">
        <img src={logo} alt="Pick Up People" />
      </div>
      <div className="c-scroller" id="view">
        <div className="container">
          <div className="row justify-content-between">
            {layout === "desktop" ? (
              <ScrollTwoColumns Scroll2ColData={prismicdata} />
            ) : (
              <ScrollOneColumn Scroll1ColData={prismicdata} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Scroller;
