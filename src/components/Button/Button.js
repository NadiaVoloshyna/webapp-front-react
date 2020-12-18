import React from 'react';
import './Button.css';

const Button = ({ onClick, title }) => {
    return (
      <button onClick={onClick} className="Button">{title}</button>
    );
  };

  export default Button;

