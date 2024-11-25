/* eslint-disable react/prop-types */
import "../../styles/IconButton.css";

function IconButton({ icon, onClick }) {
  return (
    <button className={"icon-button"} onClick={onClick}>
      <img className="icon" src={icon} />
    </button>
  );
}

export default IconButton;
