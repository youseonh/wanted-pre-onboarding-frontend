import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useCallback } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function useNavigateToPage() {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()
  const navigateToPage = useCallback(
    path => {
      navigate(`/${path}`)
    },
    [navigate],
  )

  useEffect(() => {
    if (token && token !== '') {
      navigateToPage('todo')
    }
  }, [navigateToPage, token])

  return navigateToPage
}
