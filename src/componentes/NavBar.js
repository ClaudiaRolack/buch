import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartWidget } from "./CartWidget"
import logoTrans from "../images/logoTrans.png"

export const NavBar = () => {

    return (

        <div className="contenedor">
            <header className="contenedor__nav">
                <div className="nav__marca">
                    <NavLink to="/" className="nav__link" href="#"><img className="nav__logo" src={logoTrans} alt="Logo" /></NavLink>
                </div>
                <div className="nav">

                    <ul className="list">

                        <li className="list__item">
                            <NavLink className="nav__link" to="/">Inicio</NavLink>
                        </li>

                        <li className="list__item list__item--click">

                            <div className="list__button list__button--click">

                                <NavLink className="nav__link" to="/categorias">Categorías</NavLink>

                                <ul className="list__show">

                                    <li className="list__inside">
                                        <NavLink className="nav__link nav__link--inside" to="/categorias/AgendasYCalendarios">Agendas y Calendarios</NavLink>
                                    </li>

                                    <li className="list__inside">
                                        <NavLink className="nav__link nav__link--inside" to="/categorias/CienciasYNaturaleza">Ciencias y Naturaleza</NavLink>
                                    </li>

                                    <li className="list__inside">
                                        <NavLink className="nav__link nav__link--inside" to="/categorias/FiccionJuvenil">Ficción Juvenil</NavLink>
                                    </li>

                                    <li className="list__inside">
                                        <NavLink className="nav__link nav__link--inside" to="/categorias/JuegosDeMesa">Juegos de mesa</NavLink>
                                    </li>

                                    <li className="list__inside">
                                        <NavLink className="nav__link nav__link--inside" to="/categorias/OcioYHobbies">Ocio y Hobbies</NavLink>
                                    </li>

                                    <li className="list__inside">
                                        <NavLink className="nav__link nav__link--inside" to="/categorias">Ver todo</NavLink>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className="list__item">
                            <NavLink className="nav__link" to="/contacto">Contacto</NavLink>
                        </li>

                    </ul>

                </div>
                <div className="contenedor__carrito">
                    <CartWidget />
                </div>

            </header>
        </div>
    )
}