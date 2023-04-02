import React from 'react';

const DisplaySection = () => {
  const topHandler = () => {};

  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        Display that's up to 2x brighter in sun.
      </span>
      <button className="button">Try me!</button>
      <button className="back-button">TOP</button>
    </div>
  );
};

export default DisplaySection;
