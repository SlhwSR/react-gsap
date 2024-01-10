import { useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "normalize.css";
import "./assets/css/index.css";
import { Outlet } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
