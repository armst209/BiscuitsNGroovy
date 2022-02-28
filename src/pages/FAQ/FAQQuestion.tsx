//react imports
import { useState } from "react"

//svg imports
import { ReactComponent as Dropdown } from "../../assets/images/double-down-yellow.svg";


//styles
import styles from "./FAQQuestion.module.scss"

interface FrequentlyAskedQuestion {
 title: string,
 ul:HTMLUListElement
}

const FAQQuestion = ({title, ul}:FrequentlyAskedQuestion) => {
    const [showAnswer, setShowAnswer] = useState(false);
  return (
      <>
        <section id={styles["faq-question"]} onClick={()=>setShowAnswer(prevState=> !prevState)}>
            <div>{title}</div>
          <Dropdown className={showAnswer ? styles["icon_rotate"]: ""}/>
        </section>
      {showAnswer && <div className="answer">{ul}</div>}
      </>
  )
}

export default FAQQuestion