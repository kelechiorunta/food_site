import React from 'react';
import { Col, Image, NavLink, Stack } from 'react-bootstrap';

interface ProductCardProps {
  name?: string;
  style?: string;
  productImage?: string;
  styleWidth?: number;
  styleHeight?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
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
      className="p-4 product_card"
      style={{
        width: styleWidth ? styleWidth : 332,
        height: styleHeight ? styleHeight : 232,
        position: 'relative',
        borderRadius: 20,
        // backgroundColor: ' rgba(25, 0, 0, 0.2)',
        paddingRight: 8,
        overflow: 'hidden',
        // border: '1px solid rgba(0, 0, 0, 0.5)',
        boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Col
        style={{ position: 'absolute', left: 20 }}
        className="d-flex flex-column gap-4 align-items-lg-start"
      >
        <p>{name}</p>
        <h5 style={{ fontSize: 24, width: '90%' }}>{style}</h5>
        <NavLink>Explore Items</NavLink>
      </Col>
      <Col style={{ marginLeft: 20 }}>
        <Image
          style={{
            marginLeft: 16,
            objectFit: 'cover',
            objectPosition: name === 'Your Space' ? 60 : 20
          }}
          src={productImage}
          width={'100%'}
          height={'90%'}
        />
      </Col>
    </Stack>
  );
};

export default ProductCard;
