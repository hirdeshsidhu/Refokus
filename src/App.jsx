import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import Stripes from "./Components/Stripes";
import Products from "./Components/Products";
import Marquees from "./Components/Marquees";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // optional smoothness factor
    });

    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      scroll.destroy(); // cleanup Locomotive Scroll
      document.removeEventListener("contextmenu", handleContextMenu); // cleanup event
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className='w-full bg-[#0D0D0D] text-white font-["satoshi"]'
    >
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
