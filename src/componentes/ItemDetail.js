import React from 'react'
import { ItemCount } from "./ItemCount"

export const ItemDetail = ({producto}) => {
    return (
        <article>
            <div className="itemDetail">
                <div>
                    <img src={producto.imagen} alt="producto" />
                </div>
                <div>
                    <div>
                        <h1>{producto.nombre}</h1>
                        <h2>Categoria:{producto.categoria}</h2>
                        <h2>Stock:{producto.stock}</h2>
                    </div>
                    <div>
                        <h2>${producto.precio}</h2>
                    </div>
                    <div>
                        <ItemCount />
                    </div>
                    <div>
                        <button>Agregar a carrito</button>
                        <button>Comprar ahora</button>
                    </div>
                </div>
            </div>
        </article>
    )
}