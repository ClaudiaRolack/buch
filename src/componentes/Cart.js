import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { CartWidget } from './CartWidget';

export const Cart = () => {

  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>Su carrito esta vacío</h1>
        <Link to='/categorias/:categoria' className='#'>Productos</Link>
      </div>
    )
  }

  return (
    <div className="cart">
      {cart.map(p => <CartWidget key={p.id} {...p} />)}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className='limpiarCarrito'>Limpiar Carrito</button>
      <Link to='/checkout' className='checkout'>Checkout</Link>
    </div>
  )
}

