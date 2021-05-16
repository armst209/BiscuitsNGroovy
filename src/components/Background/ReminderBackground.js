import React from "react";
import spotlight from "../../assets/images/spotlight-upward2.png";
import "./ReminderBackgroundStyles.scss";

function ReminderBackground() {
  return (
    <div className="downward-spotlight">
      <img src={spotlight} alt="background" />
    </div>
  );
}

export default ReminderBackground;
