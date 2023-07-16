import { ItemCount } from "./ItemCount"

export const ItemDetail = ({categoria, nombre, precio, imagen, stock}) => {
    return (
        <article>
            <div className="item__container">
                <div>
                    <img src={imagen} alt="producto" />
                </div>
                <div>
                    <div>
                        <h1>{nombre}</h1>
                        <h2>Categoria:{categoria}</h2>
                        <h2>Stock:{stock}</h2>
                    </div>
                    <div>
                        <h2>${precio}</h2>
                    </div>
                    <div>
                        <ItemCount />
                    </div>
                    <div>
                        <button>Agregar a carrito</button>
                        <button>Comprar ahora</button>
                    </div>
                </div>
            </div>
        </article>
    )
}