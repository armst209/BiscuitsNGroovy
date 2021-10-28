import "./TestExpiredPopupStyles.scss";

function ExpiredPopup(props) {
  return (
    <section className={props.popupClassName}>
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
          Rest assured your album art NFTs are here to stay. They remain in your
          account permanently so you can curate the perfect collection and prove
          you’re a top fan.
        </p>
      </div>
    </section>
  );
}

export default ExpiredPopup;
