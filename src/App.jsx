import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Button from "./components/buttons/Button";
import FormsContainer from "./components/forms/FormsContainer";

function App() {
  const sidebarItems = [
    "personal",
    "education",
    "employment",
    "skills",
    "languages",
    "interests",
  ];
  const [selectedSidebarItem, setSelectedSidebarItem] = useState(0);

  return (
    <div className="app-container">
      <Sidebar
        sidebarItems={sidebarItems}
        selectedItem={selectedSidebarItem}
        setSelected={setSelectedSidebarItem}
      />
      <div className="content">
        <FormsContainer
          selectedSidebarItem={sidebarItems[selectedSidebarItem]}
        />
        <div className="navigation-buttons-container">
          {selectedSidebarItem > 0 && (
            <Button
              text={"Back"}
              backgroundColor={"white"}
              color={"black"}
              onClick={() =>
                setSelectedSidebarItem(
                  (prevItem) => (prevItem - 1) % sidebarItems.length
                )
              }
            />
          )}
          {selectedSidebarItem < sidebarItems.length - 1 && (
            <Button
              text={"Continue"}
              onClick={() =>
                setSelectedSidebarItem(
                  (prevItem) => (prevItem + 1) % sidebarItems.length
                )
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
