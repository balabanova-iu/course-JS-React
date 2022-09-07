import React from "react";
import quiz from "../../constants";

import styles from "./style.module.css";

const Question = ({ onnextClick, currentQuestion, onAnswerClick }) => {
  const question = quiz[currentQuestion].question;
  const answers = quiz[currentQuestion].answers;

  return (
    <div className={styles.next_content}>
      <div className={styles.next_content_question}>{question}</div>
      <div>
        <div className={styles.next_content_answers}>
          <button
            className={styles.next_content_answer}
            onClick={() => onAnswerClick(0)}
          >
            {answers[0]}
          </button>
          <button
            className={styles.next_content_answer}
            onClick={() => onAnswerClick(1)}
          >
            {answers[1]}
          </button>
          <button
            className={styles.next_content_answer}
            onClick={() => onAnswerClick(2)}
          >
            {answers[2]}
          </button>
          <button
            className={styles.next_content_answer}
            onClick={() => onAnswerClick(3)}
          >
            {answers[3]}
          </button>
        </div>
        <div>
          <button className={styles.next_content_button} onClick={onnextClick}>
            Дальше
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
