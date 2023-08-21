import React, { useContext, useState } from 'react'
import signomenos from "../images/signomenos.png"
import signomas from "../images/signomas.png"
import { CartContext } from './CartContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ItemCount = ({ stock, producto }) => {

    const { addCart } = useContext(CartContext);
   
    const [quantity, setQuantity] = useState(1);

    function handleSumar() { if (quantity < stock) {setQuantity(quantity + 1)}}
    function handleRestar() { if (quantity > 1) {setQuantity(quantity - 1)}}

    const notify = () => toast("Producto agregado");
 
    return (

        <div className='boton__agregar'>

            <div className='control'>

                <button className='boton__imagen' onClick={handleRestar}>
                    <img src={signomenos} alt="signomenos" />
                </button>

                <p>{quantity}</p>

                <button className='boton__imagen' onClick={handleSumar}>
                    <img src={signomas} alt="signomas" />
                </button>

            </div>

            <div>

                <button className='agregar__carrito' onClick={() => {addCart(producto, quantity); notify();}} >
                    Agregar al carrito
                </button>
                <ToastContainer />

            </div>

        </div>

    )
}
