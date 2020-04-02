import React, { useState, useEffect } from 'react';

const Dialog = require('react-a11y-dialog');

const MyComponent = ({ modalId }) => {
  const [modalRef, setModalRef] = useState(null);

  const handleClick = () => {
    modalRef.show();
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
      console.log('show button');
    }, 1000);
  }, []);

  return (
    <div>
      <h3>{modalId}</h3>
      <button type='button' className='Button' onClick={handleClick}>
        Open via ref
      </button>
      <button type='button' className='Button' data-a11y-dialog-show={modalId}>
        Open via id
      </button>
      <br></br>
      {showButton && (
        <>
          <button type='button' className='Button' onClick={handleClick}>
            Open via ref 1 second later
          </button>
          <button
            type='button'
            className='Button'
            data-a11y-dialog-show={modalId}
          >
            Open via id 1 second later
          </button>
        </>
      )}
      <Dialog
        id={modalId}
        appRoot='#main'
        dialogRoot='#dialog-root'
        dialogRef={dialogReference => setModalRef(() => dialogReference)}
        title={`Local Dialog: ${modalId}`}
      >
        <p>I exist locally in this component.</p>
      </Dialog>
    </div>
  );
};

export default MyComponent;
