import React, { useEffect, useState } from "react";
import images from "../../Utils/ImageSliderData";

const ImageSliderTransition = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      loadNextImage();
    }, 6000);
    return () => {
      clearInterval(i);
    };
  }, []);

  const loadPrevImage = () => {
    setActive((active) => (active - 1 + images.length) % images.length);
  };

  const loadNextImage = () => {
    setActive((active) => (active + 1) % images.length);
  };

  // Helper function to calculate the index of the previous and next images
  const getPrevIndex = () => (active - 1 + images.length) % images.length;
  const getNextIndex = () => (active + 1) % images.length;

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-[800px] m-2 transition-all">
        {/* Left Arrow */}
        <img
          onClick={loadPrevImage}
          className="w-[50px] h-[50px] absolute left-3 top-52 z-10 cursor-pointer"
          src="https://www.vhv.rs/dpng/d/489-4893145_carousel-arrow-clipart-picture-free-download-hd-svg.png"
          alt="leftArrow"
        />

        {/* Previous Image */}
        <img
          className="absolute w-[800px] h-auto object-cover "
          src={images[getPrevIndex()]}
          alt="Previous"
          style={{
            opacity: 0.7,
            transform: "translateX(-40%) scale(0.8)",
            zIndex: 0,
            transition: "opacity 1s ease-out",
          }}
        />

        {/* Active Image */}
        <img
          className="absolute w-[800px] h-auto object-cover "
          src={images[active]}
          alt="Active"
          style={{
            zIndex: 1,
            opacity: 1,
            transform: "translateX(0) scale(1)",
            transition: "opacity  0.6s ease ",
          }}
        />

        {/* Next Image */}
        <img
          className="absolute w-[800px] h-auto object-cover "
          src={images[getNextIndex()]}
          alt="Next"
          style={{
            opacity: 0.7,
            transform: "translateX(40%) scale(0.8)",
            zIndex: 0,
            transition: "opacity 0.6s ease-out",
          }}
        />

        {/* Right Arrow */}
        <img
          onClick={loadNextImage}
          className="w-[50px] h-[50px] absolute right-2 top-52  z-10 cursor-pointer"
          src="https://www.vhv.rs/dpng/d/216-2164367_next-track-right-arrow-forward-ui-comments-slider.png"
          alt="rightArrow"
        />
      </div>
    </div>
  );
};

export default ImageSliderTransition;
