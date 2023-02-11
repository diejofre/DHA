import "./NavBar.css";
import Cartwidget from "./CartWidget";
import { Route, Routes, Link } from "react-router-dom";
import List from "./List";

function NavBar () {
    return (
        <div className="nabvar-conteiner"> 
                <Link to="/Home">
                <img src="http://latangente.com.ar/wp-content/uploads/2017/09/logo-tngnt-180px-72-dpi.png" alt="Foto"/>
                </Link>          
                <Link to="/Programacion">
                    <h2>Programacion</h2>
                </Link>
                <Link to="/El lugar">
                    <h2>El lugar</h2>
                </Link>
                <Link to="/Contacto">
                    <h2>Contacto</h2>
                </Link>
                <Link to="/Cartwidget">
                    <Cartwidget/>    
                </Link>   
            
        </div>
    )
};

export default NavBar










{/* <link to="/programacion"><h2>Programacion</h2></link> */}
     
{/*             <li className="nabvar-button"><h2>Programacion</h2></li>
            <li className="nabvar-button"><h2>El lugar</h2></li>
            <li className="nabvar-button"><h2>Contacto</h2></li> */}