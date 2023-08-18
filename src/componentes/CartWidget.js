import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import carritoTrans from "../images/carritoTrans.png"
import { CartContext } from './CartContext';

export const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext);

    return (

        <div className="carrito">

            <Link to='/cart' className='carrito' >
                <img className="carrito__img" src={carritoTrans} alt="dibujoCarrito" />
                <span className="carrito__numero">{cartQuantity()}</span>
            </Link>

        </div>

    )
}