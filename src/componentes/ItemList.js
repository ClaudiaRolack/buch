import React from 'react'
import { Item } from "./Item"


export const ItemList = ({ productos, categoria }) => {
    return (
        <div className="itemList">
            {productos.map((producto) => (
                <Item key={producto.id} categoria={categoria} producto={producto} />
            ))}
        </div>
    )
}