import "./style.css";
import Navbar from "../../components/navbar";
import Newsletter from "../../components/newsletter";
import Footer from "../../components/footer";
import ProductInCart from "./components/product";
import { Link } from "react-router-dom";
import { productsInCart } from "../../content";

const Cart = () => {
  return (
    <>
        <Navbar />
        <div className="cart-page__container">
            <h2 className="cart-page__title">YOUR BAG</h2>
            <Link to="/products" className="cart-page__button cart-page__button--light">CONTINUE SHOPPING</Link>
            <div className="cart-page__top-links-container">
                <p className="cart-page__link">Shopping Bag (2)</p>
                <p className="cart-page__link">Your Wishlist (0)</p>
            </div>
            <button className="cart-page__button cart-page__button--danger">EMPTY CART</button>
            <div className="cart-page__products-container">
                {
                    productsInCart.map(({id, name, color, size, price, image}) => (
                        <ProductInCart 
                            key={id}
                            id={id}
                            name={name}
                            color={color}
                            size={size}
                            price={price}
                            image={image}
                        />
                    ))
                }
            </div>
            <div className="cart-page__order-summary-container">
                <p className="cart-page__order-summary-title">ORDER SUMMARY</p>
                <div className="cart-page__order-summary-group">
                    <p>Subtotal</p>
                    <p>$ 80</p>
                </div>
                <div className="cart-page__order-summary-group">
                    <p>Shipping Cost</p>
                    <p>$ 4</p>
                </div>
                <div className="cart-page__order-summary-group">
                    <p>Discount</p>
                    <p>$ 5</p>
                </div>
                <div className="cart-page__order-summary-group">
                    <p className="cart-page__order-total-text">Total</p>
                    <p className="cart-page__order-total-amount">$ 70</p>
                </div>
                <button className="cart-page__button cart-page__button--dark">CHECKOUT NOW</button>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </>
  )
};

export default Cart;