import React from 'react'
import Button from '../components/common/Button'
import useNavigateToPage from '../hooks/useNavigateToPage'

export default function Home() {
  const navigateToPage = useNavigateToPage()

  return (
    <section className="flex flex-col">
      <h1 className="text-4xl font-bold mb-8 self-center">TO DO LIST</h1>
      <Button text="회원가입" color="blue" custom="mb-4" onClick={() => navigateToPage('signup')} />
      <Button text="로그인" color="blue" onClick={() => navigateToPage('signin')} />
    </section>
  )
}
