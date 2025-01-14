'use client'
import React, { useEffect, useState, useRef } from 'react';
import { Lock, Clock, Unlock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CraftloreComing = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDateRef = useRef(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);

  useEffect(() => {
    function updateTimer() {
      const now = new Date().getTime();
      const distance = targetDateRef.current - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    const timerId = setInterval(updateTimer, 1000);
    updateTimer(); 

    return () => clearInterval(timerId);
  }, []); 

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-4 w-24">
      <span className="text-3xl font-bold text-indigo-600 transition-all duration-300">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-sm font-medium text-gray-600 uppercase mt-1">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-8">
        <Clock className="h-16 w-16 text-indigo-600 mx-auto mb-6 animate-bounce" />
        
        <h1 className="text-5xl font-bold text-indigo-900 mb-4">
          CRAFTLORE COMING SOON
        </h1>
        
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mb-8">
          <p className="text-xl text-indigo-800 font-medium mb-2">
            Empowering 300,000 Kashmiri Craft Artisans
          </p>
          <p className="text-lg text-indigo-700">
            Captivating 40 Million U.S. Art Lovers
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <TimeBlock value={timeLeft.days} label="Days" />
          <TimeBlock value={timeLeft.hours} label="Hours" />
          <TimeBlock value={timeLeft.minutes} label="Minutes" />
          <TimeBlock value={timeLeft.seconds} label="Seconds" />
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="h-5 w-5 text-indigo-600" />
            <span className="text-lg font-medium text-indigo-800">Links Currently Locked</span>
            <Unlock className="h-5 w-5 text-indigo-600" />
          </div>
          <p className="text-gray-700 mb-4">
            All links will be fully functional after 14 days, bringing you closer to authentic Kashmiri craftsmanship
          </p>
          <p className="text-indigo-600 font-medium">Stay tuned!</p>
        </div>

        <h2 className="text-2xl font-semibold text-indigo-800 mt-8">
          Craftlore
        </h2>
        
        <div className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full font-medium">
          {timeLeft.days} days to go
        </div>
      </div>
    </div>
  );
};