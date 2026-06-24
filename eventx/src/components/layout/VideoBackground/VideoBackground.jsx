import React from 'react';
import headerVideo from '../../../images/header.mp4';
import './VideoBackground.css';

const VideoBackground = () => (
  <div className="video-bg">
    <video
      className="video-bg__video"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={headerVideo} type="video/mp4" />
    </video>
    <div className="video-bg__overlay" />
  </div>
);

export default VideoBackground;
