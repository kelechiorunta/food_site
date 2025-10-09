import React from 'react';
import { Col, Image, Stack } from 'react-bootstrap';

interface ProductCardProps {
  name?: string;
  style?: string;
  productImage?: string;
  styleWidth?: number;
  styleHeight?: number;
}

const BestSellersCard: React.FC<ProductCardProps> = ({
  name,
  style,
  productImage,
  styleWidth,
  styleHeight
}) => {
  return (
    <Stack
      direction="horizontal"
      gap={4}
      className="p-4 m-auto sellers_card"
      style={{
        maxWidth: styleWidth ? styleWidth : 332,
        maxHeight: styleHeight ? styleHeight : 232,
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: 20,
        backgroundColor: 'white',
        color: 'black',
        paddingRight: 8,
        overflow: 'hidden',
        margin: 'auto',
        // border: '1px solid rgba(0, 0, 0, 0.5)',
        boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.1)',
        flexDirection: styleWidth || name === 'Variety' ? 'column' : 'row'
      }}
    >
      <Col>
        <Image
          style={{
            margin: 'auto',
            marginTop: name === 'Your Space' ? -5 : 'auto',
            objectFit: 'cover',
            objectPosition: name === 'Your Space' ? '0 15px' : name === 'Variety' ? 'center' : -30
          }}
          src={productImage}
          width={'100%'}
          height={'90%'}
        />
      </Col>
      <Col
        //   style={{ position: 'absolute', left: 20 }}
        className="d-flex flex-column gap-4 align-items-center"
      >
        {/* <p>{name}</p>         */}
        <h5
          className="fw-bold"
          style={{
            fontSize: 14,
            width: '90%',
            marginTop: name === 'Your Space' ? 32 : name === 'Variety' ? -20 : 'auto'
          }}
        >
          {style}
        </h5>
        {name === 'Variety' && (
          <div style={{ marginTop: -20 }}>
            <p style={{ fontSize: 12 }}>English Department</p>
            <p>$6.48</p>
          </div>
        )}
        {/* <NavLink>Explore Items</NavLink>         */}
      </Col>
    </Stack>
  );
};

export default BestSellersCard;
