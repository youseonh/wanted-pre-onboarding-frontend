import { useState, useEffect } from 'react'
import { KEY } from '../constants/common'

export default function useLocalStorage() {
  const [token, setToken] = useState(() => {
    localStorage.getItem(KEY)
  })

  useEffect(() => {
    setToken(localStorage.getItem(KEY))
  }, [token])

  const setLocalStorage = value => {
    setToken(value)
    localStorage.setItem(KEY, value)
  }

  const removeLocalStorage = () => {
    setToken(null)
    localStorage.removeItem(KEY)
  }

  return { token, setLocalStorage, removeLocalStorage }
}
