import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // Logic of this problem :-

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmi);

      if (bmi < 18.5) {
        setCategory("Underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setCategory("Normal weight");
      } else if (bmi >= 24.9 && bmi <= 29) {
        setCategory("Overweight");
      } else {
        setCategory("Obese");
      }
    }
  };

  // Logic of reload :-

  return (
    <>
      <div className="bg-indigo-400 p-3 rounded-md">
        <h2>BMI Calculator</h2>
        <div className="bim-card ">
          <label htmlFor="">Weight(kg)</label>
          <input
            className="w-full rounded-md h-8 p-4"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div className="input-group">
          <label htmlFor="">Height(cm)</label>
          <input
            className="w-full rounded-md h-8 p-4"
            type="number"
            value={height}
            placeholder="Enter your height"
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button
          className="btn-calculator mt-2"
          onKeyDown={(e) => e.key === "Enter"}
          onClick={calculateBMI}
        >
          Submit
        </button>
        {bmi && (
          <div className="result">
            <h3>Your BMI : {bmi}</h3>
            <h4>Category : {category}</h4>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
