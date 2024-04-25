import "./clock.css";
import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 500);

    return () => clearInterval(intervalId);
  }, []);
console.log(date)
  return (
    <div id="clockParent">
      <small className="clock">{date.toLocaleTimeString()}</small>
      <br /> <small className="clock">{date.toLocaleDateString()}</small>
    </div>
  );
}

export default Clock;
