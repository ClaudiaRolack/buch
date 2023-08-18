import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "./ItemList"
import { collection, getDocs } from "firebase/firestore"
import { dataBuch } from "../firebase/data"

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [stock, setStock] = useState(0);
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    const pf1 = collection(dataBuch, "agendasYcalendarios")
    const pf2 = collection(dataBuch, "cienciasYnaturaleza")
    const pf3 = collection(dataBuch, "ficcionJuvenil")
    const pf4 = collection(dataBuch, "juegosDeMesa")
    const pf5 = collection(dataBuch, "ocioYhobbies")

    getDocs(pf1, pf2, pf3, pf4, pf5)
      .then((respuesta) => {

        setProductos(
          respuesta.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  })





  // setTimeout(() => {
  //   setCargando(false)
  // }, 4000)
  // return
  //   }, []);

  const productosEncontrados = productos.find((producto) => producto.id === parseInt(id));

  return (

    <div className="itemDetailContainer">
      {cargar ?
        ('Cargando...')
        :
        productosEncontrados ?
          (<ItemList productos={productosEncontrados} stock={stock} />)
          :
          ('Productos no encontrado')}

    </div>
  )
}