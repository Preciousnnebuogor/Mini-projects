import { useEffect, useState } from 'react';
import './loans.css'
export default function LoanCalculator() {
  const [inputData, setInputData] = useState({
    amount: "",
    interest: "",
    months: ""
  })
  const [result, setResult] = useState('')


  useEffect(()=>{
     const { amount, interest, months } = inputData;

     // const amount = inputData.amount;
    //  const interest = inputData.interest;
    //  const Months = inputData.Months;

     if (!amount || !interest || !months) return;

     const Amount = parseFloat(amount);
     const Interest = parseFloat(interest)/100/12;
     const Months = parseFloat(months);

     const payment = (Amount * Interest) / (1 - Math.pow(1 + Interest, -Months));

  setResult(payment.toFixed(2))
  })
  
  return (
    <div className={`container`}>
      <div className={`content`}>
        <p className={`p`}>Loan Calculator</p>
        <div className={`section1`}>
          <label>Loan Amount</label>
          <input
            type="number"
            name="amount"
            onChange={(e) =>
              setInputData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={inputData.amount}
          />

          <label>Interest Rate</label>
          <input
            type="number"
            name="interest"
            onChange={(e) =>
              setInputData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={inputData.interest}
          />

          <label>Months to pay</label>
          <input
            type="number"
            name="months"
            onChange={(e) =>
              setInputData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={inputData.months}
          />
        </div>
        <p>Monthly Payment: {result} </p>
      </div>
    </div>
  );
   }
