/* eslint-disable react/prop-types */
import "../../styles/Button.css";

function Button({
  text,
  onClick,
  color = "white",
  backgroundColor = "black",
  border,
}) {
  const buttonStyle = {
    color: color,
    backgroundColor: backgroundColor,
    border: border,
  };

  return (
    <button
      style={buttonStyle}
      className={"button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
