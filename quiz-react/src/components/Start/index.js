import React from "react";

import styles from "./style.module.css";

const Start = ({ onstartClick }) => {
  return (
    <div className={styles.first_content}>
      <div className={styles.first_content_titel}>Супер векторина</div>
      <div>
        <button
          type="button"
          className={styles.first_content_button}
          onClick={onstartClick}
        >
          Начать векторину
        </button>
      </div>
    </div>
  );
};

export default Start;
