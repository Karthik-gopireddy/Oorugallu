import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const updateQuantity = (name, quantity) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => {
        if (item.name === name) {
          return { ...item, quantity: Math.max(0, item.quantity + quantity) };
        }
        return item;
      }).filter(item => item.quantity > 0);
      return updatedCart;
    });
  };

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (name) => {
    setCart(prevCart => prevCart.filter(item => item.name !== name));
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider; // This is your default export
