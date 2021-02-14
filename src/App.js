import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import DodajNovi from './pages/DodajNovi';
import Home from './pages/Home'
import Korisnici from './pages/Korisnici'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route path="/korisnici" component={Korisnici} />
    <Route path="/dodajnovi" component={DodajNovi} />
    
     
    </BrowserRouter>
  );
}

export default App;
