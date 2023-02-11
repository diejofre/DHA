import React, {useState} from 'react'
import Item from './Item';



const List = ({list}) => {
  return list.map(({producto, descripcion, precio}) =>  (
    <Item key={producto}
          producto= {producto}
          descripcion={descripcion}
          precio={precio}/>    
  ));
};

export default List;

