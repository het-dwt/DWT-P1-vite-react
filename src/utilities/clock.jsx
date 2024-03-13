import { useState, useEffect } from "react";
import "./clock.css";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="clockParent" >
      <small className="clock">{date.toLocaleTimeString()}</small>
      <br /> <small className="clock">{date.toLocaleDateString()}</small>
    </div>
  );
}

export default Clock;
