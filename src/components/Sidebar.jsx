/* eslint-disable react/prop-types */
import "../styles/Sidebar.css";
import SidebarItem from "./SidebarItem";

function Sidebar({ sidebarItems, selectedItem, setSelected }) {
  return (
    <div className="sidebar">
      {" "}
      <SidebarItem
        text={"Personal details"}
        icon={"src/assets/icons/icons8-user-24.png"}
        isActive={sidebarItems[selectedItem] === "personal"}
        onClick={() => setSelected(0)}
      />
      <SidebarItem
        text={"Education"}
        icon={"src/assets/icons/icons8-diploma-24.png"}
        isActive={sidebarItems[selectedItem] === "education"}
        onClick={() => setSelected(1)}
      />
      <SidebarItem
        text={"Employment"}
        icon={"src/assets/icons/icons8-work-24.png"}
        isActive={sidebarItems[selectedItem] === "employment"}
        onClick={() => setSelected(2)}
      />
      <SidebarItem
        text={"Skills"}
        icon={"src/assets/icons/icons8-popular-man-24.png"}
        isActive={sidebarItems[selectedItem] === "skills"}
        onClick={() => setSelected(3)}
      />
      <SidebarItem
        text={"Languages"}
        icon={"src/assets/icons/icons8-world-24.png"}
        isActive={sidebarItems[selectedItem] === "languages"}
        onClick={() => setSelected(4)}
      />
      <SidebarItem
        text={"Interests & hobbies"}
        icon={"src/assets/icons/icons8-trekking-24.png"}
        isActive={sidebarItems[selectedItem] === "interests"}
        onClick={() => setSelected(5)}
      />
      <SidebarItem
        text={"Preview CV"}
        icon={"src/assets/icons/icons8-download-24.png"}
        isActive={sidebarItems[selectedItem] === "resume"}
        onClick={() => setSelected(6)}
      />
    </div>
  );
}

export default Sidebar;
