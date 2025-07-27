
import React from "react";
import oceanVideo from "../assets/ocean_background.mp4";
import galleon from "../assets/galleon_skills.png";

function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-2]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={oceanVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src={galleon}
        alt="Galleon"
        className="absolute bottom-0 left-[-40%] w-[60%] animate-sail z-[-1]"
      />
    </div>
  );
}

export default VideoBackground;