import React, { useEffect, useRef } from 'react';
import car_vedio from '../assets/carVedio.mp4';

const VideoScroll = () => {
  const videoRef = useRef(null);
  const setHeightRef = useRef(null);
  const playbackConst = 500;

  useEffect(() => {
    const setHeight = setHeightRef.current;
    const video = videoRef.current;

    // Set the height based on video duration when metadata is loaded
    const handleMetadata = () => {
      setHeight.style.height = Math.floor(video.duration) * playbackConst + "px";
    };

    video.addEventListener('loadedmetadata', handleMetadata);

    const scrollPlay = () => {
      const frameNumber = window.pageYOffset / playbackConst;
      video.currentTime = frameNumber;
      window.requestAnimationFrame(scrollPlay);
    };

    window.requestAnimationFrame(scrollPlay);

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
    };
  }, []);

  return (
    <div>
      <div id="set-height" ref={setHeightRef}></div>
      <p id="time">Scroll to control video</p>
      <video className='vedio-stage' id="v0" ref={videoRef} preload="auto" tabIndex="0">
        <source 
          type="video/mp4" media="(min-width:1024px)"
          src= {car_vedio}
        />
      </video>
    </div>
  );
};

export default VideoScroll;
