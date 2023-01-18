import { Link } from "react-router-dom";
import "./style.css";

const CartIcon = () => {
  return (
    <Link to="/cart" className="cart-icon__container">
      <div className="cart-icon__count">200</div>
      <span className="material-symbols-outlined">shopping_cart</span>   
    </Link>
  )
}

export default CartIcon;
