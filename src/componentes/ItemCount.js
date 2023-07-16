import {useState} from 'react'

export const ItemCount = () => {

    let [contador, setContador] = useState(1)

    function handleSumar () {setContador(contador + 1)}
    function handleRestar () {if (contador > 1) {setContador(contador - 1)}}

    return (

        <div>
            <p>{contador}</p>
            <button onClick={handleSumar}>agregar</button>
            <button onClick={handleRestar}>quitar</button>
        </div>
    
    )
}