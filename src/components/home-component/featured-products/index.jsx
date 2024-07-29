import React, { useEffect, useState } from "react";
import { getProducts } from "../../../api";
import LargeCard from "../../shared/large-card";
import ProductCard from "../../shared/product-card";

const FeaturedProducts = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      await getProducts().then((res) => setProducts(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="px-5 2xl:px-60 bg-[#F1F5F6] py-8 lg:py-16">
      <LargeCard featured={"featured products"} btnText={"view all products"} />

      <div className="md:flex justify-between w-full gap-2 mt-3">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
