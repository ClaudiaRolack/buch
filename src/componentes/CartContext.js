import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const cartLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

const [cart, setCart] = useState(cartLocalStorage);

function addCart (producto, quantity) {

    const productoAgregado = {...producto, quantity};
    const newCart = [...cart];
    const isInCart = newCart.find((producto) => producto.id === productoAgregado.id);
    
    if (isInCart) {
        isInCart.quantity += quantity;
    } else {
        newCart.push(productoAgregado);    
    }
    setCart(newCart);
}

const cartQuantity = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
}

const total = () => {
    return cart.reduce((acc, prod) => acc + prod.precio * prod.quantity, 0);
}

const clear = () => {
    setCart([]);
}

useEffect (() => {
    localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])

    return (

        <CartContext.Provider value={{

           addCart,
           cartQuantity,
           cart,
           total,
           clear

        }}>
            {children}
        </CartContext.Provider>
    )

}