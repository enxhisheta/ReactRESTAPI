import { useState } from "react";

const Filter = () => {
  const [language, setLanguage] = useState("");
  const [createdAfter, setCreatedAfter] = useState("2024-11-01");
  const [stars, setStars] = useState(5);
  const [sort, setSort] = useState("stars");
  const [order, setOrder] = useState("desc");

  const handleFilterChange = () => {
    const searchParams = new URLSearchParams(window.location.search);

    if (language) searchParams.set("language", language);
    else searchParams.delete("language");

    if (createdAfter) searchParams.set("createdAfter", createdAfter);
    else searchParams.delete("createdAfter");

    if (stars) searchParams.set("stars", stars);
    else searchParams.delete("stars");
    console.log(stars);

    if (sort) searchParams.set("sort", sort);
    else searchParams.delete("sort");

    if (order) searchParams.set("order", order);
    else searchParams.delete("order");

    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${searchParams.toString()}`
    );

    // Optionally trigger a fetch to reload data
    window.location.reload();
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Language"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      />
      <input
        type="date"
        value={createdAfter}
        onChange={(e) => setCreatedAfter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Stars"
        value={stars}
        onChange={(e) => setStars(e.target.value)}
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="stars">Stars</option>
        <option value="updated">Updated</option>
      </select>
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filter;
