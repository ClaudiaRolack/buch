import React from 'react'
import { useState } from 'react'
import signomenos from "../images/signomenos.png"
import signomas from "../images/signomas.png"

export const ItemCount = ({ stock }) => {

    let [contador, setContador] = useState(1)

    function handleSumar() { if (contador < stock) {setContador(contador + 1)} }
    function handleRestar() { if (contador > 1) { setContador(contador - 1) } }

    return (

        <div className='boton__agregar'>

            <div className='control'>

                <button className='boton__imagen' onClick={handleRestar}>
                    <img src={signomenos} alt="signomenos" />
                </button>

                <p>{contador}</p>

                <button className='boton__imagen' onClick={handleSumar}>
                    <img src={signomas} alt="signomas" />
                </button>

            </div>

            <div>

                <button className='agregar__carrito'>
                    Agregar al carrito
                </button>

            </div>

        </div>


    )
}