import React from "react";

const Prices = ({ onFilterChange }) => {
  const prices = [
    "101 - 200",
    "201 - 300",
    "301 - 400",
    "401 - 500",
    "501 - 600",
    "601 - 700",
    "701 - 800",
    "801 - 900",
    "901 - 950",
  ];
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Prices</h3>
      {prices.map((price) => (
        <div key={price} className="mb-2">
          <label>
            <input
              type="checkbox"
              onChange={(e) =>
                onFilterChange("price", e.target.value, e.target.checked)
              }
              value={price}
              className="mr-2"
            />
            ${price}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Prices;
