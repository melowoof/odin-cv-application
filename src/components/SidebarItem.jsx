/* eslint-disable react/prop-types */
import "../styles/SidebarItem.css"

function SidebarItem({ text, icon, isActive, onClick }) {
  return (
    <button className={isActive ? "sidebar-item active" : "sidebar-item"} onClick={onClick}>
      <img className="icon" src={icon} />
      {text}
    </button>
  );
}

export default SidebarItem;
