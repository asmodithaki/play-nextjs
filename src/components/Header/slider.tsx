"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const [headerTextIndex, setHeaderTextIndex] = useState(0);
  const headerTexts = [
    "FWaaS Rules: Define cloud asset access policies",
    "AI Powered Threat Detection & Response",
    "Granular User Access Control",
    "Domain Compromise Monitoring",
    "Explore The Vulnus Threat Analyzer & Responder",
    "Claudine: Network infrastructure management dashboard",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderTextIndex((prevIndex) => (prevIndex + 1) % headerTexts.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [headerTexts.length]);

  return (
    <div className="lg:col-span-7 lg:mr-auto place-self-center space-x-4 mb-10">
      <h1 className="max-w-2xl mb-10 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl text-gray-100 dark:text-white">
        {headerTexts[headerTextIndex]}
      </h1>
      <a
        href="/login"
        className="inline-flex items-center justify-center px-5 py-3 text-xl font-bold text-center text-blue-500 border border-blue-500 shadow-xl rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        {" "}
        {/* Changed text color to white */}
        Sign In
        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 ml-2 -mr-1" />
      </a>
      <a
        href="/get-started"
        className="inline-flex items-center justify-center px-5 py-3 text-xl font-bold text-center text-red-500 border border-red-500 shadow-xl rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
        {" "}
        {/* Changed border and text color to red */}
        Get Started
        <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 ml-2 -mr-1" />
      </a>
    </div>
  );
};

export default Slider;
