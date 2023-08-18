import React, { useContext } from 'react';
import { CartContext } from './CartContext';

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
          <button className='cart__clear' onClick={handleClear} >Vaciar Carrito</button>
        </div>
        :
        <h2>No tiene productos</h2>
      }

    </div>

  )
}