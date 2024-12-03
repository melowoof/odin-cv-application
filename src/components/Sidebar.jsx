/* eslint-disable react/prop-types */
import "../styles/Sidebar.css";
import SidebarItem from "./SidebarItem";

function Sidebar({ sidebarItems, selectedItem, setSelected }) {
  return (
    <div className="sidebar">
      {" "}
      <SidebarItem
        text={"Personal details"}
        icon={
          "https://img.icons8.com/?size=100&id=c9qBeYd2uXYG&format=png&color=000000"
        }
        isActive={sidebarItems[selectedItem] === "personal"}
        onClick={() => setSelected(0)}
      />
      <SidebarItem
        text={"Education"}
        icon={
          "https://img.icons8.com/?size=100&id=VqhURg0aF70F&format=png&color=000000"
        }
        isActive={sidebarItems[selectedItem] === "education"}
        onClick={() => setSelected(1)}
      />
      <SidebarItem
        text={"Employment"}
        icon={
          "https://img.icons8.com/?size=100&id=VfUYnBLRi9Of&format=png&color=000000"
        }
        isActive={sidebarItems[selectedItem] === "employment"}
        onClick={() => setSelected(2)}
      />
      <SidebarItem
        text={"Skills"}
        icon={
          "https://img.icons8.com/?size=100&id=cnINj0lkP720&format=png&color=000000"
        }
        isActive={sidebarItems[selectedItem] === "skills"}
        onClick={() => setSelected(3)}
      />
      <SidebarItem
        text={"Languages"}
        icon={
          "https://img.icons8.com/?size=100&id=k3HwOfdGB5IM&format=png&color=000000"
        }
        isActive={sidebarItems[selectedItem] === "languages"}
        onClick={() => setSelected(4)}
      />
      <SidebarItem
        text={"Interests & hobbies"}
        icon={
          "https://img.icons8.com/?size=100&id=eB5SCJrSiRyS&format=png&color=000000"
        }
        isActive={sidebarItems[selectedItem] === "interests"}
        onClick={() => setSelected(5)}
      />
      <SidebarItem
        text={"Preview"}
        icon={
          "https://img.icons8.com/?size=100&id=RzBtKwnyPvYk&format=png&color=000000"
        }
        isActive={sidebarItems[selectedItem] === "resume"}
        onClick={() => setSelected(6)}
      />
    </div>
  );
}

export default Sidebar;
