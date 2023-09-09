import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/HomePage/Home';
import About from './Components/About/About';
import Shop from './Components/Shop/Shop';
import Contact from './Components/Contact/Contact';
import Cart from './Components/Cart/Cart';
import { CartItemContext } from './Components/Cart/CartItemsContext';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {

  const [item, setItem] = useState({});

  return (
    <div className="App">
      {/* HomePage */}
      <Navbar/>
      <CartItemContext.Provider value={{ item, setItem }}>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/about"} element={<About/>}/>
          <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/shop"} element={<Shop/>}/>
            <Route path={"/cart"} element={<Cart/>}/>
        </Routes>
      </CartItemContext.Provider>
      {/* HomePage */}
    </div>
  );
}

export default App;
