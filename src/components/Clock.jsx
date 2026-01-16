import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR');
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="clock-container">
      <h2>Relógio Digital</h2>
      <div className="clock-display">
        {formatTime(time)}
      </div>
      <div className="date-display">
        {formatDate(time)}
      </div>
    </div>
  );
};

export default Clock;
