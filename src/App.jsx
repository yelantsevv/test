import { useState } from "react";
import "./App.css";
import clsx from "clsx";

function App() {
  const [boxCl, setBoxCl] = useState("box3");

  const hand = () => {
    setBoxCl("box3 box3_wrapper");
    setTimeout(() => {
      setBoxCl("box3");
    }, 10000);
  };

  return (
    <div
      className={clsx("box3_wrapper", { box3: boxCl !== "box3" })}
      onMouseEnter={hand}
    >
      Article Time
    </div>
  );
}

export default App;
