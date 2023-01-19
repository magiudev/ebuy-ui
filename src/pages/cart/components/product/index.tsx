import "./style.css"

const ProductInCart = ({
    id, 
    name, 
    color, 
    size, 
    price, 
    image
}: {
 id: string | number;
 name: string;
 color: string;
 price: number;
 size: string | number;
 image: string;
}) => {

  return (
    <div className="product-cart__container">
        <img 
            className="product-cart__image"
            src={image}
        />
        <div className="product-cart__info-container">
            <p><b>Product: </b>{name}</p>
            <p><b>ID: </b>{id}</p>
            <div className="product-cart__color-container">
                <p><b>Color: </b></p>
                <div className="product-cart__product-color" style={{ backgroundColor: color}}></div>
            </div>
            <p><b>Size: </b>{size}</p>
            <div className="product-cart__counter-container">
                <button className="product-cart__quantity-button">-</button>
                <input type="text" name="quantity" className="product-cart__quantity-input" />
                <button className="product-cart__quantity-button">+</button>
            </div>
            <p className="product-cart__price">$ {price}</p>
        </div>
    </div>
  )
}

export default ProductInCart;