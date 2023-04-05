import React, { useEffect } from "react";

const VidyardPlayer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://play.vidyard.com/embed/v4.js";
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="lg:flex lg:justify-center lg:items-center">
      <div className="lg:px-8 w-auto py-14 relative lg:w-[1130px]">
        <div className="video-wrapper">
          <img
            style={{ display: "block" }}
            className="vidyard-player-embed"
            src="https://play.vidyard.com/Kr6j2rwTnwQsWptQFD9kC8.jpg"
            data-uuid="Kr6j2rwTnwQsWptQFD9kC8"
            data-v="4"
            data-type="inline"
          />
        </div>
      </div>
    </div>
  );
};

export default VidyardPlayer;
