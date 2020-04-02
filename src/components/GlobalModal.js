import React, { useState, useEffect } from 'react';

const Dialog = require('react-a11y-dialog');

const GlobalModal = ({ setGlobalModalRef }) => {
  return (
    <Dialog
      id='global-dialog'
      appRoot='#main'
      dialogRoot='#dialog-root'
      dialogRef={dialogReference => setGlobalModalRef(() => dialogReference)}
      title='Global Dialog'
    >
      <p>I am a singleton dialog.</p>
    </Dialog>
  );
};

export default GlobalModal;
