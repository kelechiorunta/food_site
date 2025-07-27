import React from 'react';
import { Image } from 'react-bootstrap';

interface VectorProps {
  vectorImg?: string;
}

const Vectors: React.FC<VectorProps> = ({ vectorImg }) => {
  return <Image className="vector_slide" src={vectorImg} width={150} height={42} alt={vectorImg} />;
};

export default Vectors;
