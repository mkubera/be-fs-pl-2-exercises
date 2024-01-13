import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
  const randomNumber = Math.random()
  return (
    <>
      <AppTitle title={"Counter App"} number={randomNumber} />
      <AppTitle title={"Counter App"} number={randomNumber} />
      <AppTitle title={"Counter App"} />
      <AppTitle title={"Different App"} />
      <AppTitle title={"Different App"} />
      <AppTitle title={"Different App"} />
      <AppTitle title={"Different App"} />

      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
}

export default App;
