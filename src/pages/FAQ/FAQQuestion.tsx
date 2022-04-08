//react imports
import { useState } from "react";

//svg imports
import { ReactComponent as Dropdown } from "common/assets/images/double-down-yellow.svg";

//styles
import styles from "./FAQQuestion.module.scss";

interface FrequentlyAskedQuestion {
  title: string;
  content: HTMLUListElement;
}

const FAQQuestion = ({ title, content }: FrequentlyAskedQuestion) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <section id={styles["faq-question"]} onClick={() => setShowAnswer((prevState) => !prevState)}>
        <div className={styles["faq-question-title"]}>{title}</div>
        <div className={styles["faq-question-icon-container"]}>
          <Dropdown className={showAnswer ? styles["icon_rotate"] : ""} />
        </div>
      </section>
      {showAnswer && (
        <div className={styles.answer}>
          <ul>{content}</ul>
        </div>
      )}
    </>
  );
};

export default FAQQuestion;
