import "./style.css";

const Product = ({image}: {image: string}) => {
  return (
    <div className="product__container">
      <img src={image} className="product__image" />
      <div className="product__icons-container">
          {/* <div className="product__icon-wrapper"><span className="material-symbols-outlined">favorite</span></div> */}
          <div className="product__icon-wrapper"><span className="material-symbols-outlined">search</span></div>
          {/* <div className="product__icon-wrapper"><span className="material-symbols-outlined">add_shopping_cart</span></div> */}
      </div>
    </div>
  )
}

export default Product;