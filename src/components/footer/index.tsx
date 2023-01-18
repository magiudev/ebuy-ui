import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer__container">
        <div className="footer__info-container">
            <p className="footer__logo">EBUY</p>
            <p className="footer__message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut eveniet ullam odit impedit libero est animi quas, minima doloremque eius similique ab, eos distinctio harum maiores provident unde quasi.
            </p>
            <div className="footer__social-container">
                <a 
                    href="https://wa.me/35699783123?text=Hi!%20I%20came%20from%20Ebuy" 
                    target="_blank"
                    className="footer__link"
                >
                    <img 
                        className="footer__social-icon" 
                        src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                    />
                </a>
                <img className="footer__social-icon" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" />
                <img className="footer__social-icon" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" />
            </div>
        </div>
        <div className="footer__useful-container">
            <p className="footer__title">Useful links</p>
            <ul className="footer__list">
                <li><Link to="/" className="footer__link">Home</Link></li>
                <li ><Link to="/cart" className="footer__link">Cart</Link></li>
                <li ><Link to="/products" className="footer__link">Products</Link></li>
                <li>Man Fashion</li>
                <li>Woman Fashion</li>
                <li>Accessories</li>
                <li>My Account</li>
                <li>Order Tracking</li>
                <li>Wishlist</li>
                <li>Terms</li>
            </ul>
        </div>
        <div className="footer__contact-container">
            <p className="footer__title">Contact</p>
            <ul className="footer__list">
                <li>
                    <span className="material-symbols-outlined">mail</span>
                    <a 
                        className="footer__link"
                        href="mailto:magiudev@gmail.com"
                        target="_blank"
                    >
                        magiudev@gmail.com
                    </a>
                </li>
                <li>
                   <span className="material-symbols-outlined">location_on</span>
                   <a 
                        href="https://goo.gl/maps/oDKUmz8uUJwa44ss8"
                        className="footer__link"
                        target="_blank"
                    >
                    Esperanto Street, Msida, Malta
                   </a>
                </li>
                <li>
                <span className="material-symbols-outlined">call</span>
                (+ 356) 9978 3123
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer;