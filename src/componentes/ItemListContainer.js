import React from "react"
import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config"
import { allCategories } from "../utils/allCategories"

export const ItemListContainer = ({categoria}) => {

  const [productos, setProductos] = useState([])
  const [stock, setStock] = useState(0);
  const [cargar, setCargar] = useState(true)

  useEffect(() => {
    
    if (categoria) {
      const pf1 = collection(db, categoria);
      getDocs(pf1)
      .then((resp) => {
        const data = resp.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCargar(false)
        setProductos(data)
      })
      .catch(e => console.log(e))
    } else {
    allCategories()
      .then(resp => {
        setProductos(resp)
        setCargar(false)
      })
      .catch(e => console.log(e));
    }
  }, [categoria])

  return (

    <div className="itemDetailContainer">
      {cargar ?
        ('cargando...')
        : productos ? 
        (<ItemList productos={productos} stock={stock} categoria={categoria} />)
        : 'no encontrados' }

    </div>
  )
}