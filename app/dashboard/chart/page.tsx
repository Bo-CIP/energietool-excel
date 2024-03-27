"use client";
import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

export default function Page() {
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      createRoot(rootElement!).render(<App />);
    }
  }, []);

  return <div id="root"></div>;
}