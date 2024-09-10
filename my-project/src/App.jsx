import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        {" "}
        <div className="flex gap-4">
          <div className="flex flex-wrap  w-full  mx-5 mt-12 justify-center  px-3 py-11 bg-white rounded-full gap-8 ">
            <button
              className="bg-red-600 rounded-2xl px-4"
              onClick={() => setColor("red")}
            >
              Red
            </button>

            <button
              className="bg-blue-600 rounded-2xl px-4 "
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
