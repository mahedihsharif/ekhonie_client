import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { CiStopwatch } from "react-icons/ci";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getProducts } from "../../../api";
import useAsync from "../../../hooks/useAsync";
import { sliderSettings } from "../../../settings/slider-settings";
import LargeCard from "../../shared/large-card";
import ProductCard from "../../shared/product-card";
import HotDealImage from "/assets/hotdealsimg.png";

const HotDeals = () => {
  // const [products, setProducts] = useState(null);
  const date = format(new Date(), "hh:mm:ss");
  const [settings, useSettings] = useState(null);
  const { data: products, loading, error } = useAsync(getProducts);
  useEffect(() => {
    // getAllProducts();
    const sliderData = sliderSettings(4, 3, 2, 1);
    useSettings({ ...sliderData });
  }, []);

  // const getAllProducts = async () => {
  //   try {
  //     await getProducts().then((res) => setProducts(res.data.data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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

        <div className="w-full md:w-[70%] mt-3 md:mt-0 container mx-auto">
          {loading && (
            <BeatLoader
              color="#0043b4"
              cssOverride={{ marginLeft: "40%", marginTop: "15%" }}
              loading
              margin={9}
              size={22}
              speedMultiplier={1}
            />
          )}
          {settings && (
            <Slider {...settings}>
              {products &&
                products
                  .splice(1, 4)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
