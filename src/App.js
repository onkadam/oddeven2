import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [userInput, setUserInput] = useState();
  const [oddCount, setOddCount] = useState(0);
  const [evenCount, setEvenCount] = useState(0);

  const handleInputChange = (event) => {
    const value = event.target.value;

    console.log(typeof value);

    // Check if input is a number
    if (!isNaN(value)) {
      // Set user input
      setUserInput(value);

      // Count odd and even digits
      let odd = 0;
      let even = 0;
      for (let i = 0; i < value.length; i++) {
        const digit = value.charAt(i);
        if (digit % 2 === 0) {
          even++;
        } else {
          odd++;
        }
      }
      setOddCount(odd);
      setEvenCount(even);
    } else {
    }
  };
  return (
    <div>
      <label>
        Enter a number:
        <input type="number" value={userInput} onChange={handleInputChange} />
      </label>
      <p>Number of odd digits: {oddCount}</p>
      <p>Number of even digits: {evenCount}</p>
    </div>
  );
}
