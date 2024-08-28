import React from "react";
import { useSelector } from "react-redux";

const Tags = ({ onFilterChange }) => {
  const allTags = useSelector((state) => state.products.items);
  const filteredTags = allTags.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.tags[0] === item.tags[0])
  );

  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Tags</h3>
      <ul>
        {filteredTags.map((tag) => {
          const { _id, tags } = tag;

          return (
            <li key={_id} className="mb-2">
              <input
                type="checkbox"
                id="tag"
                onChange={(e) =>
                  onFilterChange("tag", e.target.value, e.target.checked)
                }
                value={tags}
              />
              <label htmlFor="tag" className="ml-2">
                {tags}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
