import React from "react"
import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [stock, setStock] = useState(0);

  useEffect(() => {
    try {
        const fetchProduct = async () => {
        const response = await fetch('../../productos.json')
        const jsonData = await response.json()
        setProductos(jsonData)
        setStock(jsonData[0].stock);
      }
      fetchProduct()
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <div>
      
      <div className="itemListContainer">
        <ItemList productos={productos} stock={stock} />
      </div>

    </div>
  )
}