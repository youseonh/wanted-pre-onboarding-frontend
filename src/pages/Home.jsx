import { useContext, useEffect } from 'react'
import Button from '../components/common/Button'
import useNavigateToPage from '../hooks/useNavigateToPage'
import { AuthContext } from '../context/AuthContext'

export default function Home() {
  const { token } = useContext(AuthContext)
  const navigateToPage = useNavigateToPage()

  useEffect(() => {
    if (token && token !== '') {
      navigateToPage('todo')
    }
  }, [navigateToPage, token])

  return (
    <section className="flex flex-col">
      <h1 className="text-4xl font-bold mb-8 self-center">TO DO LIST</h1>
      <Button text="회원가입" bgColor="blue" custom="mb-4" onClick={() => navigateToPage('signup')} />
      <Button text="로그인" bgColor="blue" onClick={() => navigateToPage('signin')} />
    </section>
  )
}
