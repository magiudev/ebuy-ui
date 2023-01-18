import { Link } from "react-router-dom";
import { categories } from "../../../../content";
import "./style.css";

const Categories = () => {
  return (
    <div className="categories__container">
        {
            categories.map(category => (
                <Link 
                    key={category.id}
                    to="/products"
                    className="category__container"
                >
                    <div className="category__info">
                        <p className="category__title">{category.title}</p>
                        <button className="category__button">SHOP NOW</button>
                    </div>
                    <img src={category.image} className="category__image" />
                </Link>
            ))

        }
    </div>
  )
}

export default Categories;