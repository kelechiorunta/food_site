import React from 'react';
import { Col, Image, Row, Stack } from 'react-bootstrap';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

interface Props {
  id?: any;
  delay?: any;
}
const BurgerSection: React.FC<Props> = ({ id, delay }) => {
  const { isVisible } = useViewChild(id, delay);
  return (
    <Row
      // style={{ marginTop: 150 }}
      className=" m-auto gap-0 align-items-center justify-content-center gap-0"
    >
      <Col className="align-items-center justify-content-center d-flex">
        <ViewChild
          delay={delay}
          animateStyle={{
            opacity: `${isVisible ? '1' : '0'}`,
            display: 'flex',
            margin: 'auto',
            gap: 2,
            transform: ` ${isVisible ? 'translateX(0px)' : `translateX(${-100}px)`}`,
            transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1}s`
          }}
        >
          <Stack
            className="align-items-center justify-content-center d-flex"
            style={{
              backgroundColor: ' #fafafa',
              padding: '80px 70px',
              margin: 'auto',
              color: 'black',
              minWidth: 301,
              maxHeight: 649,
              width: '100%',
              maxWidth: '62%'
            }}
            gap={0}
          >
            <h3>MOST POPULAR</h3>
            <p>
              We focus on ergonomics and meeting you where you work. It's only a keystroke away.
            </p>
            <Image
              style={{
                maxHeight: 300,
                maxWidth: 348,
                padding: 37
              }}
              src="/chips.png"
            />
            <p>English Department</p>
            <p>$6.48</p>
          </Stack>
        </ViewChild>
      </Col>

      <Col className="align-items-center justify-content-center ms-auto d-flex">
        <ViewChild
          delay={delay}
          animateStyle={{
            opacity: `${isVisible ? '1' : '0'}`,
            display: 'flex',
            margin: 'auto',
            gap: 2,
            transform: ` ${isVisible ? 'translateX(0px)' : `translateX(${100}px)`}`,
            transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1}s`
          }}
        >
          <Image
            style={{
              minHeight: 649,
              maxWidth: '80%',
              minWidth: 300,
              width: '90%',
              padding: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'inline-block',
              margin: 'auto'
            }}
            src="/burger.png"
          />
        </ViewChild>
      </Col>
    </Row>
  );
};

export default BurgerSection;
