import React from 'react';
import { Card, CardImg, Image } from 'react-bootstrap';

interface Props {
  title?: string;
  category?: string;
  quantity?: number;
  categoryImg?: string;
}

const CategoryCard: React.FC<Props> = ({ title, category, categoryImg, quantity }) => {
  return (
    <Card style={{ minHeight: 205, width: '100%' }} className="rounded-2 category_card">
      <Card.Body>
        <Card.Img variant="top" src={categoryImg} />

        <Card.ImgOverlay
          className="d-flex flex-column justify-content-center align-items-center"
          color="white"
          style={{ color: 'white', backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
        >
          <Card.Title>
            <h2 className="mb-4">{title}</h2>
          </Card.Title>
          <Card.Subtitle>
            <h4>{category}</h4>
          </Card.Subtitle>
          <Card.Text>{quantity} items</Card.Text>
        </Card.ImgOverlay>
      </Card.Body>
    </Card>
  );
};
export default CategoryCard;
