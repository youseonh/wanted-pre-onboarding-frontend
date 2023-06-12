import React from 'react'
import useForm from '../../hooks/useForm'
import useSign from '../../hooks/useSign'
import Button from './Button'

export default function Form({ type }) {
  const [form, handleChange] = useForm()
  const handleSubmit = useSign(type, form)

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        data-testid="email-input"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
        className="border-2 border-gray-400 rounded-md px-4 py-2 mb-4"
        placeholder="이메일"
        required
      />
      <input
        data-testid="password-input"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className="border-2 border-gray-400 rounded-md px-4 py-2 mb-4"
        placeholder="비밀번호"
        required
      />

      {type === 'signup' && (
        <button
          disabled={!form.isActive}
          data-testid="signup-button"
          type="submit"
          className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          회원가입
        </button>
      )}

      {type === 'signin' && (
        <button
          disabled={!form.isActive}
          data-testid="signin-button"
          type="submit"
          className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          로그인
        </button>
      )}
    </form>
  )
}
