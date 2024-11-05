/* eslint-disable react/prop-types */
const InputFilter = ({ label, value, onChange, type = "text", options }) => (
  <div>
    <label>{label}:</label>
    {type === "select" ? (
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input type={type} value={value} onChange={onChange} />
    )}
  </div>
);

export default InputFilter;
