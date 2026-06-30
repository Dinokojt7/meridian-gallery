"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "meridian.cart";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [toast, setToast] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch (e) {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {}
  }, [items, hydrated]);

  const addItem = useCallback((artwork) => {
    setItems((prev) => [...prev, { id: artwork.id, title: artwork.title, price: artwork.price }]);
    setToast({ title: artwork.title });
    window.clearTimeout(addItem._t);
    addItem._t = window.setTimeout(() => setToast(null), 2200);
  }, []);

  return (
    <CartContext.Provider value={{ items, count: items.length, addItem, toast }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
