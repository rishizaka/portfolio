import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import Image from "next/image";

interface Props {
  images: string[];
  infinite?: boolean;
  prevIcon?: ReactNode;
  nextIcon?: ReactNode;
}
export default function CarouselReactSlick({
  images,
  prevIcon = null,
  nextIcon = null,
  infinite = true,
}: Props) {
  const settings = {
    dots: true,
    infinite: infinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: prevIcon as React.ReactElement,
    nextArrow: nextIcon as React.ReactElement,
  };
  return (
    <Slider {...settings} className="w-[80%] mx-auto">
      {images.map((image, index) => {
        return (
          <div className="w-[full] h-[200px] relative" key={index}>
            <Image
              src={image}
              fill
              alt=""
              objectFit="contain"
              className="rounded-md"
            />
          </div>
        );
      })}
    </Slider>
  );
}
