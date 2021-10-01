import React from "react";
import "./ExpiredPopupStyles.scss";

function ExpiredPopup(props) {
  return (
    <section id="expired-popup">
      <div className="expired-popup-container">
        <div
          className="expired-popup-close"
          onClick={() => props.setShowEndDatePopUp("")}
        >
          X
        </div>
        <h1>Expired!</h1>
        <p>
          This release has expired, meaning it’s no longer available to stream
          on BnG.
        </p>
        <p>
          Liked what you heard? Check out all of {props.releaseInformation}’s
          music{" "}
          <a
            href="https://open.spotify.com/artist/21FzYbjcnY2R44kLVjcugy"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
        <p>
          Rest assured your album art NFTs are here to stay. They remain in your
          account permanently so you can curate the perfect collection and prove
          you’re a top fan.
        </p>
      </div>
    </section>
  );
}

export default ExpiredPopup;
