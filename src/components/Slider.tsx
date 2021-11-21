import { useState } from "react";
import Slider, { Settings } from 'react-slick';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from 'next/image';

import { Arrow, Container, Content, Wrapper, Button } from "../styles/components/Slider/styles";
import { CanvasModel } from "./Canvas";
import { ModelLoading } from "./ModelLoading";
import { useModel } from "../hooks/useModel";

export function SliderModel() {
  const { isModelLoading } = useModel();
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

  console.log(isModelLoading);

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          {images.map((img, index) => (
            <Content key={index} active={index === imageIndex}>
              {index === imageIndex ?
                <ModelLoading /> : 
                <Image src={img} alt={img} layout="fill" />  
              }
            </Content>
          ))}
        </Slider>
        <Button>Comprar</Button>
      </Wrapper>
    </Container>
  )
}