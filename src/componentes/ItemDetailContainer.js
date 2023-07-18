import React from "react"
import { ItemDetail } from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargar, setCargar] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        try {
            const fetchProduct = async () => {
                const response = await fetch('../../productos.json')
                const jsonData = await response.json()
                setProductos(jsonData)
                setTimeout(() => {
                    setCargar(false)
                }, 4000)
                return (jsonData)
            }
            fetchProduct()
        } catch (error) {
            console.log(error)
        }
    }, []);

    const productoEncontrado = productos.find((producto) => producto.id === parseInt(id));

    return (
        <div className="itemDetailContainer">
            {cargar ?
                ('Cargando...')
                :
                productoEncontrado ?
                    (<ItemDetail producto={productoEncontrado} />)
                    :
                    ('Producto no encontrado')}

        </div>
    )
}