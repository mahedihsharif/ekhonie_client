import React from "react";
import Banner from "../../components/home-component/banner";
import Category from "../../components/home-component/category";
import HotDeals from "../../components/home-component/hot-deals";
import Blogs from "./../../components/blogs/index";
import FeaturedProducts from "./../../components/home-component/featured-products/index";
import ThreeCard from "./../../components/home-component/three-card/index";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <HotDeals />
      <FeaturedProducts />
      <ThreeCard />
      <Blogs />
    </>
  );
};

export default Home;
