const EventsSocials = ({ name }) => {
  return (
    <div className="events-social-media">
      <div className="events-social-media-header">
        <h3>Connect with {name}</h3>
      </div>

      <ul>
        <li>
          <a
            href="https://www.tiktok.com/@zevymusic?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/artist/3Rr9ksBPquEWyD9fP2VBZk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-spotify"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/zevymusic/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default EventsSocials;
