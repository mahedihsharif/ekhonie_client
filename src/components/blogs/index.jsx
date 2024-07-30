import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";
import useData from "../../hooks/useData";
import { get_blogs } from "../../redux/reducers/blogReducer";
import { sliderSettings } from "../../settings/slider-settings";
import BlogCard from "./blog-card";

const Blogs = () => {
  const [settings, useSettings] = useState(null);
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const { data: blogsData, loading, error } = useData(blogs);

  useEffect(() => {
    dispatch(get_blogs());
  }, [dispatch]);

  useEffect(() => {
    const sliderData = sliderSettings(4, 3, 2, 1);
    useSettings({ ...sliderData });
  }, []);

  return (
    <div className="px-5 2xl:px-60 bg-[#F1F5F6] py-5 md:py-16">
      {loading ? (
        <BeatLoader
          color="#0043b4"
          cssOverride={{ marginLeft: "40%" }}
          loading
          margin={9}
          size={22}
          speedMultiplier={1}
        />
      ) : (
        <>
          {settings && (
            <Slider {...settings}>
              {blogsData &&
                blogsData.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
            </Slider>
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
