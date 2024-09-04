import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Sanjeev",
    age: 21,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 p-4 rounded ">Tailwind test</h1>
      <Card
        username="sanjeev"
        channel="codeWithSanjeev"
        someOje={myObj}
        someArr={newArr}
        btnText="click me"
      ></Card>
      <Card username="Kunal" btnText="visit me"></Card>
    </>
  );
}

export default App;
