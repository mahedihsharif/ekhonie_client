import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";
import useData from "../../../hooks/useData";
import { sliderSettings } from "../../../settings/slider-settings";
import LargeCard from "../../shared/large-card";
import ProductCard from "../../shared/product-card";

const FeaturedProducts = () => {
  const [settings, useSettings] = useState(null);
  const products = useSelector((state) => state.products);
  const { data: productsData, loading, error } = useData(products);

  useEffect(() => {
    const sliderData = sliderSettings(6, 4, 2, 1);
    useSettings({ ...sliderData });
  }, []);

  return (
    <div className="px-5 2xl:px-60 bg-[#F1F5F6] py-8 lg:py-16">
      <LargeCard featured={"featured products"} btnText={"view all products"} />

      <div className="mt-3">
        {loading ? (
          <BeatLoader
            color="#0043b4"
            cssOverride={{ marginLeft: "40%", marginTop: "8%" }}
            loading
            margin={9}
            size={22}
            speedMultiplier={1}
          />
        ) : (
          <>
            {settings && (
              <Slider {...settings}>
                {productsData &&
                  productsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </Slider>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
