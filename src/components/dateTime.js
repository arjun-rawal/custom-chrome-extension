import React, { useState, useEffect } from "react";

export const DateTime = (props) => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });


  return (
    <div>
      {props.type === "time" && <p> {date.toLocaleTimeString().split(':')[0] + ":" +    date.toLocaleTimeString().split(':')[1]+" PM"}</p>}
      {props.type === "date" && <p> {date.toLocaleDateString()}</p>}
    </div>
  );
};

export default DateTime;
