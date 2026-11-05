import React from "react";
import heroGif from "../assets/dev.gif";

const Banner = () => {
  return (
    <div className="col-start-2 row-start-1 h-32 overflow-hidden sm:h-36 md:h-40 lg:h-45">
      <img
        src={heroGif}
        alt="Developer workspace animation"
        className="block h-full w-full object-cover object-center"
      />
    </div>
  );
};

export default Banner;
