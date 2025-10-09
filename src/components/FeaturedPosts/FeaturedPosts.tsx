import './FeaturedPosts.scss';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Posts from '../Posts/Posts';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

const posts = [
  {
    image: '/post_1.png',
    tag: 'NEW',
    tags: ['Google', 'Trending', 'New'],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: 10
  },
  {
    image: '/post_2.png',
    tag: 'NEW',
    tags: ['Google', 'Trending', 'New'],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: 10
  },
  {
    image: '/post_3.png',
    tag: 'NEW',
    tags: ['Google', 'Trending', 'New'],
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: '22 April 2021',
    comments: 10
  }
  // Add more post objects here
];

interface Props {
  id?: any;
  delay?: any;
}
const FeaturedPosts: React.FC<Props> = ({ id, delay }) => {
  const { isVisible } = useViewChild(id, delay);
  return (
    <Container className="d-flex flex-column gap-4" fluid>
      <h6>Practice Advice</h6>
      <h2 className="fw-bold">Featured Posts</h2>

      <Row className="align-items-center justify-content-center m-auto">
        {posts.map((post, index) => (
          <Col md={6} lg={4} key={index}>
            <ViewChild
              index={index}
              delay={delay}
              animateStyle={{
                opacity: `${isVisible ? '1' : '0'}`,
                display: 'flex',
                margin: 'auto',
                gap: 2,
                transform: ` ${isVisible ? 'translateX(0px) rotateX(360deg)' : `translateX(${100}px) rotateY(360deg)`}`,
                transition: `opacity ${1}s ease ${0.1}s, transform ${1}s ease ${0.1 * index}s`
              }}
            >
              <Posts {...post} />
            </ViewChild>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedPosts;
