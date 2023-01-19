import "./style.css";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Newsletter from "../../components/newsletter";

const Product = () => {
  return (
    <>
        <Navbar />
        <div className="product-page__product-container">
            <div className="product-page__image-container">
              <img 
                className="product-page__image"
                src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" 
              />
            </div>
            <div className="product-page__product-info-container">
                <h2 className="product-page__title">Product Name</h2>
                <p className="product-page__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus dolorum nulla sit at eum molestiae asperiores magnam autem quidem, accusamus praesentium officia architecto assumenda deleniti voluptas aperiam animi totam sequi</p>
                <p className="product-page__price">$ 20</p>
                <div className="product-page__size-container">
                  <p>Size: </p>
                  <select className="product-page__select-button" name="size">
                    <option disabled>Size</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                  </select>
                </div>
                <div className="product-page__color-container">
                  <p>Color: </p>
                  <div className="product-page__color-option" style={{ backgroundColor: "white", border: "1px solid"}}></div>
                  <div className="product-page__color-option" style={{ backgroundColor: "black"}}></div>
                  <div className="product-page__color-option" style={{ backgroundColor: "gray"}}></div>
                </div>
                <div className="product-page__count-container">
                    <button className="product-page__quantity-button">-</button>
                    <input type="text" className="product-page__count" />
                    <button className="product-page__quantity-button">+</button>
                </div>
                <button className="product-page__add-button">
                  ADD TO CART
                  <span className="material-symbols-outlined">add_shopping_cart</span> 
                </button>
            </div>
        </div>
        <Newsletter />
        <Footer />
    </>
  )
}

export default Product;