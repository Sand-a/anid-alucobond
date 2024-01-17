import React from "react";
import "./VideoFrame.css";

const VideoFrame = ({ videoId }) => {
  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoFrame;
