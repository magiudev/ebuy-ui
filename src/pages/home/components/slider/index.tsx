import { useState } from "react";
import { slidesData } from "../../../../content";
import Slide from "./components/slide";
import "./style.css"

const Slider = () => {
  const [position, setPosition] = useState(0);

  const minPosition = -100 * (slidesData.length - 1);

  const handleClick = (direction: "right" | "left") => {
    if(direction === "right") {
      if(position > minPosition) setPosition(position - 100);
      else setPosition(0);
    }
    else if(direction === "left"){
      if(position < 0) setPosition(position + 100);
      else setPosition(minPosition);
    }  
  }

  return (
    <div className="slider__container">
      <div 
        className="slider__arrow-container slider__arrow-container--left"
        onClick={() => {handleClick("left")}}
      >
        <span className="material-symbols-outlined">navigate_before</span>
      </div>
      <div 
        className="slider__arrow-container slider__arrow-container--right"
        onClick={() => {handleClick("right")}}
      >
        <span className="material-symbols-outlined">navigate_next</span>
      </div>
      <div className="slider__slides-container">
        <div className="slider__slides-scroll" style={{ transform: `translateX(${position}vw)`}}>
          {
            slidesData.map(slide => (
              <Slide 
                key={slide.id}
                image={slide.image}
                backgroundColor={slide.backgroundColor}
                title={slide.title}
                description={slide.description}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Slider;