import React, { useState } from "react";
import { Link } from "gatsby";

const Navigation = () => {
  const [toggleNavigation, settoggleNavigation] = useState("");

  const burgerHandler = e => {
    e.preventDefault();
    settoggleNavigation(nav);
  };

  const nav = () => {
    const body = document.getElementsByTagName("body")[0];

    if (toggleNavigation === "") {
      body.classList.add("is-nav-open");
      return "is-active";
    } else {
      body.classList.remove("is-nav-open");
      return "";
    }
  };

  return (
    <nav
      className={toggleNavigation === "" ? "c-navbar" : "c-navbar is-active"}
    >
      <div
        className={
          toggleNavigation === ""
            ? "c-navbar__links"
            : `c-navbar__links ${toggleNavigation}`
        }
        id="js-navbar-links"
      >
        <ul className="c-navbar__list">
          <li className="c-navbar__item">
            <Link to="/" activeClassName="is-active" className="c-navbar__link">
              A<span>LL</span>
            </Link>
          </li>
          <li className="c-navbar__item">
            <Link
              to="/players"
              activeClassName="is-active"
              className="c-navbar__link"
            >
              P<span>LAYERS</span>
            </Link>
          </li>
          <li className="c-navbar__item">
            <Link
              to="/hoops"
              activeClassName="is-active"
              className="c-navbar__link"
            >
              H<span>OOPS</span>
            </Link>
          </li>
          <li className="c-navbar__item">
            <Link
              to="/about"
              activeClassName="is-active"
              className="c-navbar__link"
            >
              A<span>BOUT</span>
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={
          toggleNavigation === ""
            ? "c-navbar__menu"
            : `c-navbar__menu ${toggleNavigation}`
        }
        onClick={e => burgerHandler(e)}
        aria-controls="js-navbar-links"
        type="button"
      >
        <span>{toggleNavigation === "" ? "Menu" : "Close"}</span>
      </button>
    </nav>
  );
};

export default Navigation;
