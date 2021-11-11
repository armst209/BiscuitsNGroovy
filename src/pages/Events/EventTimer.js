import { useTimer } from "react-timer-hook";
import "./EventTimerStyles.scss";

function EventTimer({ expiryTimestamp, setShowTicketInformation }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
  });

  return (
    <div>
      <div className="countdown-container">
        <div
          style={{
            textAlign: "center",
            color: "var(--color1)",
            fontWeight: "normal",
            fontFamily: "var(--font1)",
          }}
        >
          Hope you were able to make the show! Check back soon for the exclusive
          pre-release of ZEVY's new single "Green Eyes"!{" "}
        </div>

        {/* <div className="digits">
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
        </div> */}
      </div>
    </div>
  );
}
export default EventTimer;
