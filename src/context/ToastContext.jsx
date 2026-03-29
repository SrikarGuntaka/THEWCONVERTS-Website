import { createContext, useContext, useState, useCallback, useRef } from 'react'

const ToastContext = createContext(null)

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ visible: false, message: '' })
  const timerRef = useRef(null)

  const showToast = useCallback((message) => {
    clearTimeout(timerRef.current)
    setToast({ visible: true, message })
    timerRef.current = setTimeout(() => setToast(t => ({ ...t, visible: false })), 4000)
  }, [])

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className={`toast${toast.visible ? ' show' : ''}`}>
        <div className="toast-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <span>{toast.message}</span>
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}
