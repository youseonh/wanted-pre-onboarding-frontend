import { useNavigate } from 'react-router-dom'

export default function useNavigateToPage() {
  const navigate = useNavigate()
  const navigateToPage = path => {
    navigate(`/${path}`)
  }

  return navigateToPage
}
