import { useState } from "react";
import "./wordCount.css"
export default function WordCount(){
    const[text, setText] = useState('')
    const [count, setCount] = useState('')
    return (
      <div className="container">
        <div className="content">
          <div className="top">
            <p>Real- Time Character Counter</p>
            <textarea />
          </div>
          <div className="bottom">
            <p>Total Character: 50 </p>
            <p>Remaining: 0</p>
          </div>
        </div>
      </div>
    );
}