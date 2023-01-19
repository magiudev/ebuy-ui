import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Product from "../pages/product";
import Register from "../pages/register";
import store from "../store/config";
import ScrollToTop from "./scrollTop";

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Provider>

    </BrowserRouter>
  )
}

export default Router;