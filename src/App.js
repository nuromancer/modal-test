import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import IntermediateComponent from './components/IntermediateComponent';
import ModalContext from './datasharing/ModalContext';
import GlobalModal from './components/GlobalModal';

function App() {
  const [globalModalRef, setGlobalModalRef] = useState(null);

  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={logo}
          className='App-logo'
          alt='logo'
          width='200px'
          height='200px'
        />
        <ModalContext.Provider value={globalModalRef}>
          <IntermediateComponent />
        </ModalContext.Provider>
      </header>

      <GlobalModal setGlobalModalRef={setGlobalModalRef} />
      <div id='main'></div>
      <div id='dialog-root'></div>
    </div>
  );
}

export default App;
