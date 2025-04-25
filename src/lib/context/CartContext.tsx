'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';

// Define the product type
export type CartProduct = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  vendor: string;
  category: string;
  quantity: number;
};

// Define the cart context type
type CartContextType = {
  cartItems: CartProduct[];
  addToCart: (product: Omit<CartProduct, 'quantity'>, quantity?: number) => void;
  removeFromCart: (productId: number | string) => void;
  updateQuantity: (productId: number | string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize cart state with empty array to prevent hydration mismatch
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Only run on client-side to prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    const storedCart = localStorage.getItem('artisanal-cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error('Failed to parse cart from localStorage:', error);
      }
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem('artisanal-cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isInitialized]);

  // Calculate cart count and total only after component is mounted
  const cartCount = isMounted ? cartItems.reduce((total, item) => total + item.quantity, 0) : 0;
  const cartTotal = isMounted ? cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) : 0;

  // Add a product to the cart
  const addToCart = (product: Omit<CartProduct, 'quantity'>, quantity = 1) => {
    setCartItems(prevItems => {
      // Check if the product is already in the cart
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

      if (existingItemIndex >= 0) {
        // Update quantity if product already exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        toast.success(`Updated quantity for ${product.name}`);
        return updatedItems;
      } else {
        // Add new product to cart
        toast.success(`Added ${product.name} to cart`);
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId: number | string) => {
    setCartItems(prevItems => {
      const itemToRemove = prevItems.find(item => item.id === productId);
      if (itemToRemove) {
        toast.success(`Removed ${itemToRemove.name} from cart`);
      }
      return prevItems.filter(item => item.id !== productId);
    });
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId: number | string, quantity: number) => {
    if (quantity < 1) return;

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
    toast.success('Cart cleared');
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Export the CartProvider component
export { CartProvider };

// Create a hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
