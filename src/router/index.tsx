import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Register from "../pages/register";
import ScrollToTop from "./scrollTop";

const Router = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;