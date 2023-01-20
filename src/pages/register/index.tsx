import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { register } from "../../store/authSlice";
import { useAppDispatch } from "../../store/config";
import "./style.css";

const Register = () => {
    
    const dispatch = useAppDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        try {
            const result = await dispatch(register({ username, password })).unwrap();
            console.log("result: ", result);
        } catch (error) {
            console.log("error: ", error);
        }
    }
    
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="register__input"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input 
                    type="button" 
                    value="CREATE"
                    className="register__button"
                    onClick={handleSubmit}
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