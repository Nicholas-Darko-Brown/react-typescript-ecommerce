import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Store from './pages/Store';
import StoreDetails from './pages/StoreDetails';

const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Header />
          <Routes>
            <Route path='/about' element={<About />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='product/details/:id' element={<StoreDetails />}></Route>
            <Route path='/store/product/details/:id' element={<StoreDetails />}></Route>
            <Route path='/store' element={<Store />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        <Footer />
      </Router>
    </ShoppingCartProvider>
  );
}

export default App;
