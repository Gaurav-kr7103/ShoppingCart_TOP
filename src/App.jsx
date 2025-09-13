import { useState } from 'react'
import './App.css'

import { Shop } from './pages/Shop';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
        </ul>
        <ul>
          <li>Cart</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <Shop />
    </div>
  );
}

export default App
