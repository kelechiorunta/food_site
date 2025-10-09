import React from 'react';
import { Button } from 'react-bootstrap';

interface CTAButtonProps {
  title?: string;
  handleClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ title, handleClick }) => {
  return (
    <div style={{ zIndex: 100 }}>
      <Button
        style={{
          maxHeight: '62px',
          maxWidth: '304px',
          width: 'clamp(40%, 3.5vw, 100%)',
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          padding: '15px 40px'
          //   minWidth: '124px'
        }}
        variant="primary"
        onClick={handleClick}
      >
        {title}
      </Button>
    </div>
  );
};

export default CTAButton;
