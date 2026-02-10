'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  targetTime?: string;
}

export default function CountdownTimer({ targetDate, targetTime = '14:00' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(`${targetDate}T${targetTime}:00`).getTime();

    const update = () => {
      const now = Date.now();
      const distance = target - now;
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / 86400000),
        hours: Math.floor((distance % 86400000) / 3600000),
        minutes: Math.floor((distance % 3600000) / 60000),
        seconds: Math.floor((distance % 60000) / 1000),
      });
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate, targetTime]);

  const pad = (n: number) => String(n).padStart(2, '0');

  const items = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
  ];

  return (
    <div className="countdown-timer" role="timer" aria-label="Countdown to next race">
      {items.map((item) => (
        <div className="countdown-item" key={item.label}>
          <span className="countdown-value" suppressHydrationWarning>
            {mounted ? pad(item.value) : '--'}
          </span>
          <span className="countdown-unit">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
