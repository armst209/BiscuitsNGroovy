//styles
import styles from "../HowItWorksStyles.module.scss"

const HowItWorksBox = ({svg, h4Content, h6Content, information}) => {
  return (
    <div className={styles.box}>
    <div className={styles["box-border"]}>
      <div className={styles["box-content"]}>
        <div className={styles["how-it-works-boxes-icon-headers"]}>
          <div className={styles["how-icon"]}>
            {svg}
          </div>
          <div className={styles["how-it-works-boxes-headers"]}>
            <h4>{h4Content.toLocaleUpperCase()}</h4>
            <h6>{h6Content.toLocaleUpperCase()}</h6>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            {information}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HowItWorksBox