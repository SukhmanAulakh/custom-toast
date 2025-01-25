import React from 'react';
import { useKeyForEvent } from '../../hooks/useKeyForEvent';

export const ToastContext = React.createContext();

function ToastProvider({children}) {

  const [toasts, setToasts] = React.useState([
      {
        id:crypto.randomUUID(),
        message:'Oh no!',
        variant:'error'
      },
      {
        id:crypto.randomUUID(),
        message:'Logged In!',
        variant:'success'
      }
    ]);
    
  function createToast(message,variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant
      }
    ];
    setToasts(nextToasts);
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });
    setToasts(nextToasts);
  }

  useKeyForEvent(() => {setToasts([])}, 'Escape');

  return (
    <ToastContext.Provider value={{toasts, createToast, handleDismiss}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
