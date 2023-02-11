
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Descripcion = (products) => {
    let {titulo} = useParams();

return (
    <div>
    <img className="Cards-img" src={products.foto} alt="Foto"/>  
    <h2 className=".Cards-txt">{products.titulo}</h2>
    <em className=".Cards-txt">Desde ${products.precio}.-</em>
    <h3 className=".Cards-txt">{products.fecha}</h3>
    </div>
  )
}

export default Descripcion