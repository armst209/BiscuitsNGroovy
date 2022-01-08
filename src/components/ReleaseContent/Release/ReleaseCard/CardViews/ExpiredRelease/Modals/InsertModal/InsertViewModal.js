import "./InsertViewModalStyles.scss";

function InsertViewModal({ release, closeInsertView }) {
  return (
    <section id="expired-modal">
      <div className="expired-modal-container">
        <div className="expired-modal-close" onClick={() => closeInsertView()}>
          X
        </div>
        PUT INSERT HERE
      </div>
    </section>
  );
}

export default InsertViewModal;
