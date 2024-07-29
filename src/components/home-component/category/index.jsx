import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { settings } from "../../../data";
import { getCategories } from "./../../../api/index";
import Cat from "./Cat";

const Category = () => {
  const [catData, setCatData] = useState(null);

  useEffect(() => {
    categories();
  }, []);

  const categories = async () => {
    try {
      const data = await getCategories().then((res) => res.data.data);
      setCatData(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mx-auto pt-8">
      <Slider {...settings}>
        {catData && catData.map((cat) => <Cat key={cat.id} cat={cat} />)}
      </Slider>
    </div>
  );
};

export default Category;
