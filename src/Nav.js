import { Link } from "react-router-dom";
import './nav-style.css'

const Nav = (props) => {
  return (
    <nav className = 'nav'>
      <h1>Logo</h1>
      <ul>
        <li><Link to = "/">Home</Link></li>
        <li><Link to = "shop">Shop</Link></li>
        <li onClick = {props.flip}>Cart</li>
      </ul>
    </nav>
  );
};

export default Nav;