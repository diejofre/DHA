import React from "react";

const Item = ({producto,descripcion,precio}) => {
    return (
        <li>
            <strong>{producto}</strong>
        </li>
    );
};
export default Item;

