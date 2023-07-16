

export const Item = ({nombre, precio, imagen}) => {
    return (
        <article>
            <div className="item__container">
                <div>
                    <img src={imagen} alt="producto" />
                </div>
                <div>
                    <div>
                        <h1>{nombre}</h1>
                    </div>
                    <div>
                        <h2>${precio}</h2>
                    </div>
                    <div>
                        <button>Ver más</button>
                    </div>
                </div>
            </div>
        </article>
    )
}