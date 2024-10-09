import React, { useEffect, useRef, useState  } from 'react';
import car_vedio from '../assets/carVedio.mp4';

const VideoScroll = () => {
  const videoRef = useRef(null);
  const setHeightRef = useRef(null);
  const playbackConst = 500;
  const [currentText, setCurrentText] = useState('Scroll to control video');


  const texts = [
    "Experience the thrill of the drive.",
    "Smooth handling and superior control.",
    "Feel the power of precision engineering.",
    "Innovative technology at your fingertips.",
    "Unleash the speed with every scroll."
  ];

  useEffect(() => {
    const setHeight = setHeightRef.current;
    const video = videoRef.current;

    const handleMetadata = () => {
      setHeight.style.height = Math.floor(video.duration) * playbackConst + "px";
    };

    video.addEventListener('loadedmetadata', handleMetadata);

    const scrollPlay = () => {
      const frameNumber = window.pageYOffset / playbackConst;
      video.currentTime = frameNumber; 

          // Update text based on scroll position (frameNumber)
          const textIndex = Math.min(Math.floor(frameNumber), texts.length - 1);
          setCurrentText(texts[textIndex]);
          window.requestAnimationFrame(scrollPlay);
    };

    window.requestAnimationFrame(scrollPlay);

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
    };
  }, []);

  return (
  <div style={{ display: 'flex', justifyContent: 'space-between', height: '100vh' }}>
      <div className="scrolling-text" style={{ flex: 1 }}>
        <p>{currentText}</p>
      </div>
      <div id="set-height" ref={setHeightRef} style={{ flex: 1 }}></div>
      <video className='vedio-stage' id="v0" ref={videoRef} preload="auto" tabIndex="0" style={{ flex: 0.8 }}>
        <source type="video/mp4" media="(min-width:1024px)" src={car_vedio} />
      </video>
    </div>
  );
};

export default VideoScroll;
