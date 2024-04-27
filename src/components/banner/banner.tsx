"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

function Banner() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "AI Powered Threat Analytics and Detection on the go",
    "BYOD Environment Management",
    "Secure your Networks",
    "Secure your Data",
    "Secure your Devices",
    "Secure your Cloud"
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className="flex items-center py-4 content-center justify-center">
      <Link href="/vulnus" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-500 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 content-center" role="alert">
        <span className="text-xl bg-gray-600 rounded-full text-white px-12 py-1.5 mr-3 items-center text-center">
          {texts[textIndex]}
        </span>
        <span className="font-bold text-xl">Athena by Sage</span>
      </Link>
    </div>
  );
}

export default Banner;
