import {Link} from 'react-router';
import styles from './NavBar.module.css';

const Navbar = ({quantity}) => {
    return (
        <nav>
            <Link to='/'><img src="https://www.svgrepo.com/show/474358/merchant-shop.svg" alt="" /></Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop"> Shop</Link>
                </li>
            </ul>
            <ul>
                <li className={styles.count}> 
                    <Link to="/cart">Cart
                        <div>{quantity}</div>
                    </Link>
                </li>
                {/* <li>About</li>
                <li>Contact Us</li> */}
            </ul>
        </nav>
    )
}
export default Navbar;