
import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(59 * 60); // 59 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-red-600">
      <div className="bg-red-100 px-3 py-1 rounded">
        {String(minutes).padStart(2, '0')}
      </div>
      <span>:</span>
      <div className="bg-red-100 px-3 py-1 rounded">
        {String(seconds).padStart(2, '0')}
      </div>
    </div>
  );
};

export default CountdownTimer;
