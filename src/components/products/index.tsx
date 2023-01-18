import { Link } from "react-router-dom";
import { popularProducts } from "../../content";
import Product from "./components/product";
import "./style.css";

const Products = () => {
  return (
    <div className="products__container">
        {
            popularProducts.map(({id, image}) => (
              <Link
                to="/product"
                key={id}
              >
                <Product image={image} />
              </Link>
            ))
        }
    </div>
  )
}

export default Products;