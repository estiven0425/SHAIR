import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './BotonSeccion4.css';

function BotonSeccion4() {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div className="mb-2">
        <Button
          variant="primary"
          size="lg"
          style={{
            backgroundColor: isClicked ? '#8e4c98' : '#fdb23b',
            borderColor: isClicked ? '#8e4c98' : '#fdb23b',
            transform: isClicked ? 'scale(1.1)' : 'scale(1.0)',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <a href="#">Anunciarte</a>
        </Button>
      </div>
    </>
  );
}

export default BotonSeccion4;