import image1 from "../../assets/example01.png"
import image2 from "../../assets/example02.png"
import image3 from "../../assets/example03.png"
import * as sec from "..";
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="py-5 mb-5 text-dark">
      <Carousel.Item>
      <sec.Card photo={image1} prompt="Dancing Mona Lisa" name="John Doe" />
      </Carousel.Item>

      <Carousel.Item>
      <sec.Card photo={image2} prompt="Winter bird in forest" name="Alan Walker"/>
      </Carousel.Item>

      <Carousel.Item>
       <sec.Card photo={image3} prompt="Downtown Tokyo at nightime" name="Vinh Nguyen"/>
      </Carousel.Item>
    </Carousel>
  );
}
