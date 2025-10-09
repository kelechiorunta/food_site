import React from 'react';
import { ViewChild } from '../ViewContext/ViewContext';
import CategoryList from '../CategoryList/CategoryList';

const Product: React.FC = () => {
  return (
    <div style={{ height: '100%', backgroundColor: '#fafafa' }}>
      <ViewChild id={'categoryList'} delay={700}>
        <CategoryList id={'categoryList'} />
      </ViewChild>
    </div>
  );
};

export default Product;
