import React, { useEffect, useState } from "react";
import images from "../../Utils/ImageSliderData";

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      loadNextImage();
    }, 5000);
    return () => {
      clearInterval(i);
    };
  }, []);
  const loadPrevImage = () => {
    setActive((active) => (active - 1 < 0 ? images.length - 1 : active - 1));
  };
  const loadNextImage = () => {
    setActive(
      (active) =>
        // active + 1 > images.length - 1 ? (active + 1) % images.length : active + 1
        (active + 1) % images.length
    );
  };
  return (
    <div className="  flex justify-center  items-center ">
      <div className="relative w-[800px] m-2  transition-all ">
        <img
          onClick={loadPrevImage}
          className="w-[50px] h-[50px] absolute left-4 top-1/2 transform -translate-y-1/2 z-auto  cursor-pointer "
          src="https://www.vhv.rs/dpng/d/489-4893145_carousel-arrow-clipart-picture-free-download-hd-svg.png"
          alt="leftArrow"
        />
        <img
          className=" w-[800px] h-auto object-cover  "
          src={images[active]}
          alt="wallpaper"
        />

        <img
          onClick={loadNextImage}
          className="w-[50px] h-[50px] absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer"
          src="https://www.vhv.rs/dpng/d/216-2164367_next-track-right-arrow-forward-ui-comments-slider.png"
          alt="leftArrow"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
