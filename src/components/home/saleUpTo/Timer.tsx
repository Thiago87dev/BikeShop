"use client";
import { useEffect, useState } from "react";

const Timer = () => {
  const getStoredTargetDate = () => {
    const savedDate = localStorage.getItem("targetDate");
    if (savedDate) {
      return Number(savedDate);
    } else {
      const newTargetDate = new Date().getTime() + 15 * 24 * 60 * 60 * 1000;
      localStorage.setItem("targetDate", newTargetDate.toString());
      return newTargetDate;
    }
  };
  const [targetDate, setTargetDate] = useState(getStoredTargetDate);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        const newTargetDate = new Date().getTime() + 15 * 24 * 60 * 60 * 1000;
        localStorage.setItem("targetDate", newTargetDate.toString());
        setTargetDate(newTargetDate);
        return { days: 15, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-red-600 flex justify-center w-full py-2 sm:py-6">
      <div className="flex gap-6 sm:gap-12">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl sm:text-6xl">{timeLeft.days}</h2>
          <p className="text-sm sm:text-base">DAYS</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl sm:text-6xl">{timeLeft.hours}</h2>
          <p className="text-sm sm:text-base">HRS</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl sm:text-6xl">{timeLeft.minutes}</h2>
          <p className="text-sm sm:text-base">MINS</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-3xl sm:text-6xl">{timeLeft.seconds}</h2>
          <p className="text-sm sm:text-base">SECS</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
