// Post.jsx
// import './Posts.scss';
import React from 'react';
import { Card, Badge, Row, Col, NavLink, Image } from 'react-bootstrap';
// import { BsClock, BsBarChart } from 'react-icons/bs';

interface PostProps {
  image?: any;
  tag?: any;
  tags?: any;
  title?: any;
  description?: any;
  date?: any;
  comments?: any;
}

const Posts: React.FC<PostProps> = ({ image, tag, tags, title, description, date, comments }) => {
  return (
    <Card style={{ width: '100%' }} className="shadow-sm mb-4 post_card featured_post">
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={image} />
        {tag && (
          <Badge bg="danger" className="position-absolute top-0 start-0 m-2">
            {tag}
          </Badge>
        )}
      </div>

      <Card.Body>
        {/* Tags */}
        <div className="d-flex flex-wrap gap-2 mb-2 text-muted small justify-content-lg-start">
          {tags.map((t: any, index: any) => (
            <span key={index} className="text-primary fw-semibold">
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <Card.Title className="d-flex justify-content-lg-start">{title}</Card.Title>

        {/* Description */}
        <Card.Text
          style={{ textAlign: 'left' }}
          className="text-muted d-flex justify-content-lg-start w-100"
        >
          {description}
        </Card.Text>

        {/* Meta: Date & Comments */}
        <Row className="text-muted small mb-3 d-flex justify-content-lg-start w-100">
          <Col className="d-flex align-items-center gap-1 justify-content-lg-start">
            <Image src={'/clock.png'} />
            <span>{date}</span>
          </Col>
          <Col className="d-flex align-items-center gap-1 justify-content-lg-end">
            <Image src={'/bar_chart.png'} />
            <span>{comments} comments</span>
          </Col>
        </Row>

        {/* Link */}
        <NavLink
          href="#"
          className="fw-semibold gap-2 text-decoration-none align-items-center justify-content-lg-start m-auto d-flex"
        >
          Learn More
          <Image src="/r_arrow.png" />
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default Posts;
