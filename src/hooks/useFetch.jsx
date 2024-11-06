import { useEffect, useState } from "react";

const API_URL = "https://api.github.com/search/repositories";

const useFetch = ({
  language,
  createdAfter,
  stars,
  sort,
  order,
  page,
  per_page,
}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${API_URL}?${new URLSearchParams({
          q: `language:${language} created:>${createdAfter} stars:>${stars}`,
          sort,
          order,
          page,
          per_page,
        })}`;

        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");

        const result = await response.json();
        setData(result.items);
      } catch (err) {
        console.error(err);
        setError("Failed to load data");
      }
    };

    fetchData();
  }, [language, createdAfter, stars, sort, order, page, per_page]);

  return { data, error };
};

export default useFetch;
