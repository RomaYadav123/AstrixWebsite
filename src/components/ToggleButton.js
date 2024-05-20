// import React, { useState } from "react";
// import CarouselPage from "./CarouselPage";
// import CarouselSecond from "./CarouselSecond";
// import "../stylesheet/ToggleButton.css";

// function ToggleButton() {
//   const [isToggled, setIsToggled] = useState(false);
//   const handleToggle = () => {
//     setIsToggled(!isToggled);
//   };

//   return (
//     <div>
//       {isToggled ? <CarouselSecond /> : <CarouselPage />}

//       <div className="toggle-container">
//         <span className={`toggle-text ${isToggled ? "inactive" : ""}`}>
//           Events
//         </span>
//         <button
//           className={`toggle-button ${isToggled ? "toggled" : ""}`}
//           onClick={handleToggle}
//         >
//           <span className={`toggle-text ${isToggled ? "" : "inactive"}`}>
//             Collections
//           </span>
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ToggleButton;

import React, { useState } from "react";
import Switch from "react-js-switch";
import "../stylesheet/ToggleButton.css";

const ToggleButton = () => {
  const [selectedOption, setSelectedOption] = useState("Events");

  const handleChange = (checked) => {
    console.log("checking for error", checked);
    setSelectedOption(checked ? "Collections" : "Events");
  };

  return (
    <div
      className="toggle-box"
      style={{ display: "flex", alignItems: "center" }}
    >
      {selectedOption && (
        <>
          <span>{selectedOption}</span>

          <span style={{ marginRight: 4 }}></span>
          <Switch
            checked={selectedOption === "Collections"}
            onChange={handleChange}
          />
          <span style={{ marginLeft: 4 }}>
            {selectedOption === "Events" ? "Collections" : "Events"}
          </span>
        </>
      )}
    </div>
  );
};

export default ToggleButton;
