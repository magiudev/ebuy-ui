import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectNumberOfCartItems } from "../../../../store/cartSlice";
import "./style.css";

const CartIcon = () => {

  const numberOfCartItems = useSelector(selectNumberOfCartItems);

  return (
    <Link to="/cart" className="cart-icon__container">
      <div className="cart-icon__count">{numberOfCartItems}</div>
      <span className="material-symbols-outlined">shopping_cart</span>   
    </Link>
  )
}

export default CartIcon;
