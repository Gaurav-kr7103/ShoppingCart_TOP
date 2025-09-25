import { useState } from 'react';
import './App.css'
import { Link, Outlet } from 'react-router';
import NavBar from './components/NavBar';
// import styles from './components/NavBar.module.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      <NavBar quantity={cartItems.length}/>
      <Outlet context={[cartItems, setCartItems]}/>
    </>
  );
}

export default App
