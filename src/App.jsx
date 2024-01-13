import { useState } from "react";
import "./App.css";
import { AppTitle } from "./components/AppTitle";

function App() {
  const INIT_COUNT = 5;

  // DATA TIER
  const [count, setCount] = useState(INIT_COUNT);

  // (BUSINESS) LOGIC TIER
  const increment = () => setCount((count) => count + 1);
  const reset = () => setCount(() => INIT_COUNT);

  // PRESENTATION TIER
  const randomNumber = Math.random();
  return (
    <>
      <AppTitle title={"Counter App"} number={randomNumber} />

      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}

export default App;
