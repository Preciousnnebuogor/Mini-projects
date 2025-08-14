import { useState } from "react";

export default function AgeCalcuator() {
  const [currentDate, setCurrentDate] = useState('');
  const [storAge, setStoreAge] = useState("");

//   const today = new Date();
//   const year = today.getFullYear();
//   const month = String( today.getMonth() + 1).padStart(2,0);
//   const day = String(today.getDate()).padStart(2,0);
//   const formatted = `${year} -${month} -${day}`;
//      const personalAge = currentDate
//      const result = formatted- personalAge;
//     setStoreAge(result)

function calculate(){
    if (!currentDate) return
 
    const today = new Date();
    const birthday = new Date(currentDate);
    const years = today.getFullYear() - birthday.getFullYear()
    setStoreAge(years)

}

  return (
    <div>
      <div>
        <input
          type="date"
          onChange={(e) => setCurrentDate(e.target.value)}
          value={currentDate}
        />
        <button onClick={calculate}>Submit</button>
        <p>You are{storAge} </p>
      </div>
    </div>
  );
}
