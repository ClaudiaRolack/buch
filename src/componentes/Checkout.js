import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";

export const Checkout = () => {

    const { cart, total, clear } = useContext(CartContext);
    const navigate = useNavigate();

    const [error, setError] = useState("")
    const [info, setInfo] = useState({
        email: "",
        telefono: "",
        nombre: "",
        apellido: "",
        calle: "",
        nuDeCasa: "",
        region: "",
        comuna: ""
    });

    const handleInfo = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const todoCompleto =
        info.email !== "" &&
        info.telefono !== "" &&
        info.nombre !== "" &&
        info.apellido !== "" &&
        info.calle !== "" &&
        info.nuDeCasa !== "" &&
        info.region !== "" &&
        info.comuna !== "";

        if (!todoCompleto) {
            setError("Todos los campos deben ser completados");
        } else {
            setError("");
            clear();
            navigate('/Order')
        }
    };

    return (
        <div className="checkout__container">

            <div>
                {error && <div className="error-message">{error}</div>}
            </div>

            <div>
                <form className="checkout__form" onSubmit={handleSubmit}>

                    <h2>Datos personales</h2>

                    <div>
                        <input type="email" placeholder="E-mail" value={info.email} name="email" onChange={handleInfo} />
                        <input type="text" placeholder="telefono" value={info.telefono} name="telefono" onChange={handleInfo} />
                    </div>

                    <div>
                        <input type="text" placeholder="Nombre" value={info.nombre} name="nombre" onChange={handleInfo} />
                        <input type="text" placeholder="Apellido" value={info.apellido} name="apellido" onChange={handleInfo} />
                    </div>

                    <div>
                        <input type="text" placeholder="Calle" value={info.calle} name="calle" onChange={handleInfo} />
                        <input type="text" placeholder="Número de casa" value={info.nuDeCasa} name="nuDeCasa" onChange={handleInfo} />
                    </div>

                    <div>
                        <input type="text" placeholder="Región" value={info.region} name="region" onChange={handleInfo} />
                        <input type="text" placeholder="Comuna" value={info.comuna} name="comuna" onChange={handleInfo} />
                    </div>

                    <button className="checkout__finalizar" type="submit">Finalizar Compra</button> 
                
                </form>
            </div>

            <div>
                {
                    cart.map((productos) => (
                        <div className='cart__info' key={productos.id}>
                            <h3>{productos.nombre}</h3>
                            <p>Cantidad: {productos.quantity}</p>
                            <p>Precio producto: ${productos.precio}</p>
                            <p>Precio total: {productos.precio * productos.quantity}</p>
                            <h2 className='cart__total' >Precio total: ${total()}</h2>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}