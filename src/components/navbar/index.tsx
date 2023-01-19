import { Link } from "react-router-dom";
import { useState } from "react";
import CartIcon from "./components/cartIcon";
import Burger from "./components/burger";
import "./style.css";

const Navbar = ({ numberOfCartItems = 0}: { numberOfCartItems?: number}) => {

    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);

    return (
        <div className={`navbar__container ${ open ? "navbar--open" : "" }`}>
            <Link to="/" className="navbar__logo"><h1>EBUY</h1></Link> 
            <Burger handleClick={handleClick} />
            <Link to="/register" className="navbar__register navbar__link">REGISTER</Link>
            <Link to="#" className="navbar__login navbar__link">LOG IN</Link>
            <div className="navbar__cart"><CartIcon numberOfCartItems={numberOfCartItems} /></div>
        </div>
    )
}

export default Navbar;
