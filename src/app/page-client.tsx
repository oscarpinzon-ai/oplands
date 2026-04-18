'use client';

import { useEffect } from 'react';

export function LoadLotsScript() {
  useEffect(() => {
    // Load lots data from public/data/lots.js
    const script = document.createElement('script');
    script.src = '/data/lots.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
}
