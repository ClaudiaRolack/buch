import React from 'react'

export const Item = ({producto}) => {

    return (
        <article>
            <div className="item__container">
                <div className='item__imagen'>
                    <img src={producto.imagen} alt="producto" />
                </div>
                <div className='item__info'>
                    <div className='item__nombre'>
                        <h1>{producto.nombre}</h1>
                    </div>
                    <div className='item__precio'>
                        <h2>${producto.precio}</h2>
                    </div>
                    <div className='item__verdetalle'>
                        <button>Ver más</button>
                    </div>
                </div>
            </div>
        </article>
    )
}