import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const { token, setLocalStorage, removeLocalStorage } = useLocalStorage()

  const handleLogin = value => {
    setLocalStorage(value)
  }

  const handleLogout = () => {
    removeLocalStorage()
  }
  return <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>{children}</AuthContext.Provider>
}
