import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { CartProvider } from './CartContext'


export const ItemDetail = ({ producto, addItem }) => {

    const [qty, setQty] = useState(0)

    const handleOnAdd = (cantidad) => {
        setQty(cantidad)

        const item = {
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio
        }

        addItem(item, cantidad)
    }



    return (
        <CartProvider>
        <article>
            <div className="itemDetail">

                <div className='itemDetail__imagen'>
                    <img src={producto.imagen} alt="producto" />
                </div>

                <div className='ItemDetail__info'>

                    <div className='info1'>
                        <h1>{producto.nombre}</h1>
                    </div>

                    <div className='info2'>
                        <h2>Categoría: {producto.categoria.nombre}</h2>
                        <h2>Stock: {producto.stock}</h2>
                    </div>

                    <div className='info3'>
                        <h2>${producto.precio}</h2>
                    </div>

                    <div className='info4'>

                        {qty > 0 ? (
                            <Link to='./Cart' className="option">Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={producto.stock} handleOnAdd={addItem} />
                        )
                        }

                    </div>

                </div>

            </div>
        </article>
        </CartProvider>
    )
}