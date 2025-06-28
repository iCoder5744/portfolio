// lib/LoaderContext.js
'use client';
import { createContext, useContext, useState } from 'react';

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
}
