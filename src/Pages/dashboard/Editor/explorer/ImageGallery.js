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
    return () => containerRef&&containerRef.current?containerRef.current.removeEventListener("scroll", handleScroll):null;
  }, [loadedImages]);

  const handleScroll = (ev) => {
    console.log("handleScroll called");
    const target = ev.target
    if (target.scrollTop + target.clientHeight === target.scrollHeight){
      console.log("loadImages")
      loadImages();
    }
    console.log(containerRef)
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
            <img id="grid-contain" src={image.src} alt={image.alt} draggable="true" onDrag={() => handleDrag("Image", image.src)}/>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default ImageGallery;
