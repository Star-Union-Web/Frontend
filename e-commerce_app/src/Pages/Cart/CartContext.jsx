import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const addToCart = (id, price , name , img) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: {
                count: (prevCart[id]?.count || 0) + 1,
                price: price,
                name: name,
                img: img,
            },
        }));
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[id]?.count > 0) {
                updatedCart[id].count -= 1;
                if (updatedCart[id].count === 0) delete updatedCart[id];
            }
            return updatedCart;
        });
    };

    const getTotalCartAmount = () => {
        return Object.values(cart).reduce(
            (total, item) => total + item.count * item.price,
            0
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, getTotalCartAmount }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
