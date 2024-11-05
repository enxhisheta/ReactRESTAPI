import useFetch from "../hooks/useFetch";

const Table = () => {
  const { data: repositories, loading, error } = useFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table className="language-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Language</th>
          <th>Watchers</th>
          <th>Description</th>
          <th>Created At</th>
          <th>Last Updated</th>
          <th>Repository URL</th>
        </tr>
      </thead>
      <tbody>
        {repositories.map((repo) => (
          <tr key={repo.id}>
            <td>{repo.name}</td>
            <td>{repo.language || "N/A"}</td>
            <td>{repo.watchers_count}</td>
            <td>{repo.description || "No description"}</td>
            <td>{new Date(repo.created_at).toLocaleDateString()}</td>
            <td>{new Date(repo.updated_at).toLocaleDateString()}</td>
            <td>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
