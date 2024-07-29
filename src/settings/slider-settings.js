// import { NextArrows, PrevArrows } from "../styles/slider-arrows";

//Carousel data items
export const sliderSettings = (xl = 4, lg = 3, md = 2, sm = 1) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: xl,
    slidesToScroll: 1,
    // nextArrow: <NextArrows />,
    // prevArrow: <PrevArrows />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: lg,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: md,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: sm,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return settings;
};
