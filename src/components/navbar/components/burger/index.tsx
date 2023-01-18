import "./style.css";

const Burger = ({handleClick}: {handleClick: () => void}) => {

    return (
        <div className="burger__container" onClick={handleClick}>
            <div className="burger"></div>
        </div>
    );
}

export default Burger