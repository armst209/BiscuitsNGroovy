import { useState } from "react";
import { HOSTNAME } from "./environment";

const LinkWrapper = ({ link }) => {
  const [showModal, setShowModal] = useState(false);

  const url = new URL(link);
  console.log(url);
  if (url.hostname === HOSTNAME)
    return (
      <a target="_blank" rel="noreferrer" href={link}>
        {link}
      </a>
    );
  else
    return (
      <div>
        <button onClick={() => setShowModal(true)}>Open Link</button>
        {showModal && <div>Shown</div>}
      </div>
    );
};

export default LinkWrapper;
