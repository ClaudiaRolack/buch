import React from 'react'
import { NavLink } from 'react-router-dom'

export const Item = ({ producto }) => {

    return (
       
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
                    <div>
                        <button className='item__verdetalle'>
                           <NavLink className="verdetalle__link" to={`/ver-detalle/${producto.id}`}>Ver más</NavLink> 
                        </button>
                    </div>
                </div>
            </div>
        
    )
}