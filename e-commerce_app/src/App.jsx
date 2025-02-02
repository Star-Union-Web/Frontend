import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import AOS from  "aos";
import "aos/dist/aos.css";
import Footer from './components/Footer/Footer';
import Shop from './Pages/Shop/Shop';
import { CartProvider } from './Pages/Cart/CartContext';
import SkinCare from './Pages/SkinCare/SkinCare';

const App = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    }),
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <CartProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/skincare' element={<SkinCare />} />
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  )
}

export default App
