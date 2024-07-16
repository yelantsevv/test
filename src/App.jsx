import { useState } from "react";
import "./App.css";

function App() {
  const [boxCl, setBoxCl] = useState("box3");

  const hand = () => {
    setBoxCl("box3 box3_wrapper");
    setTimeout(() => {
      setBoxCl("box3");
    }, 5500);
  };

  return (
    <div
      className={boxCl != "box3" ? "box3 box3_wrapper" : "box3_wrapper"}
      onMouseEnter={hand}
    >
      <p className="box3_title">Article Time</p>
    </div>
  );
}

export default App;
