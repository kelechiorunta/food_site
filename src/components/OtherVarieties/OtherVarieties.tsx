import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BestSellersCard from '../BestSellersCard/BestSellersCard';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

const varieties = [
  { name: 'Variety', style: 'Elements Style', pic: '/jug.png', styleWidth: 200, styleHeight: 300 },
  {
    name: 'Variety',
    style: 'Elements Style',
    pic: '/cover.png',
    styleWidth: 200,
    styleHeight: 300
  },
  {
    name: 'Variety',
    style: 'Elements Style',
    pic: '/bleach.png',
    styleWidth: 200,
    styleHeight: 300
  },
  {
    name: 'Variety',
    style: 'Elements Style',
    pic: '/werther.png',
    styleWidth: 200,
    styleHeight: 300
  }
];

interface Props {
  id?: any;
  delay?: any;
}

const OtherVarieties: React.FC<Props> = ({ id, delay }) => {
  const { isVisible } = useViewChild(id, delay);
  return (
    <Container
      fluid
      style={{
        maxWidth: 1440,
        height: '100%',
        width: '100%',
        backgroundColor: '#fafafa' //' #fafafa'
      }}
      className="justify-content-lg-center"
    >
      <Row
        style={{
          maxWidth: 1084,
          padding: '100px 10px',
          backgroundColor: '#fafafa', //' #ffffff',
          height: '100%',
          width: '100%',
          borderRadius: 20
        }}
        className="justify-content-center m-auto h-100 w-100 align-items-center d-flex gap-4"
      >
        {varieties.map((variety, index) => (
          <Col key={index} className="mb-4">
            <ViewChild
              index={index}
              delay={delay}
              animateStyle={{
                opacity: `${isVisible ? '1' : '0'}`,
                display: 'flex',
                transformStyle: 'preserve-3d',
                perspective: 100,
                transform: ` ${isVisible ? 'translateX(0px) rotateX(360deg)' : `translateX(${100}px) rotateX(30deg)`}`,
                transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1 * index}s`
              }}
            >
              <BestSellersCard
                key={index}
                style={variety.style}
                name={variety.name}
                productImage={variety.pic}
                styleWidth={variety.styleWidth}
                styleHeight={variety.styleHeight}
              />
            </ViewChild>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OtherVarieties;
