import React from 'react';
import Navbar from './componentes/Navbar';
import RouteList from './componentes/ListaRutas';
import RouteForm from './componentes/FormularioRutas';
import './App.css'

function App () {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar />
      </div>
      <RouteList />
      <RouteForm />
    </div>
  );
}

export default App;
