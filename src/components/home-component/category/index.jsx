import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";
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

  return (
    <div className="container mx-auto pt-8">
      {loader ? (
        <BeatLoader
          color="#0043b4"
          cssOverride={{ marginLeft: "50%", marginTop: "2%" }}
          loading
          margin={9}
          size={22}
          speedMultiplier={1}
        />
      ) : (
        <>
          {settings && (
            <Slider {...settings}>
              {items.length > 0 &&
                items.map((cat) => <Cat key={cat.id} cat={cat} />)}
            </Slider>
          )}
        </>
      )}
    </div>
  );
};

export default Category;
