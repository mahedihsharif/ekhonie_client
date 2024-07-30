import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BeatLoader } from "react-spinners";
import useAsync from "../../hooks/useAsync";
import { sliderSettings } from "../../settings/slider-settings";
import { getBlogs } from "./../../api/index";
import BlogCard from "./blog-card";

const Blogs = () => {
  const { data, loading, error } = useAsync(getBlogs, "blogs");
  const [blogs, setBlogs] = useState(JSON.parse(data));
  const [settings, useSettings] = useState(null);

  useEffect(() => {
    // getAllBlogs();
    const sliderData = sliderSettings(4, 3, 2, 1);
    useSettings({ ...sliderData });
  }, []);

  // const getAllBlogs = async () => {
  //   try {
  //     await getBlogs().then((res) => setBlogs(res.data.data));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
              {blogs &&
                blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
            </Slider>
          )}
        </>
      )}
    </div>
  );
};

export default Blogs;
