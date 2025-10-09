import React from 'react';
import { Col, Image, NavLink, Row } from 'react-bootstrap';
import BestSellers from '../BestSellers/BestSellers';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

interface Props {
  id?: any;
  delay?: any;
}
const BestProducts: React.FC<Props> = ({ id, delay }) => {
  const { isVisible } = useViewChild(id, delay);
  return (
    <Row
      className="justify-content-center m-auto align-items-center gap-0"
      style={{
        padding: 'clamp(2rem, 3.5vw, 5.5rem)', //78px
        position: 'relative',
        height: '100%',
        overflowY: 'hidden',
        margin: 'auto',
        width: '100%'
      }}
    >
      <Col xl={8}>
        <ViewChild
          delay={900}
          animateStyle={{
            opacity: `${isVisible ? '1' : '0'}`,
            display: 'flex',
            margin: 'auto',
            gap: 2,
            transform: ` ${isVisible ? 'translateY(0px)' : `translateY(${100}px)`}`,
            transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1}s`
          }}
        >
          <Row className={'d-flex'} style={{ position: 'relative', top: 20, left: 50 }}>
            <Col
              style={{ top: -30, left: 10, position: 'absolute', overflow: 'hidden' }}
              className="d-flex align-items-center justify-content-start ms-auto gap-5"
            >
              <h1>BESTSELLERS</h1>
              <NavLink>Men</NavLink>
              <NavLink>Women</NavLink>
              <NavLink>Accessories</NavLink>
            </Col>
            <BestSellers id={id} delay={delay} />
          </Row>
        </ViewChild>
      </Col>

      {/* <Row> */}
      <Col
        // lg={12}
        style={{
          // maxHeight: 796,
          minHeight: 376,
          width: 'clamp(70%, 5.5vw, 100%)',
          height: 'clamp(50%, 3.5vw, 50%)',
          margin: 'auto'
          // marginTop: -100
          // maxWidth: 674
        }}
        className="h-30"
      >
        <Image
          src="/doughnut.jpg"
          style={{
            margin: 'auto',
            display: 'inline-block',
            objectFit: 'cover',
            objectPosition: 'center',
            width: 'clamp(70%, 5.5vw, 50%)',
            height: 'clamp(50%, 5.5vw, 50%)'
            // minWidth: 389,
            // maxWidth: 674
          }}
          className="h-10"
          // width={'clamp(10%, 5.5vw, 30%)'}
          // height={'clamp(10%, 5.5vw, 30%)'}
        />
      </Col>
    </Row>
    // </Container>
  );
};

export default BestProducts;
