import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
// import SplitText from "../../utils/Split3.min";

import "./style.scss";

const Header = () => {
  // useEffect(() => {
  //   const split = new SplitText("#header-text", {
  //     type: "lines",
  //     linesClass: "lineChildren",
  //   });
  //   const splitParent = new SplitText("#header-parent", {
  //     type: "lines",
  //     linesClass: "lineParent",
  //   });
  //   gsap.to(split.lines, {
  //     duration: 1,
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.1,
  //     ease: "power2",
  //   });
  // });
  return (
    <section className="header-container">
      <ul className="header-menu">
        <li>Simulador</li>
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Contacto</li>
      </ul>
      <h1 id="header-text">TMS ingeniería</h1>
    </section>
  );
};

export default Header;
