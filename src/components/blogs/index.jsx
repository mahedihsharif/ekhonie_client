import React, { useEffect, useState } from "react";
import { getBlogs } from "./../../api/index";
import BlogCard from "./blog-card";

const Blogs = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    getAllBlogs();
  }, []);

  const getAllBlogs = async () => {
    try {
      await getBlogs().then((res) => setBlogs(res.data.data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="md:flex justify-center items-center gap-2 px-5 2xl:px-60 bg-[#F1F5F6] py-5 md:py-16 overflow-x-hidden">
      {blogs && blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
};

export default Blogs;
