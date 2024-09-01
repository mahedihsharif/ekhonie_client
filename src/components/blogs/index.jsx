import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { get_blogs } from "../../redux/reducers/blogReducer";
import { sliderSettings } from "../../settings/slider-settings";
import BlogCard from "./blog-card";

const Blogs = () => {
  const [settings, useSettings] = useState(null);
  const dispatch = useDispatch();
  const { items, loader } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(get_blogs());
  }, [dispatch]);

  useEffect(() => {
    const sliderData = sliderSettings(4, 3, 2, 1);
    useSettings({ ...sliderData });
  }, []);

  return (
    <div className="px-5 2xl:px-60 bg-[#F1F5F6] py-5 md:py-16">
      {settings && (
        <Slider {...settings}>
          {items.length > 0 &&
            items.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
        </Slider>
      )}
    </div>
  );
};

export default Blogs;
