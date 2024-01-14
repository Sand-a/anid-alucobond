import React from "react";
import Sections from "../Sections/Sections";
import SectionReveal from "../SectionReveal/SectionReveal";

const VideoFrame = () => {
  const videoId = "zZY0TKtUkNs";
  return (
    <section className="margin-top section-videos">
      <Sections title={"Fire Safety"} />
      <div className="video-container">
        <iframe
          width="100%"
          height="100%"
          title="YouTube Video"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <SectionReveal
          section={
            <a className="container pdf-download" target="_blank" href={``}>
              <img src="/images/videos/fire_safety.jpg" alt="" />
              <div className="pdf-link">
                <ion-icon name="download-outline"></ion-icon>
                Download PDF
                <p>ALUCOBOND® Fire Safety</p>
              </div>
            </a>
          }
        />
      </div>
    </section>
  );
};

export default VideoFrame;
