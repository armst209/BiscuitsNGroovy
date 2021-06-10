import React from "react";
import spotlight from "../../assets/images/spotlight_upward2_nolamp.png";
import "./ReminderBackgroundStyles.scss";

function ReminderBackground() {
  return (
    <div className="downward-spotlight">
      <img src={spotlight} alt="background" />
    </div>
  );
}

export default ReminderBackground;
