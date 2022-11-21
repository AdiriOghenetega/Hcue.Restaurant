import {RiSkipBackMiniLine,RiSkipForwardMiniLine} from "react-icons/ri";
import { useState, useEffect } from "react";
import "./assets/gallery.css"

import slide1 from "/images/hcue/slide1.jpeg";
import slide2 from "/images/hcue/slide2.jpg";
import slide3 from "/images/hcue/slide3.jpg";
import slide4 from "/images/hcue/slide4.jpg";
import slide5 from "/images/hcue/slide5.jpg";
import slide6 from "/images/hcue/slide6.jpg";
import slide7 from "/images/hcue/slide7.jpg";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const displayInterval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(displayInterval);
  }, []);

  if (currentIndex >= 7) {
    setCurrentIndex(0);
  }
  

  const images = [
    {
      original: slide1,
    },
    {
      original: slide2,
    },
    {
      original: slide3,
    },
    {
      original: slide4,
    },
    {
      original: slide5,
    },
    {
      original: slide6,
    },
    {
      original: slide7,
    },
  ];

  const display = images.map((item, index) => {
    return <img key={index} src={item.original} className="gallery__images slide-in-right" />;
  });

  function handleSkipLeft(){
    setCurrentIndex(prev=>prev - 1)
    if(currentIndex <= 0){
      setCurrentIndex(7)
      setCurrentIndex(prev=>prev - 1)
    }
  }

  function handleSkipRight(){
    setCurrentIndex(prev=>prev + 1)
    if(currentIndex > 7){
      setCurrentIndex(0)
    }
  }
  const displayBoxes = images.map((item,index)=>{
    return <div className="gallery__index-boxes " key={index} style={{backgroundColor: index === currentIndex ? "rgb(237,139,27)" : "white"}} onClick={()=>handleBoxesClick(index)}></div>
  })

  function handleBoxesClick(index){
   setCurrentIndex(index)
  }

  return (
    <div className="gallery">
      <div className="gallery__images-container">
      <div className="gallery__images-container_arrows">
        <div className="gallery__images_arrow-left" onClick={handleSkipLeft}>
          <RiSkipBackMiniLine size="60px" />
        </div>
        <div className="gallery__images_arrow-right" onClick={handleSkipRight}>
          <RiSkipForwardMiniLine size="60px" />
        </div>
      </div>
        {display[currentIndex]}
      </div>
      <div className="gallery__index-boxes-container">{displayBoxes}</div>
      
    </div>
  );
}
