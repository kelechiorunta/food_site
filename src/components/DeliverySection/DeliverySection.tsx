import React from 'react';
import { Col, Image, Row, Stack } from 'react-bootstrap';

const DeliverySection: React.FC = () => {
  return (
    <Row style={{ marginTop: 'auto' }} className=" m-sm-auto gap-0">
      <Col className="align-items-center justify-content-center m-sm-auto d-flex">
        <Image
          className="m-auto"
          style={{
            minHeight: 649,
            maxWidth: 674,
            minWidth: 300,
            width: '100%',
            height: '100%',
            padding: 'auto',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'inline-block',
            margin: 'auto'
          }}
          src="/delivery.png"
        />
      </Col>

      <Col className="align-items-center justify-content-center d-flex">
        <Stack
          className="align-items-center justify-content-center d-flex"
          style={{
            backgroundColor: ' #fafafa',
            padding: '80px 30px',
            margin: 'auto',
            minWidth: 401,
            minHeight: 649,
            width: '100%',
            maxWidth: '100%',
            color: 'black'
          }}
          gap={0}
        >
          <h3>MOST POPULAR</h3>
          <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
          <Image
            style={{
              maxHeight: 300,
              maxWidth: 348,
              width: '100%',
              padding: 37
            }}
            src="/delivery_food.png"
          />
          <p>English Department</p>
          <p>$6.48</p>
        </Stack>
      </Col>
    </Row>
  );
};

export default DeliverySection;
