"use client";
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    targetDate.getTime() - Date.now()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(targetDate.getTime() - Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  const Timer = [
    {
      name: "days",
      count: days,
    },
    {
      name: "hours",
      count: hours,
    },
    {
      name: "minutes",
      count: minutes,
    },
    {
      name: "seconds",
      count: seconds,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-lg">
      {Timer.map((time, t) => {
        return (
          <div
            key={t}
            className="text-center aspect-square flex justify-center items-center flex-col gap-1 py-2 rounded-xl shadow-sm bg-primary border border-white/20 text-offwhite"
          >
            <div className="text-6xl">{time.count}</div>
            <div className="text-sm capitalize">{time.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default CountdownTimer;
