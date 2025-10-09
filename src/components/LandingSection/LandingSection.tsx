import './LandingSection.scss';
import React from 'react';
import { Carousel, Image } from 'react-bootstrap';
import CTAButton from '../CTAButton/CTAButton';
import AnimateTyper from '../AnimateTyper/AnimateTyper';

export const slides = [
  {
    slideImg: '/food_landing.jpg',
    slideTitle: 'GROCERIES DELIVERY',
    slideSubTitle: 'We know what your deliveries should be like...'
  },
  {
    slideImg: '/background.png',
    slideTitle: 'TEAMWORK DELIVERY',
    slideSubTitle: 'We look out for each other as a team...'
  },
  {
    slideImg: '/delivery.png',
    slideTitle: 'FUN AND SMILES',
    slideSubTitle: 'We love to serve you'
  }
];

interface LandingProps {
  id?: any;
}

const LandingSection: React.FC<LandingProps> = ({ id }) => {
  const handleClick = (): void => {
    alert('Hello');
  };
  return (
    <div
      style={{ minHeight: '80vh', zIndex: 0, paddingTop: 70 }}
      className="justify-content-lg-center align-items-center ms-auto"
    >
      <Carousel data-bs-theme="dark" interval={10000}>
        {slides.map((slide, index) => {
          return (
            <Carousel.Item
              style={{
                position: 'relative',
                height: '90vh',
                width: '100%',
                overflow: 'hidden',
                zIndex: 0
              }}
            >
              <div className="image_overlay" style={{ backgroundImage: slide.slideImg }}></div>
              <Image
                src={slide.slideImg}
                alt="Slide"
                className="d-block w-100 h-100"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  zIndex: 0,
                  backgroundImage: slide.slideImg
                }}
              />

              <Carousel.Caption
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 100,
                  width: '100%',
                  fontSize: 58
                }}
                className="text-white text-center"
              >
                {/* <Badge bg="primary" className="mb-3"> */}
                <h1
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 5rem)',
                    fontWeight: 'bolder',
                    position: 'relative',
                    width: 'max-content'
                    // width: '100%'
                  }}
                  className="mb-0 mb-3 w-100"
                >
                  {slide.slideTitle}
                </h1>
                {/* </Badge> */}
                <p
                  style={{
                    fontSize: 'clamp(0.5rem, 3.5vw, 2rem)',
                    fontFamily: 'Raleway, sans-serif'
                  }}
                >
                  {slide.slideSubTitle}
                </p>
                <CTAButton title="Start Now" handleClick={handleClick} />
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
export default LandingSection;
