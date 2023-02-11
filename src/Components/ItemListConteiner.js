import Cards from './Cards';
import "./ItemListConteiner.css";

function ItemListConteiner ({products}) {
    return(
<div className="Home">
    {products.map( unProducto => <Cards key = {unProducto.id} products = {unProducto} />)}
</div>)

};



export default ItemListConteiner;