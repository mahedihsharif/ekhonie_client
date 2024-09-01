import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { CiStopwatch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { get_products } from "../../../redux/reducers/productReducer";
import { sliderSettings } from "../../../settings/slider-settings";
import LargeCard from "../../shared/large-card";
import ProductCard from "../../shared/product-card";
import HotDealImage from "/assets/hotdealsimg.png";

const HotDeals = () => {
  const dispatch = useDispatch();
  const date = format(new Date(), "hh:mm:ss");
  const [settings, useSettings] = useState(null);
  const { items, loader, errorMessage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(get_products());
  }, [dispatch]);

  useEffect(() => {
    const sliderData = sliderSettings(4, 3, 2, 1);
    useSettings({ ...sliderData });
  }, []);

  return (
    <div className="mt-20 px-5 2xl:px-60 bg-[#F1F5F6] py-8 lg:py-16">
      <LargeCard
        hotDeals={"HOT DEALS!"}
        getPrices={"GET OUR BEST PRICES"}
        hurryUp={" Hurry up! Offer ends in:"}
        date={date}
        CiStopwatch={CiStopwatch}
      />
      <div className="md:flex justify-between gap-2 mt-3">
        <div className="w-full md:w-[30%]">
          <img src={HotDealImage} alt="hot-deals" className="h-full" />
        </div>

        <div className="w-full md:w-[70%] mt-3 md:mt-0 container">
          {settings && (
            <Slider {...settings}>
              {items.length > 0 &&
                items.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
