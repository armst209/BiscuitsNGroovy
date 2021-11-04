import "./ExpiredModalStyles.scss";

function ExpiredModal({ release, showExpiredModal, setShowExpiredModal }) {
  return (
    <section id="expired-modal">
      <div className="expired-modal-container">
        <div
          className="expired-modal-close"
          onClick={() => setShowExpiredModal(!showExpiredModal)}
        >
          X
        </div>
        <h1>EXPIRED!</h1>
        <p>
          This release has expired, meaning it’s no longer available to stream
          on BnG.
        </p>
        <p>
          Liked what you heard? Check out all of {release.name}’s music{" "}
          {/* change to music link url */}
          <a href={release.art_url} target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
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

export default ExpiredModal;
