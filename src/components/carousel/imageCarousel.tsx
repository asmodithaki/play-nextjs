"use client"
import React, { useState, useEffect } from "react";
import Image from 'next/image';

interface ImageCarouselProps {
  imagePaths: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imagePaths }) => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [imagePaths.length]);

  return (
    <div className="lg:col-span-5 lg:flex lg:mt-0">
      <Image 
        src={imagePaths[imageIndex]}
        alt=""
        width={900}
        height={100} 
        className="w-full max-w-md shadow-2xl rounded-lg ml-10 "
      />
    </div>
  );
};

export default ImageCarousel;
