/* eslint-disable react/prop-types */
import "../styles/Input.css";

function Input({ label, type, id, placeholder, value, onChange }) {
  // const [input, setInput] = useState("");

  // function handleChange(e) {
  //   setInput(e.target.value);
  // }

  const inputId = `${label.replace(/\s+/g, "-").toLowerCase()}-input`;

  return (
    <div className="input-container">
      {label !== "" && <label htmlFor={inputId}> {label} </label>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
