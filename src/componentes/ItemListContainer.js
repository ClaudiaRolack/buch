import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

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

  return (
    <div>
      
      <div className="itemListContainer">
        <ItemList productos={productos} />
      </div>

    </div>
  )
}