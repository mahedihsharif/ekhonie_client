import React from "react";
import { useSelector } from "react-redux";

const Category = ({ onFilterChange }) => {
  const categories = useSelector((state) => state.categories.items);

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Categories</h3>
      <ul>
        {categories.map((cat) => {
          const { title, totalProducts } = cat;
          return (
            <li key={cat._id} className="mt-1">
              <input
                type="checkbox"
                id="cat"
                onChange={(e) =>
                  onFilterChange("category", e.target.value, e.target.checked)
                }
                value={title}
              />
              <label htmlFor="cat1" className="ml-2">
                {title} ({totalProducts})
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
