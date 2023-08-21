import React from "react"
import { ItemDetail } from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"


export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    const [cargar, setCargar] = useState(true)
    const { id, categoria } = useParams()

    useEffect(() => {
        if (id) {
            const docRef = doc(db, categoria, id); 
      
            getDoc(docRef)
              .then((documento) => {
                if (documento.exists()) {
                  setProducto({ id: documento.id, ...documento.data() });
                } else {
                  console.log("Documento no encontrado");
                }
                setCargar(false);
              })
              .catch(e => console.log(e));
          }
    }, [id, categoria]);

    return (
        <div className="itemDetailContainer">
            {cargar ?
                ('Cargando...')
                :
                producto ?
                    (<ItemDetail producto={producto} />)
                    :
                    ('Producto no encontrado')}

        </div>
    )
}