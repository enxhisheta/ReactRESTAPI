import { useEffect, useState } from "react";

const API_URL = "https://api.github.com/search/repositories";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const urlParams = new URLSearchParams(window.location.search);

        const language = urlParams.get("language") || "javascript";
        const createdAfter = urlParams.get("createdAfter") || "2024-11-01";
        const stars = urlParams.get("stars") || 5;
        const sort = urlParams.get("sort") || "stars";
        const order = urlParams.get("order") || "desc";

        const url = new URL(API_URL);
        url.search = new URLSearchParams({
          q: `language:${language} created:>${createdAfter} stars:>${stars}`,
          sort,
          order,
        }).toString();

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.items);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetch;
