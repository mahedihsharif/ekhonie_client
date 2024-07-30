import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";
import { getProducts } from "../../../api";
import useAsync from "../../../hooks/useAsync";
import { sliderSettings } from "../../../settings/slider-settings";
import LargeCard from "../../shared/large-card";
import ProductCard from "../../shared/product-card";

const FeaturedProducts = () => {
  const { data, loading, error } = useAsync(getProducts, "products_fixed");
  const [products, setProducts] = useState(JSON.parse(data));
  const [settings, useSettings] = useState(null);

  useEffect(() => {
    // getAllProducts();
    const sliderData = sliderSettings(6, 4, 2, 1);
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
                {products &&
                  products.map((product) => (
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
