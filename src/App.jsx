import { useState } from 'react';
import './App.css'
import { Link, Outlet } from 'react-router';
import NavBar from './components/NavBar';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <NavBar />
      <Outlet context={[cartItems, setCartItems]}/>
    </>
  );
}

export default App
