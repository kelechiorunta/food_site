import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

interface EasyProps {
  imageNo?: string;
  title?: string;
  description?: string;
}
const EasyToUse: React.FC<EasyProps> = ({ imageNo, title, description }) => {
  return (
    <Row
      style={{
        minWidth: 265,
        minHeight: 111,
        width: '100%',
        height: '100%',
        padding: 25,
        marginBottom: 4
      }}
      className="d-flex w-100"
    >
      <Col style={{ padding: 'auto', display: 'inline-block' }}>
        <Image src={imageNo} width={40} height={40} />
      </Col>
      <Col style={{ padding: 'auto' }}>
        <p style={{ fontSize: 14 }} className="fw-bold">
          {title}
        </p>
        <p className="muted">{description}</p>
      </Col>
    </Row>
  );
};

export default EasyToUse;
