import React from 'react'
import carritoTrans from "../images/carritoTrans.png"

export const CartWidget = () => {
    const itemCount = 5
    return (
        
        <div className="carrito">

            <div className="circulo">
                <span className="carrito__numero">{itemCount}</span>
            </div>

            <a className="carrito__link" href="#"><img className="carrito__img" src={carritoTrans} alt="dibujoCarrito" /></a>
            
        </div>
    )
}