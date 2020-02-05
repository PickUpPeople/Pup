import React from "react";
import { useMousePosition } from "hooks/useMousePosition";

const Cursor = ({ pageName }) => {
  const position = useMousePosition();
  const cssClass = `c-cursor c-cursor--${pageName}`;

  let divStyle = {
    top: position.y - 26,
    left: position.x - 26
  };

  return <div className={cssClass} style={divStyle}></div>;
};

export default Cursor;
