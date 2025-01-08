import React from "react";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonsNames = [
    "AC",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    ".",
    "9",
    "=",
    "0",
    "C",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonName) => {
        const buttonClass = `${
          buttonName === "C" || buttonName === "AC"
            ? styles.clearButton
            : styles.button
        } ${buttonName === "=" ? styles.equalButton : styles.button}`;

        return (
          <button
            key={buttonName}
            className={buttonClass}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonContainer;
