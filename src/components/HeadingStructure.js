// HeadingStructure.js
import React from 'react';
import '../styles/HeadingStructure.css'; // Styling for the heading component

const HeadingStructure = ({ imageOfName: ImageOfName, name, cardCount, AddIcon, MenuIcon }) => {
  return (
    <div className="heading-structure-container">
      <ImageOfName className="image-heading-structure" />

      <span className="name-heading-structure">{name}</span>

      <span className="card-count-heading-structure">{cardCount}</span>

      <AddIcon className="add-icon-heading-structure" />

      <MenuIcon className="menu-icon-heading-structure" />
    </div>
  );
};

export default HeadingStructure;
