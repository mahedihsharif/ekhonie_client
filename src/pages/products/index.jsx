import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/shared/product-card";
import Sidebar from "./Sidebar";

const Products = () => {
  const [filters, setFilters] = useState({ category: [], price: [], tag: [] });
  const products = useSelector((state) => state.products.items);
  const { id } = useParams();

  const categories = useSelector((state) => state.categories.items);
  const category = categories.find((cat) => cat._id === id);

  const filteredProducts = products.filter((product) => {
    const {
      category: { title },
      price,
      tags,
    } = product;
    return (
      (filters.category.length === 0 || filters.category.includes(title)) &&
      (filters.price.length === 0 ||
        filters.price.some((priceRange) => {
          const [min, max] = priceRange.split("-").map(Number);
          console.log(min, max);
          return price >= min && price <= max;
        })) &&
      (filters.tag.length === 0 || filters.tag.includes(tags[0]))
    );
  });

  const handleFilterChange = (type, value, checked) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (checked) {
        updatedFilters[type] = [...updatedFilters[type], value];
      } else {
        updatedFilters[type] = updatedFilters[type].filter(
          (item) => item !== value
        );
      }
      return updatedFilters;
    });
  };
  return (
    <div className="flex px-5 2xl:px-60 bg-[#F1F5F6] py-5">
      <Sidebar onFilterChange={handleFilterChange} />
      <div>
        <h1 className="text-center mb-5">Products</h1>
        <div className="w-4/4 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
