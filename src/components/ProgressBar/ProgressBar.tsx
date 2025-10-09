import React from 'react';

interface ProgressBarProps {
  styles?: any;
  value?: any;
}
const ProgressBar: React.FC<ProgressBarProps> = ({ styles, value }) => {
  return (
    <progress value={value} color="#55b9f3" style={{ width: '100%', height: 10, ...styles }} />
  );
};

export default ProgressBar;
