import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import carritoTrans from "../images/carritoTrans.png"

export const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext);

    return (

        <div className="carrito">

            <Link to='/cart' className='carrito' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
                <img className="carrito__img" src={carritoTrans} alt="dibujoCarrito" />
                <span className="carrito__numero">{totalQuantity}</span>
            </Link>

        </div>

    )
}