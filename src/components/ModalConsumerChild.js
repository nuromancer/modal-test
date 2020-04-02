import React, { useState, useEffect, useContext } from 'react';

import ModalContext from '../datasharing/ModalContext';

const ModalConsumerChild = ({ id }) => {
  const [showButton, setShowButton] = useState(false);

  const globalModalRef = useContext(ModalContext);

  useEffect(() => {
    setTimeout(() => {
      setShowButton(true);
      console.log('show button');
    }, 1000);
  }, []);

  return (
    <div>
      <h3>{id} (Context API)</h3>
      <button
        type='button'
        className='Button'
        onClick={() => globalModalRef.show()}
      >
        Open via Context API Ref
      </button>
      <button
        type='button'
        className='Button'
        data-a11y-dialog-show='global-dialog'
      >
        Open via id
      </button>
      <br></br>
      {showButton && (
        <>
          <button
            type='button'
            className='Button'
            onClick={() => globalModalRef.show()}
          >
            Open via Context API Ref 1 second later
          </button>
          <button
            type='button'
            className='Button'
            data-a11y-dialog-show='global-dialog'
          >
            Open via id 1 second later
          </button>
        </>
      )}
    </div>
  );
};

export default ModalConsumerChild;
