import { useState, useEffect, useRef } from "react";

const TestTimer = ({ dateToEvent }) => {
  const [eventDays, setEventDays] = useState("00");
  const [eventHours, setEventHours] = useState("00");
  const [eventMinutes, setEventMinutes] = useState("00");
  const [eventSeconds, setEventSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = dateToEvent - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setEventDays(days);
        setEventHours(hours);
        setEventMinutes(minutes);
        setEventSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div>
      <div className="event-days">{eventDays}</div>
      <div className="event-hours">{eventHours}</div>
      <div className="event-minutes">{eventMinutes}</div>
      <div className="event-seconds">{eventSeconds}</div>
    </div>
  );
};

export default TestTimer;
