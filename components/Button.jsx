// components/Button.js
import React from 'react';

const Button = ({ children, backgroundColor, borderColor, hasBorder }) => {
  const styles = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    border: hasBorder ? '1px solid' : 'none',
    ':hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <button style={styles}>
      {children}
    </button>
  );
};

export default Button;