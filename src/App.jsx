import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";

function App() {
  const [CalValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("");
    } else if (buttonText === "=") {
      try {
        const result = eval(CalValue);
        setCalValue(result);
      } catch (error) {
        const errorMessage = "Invalid Operation";
        setCalValue(errorMessage);
      }
    } else {
      const newDisplayValue = CalValue + buttonText;
      setCalValue(newDisplayValue);
    }
    // setCalValue(CalValue + buttonText);
    // console.log(buttonName);
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={CalValue} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
