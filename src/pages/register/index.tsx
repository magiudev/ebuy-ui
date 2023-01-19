import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./style.css";

const Register = () => {
  return (
    <>
        <Navbar />
        <div className="register__container">
            <form className="register__form">
                <h2 className="register__title">CREATE AN ACCOUNT</h2>
                <div className="register__input-group">
                    <input 
                        type="text" 
                        placeholder="Username" 
                        className="register__input"
                        name="username"
                    />
                    <input 
                        type="email" 
                        placeholder="email" 
                        className="register__input"
                        name="email"
                    />
                </div>
                <div className="register__input-group">
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="register__input"
                        name="password"
                    />
                    <input 
                        type="password" 
                        placeholder="Password Confirmation" 
                        className="register__input"
                        name="password-confirmation"
                    />
                </div>
                <input 
                    type="button" 
                    value="CREATE"
                    className="register__button"
                />
                <p className="register__text">
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
                </p>
                <p className="register__text">
                    Do you already have an account? <Link to="#" className="register__link">LOG IN</Link>
                </p>
            </form>
        </div>
        <Footer />
    </>

  )
}

export default Register