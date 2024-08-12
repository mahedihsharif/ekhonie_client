import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/shared/product-card";
import Sidebar from "./Sidebar";

const Products = () => {
  const [filters, setFilters] = useState({ category: [], price: [], tag: [] });
  const products = useSelector((state) => state.products.items);
  const filteredProducts = products.filter((product) => {
    const {
      attributes: {
        category: {
          data: {
            attributes: { title },
          },
        },
        sellingPrice,
        tags,
      },
    } = product;
    return (
      (filters.category.length === 0 || filters.category.includes(title)) &&
      (filters.price.length === 0 ||
        filters.price.some((priceRange) => {
          const [min, max] = priceRange.split("-").map(Number);
          console.log(min, max);
          return sellingPrice >= min && sellingPrice <= max;
        })) &&
      (filters.tag.length === 0 || filters.tag.includes(tags))
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
      <div className="w-3/4 p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
