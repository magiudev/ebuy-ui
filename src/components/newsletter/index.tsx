import "./style.css"

const Newsletter = () => {
  return (
    <div className="newsletter__container">
        <h2 className="newsletter__title">Newsletter</h2>
        <p className="newsletter__message">Get timely updates from your favorite products</p>
        <div className="newsletter__input-container">
            <input type="text" className="newsletter__input" placeholder="Your email"/>
            <button className="newsletter__button">
                <span className="material-symbols-outlined">send</span>
            </button>
        </div>
    </div>
  )
}

export default Newsletter;