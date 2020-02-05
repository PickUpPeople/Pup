import React, { useEffect } from "react";
import Navigation from "components/Navigation";
import GetInvolved from "components/GetInvolved";
import "assets/stylesheets/site.scss";

const Layout = ({ children }) => {
  useEffect(() => {
    window.addEventListener("touchstart", function onFirstTouch() {
      const html = document.querySelector("html");
      html.classList.add("user-is-touching");
    });

    return () => {
      window.removeEventListener("touchstart", function onFirstTouch() {});
    };
  }, []);

  return (
    <>
      <Navigation />
      <main>{children}</main>
      <GetInvolved />
    </>
  );
};

export default Layout;
