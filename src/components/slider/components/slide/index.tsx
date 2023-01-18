import { Link } from "react-router-dom";
import "./style.css";

const Slide = ({
  img,
  backgroundColor,
  title,
  description,
}: {
  img: string;
  title: string;
  backgroundColor: string;
  description: string;
}) => {
  return (
    <div className="slide__container" style={{background: backgroundColor}}>
      <div className="slide__image-container">
        <picture className="slide__picture">
          <source srcSet={img} media="(min-width: 600px)"/>
          <img src="" className="slide__image"/>
        </picture>
      </div>
      <div className="slide__info-container">
        <p className="slide__title">{title}</p>
        <p>{description}</p>
        <Link to="/products"><button className="slide__button">SHOP NOW</button></Link>
      </div>
    </div>
  )
}

export default Slide;