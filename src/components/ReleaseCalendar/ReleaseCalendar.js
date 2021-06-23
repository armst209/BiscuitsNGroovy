import { React, useState } from "react";
import Calendar from "react-calendar";
import "./ReleaseCalendarStyles.scss";

function ReleaseCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <section id="release-calendar">
      <Calendar className="calendar" onChange={onChange} value={value} />
    </section>
  );
}

export default ReleaseCalendar;
