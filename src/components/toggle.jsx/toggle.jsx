import { FaToggleOn } from "react-icons/fa";
import './toggle.css'
import { useState } from "react";
export default function Toggle() {
    const [button, setButton] = useState(true)

    function handleClick(){
        setButton((prev) => !prev)
         
    }
  return (
    <div className={`contain ${button ? "light-mode" : "dark-mode"}`}>
      <div className="content">
        <button onClick={handleClick} className='btn'>
          <FaToggleOn size={60} />
        </button>
      </div>
    </div>
  );
}
