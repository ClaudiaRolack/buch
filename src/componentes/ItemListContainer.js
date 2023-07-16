import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    try {
      const fetchProduct = async() => {
        const response = await fetch('../../productos.json')
        const jsonData = await response.json()
        console.log(jsonData)
      }
      fetchProduct()
    } catch(error) {
      console.log(error)
    }
  }, []);

  return (
    <div>
      {productos.map ((producto) => {return (<p key={producto.id}>{producto.nombre}</p>)})}
    </div>
  )
}

{/* <ItemList productos={productos} /> */}