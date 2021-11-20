import { useState } from "react";
import Slider, { Settings } from 'react-slick';
import { FaArrowLeft, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

import { Arrow, Container, Content, Wrapper } from "../styles/components/Slider/styles";
import { CanvasModel } from "./Canvas";

export function SliderModel() {
  const [imageIndex, setImageIndex] = useState(0);
  
  const images = ['/astronaut.png', '/astronaut.png', '/astronaut.png', '/astronaut.png'];

  const NextArrow = ({ onClick }) => {
    return (
      <Arrow onClick={onClick} position="next">
        <FaChevronRight />
      </Arrow>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <Arrow onClick={onClick} position="prev">
        <FaChevronLeft />
      </Arrow>
    )
  }

  const settings = {
    infinity: true,
    lazyLoad: 'ondemand',
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0',
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (_, next) => setImageIndex(next),
  } as Settings;

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          {images.map((img, index) => (
            <Content key={index} active={index === imageIndex}>
              {index === imageIndex ? 
                <CanvasModel /> : 
                <Image src={img} alt={img} layout="fill" />  
              }
            </Content>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  )
}