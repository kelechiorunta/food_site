import './VectorSection.scss';
import React from 'react';
import Vectors from '../Vectors/Vectors';

const vectors = [
  { vectorImg: '/vector_1.png' },
  { vectorImg: '/vector_2.png' },
  { vectorImg: '/vector_3.png' },
  { vectorImg: '/vector_4.png' },
  { vectorImg: '/vector_5.png' },
  { vectorImg: '/vector_6.png' }
];

const VectorSection: React.FC = () => {
  return (
    <div className="vector-wrapper">
      <div className="vector-slider">
        {[...vectors, ...vectors].map((vector, index) => (
          <Vectors key={index} vectorImg={vector.vectorImg} />
        ))}
      </div>
    </div>
  );
};

export default VectorSection;
