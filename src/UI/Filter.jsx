import { useState } from "react";
import InputFilter from "./InputFilter";

// eslint-disable-next-line react/prop-types
const Filter = ({ onApplyFilters }) => {
  const [filters, setFilters] = useState({
    language: "javascript",
    createdAfter: "2024-11-01",
    stars: 5,
    sort: "stars",
    order: "desc",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const applyFilters = () => onApplyFilters(filters);

  return (
    <div className="filter-container">
      <InputFilter
        label="Language"
        value={filters.language}
        onChange={(e) => handleFilterChange("language", e.target.value)}
      />
      <InputFilter
        label="Created After"
        type="date"
        value={filters.createdAfter}
        onChange={(e) => handleFilterChange("createdAfter", e.target.value)}
      />
      <InputFilter
        label="Stars"
        type="number"
        value={filters.stars}
        onChange={(e) => handleFilterChange("stars", e.target.value)}
      />
      <InputFilter
        label="Sort"
        type="select"
        options={["stars", "forks", "help-wanted-issues", "updated"]}
        value={filters.sort}
        onChange={(e) => handleFilterChange("sort", e.target.value)}
      />
      <InputFilter
        label="Order"
        type="select"
        options={["desc", "asc"]}
        value={filters.order}
        onChange={(e) => handleFilterChange("order", e.target.value)}
      />
      <button onClick={applyFilters}>Happy Filters</button>
    </div>
  );
};

export default Filter;
