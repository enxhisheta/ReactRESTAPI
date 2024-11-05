import { useEffect, useState } from "react";

const API_URL = "/languages.json";

const useFetch = () => {
  const [languages, setlanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setlanguages(data);
      } catch (error) {
        console.error("Error loading languages:", error);
        setError("Failed to load languages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchLanguages();
  }, []);
  return { languages, loading, error };
};
export default useFetch;
