import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: [0]
})


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState ([0])

    const calculateTotalQuantity = (cartItems) => {
        let total = 0;
        for (const item of cartItems) {
            total += item.qty;
        }
        return total;
    };

    const addItem = (item, qty) => {

        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { ...item, qty }])
        } else {
            console.error('El producto ya fue agregado')
        }
    };

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(producto => producto.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(producto => producto.id === itemId)
    }

    useEffect(() => {
        const newTotalQuantity = calculateTotalQuantity(cart);
        setTotalQuantity(newTotalQuantity);
    }, [cart]);



    return (

        <CartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            clearCart,
            totalQuantity

        }}>
            {children}
        </CartContext.Provider>
    )

}