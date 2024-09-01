import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { get_category } from "../../../redux/reducers/categoryReducer";
import { sliderSettings } from "../../../settings/slider-settings";
import Cat from "./Cat";

const Category = () => {
  const dispatch = useDispatch();
  const [settings, useSettings] = useState(null);
  const { items, loader, errorMessage } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(get_category());
  }, [dispatch]);

  useEffect(() => {
    const sliderData = sliderSettings(8, 4, 3, 2);
    useSettings({ ...sliderData });
  }, []);

  if (errorMessage) return <p className="text-center">Error: {errorMessage}</p>;

  return (
    <div className="container mx-auto pt-8">
      <div className="container mx-auto pt-8">
        {settings && (
          <Slider {...settings}>
            {items.length > 0 &&
              items.map((cat) => <Cat key={cat._id} cat={cat} />)}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Category;
