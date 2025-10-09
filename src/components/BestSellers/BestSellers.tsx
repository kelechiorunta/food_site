import './BestSellers.scss';

import React from 'react';
import { Col, Row, Carousel, Container } from 'react-bootstrap';
import BestSellersCard from '../BestSellersCard/BestSellersCard';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

const varieties = [
  {
    name: 'Your Space',
    style: 'Groceries',
    pic: '/groceryIV.png',
    styleWidth: 250,
    styleHeight: 250
  },
  {
    name: 'Ends Today',
    style: 'Groceries',
    pic: '/groceryII.png',
    styleWidth: 250,
    styleHeight: 250
  },
  {
    name: 'Ends Today',
    style: 'Groceries',
    pic: '/groceryIII.png',
    styleWidth: 250,
    styleHeight: 250
  },
  {
    name: 'Your Space',
    style: 'Groceries',
    pic: '/groceryI.png',
    styleWidth: 250,
    styleHeight: 250
  },
  {
    name: 'Ends Today',
    style: 'Groceries',
    pic: '/groceryII.png',
    styleWidth: 250,
    styleHeight: 250
  },
  {
    name: 'Ends Today',
    style: 'Groceries',
    pic: '/groceryIII.png',
    styleWidth: 250,
    styleHeight: 250
  }
];

interface Props {
  id?: any;
  delay?: any;
}
const BestSellers: React.FC<Props> = ({ id, delay }) => {
  const { isVisible } = useViewChild(id, delay);
  return (
    <Row>
      <Col as={'div'}>
        <div className="bestsellers-carousel-wrapper">
          <Carousel
            controls={true}
            style={{
              //   maxHeight: 799,
              height: '100%',
              //   minWidth: 900,
              width: '100%'
            }}
            className="justify-content-center m-auto custom-carousel"
            data-bs-theme="dark"
            interval={10000}
          >
            <Carousel.Item
              className="position-relative w-100 align-items-center gap-4"
              style={{
                minHeight: '100vh',
                zIndex: 0
              }}
            >
              {/* Background Overlay */}
              {/* <div className="image_overlay"></div> */}

              {/* Bootstrap Grid Container */}
              <Container className="position-relative p-4" style={{ zIndex: 10 }}>
                <div
                  className="p-2 mycard"
                  style={{ backgroundColor: '#fafafa', width: 'fit-content' }}
                >
                  <Row className="align-items-center justify-content-center">
                    {varieties.map((slide, index) => (
                      <Col key={index} xs={12} md={6} lg={4} xl={4} className="mb-4">
                        <ViewChild
                          index={index}
                          delay={900}
                          animateStyle={{
                            opacity: `${isVisible ? '1' : '0'}`,
                            display: 'flex',
                            margin: 'auto',
                            gap: 2,
                            transform: ` ${isVisible ? 'translateY(0px) rotateX(360deg)' : `translateY(${-100}px) rotateX(360deg)`}`,
                            transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1 * index}s`
                          }}
                        >
                          <BestSellersCard
                            productImage={slide.pic}
                            name={slide.name}
                            style={slide.style}
                            styleWidth={slide.styleWidth}
                            styleHeight={slide.styleHeight}
                          />
                        </ViewChild>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Container>
            </Carousel.Item>
          </Carousel>
        </div>
      </Col>
    </Row>
  );
};

export default BestSellers;
