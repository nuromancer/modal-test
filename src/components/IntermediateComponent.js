import React from 'react';
import LocalModal from './LocalModal';
import ModalConsumerChild from './ModalConsumerChild';

const IntermediateComponent = () => {
  return (
    <>
      <LocalModal modalId='local-dialog-1' />
      <LocalModal modalId='local-dialog-2' />
      <ModalConsumerChild id='Context API Consumer 1' />
      <ModalConsumerChild id='Context API Consumer 2' />
    </>
  );
};

export default IntermediateComponent;
