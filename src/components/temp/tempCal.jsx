import { useEffect, useState } from "react";
import "./tempCal.css";
export default function TemperatureCal() {
  const [cal, setCal] = useState("");
  const [fah, setFah] = useState("");
  const [kel, setKel] = useState("");

  useEffect(() => {
    function handleFah() {
      if (!cal) {
        setFah("");
        return;
      }

      const check = (cal * 9) / 5 + 32;
      console.log(check);
      setFah(check);
    }
    handleFah()
  }, [cal]);

  useEffect(() => {
    function handleKel() {
      if (!cal) {
        setKel("");
        return;
      }
      const check = parseFloat(cal) + 273.15;
      setKel(check);
    }
    handleKel()
  }, [cal]);

  return (
    <div>
      <div>
        <p>Temperature Calculator</p>
        <div>
          <label>Calcius</label>
          <input
            type="number"
            onChange={(e) => setCal(e.target.value)}
            value={cal}
          />
        </div>

        <div>
          <label>Fahrenheit</label>
          <input
            type="number"
            onChange={(e) => setFah(e.target.value)}
            value={fah}
            readOnly
          />
        </div>

        <div>
          <label>Kelvin</label>
          <input
            type="number"
            onChange={(e) => setKel(e.target.value)}
            value={kel}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
