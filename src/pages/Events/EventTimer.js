import { useTimer } from "react-timer-hook";
import "./EventTimerStyles.scss";

function EventTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("EVENT DAY"),
  });

  return (
    <div>
      <div className="countdown-container">
        <div className="digits">
          <h3>DAYS</h3>
          <div className="digit-time">{days}</div>
        </div>
        <div className="digits">
          <h3>HOURS</h3>
          <div className="digit-time">{hours}</div>
        </div>
        <div className="digits">
          <h3>MINUTES</h3>
          <div className="digit-time">{minutes}</div>
        </div>
        <div className="digits">
          <h3>SECONDS</h3>
          <div className="digit-time">{seconds}</div>
        </div>
      </div>
    </div>
  );
}
export default EventTimer;
