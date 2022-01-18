import styles from "./BiscuitInsert.module.scss";
const BiscuitInsert = () => {
  return (
    <section id={styles["biscuit-insert"]}>
      <iframe
        src="https://player.vimeo.com/video/666613961?h=d72eaedb5e"
        width="640"
        height="564"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://player.vimeo.com/video/666615717?h=d3b17f1430"
        width="640"
        height="564"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default BiscuitInsert;
