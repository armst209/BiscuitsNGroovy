import { useState } from "react";
const BiscuitAlbumInformation = () => {
  const [showAlbumInfoModal, setShowAlbumInfoModal] = useState(false);

  const showAlbumInfoModalHandler = () => {
    setShowAlbumInfoModal(true);
  };

  const closeAlbumInfoModalHandler = () => {
    setShowAlbumInfoModal(false);
  };

  return (
    <section>
      <p onClick={() => showAlbumInfoModalHandler}>
        About the album here - a popup
      </p>
      {showAlbumInfoModal && (
        <div>
          <div onClick={() => closeAlbumInfoModalHandler}>X</div>
          <p> Visible Album Info</p>
        </div>
      )}
    </section>
  );
};

export default BiscuitAlbumInformation;
