import React from 'react';
import { Col, Container, Image, NavLink, Row } from 'react-bootstrap';
import BestSellers from '../BestSellers/BestSellers';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

interface Props {
  id?: any;
  delay?: any;
}
const OtherBestProducts: React.FC<Props> = ({ id, delay }) => {
  const { isVisible } = useViewChild(id, delay);
  return (
    <Row
      className="justify-content-center align-items-center m-auto gap-0"
      style={{
        padding: 'clamp(20px, 5.5vw, 78px)',
        marginTop: 98,
        position: 'relative',
        margin: 'auto',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      <Col
        // lg={12}
        style={{
          //   maxHeight: 796,
          minHeight: 376,
          width: '100%',
          height: '100%',
          margin: 'auto',
          marginBottom: 50
          //   maxHeight: 796,
          //   minHeight: 376,
          //   width: '90%',
          //   height: '100%'
          // maxWidth: 674
        }}
      >
        <Image
          src="/cards.jpg"
          style={{
            margin: 'auto',
            display: 'inline-block',
            objectFit: 'cover',
            objectPosition: 'center',
            width: '80%'
            // minWidth: 389,
            // maxWidth: 674
          }}
        />
        {/* </ViewChild> */}
      </Col>

      <Col xl={8}>
        <ViewChild
          delay={900}
          animateStyle={{
            opacity: `${isVisible ? '1' : '0'}`,
            display: 'flex',
            margin: 'auto',
            gap: 2,
            transform: ` ${isVisible ? 'translateY(0px) rotateY(360deg)' : `translateY(${100}px) rotateY(60deg)`}`,
            transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1}s`
          }}
        >
          <Row className={'d-flex w-100'} style={{ position: 'relative', top: 20, left: 50 }}>
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

      {/* <Col xl={8}>
        <ViewChild
          delay={delay}
          animateStyle={{
            opacity: `${isVisible ? '1' : '0'}`,
            display: 'flex',
            margin: 'auto',
            gap: 2,
            transform: ` ${isVisible ? 'translateY(0px)' : `translateY(${100}px)`}`,
            transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1}s`
          }}
        >
          <Row
            className={'d-flex'}
            style={{ position: 'relative', top: 20, left: 50, overflowX: 'hidden' }}
          >
            <Col className="d-flex align-items-center justify-content-start gap-5 ms-auto">
              <h1>BESTSELLERS</h1>
              <NavLink>Men</NavLink>
              <NavLink>Women</NavLink>
              <NavLink>Accessories</NavLink>
            </Col>
          </Row>
          <BestSellers />
        </ViewChild>
      </Col> */}
    </Row>
  );
};

export default OtherBestProducts;
