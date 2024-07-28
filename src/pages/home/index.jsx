import React from "react";
import Blogs from "../../components/blogs";
import Banner from "../../components/home-component/banner";
import Category from "../../components/home-component/category";
import FeaturedProducts from "../../components/home-component/featured-products";
import HotDeals from "../../components/home-component/hot-deals";
import ThreeCard from "../../components/home-component/three-card";
import Footer from "../../components/shared/footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <HotDeals />
      <FeaturedProducts />
      <ThreeCard />
      <Blogs />
      <Footer />
    </>
  );
};

export default Home;
