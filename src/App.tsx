import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Store from './pages/Store';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Header />
          <Routes>
            <Route path='/store' element={<Store />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
