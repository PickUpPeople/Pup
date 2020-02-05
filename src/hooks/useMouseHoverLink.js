import { useEffect, useState } from "react";

export const useMouseHoverLink = () => {
  const [hoverLink, sethoverLink] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll(".c-scroller__link");
    const handleMouseOver = () => sethoverLink(true);
    const handleMouseOut = () => sethoverLink(false);

    links.forEach(item => {
      item.addEventListener("mouseover", event => {
        handleMouseOver();
      });
    });

    links.forEach(item => {
      item.addEventListener("mouseout", event => {
        handleMouseOut();
      });
    });

    return () => {};
  }, []);

  return hoverLink;
};
