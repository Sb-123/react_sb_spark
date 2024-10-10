import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [nbr, setNbr] = useState(0);

  function increase() {
    setNbr(nbr + 1);
  }
  function decrease() {
    setNbr(nbr - 1);
  }
  function setToBegin() {
    setNbr(0);
  }

  return (
    <>
      <div className="container bg-indigo-400 w-32 rounded-sm  ">
        <button className="right bg-green-300 rounded-lg" onClick={setToBegin}>
          svg
        </button>
        <div className="">{nbr}</div>
        <button
          className="w-1/2 bg-gray-500 rounded-md gap-2"
          onClick={increase}
        >
          +
        </button>
        <button className="w-1/2 bg-gray-500 rounded-md " onClick={decrease}>
          {" "}
          -{" "}
        </button>
      </div>
    </>
  );
}

export default App;
