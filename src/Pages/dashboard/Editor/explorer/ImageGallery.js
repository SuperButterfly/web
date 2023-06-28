/* global localStorage */

import { useState, useEffect, useRef } from "react";
import Masonry from "react-masonry-css";

const ImageGallery = ({ images, usplashRef }) => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    loadImages();
  }, []);

  useEffect(() => {
    containerRef.current.addEventListener("scroll", handleScroll);
    return () =>
      containerRef && containerRef.current
        ? containerRef.current.removeEventListener("scroll", handleScroll)
        : null;
  }, [loadedImages]);

  const handleScroll = (ev) => {
    console.log("handleScroll called");
    const target = ev.target;
    if (target.scrollTop + target.clientHeight === target.scrollHeight) {
      console.log("loadImages");
      loadImages();
    }
    console.log(containerRef);
  };

  const loadImages = () => {
    const imagesPerPage = 10;
    const start = (pageNumber - 1) * imagesPerPage;
    const end = start + imagesPerPage;
    setLoadedImages([...loadedImages, ...images.slice(start, end)]);
    setPageNumber(pageNumber + 1);
  };

  const handleDrag = (id, src) => {
    localStorage.setItem("text", id);
    localStorage.setItem("src", src);
  };

  return (
    <div className="unsplash-container04" ref={containerRef}>
      <Masonry className="my-masonry-grid">
        {loadedImages.map((image, index) => (
          <div key={index}>
            <img
              id="grid-contain"
              src={image.src}
              alt={image.alt}
              draggable="true"
              onDrag={() => handleDrag("Image", image.src)}
            />
            <div className="image-content">
              <div className="image-content2">
                <div className="image-content3">
                  {images.map((image, index) => (
                    <div className="image-content4">
                      <img
                        key={index}
                        heigth="130px"
                        width="100%"
                        src={image.src}
                        alt={image.name}
                        draggable="true"
                        onDrag={() => handleDrag("Image", image.src)}
                      ></img>

                      <div className="asset-overlay">
                        <div className="asset-overlay1">
                          <label className="jsx-3743795215">
                            <input
                              name="checkbox"
                              type="checkbox"
                              className="jsx-3743795215 "
                            ></input>
                          </label>
                          <span className="uploads-text12">
                            {(image.SizeFile / 1024).toFixed(2)} KB
                          </span>

                          <button className="pt-btn-transparent-jsx-3535535137">
                            <svg
                              viewBox="0 0 1024 1024"
                              className="uploads-icon08"
                            >
                              <path d="M512 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM768 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26zM256 426q34 0 60 26t26 60-26 60-60 26-60-26-26-60 26-60 60-26z"></path>
                            </svg>
                          </button>
                        </div>

                        <div className="asset-overlay2">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="uploads-icon25"
                            onClick={() => handleDrag("Image", image.src)}
                          >
                            <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                          </svg>
                          <svg
                            viewBox="0 0 1024 1024"
                            className="uploads-icon27"
                          >
                            <path d="M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z"></path>
                            <path d="M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z"></path>
                          </svg>
                        </div>
                        <div className="asset-overlay3">
                          <span className="uploads-text12">{image.name}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ImageGallery;
