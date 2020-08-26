import React from 'react';
import ReactDOM from 'react-dom';

export default function Modal({ selectedImage, setSelectedImage }) {
  function handleClick() {
    setSelectedImage(null);
  }

  return ReactDOM.createPortal(
    <div className="backdrop" onClick={handleClick}>
      <img onClick={(e) => e.stopPropagation()} src={selectedImage} alt="img" />
    </div>, document.getElementById('modal'),
  );
}
