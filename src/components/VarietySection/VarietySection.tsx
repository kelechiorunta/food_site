import './VarietySection.scss';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

const varieties = [
  { name: 'Your Space', style: 'Unique Life', pic: '/groceryIV.png' },
  { name: 'Ends Today', style: 'Elements Style', pic: '/groceryII.png' },
  { name: 'Ends Today', style: 'Elements Style', pic: '/groceryIII.png' }
];

interface varietyProps {
  id?: any;
}

const VarietySection: React.FC<varietyProps> = ({ id }) => {
  const { isVisible } = useViewChild(id, 600);
  return (
    <Container
      fluid
      style={{
        minHeight: 392,
        maxWidth: 1440,
        height: '100%',
        width: '100%',
        backgroundColor: ' #fafafa'
      }}
      className="justify-content-center m-auto"
    >
      <Row
        style={{
          maxWidth: 1084,
          padding: '100px 10px',
          backgroundColor: ' #ffffff',
          height: 392,
          width: '100%',
          borderRadius: 20,
          color: 'black'
          //   display: 'flex'
        }}
        className="justify-content-center m-auto h-100 w-100 align-items-center d-flex gap-2"
      >
        {varieties.map((variety, index) => (
          <Col
            style={{ minWidth: 300, width: '100%' }}
            key={index}
            className="justify-content-center m-auto"
          >
            <ViewChild
              delay={900}
              index={index}
              animateStyle={{
                opacity: `${isVisible ? '1' : '0'}`,
                display: 'flex',
                margin: 'auto',
                gap: 2,
                transform: ` ${isVisible ? 'translateY(0px)' : `translateY(${100 * index}px)`}`,
                transition: `opacity ${1}s ease ${index * 0.1}s, transform ${1}s ease ${index * 0.1}s`
              }}
            >
              {/* //   <Col> */}
              <ProductCard
                key={index}
                style={variety.style}
                name={variety.name}
                productImage={variety.pic}
              />
              {/* //   </Col> */}
            </ViewChild>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VarietySection;
