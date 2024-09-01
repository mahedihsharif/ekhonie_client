import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { sliderSettings } from "../../../settings/slider-settings";
import LargeCard from "../../shared/large-card";
import ProductCard from "../../shared/product-card";

const FeaturedProducts = () => {
  const [settings, useSettings] = useState(null);
  const { items, loader, errorMessage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    const sliderData = sliderSettings(6, 4, 2, 1);
    useSettings({ ...sliderData });
  }, []);

  return (
    <div className="px-5 2xl:px-60 bg-[#F1F5F6] py-8 lg:py-16">
      <LargeCard featured={"featured products"} btnText={"view all products"} />

      <div className="mt-3">
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
  );
};

export default FeaturedProducts;
