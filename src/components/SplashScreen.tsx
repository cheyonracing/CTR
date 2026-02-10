'use client';

import { useEffect, useState } from 'react';

interface SplashScreenProps {
  children: React.ReactNode;
}

export default function SplashScreen({ children }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1200);
    const hideTimer = setTimeout(() => setShowSplash(false), 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showSplash && (
        <div
          className="loading-screen"
          style={{
            opacity: fadeOut ? 0 : 1,
            transition: 'opacity 0.6s ease',
            pointerEvents: fadeOut ? 'none' : 'auto',
          }}
        >
          <div className="loading-content">
            <img
              src="/images/logos/CTR_yellow.png"
              alt="CTR Logo"
              className="loading-logo"
            />
            <div className="loading-spinner" />
          </div>
        </div>
      )}
      <div
        style={{
          opacity: fadeOut ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        {children}
      </div>
    </>
  );
}
