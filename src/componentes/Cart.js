import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from './CartContext';
import { Checkout } from './Checkout';

export const Cart = () => {

  const { cart, total, clear } = useContext(CartContext)

  const handleClear = () => {
    clear();
  }

  return (
    <div className='cart__container'>

      <h1 className='cart__title'>Carrito</h1>

      {
        cart.map((productos) => (
          <div className='cart__info' key={productos.id}>
            <h3>{productos.nombre}</h3>
            <p>Cantidad: {productos.quantity}</p>
            <p>Precio producto: ${productos.precio}</p>
            <p>Precio total: {productos.precio * productos.quantity}</p>
          </div>
        ))
      }

      {cart.length > 0 ?
        <div>
          <h2 className='cart__total' >Precio total: ${total()}</h2>
          <div className='cart__space'>
            <button className='cart__clear' onClick={handleClear} >Vaciar Carrito</button>
            <NavLink className="comprar" to="/Checkout" >Comprar</NavLink>
          </div>
        </div>
        :
        <h2>No tiene productos</h2>
      }


      

    </div>

  )
}