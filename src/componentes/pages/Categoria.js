import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import { Item } from '../Item'

export const Categoria = () => {

    const [productos, setProductos] = useState ([])
    const {categoria} = useParams()
  
    useEffect(() => {
      try {
        const fetchProduct = async () => {
          const response = await fetch('../../productos.json')
          const jsonData = await response.json()
          setProductos(jsonData)
        }
        fetchProduct()
      } catch (error) {
        console.log(error)
      }
    }, [])

    const productosCategoria = categoria ? productos.filter((producto) => producto.categoria.url === categoria) : productos
  
    return (

      <div className='categorias'>
        {productosCategoria.map((productoCategoria) =>{
          return (<Item key={productoCategoria.nombre} producto={productoCategoria} />)
        })}

      </div>
    )
  }