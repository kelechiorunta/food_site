import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import DeliverySection from '../DeliverySection/DeliverySection';
import EasyToUse from '../EasyToUse/EasyToUse';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

const cards = [
  { imageNo: '/1..png', title: 'Easy To Use', description: 'Happy To Serve You' },
  { imageNo: '/2..png', title: 'Easy To Use', description: 'Need Prem Service' },
  { imageNo: '/3..png', title: 'Easy To Use', description: 'Subscribe Today' },
  { imageNo: '/4..png', title: 'Easy To Use', description: 'Get The Best Offer' }
];
interface popularProps {
  id?: any;
  delay?: number;
}
const MostPopular: React.FC<popularProps> = ({ id, delay }) => {
  const { isVisible } = useViewChild(id, 500);
  return (
    <Container
      style={{
        maxWidth: 1440,
        minHeight: 886,
        height: '100%',
        padding: '48px 96px',
        marginBottom: 400
      }}
      className="justify-content-center d-flex flex-column m-auto align-items-center gap-4"
      fluid
    >
      <ViewChild
        delay={500}
        animateStyle={{
          opacity: `${isVisible ? '1' : '0'}`,
          display: 'flex',
          transform: ` ${isVisible ? 'translateY(0px)' : `translateY(${100}px)`}`,
          transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1}s`
        }}
      >
        <DeliverySection />
      </ViewChild>

      <Row
        gap={1}
        style={{ width: 1075, margin: 'auto', marginTop: 50 }}
        className="w-100 justify-content-center align-items-center d-flex"
      >
        {cards.map((card, index) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ViewChild
              delay={delay}
              index={index}
              animateStyle={{
                opacity: `${isVisible ? '1' : '0'}`,
                margin: 'auto',
                display: 'flex',
                transform: ` ${isVisible ? 'translateX(0px)' : `translateX(${100}px)`}`,
                transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${index * 0.1}s`
              }}
            >
              <EasyToUse
                key={index}
                imageNo={card.imageNo}
                title={card.title}
                description={card.description}
              />
            </ViewChild>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MostPopular;
