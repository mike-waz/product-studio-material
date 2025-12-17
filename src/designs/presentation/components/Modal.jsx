import { useEffect, useRef } from 'react';
import styles from './Modal.module.css';

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      modalRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      previousActiveElement.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={styles.modal}
        ref={modalRef}
        tabIndex={-1}
      >
        <div className={styles.header}>
          <h2 id="modal-title" className={styles.title}>{title}</h2>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
