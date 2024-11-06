import useFetch from "../hooks/useFetch";
import Filter from "./Filter";
import { useState } from "react";

const Table = () => {
  const [filterParams, setFilterParams] = useState({
    language: "javascript",
    createdAfter: "2024-11-01",
    stars: 5,
    sort: "stars",
    order: "desc",
  });

  const { data: repositories } = useFetch(filterParams);

  const handleFilterChange = (key, value) => {
    setFilterParams((prevParams) => ({ ...prevParams, [key]: value }));
  };

  return (
    <div>
      <Filter filterParams={filterParams} onFilterChange={handleFilterChange} />
      <table className="language-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Language</th>
            <th>Watchers</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Last Updated</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repo, idx) => (
            <tr key={repo.id}>
              <td>{idx + 1}</td>
              <td>{repo.name}</td>
              <td>{repo.language || "N/A"}</td>
              <td>{repo.watchers_count}</td>
              <td>{repo.description || "No description"}</td>
              <td>{new Date(repo.created_at).toLocaleDateString()}</td>
              <td>{new Date(repo.updated_at).toLocaleDateString()}</td>
              <td>
                <a href={repo.html_url}>Visit</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
