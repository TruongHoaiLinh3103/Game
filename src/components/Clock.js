import React, { useEffect, useState } from 'react';
import "../styles/clock.scss";

const Clock = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 1000);
  }, []);

  return (
      <div className="conteudo">
          <div className="relogio">
              <h4 className="js-data">
                {dateState.toLocaleString("en-US", {
                  year: "numeric",
                  month: "long",
                  weekday: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "2-digit",
                  hour12: true,
                })}
              </h4>
          </div>
          <span></span>
          <span></span>
      </div>
  );
};

export default Clock;