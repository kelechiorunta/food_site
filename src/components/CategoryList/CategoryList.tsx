import React from 'react';
import { Col, Container, NavLink, Row } from 'react-bootstrap';
import CategoryCard from '../CategoryCard/CategoryCard';
import { useViewChild, ViewChild } from '../ViewContext/ViewContext';

const categories = [
  { title: 'GROCERIES', category: 'Fruits', quantity: 3, categoryImg: '/groceryII.png' },
  { title: 'GROCERIES', category: 'Meats', quantity: 3, categoryImg: '/groceryIII.png' },
  { title: 'GROCERIES', category: 'Creams', quantity: 3, categoryImg: '/groceryI.png' }
];

interface Props {
  id?: any;
  delay?: any;
}

const CategoryList: React.FC<Props> = ({ id, delay }) => {
  const { isVisible } = useViewChild(id, delay);
  return (
    <Container
      style={{
        padding: 176,
        maxWidth: 1048,
        // maxHeight: 223,
        height: '100%',
        width: '100%',
        backgroundColor: '#fafafa'
        // minWidth: 300
      }}
      fluid
      className="p-5 m-auto my-5 d-flex flex-column"
    >
      <Row
        style={{
          maxWidth: 1040,
          width: '100%',
          marginTop: 30,
          marginBottom: 30
          //   border: '1px solid black'
        }}
        className="align-items-center d-flex"
      >
        <Col style={{ width: '100%' }}>
          <h3 style={{ width: '100%', textAlign: 'left' }} className="fw-bolder m-auto">
            Shop
          </h3>
        </Col>
        <Col style={{ width: '100%' }}>
          <NavLink>
            <p style={{ width: '100%', textAlign: 'right' }} className="m-auto">
              Home
            </p>
          </NavLink>
        </Col>
      </Row>
      <Row style={{ width: '100%' }} className="align-items-center">
        {categories.map((list, index) => (
          <Col
            key={index}
            style={{ minWidth: 223, width: '100%' }}
            className="justify-content-center m-auto"
          >
            <ViewChild
              index={index}
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
              <CategoryCard {...list} />
            </ViewChild>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryList;
