import React from 'react';
import Context from './Context';
import './App.css';
import RoutesController from './Componets/RoutesController';

function App() {
  return (
    <Context>

      <RoutesController/>
      
    </Context>
  );
}

export default App;
