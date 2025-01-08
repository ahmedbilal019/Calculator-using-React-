import { evaluate } from "mathjs";
import { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import ButtonContainer from "./Components/ButtonContainer";
import Display from "./Components/Display";

function App() {
  const [CalValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "AC") {
      setCalValue("");
    } else if (buttonText === "=" && CalValue.length === 0) {
      setCalValue(CalValue);
    } else if (buttonText === "=") {
      try {
        const result = evaluate(CalValue);
        setCalValue(result.toString());
      } catch (error) {
        const errorMessage = "Invalid Operation";
        setCalValue(errorMessage);
      }
    } else if (buttonText === "C") {
      setCalValue(CalValue.slice(0, -1));
    } else {
      const newDisplayValue = CalValue + buttonText;
      setCalValue(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={CalValue} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
