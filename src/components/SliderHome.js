import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper/core";
import Fade from "react-reveal/Fade";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const sliderInfo = [
  { image: "heroBg-1.png", price: "$24.44", heading: "Men fashion", category: "Formal", btn: "Order now" },
  { image: "heroBg-2.png", price: "$34.44", heading: "Jens fashion", category: "Formal", btn: "Order now" },
  { image: "heroBg-3.png", price: "$44.44", heading: "Add To Cart", category: "Formal", btn: "Order now" },
  { image: "heroBg-4.png", price: "$54.44", heading: "Men fashion", category: "Formal", btn: "Order now" },
];

function SliderHome() {
  const [sliderIndex, setSliderIndex] = React.useState(0);
  const [changeIndex, setChangeIndex] = React.useState(5);
  // console.log(sliderIndex);
  console.log(changeIndex);

  return (
    <>
      <Swiper
        onSwiper={setSliderIndex}
        onSlideChange={() => setChangeIndex(sliderIndex.activeIndex)}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {sliderInfo.map((item, i) => {
          const { image, price, heading, category, btn } = item;
          return (
            <SwiperSlide key={i}>
              <div className="slide_home relative w-full h-full flex items-center md:bg-gray-200 bg-gray-900 bg-opacity-60 " style={{ backgroundImage: `url(/images/${image})` }}>
                <div className="info-box w-1/2 md:text-gray-900 text-gray-50">
                  <h2 className="text-3xl my-3">{price}</h2>
                  {changeIndex ? (
                    <Fade left when={i === changeIndex - 4 || i === changeIndex - 8}>
                      <h1 className="text-5xl mb-4 uppercase font-bold">{heading}</h1>
                      <h3 className="mb-2 text-2xl uppercase">{category}</h3>
                    </Fade>
                  ) : (
                    <>
                      <h1 className="text-5xl mb-4 uppercase font-bold">{heading}</h1>
                      <h3 className="mb-2 text-2xl uppercase">{category}</h3>
                    </>
                  )}
                  <button className="bg-blue-400 text-white hover:bg-gray-700 transition py-3 w-40 mt-3">{btn}</button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
export default SliderHome;
