import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useAsync from "../../../hooks/useAsync";
import { sliderSettings } from "../../../settings/slider-settings";
import { getCategories } from "./../../../api/index";
import Cat from "./Cat";

const Category = () => {
  // const [catData, setCatData] = useState(null);
  const [settings, useSettings] = useState(null);
  const { data: catData, loading, error } = useAsync(getCategories);

  useEffect(() => {
    // categories();
    const sliderData = sliderSettings(8, 4, 3, 2);
    useSettings({ ...sliderData });
  }, []);
  // const categories = async () => {
  //   try {
  //     const data = await getCategories().then((res) => res.data.data);
  //     setCatData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="container mx-auto pt-8">
      {loading && (
        <BeatLoader
          color="#0043b4"
          cssOverride={{ marginLeft: "50%", marginTop: "2%" }}
          loading
          margin={9}
          size={22}
          speedMultiplier={1}
        />
      )}
      {settings && (
        <Slider {...settings}>
          {catData && catData.map((cat) => <Cat key={cat.id} cat={cat} />)}
        </Slider>
      )}
    </div>
  );
};

export default Category;
