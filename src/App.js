import "./App.css";
import AgeCalcuator from "./components/age/age";
import LoanCalculator from "./components/loans/loans";
import TemperatureCal from "./components/temp/tempCal";
// import PopFi from "./components/popfi/pop";
// import Toggle from "./components/toggle.jsx/toggle";
// import WordCount from "./components/wordCount/wordCount";

function App() {
  return (
    <div className="App">
      {/* <Toggle /> */}
      {/* <PopFi/> */}
      {/* <WordCount/> */}
      {/* <LoanCalculator/> */}
      {/* <AgeCalcuator/> */}
      <TemperatureCal/>
    </div>
  );
}

export default App;
