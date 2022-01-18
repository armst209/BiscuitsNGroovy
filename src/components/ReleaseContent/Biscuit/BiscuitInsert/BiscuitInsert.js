import styles from "./BiscuitInsert.module.scss";
const BiscuitInsert = () => {
  return (
    <section id={styles["biscuit-insert"]}>
      <div className="biscuit-insert-container">
        <div>X</div>
        <div>
          <iframe
            src="https://player.vimeo.com/video/666613961?h=d72eaedb5e&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            title="Pink Walls Music Video.mp4"
          ></iframe>
        </div>

        <div>
          <iframe
            src="https://player.vimeo.com/video/666615717?h=d3b17f1430&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Elle Lexxa Animation.mp4"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default BiscuitInsert;
