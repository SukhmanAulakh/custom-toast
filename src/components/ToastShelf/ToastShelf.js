import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}
        role="region"
        aria-live="polite"
        aria-label="Notification">
      {toasts.map(toast => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} handleDismiss={handleDismiss} id={toast.id}>{toast.message}</Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
