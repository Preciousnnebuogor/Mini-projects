import { useState } from "react";
import "./pop.css";
export default function PopFi() {
  const [ball, setBall] = useState(true);

  function handleBaloon() {
        //setBall(true)
      setBall((prev) => !prev);
  }

//   setTimeout(() => {
//     //setBall(true)
//     setBall((prev) => !prev);
//   }, 2000);

  function handleTime(){
    if(ball) {
        
    }

  }

  return (
    <div className="container">
      <div>Time</div>
      <div className="content">
        <img
          src="./assets/baloon.jpeg"
          className={`baloon ${ball ? "move" : "paused"}`}
          onClick={handleBaloon}
        />
      </div>
      <div>
        <button>Profile</button>
      </div>
    </div>
  );
}
