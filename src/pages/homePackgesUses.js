import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SliderHome from "../components/SliderHome";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
// animation on scroll
AOS.init({
  duration: 1200,
});
// smooth scroll
const scrollToTop = () => {
  scroll.scrollToTop();
};

const Home = () => {
  const [isTopOpen, setIsTopOpen] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsTopOpen(true);
      } else {
        setIsTopOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div className="section_home">
      <div className="home-center h-screen">
        <div className="slider-home h-full">
          <SliderHome />
        </div>
      </div>
      <div className="animation-on-scroll">
        <div className="item w-1/2" data-aos="fade-up">
          <h2>What is Lorem Ipsum?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="item w-1/2" data-aos="fade-right">
          <h2>Why do we use it?</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it
            has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className={`font-bold text-xl text-white fixed bottom-10 right-10 z-10 bg-gray-500 py-2 px-3 transition ${isTopOpen ? "visible opacity-100" : "invisible opacity-0"} `}
      >
        ^
      </button>
    </div>
  );
};

export default Home;
