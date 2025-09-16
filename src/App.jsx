import { useState } from 'react';
import './App.css'
import { Link, Outlet } from 'react-router';

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>
            <Link to="/shop"> Shop</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <Outlet context={[cartItems, setCartItems]}/>
    </div>
  );
}

export default App
