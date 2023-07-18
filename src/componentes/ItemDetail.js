import React from 'react'
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({ producto }) => {
    return (
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
                    <ItemCount stock={producto.stock} />
                    </div>

                </div>

            </div>
        </article>
    )
}