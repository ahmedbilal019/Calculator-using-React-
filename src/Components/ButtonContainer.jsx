import React from "react";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const buttonsNames = [
    "C",
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
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonsNames.map((buttonName) => {
        return <button className={styles.button}>{buttonName}</button>;
      })}
    </div>
  );
};

export default ButtonContainer;
