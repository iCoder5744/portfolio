// components/TopLoader.js
'use client';
import { useEffect, useState } from 'react';

export default function TopLoader({ loading }) {
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (loading) {
      setVisible(true);
      setWidth(0);
      timer = setInterval(() => {
        setWidth((prev) => (prev >= 90 ? prev : prev + Math.random() * 10));
      }, 150);
    } else {
      setWidth(100);
      setTimeout(() => {
        setVisible(false);
        setWidth(0);
      }, 500);
    }
    return () => clearInterval(timer);
  }, [loading]);

  return visible ? (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      <div
        className="h-[5px] bg-blue-500 transition-all duration-200 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  ) : null;
}
