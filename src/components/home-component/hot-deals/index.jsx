import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { CiStopwatch } from "react-icons/ci";
import { getProducts } from "../../../api";
import LargeCard from "../../shared/large-card";
import ProductCard from "../../shared/product-card";
import HotDealImage from "/assets/hotdealsimg.png";

const HotDeals = () => {
  const [products, setProducts] = useState(null);
  const date = format(new Date(), "hh:mm:ss");
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
    <div className="mt-20 px-5 2xl:px-60 bg-[#F1F5F6] py-8 lg:py-16 overflow-x-hidden">
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
        <div className="md:flex justify-between w-full md:w-[70%] gap-2 mt-3 md:mt-0">
          {products &&
            products
              .splice(1, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default HotDeals;
