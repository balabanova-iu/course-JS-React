import React from "react";

import quiz from "../../constants";

import styles from "./style.module.css";

const End = ({ answers, onEndClick }) => {
  let result = 0;
  let allQuestion = quiz.length;
  let textResult = "";

  for (let key in answers) {
    if (answers[key]) {
      result += 1;
    }
  }

  if ((result / allQuestion) * 100 >= 80) {
    textResult = "Вы прошли!";
  }
  if ((result / allQuestion) * 100 <= 80) {
    textResult = "Вы не прошли!";
  }

  const style =
    textResult === "Вы прошли!" ? { color: "green" } : { color: "red" };

  return (
    <div className={styles.end_content} style={style}>
      <div className={styles.end_content_titel}>{textResult}</div>
      <div className={styles.end_content_result}>
        {result}/{allQuestion}
      </div>
      <div>
        <button className={styles.end_content_button} onClick={onEndClick}>
          Завершить
        </button>
      </div>
    </div>
  );
};

export default End;
