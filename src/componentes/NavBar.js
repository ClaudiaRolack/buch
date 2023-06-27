
import {CartWidget} from "./CartWidget"
import logoTrans from "../images/logoTrans.png"

export const NavBar = () => {
    return (
        <div className="contenedor">
            <header className="nav">
                <div className="nav__marca">
                    <a className="nav__link" href="#"><img className="nav__logo" src={logoTrans} alt="Logo" /></a>
                </div>
                <div className="nav__contenedor">
                    <ul className="nav__lista">
                        <li>
                            <a className="nav__link" href="#">Inicio</a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">Categorías</a>
                        </li>
                        <li>
                            <a className="nav__link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget />
                </div>

            </header>
        </div>
    )
}