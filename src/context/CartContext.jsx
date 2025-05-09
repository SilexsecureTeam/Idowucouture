import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      // Ensure product has required fields and qty
      const productToAdd = {
        ...product,
        qty: product.qty && !isNaN(product.qty) ? product.qty : 1, // Default to 1 if qty is missing or invalid
        color: product.color || 'default', // Default color if not provided
      };

      // Check if the product (same id and color) already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === productToAdd.id && item.color === productToAdd.color
      );

      if (existingItemIndex >= 0) {
        // Update existing item's quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          qty: updatedCart[existingItemIndex].qty + productToAdd.qty, // Add the new quantity
        };
        return updatedCart;
      } else {
        // Add new item to cart
        return [...prevCart, productToAdd];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQty = (id, change) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + change) } // Prevent quantity from going below 1
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;