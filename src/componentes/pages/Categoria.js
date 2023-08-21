import React from 'react';
import { useParams } from "react-router-dom";
import { ItemListContainer } from '../ItemListContainer';

export const Categoria = () => {
    const {categoria} = useParams()

    return (
      <div className='categorias'>
        <ItemListContainer categoria={categoria}/>
      </div>
    )
  }
