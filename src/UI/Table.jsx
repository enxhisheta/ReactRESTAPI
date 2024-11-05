import useFetch from "../hooks/useFetch";

const Table = () => {
  const { languages, loading, error } = useFetch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table className="language-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Frameworks</th>
        </tr>
      </thead>
      <tbody>
        {languages.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.frameworks.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
