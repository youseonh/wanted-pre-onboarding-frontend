import { useState, useEffect } from 'react'

export default function useLocalStorage() {
  const key = 'token'
  const [token, setToken] = useState(() => {
    localStorage.getItem(key)
  })

  useEffect(() => {
    setToken(localStorage.getItem(key))
  }, [token])

  const setLocalStorage = value => {
    setToken(value)
    localStorage.setItem(key, value)
  }

  const removeLocalStorage = () => {
    setToken(null)
    localStorage.removeItem(key)
  }

  return { token, setLocalStorage, removeLocalStorage }
}
