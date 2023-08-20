import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [stock, setStock] = useState(0);
  const [cargar, setCargar] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    const pf1 = collection(db, "productos");
 
    getDocs(pf1)
      .then((resp) => {
        setTimeout(() => {
          setCargar(false)
        }, 4000)
        return
      })

  })

  const productosEncontrados = productos.find((producto) => producto.id === parseInt(id));

  return (

    <div className="itemDetailContainer">
      {cargar ?
        ('cargando...')
        :
        productosEncontrados ?
          (<ItemList productos={productosEncontrados} stock={stock} />)
          :
          ('Productos no encontrado')}

    </div>
  )
}


   


  // const pf2 = collection(dataBuch, "cienciasYnaturaleza");
  // const pf3 = collection(dataBuch, "ficcionJuvenil");
  // const pf4 = collection(dataBuch, "juegosDeMesa");
  // const pf5 = collection(dataBuch, "ocioYhobbies");