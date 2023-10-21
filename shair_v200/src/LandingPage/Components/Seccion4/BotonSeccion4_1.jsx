import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './BotonSeccion4_1.css';

function BotonSeccion4_1() {
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
          <a href="#">Visitar catálogo</a>
        </Button>
      </div>
    </>
  );
}

export default BotonSeccion4_1;