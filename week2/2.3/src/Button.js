import React, { useState } from 'react';

const Button = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>Number of Clicks: {clicks}</p>
    </div>
  );
};

export default Button;