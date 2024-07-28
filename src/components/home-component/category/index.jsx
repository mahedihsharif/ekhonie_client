import React, { useEffect, useState } from "react";
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
    <div className="w-full grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 2xl:grid-cols-8 place-items-center px-5 2xl:px-60 mt-10 overflow-x-hidden gap-3">
      {catData && catData.map((cat) => <Cat key={cat.id} cat={cat} />)}
    </div>
  );
};

export default Category;
