/* eslint-disable react/prop-types */
import InputFilter from "./InputFilter";

const Filter = ({ filterParams, onFilterChange }) => {
  return (
    <div className="filter-container">
      <InputFilter
        label="Language"
        value={filterParams.language}
        onChange={(e) => onFilterChange("language", e.target.value)}
      />
      <InputFilter
        label="Created After"
        type="date"
        value={filterParams.createdAfter}
        onChange={(e) => onFilterChange("createdAfter", e.target.value)}
      />
      <InputFilter
        label="Stars"
        type="number"
        value={filterParams.stars}
        onChange={(e) => onFilterChange("stars", e.target.value)}
      />
      <InputFilter
        label="Order"
        type="select"
        options={["desc", "asc"]}
        value={filterParams.order}
        onChange={(e) => onFilterChange("order", e.target.value)}
      />
      <button onClick={() => onFilterChange(filterParams)}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filter;
