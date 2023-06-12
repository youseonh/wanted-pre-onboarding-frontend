import axios from 'axios'
import useNavigateToPage from '../hooks/useNavigateToPage'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function useSign(type, data) {
  const navigateToPage = useNavigateToPage()
  const path = type === 'signup' ? 'signin' : 'todo'
  const { handleLogin } = useContext(AuthContext)

  const handleSubmit = e => {
    e.preventDefault()
    const { email, password } = data
    axios
      .post(
        `https://www.pre-onboarding-selection-task.shop/auth/${type}`,
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        if (type === 'signin') {
          handleLogin(response.data.access_token)
        }
        navigateToPage(path)
      })
      .catch(error => {
        console.error('에러 발생:', error)
      })
  }

  return handleSubmit
}
