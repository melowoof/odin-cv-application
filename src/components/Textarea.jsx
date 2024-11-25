/* eslint-disable react/prop-types */
import "../styles/Textarea.css";

function Textarea({ id, label, rows, cols, placeholder, value, onChange }) {
  // const [input, setInput] = useState("");

  // function handleChange(e) {
  //   setInput(e.target.value);
  // }

  const inputId = `${label.replace(/\s+/g, "-").toLowerCase()}-input`;

  return (
    <div className="textarea-container">
      <label htmlFor={inputId}> {label} </label>
      <textarea
        id={id}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Textarea;
