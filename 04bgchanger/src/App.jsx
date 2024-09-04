import { userState, useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex justify-center bottom-12 fixed flex-wrap inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
