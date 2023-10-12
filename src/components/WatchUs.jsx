import React from "react";

const WatchUs = () => {
  return (
    <div className="container">
      <p className="display-3 my-3 text-center">Vïds</p>
      <div className="ratio ratio-16x9">
        <iframe
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/DZ0MdLppwNU?si=JCvI26eSkjeFcSRq"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ratio ratio-16x9 my-4">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/03OTVB5rvdM?si=Nj9vn6OxTUM4uVjK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ratio ratio-16x9 my-4">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/VPsQWeS855Y?si=BxWnasz5We-The9v"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ratio ratio-16x9 my-4">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/7sbAZkRd924?si=u9gMpXrkAcaDa9Hg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ratio ratio-16x9 my-4">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/EMaxDbrrvew?si=HYt3nMHYUekRqPr9"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchUs;
