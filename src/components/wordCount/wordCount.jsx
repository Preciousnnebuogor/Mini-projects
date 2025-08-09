import { useState } from "react";
import "./wordCount.css";
export default function WordCount() {
  const [text, setText] = useState("");
  const [count, setCount] = useState("");

  function countCharacter() {
    setCount(text.length);
  }

  return (
    <div className="container">
      <div className="content">
        <div className="top">
          <p>Real- Time Character Counter</p>
          <textarea
            maxLength={50}
            onChange={(e) => {
              setText(e.target.value);
              {
                countCharacter();
              }
            }}
            value={text}
          />
        </div>
        <div className="bottom">
          <p>Total Character:{count} </p>
          <p>Remaining: {50 - count}</p>
        </div>
      </div>
    </div>
  );
}
