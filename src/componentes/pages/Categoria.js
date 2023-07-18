import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Item } from '../Item';

export const Categoria = () => {
    const [productos, setProductos] = useState ([])
    const {id} = useParams()
  
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
    }, []);

    const productosCategorias = productos.filter((e) => e.categoria == id.nombre)
  
    return (
      <div className='categorias'>
        {productosCategorias.map((e) =>{
          return (<Item key={e.id} producto={e} />)
        })}

      </div>
    );
  }