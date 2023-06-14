import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ImageController({ imageSize, onResize }) {
  const handleResize = (direction) => {
    onResize(direction);
  };

  return (
    <div>
      <div
        className="resizable-image"
        style={{ width: imageSize.width, height: imageSize.height }}
      >
        {/* Aquí puedes poner la imagen que deseas editar */}
      </div>
      <div className="resize-handles">
        <div className="resize-handle top-left" onClick={() => handleResize('top-left')} />
        <div className="resize-handle top" onClick={() => handleResize('top')} />
        <div className="resize-handle top-right" onClick={() => handleResize('top-right')} />
        <div className="resize-handle left" onClick={() => handleResize('left')} />
        <div className="resize-handle right" onClick={() => handleResize('right')} />
        <div className="resize-handle bottom-left" onClick={() => handleResize('bottom-left')} />
        <div className="resize-handle bottom" onClick={() => handleResize('bottom')} />
        <div className="resize-handle bottom-right" onClick={() => handleResize('bottom-right')} />
      </div>
    </div>
  );
}

ImageController.propTypes = {
  imageSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  onResize: PropTypes.func.isRequired,
};

export default ImageController;
