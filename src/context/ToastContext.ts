// edifitech-graphql/src/context/ToastContext.ts

import { createContext, useContext } from 'react'

type ToastContextType = {
  success: (msg: string) => void
  error: (msg: string) => void
  info: (msg: string) => void
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined)

export const useToast = (): ToastContextType => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast debe usarse dentro de ToastProvider')
  return ctx
}
