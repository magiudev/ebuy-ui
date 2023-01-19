import { Link } from "react-router-dom";
import "./style.css";

const CartIcon = ({numberOfCartItems}: {numberOfCartItems: number}) => {
  return (
    <Link to="/cart" className="cart-icon__container">
      <div className="cart-icon__count">{numberOfCartItems}</div>
      <span className="material-symbols-outlined">shopping_cart</span>   
    </Link>
  )
}

export default CartIcon;
