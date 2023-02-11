import { Link } from "react-router-dom";
import "./Cards.css";




function  Cards ({products}) {


    return (
        <div className="Cards-style">
        <img className="Cards-img" src={products.foto} alt="Foto"/>  
        <h2 className=".Cards-txt">{products.titulo}</h2>
        <em className=".Cards-txt">Desde ${products.precio}.-</em>
        <h3 className=".Cards-txt">{products.fecha}</h3>
        <Link to= {`${products.titulo}`}>
            <button className="Cards-button">Ver mas</button>
        </Link>
        </div>
    )
};



export default Cards;


