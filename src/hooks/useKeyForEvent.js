import { useEffect } from 'react';
import React from 'react';

export function useKeyForEvent(callback,keyStr) {
  const [keyValue] = React.useState(keyStr);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === keyValue) {
        callback();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [callback,keyValue]);
} 