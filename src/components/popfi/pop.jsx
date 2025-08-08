import { useState } from "react";
import "./pop.css";
export default function PopFi() {
  const [ball, setBall] = useState(true);
  const [canPop, setCanPop] = useState(true)
  const [itemLeft, setItemLeft] = useState(0)

  function handleBaloon() {
  if(!canPop) return

        //setBall(true)
      setBall((prev) => !prev);
      setCanPop(false)

      setTimeout(() => {
        setCanPop(true)
      }, 5 * 60 *1000);

      let second = 5* 60
      setItemLeft(second)

      const countDown = setTimeout(() => {
        second -= 1
        setItemLeft(second)
        if(second <= 0) {
            clearInterval(countDown)
        }
      }, 1000);
  }


  return (
    <div className="container">
      <div>
        {canPop
          ? "You can pop the balloon!"
          : `Wait ${timeLeft} seconds to pop again.`}
      </div>
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
