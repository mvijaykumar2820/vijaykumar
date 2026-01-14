import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      // Loop 2 seconds before the end
      if (video.duration && video.currentTime > video.duration - 2) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.playbackRate = 2;

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full items-center bg-foreground align-middle">
      {/* 
        To change the video: 
        1. Place your video file in the 'public/videos' folder.
        2. Name it 'hero.mp4' (or update the src below).
      */}
      <video
        ref={videoRef}
        autoPlay
        loop={false}
        muted
        playsInline
        className="pointer-events-none h-full w-full object-cover"
      >
        <source src='/videos/hero.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
