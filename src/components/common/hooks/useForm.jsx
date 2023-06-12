import { useEffect, useState } from 'react'

export default function useForm() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    isActive: false,
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(pre => ({ ...pre, [name]: value }))
  }

  useEffect(() => {
    if (form.email.includes('@') && form.password.length >= 8) {
      if (!form.isActive) {
        setForm(pre => ({ ...pre, isActive: true }))
      }
    } else {
      if (form.isActive) {
        setForm(pre => ({ ...pre, isActive: false }))
      }
    }
  }, [form])

  return [form, handleChange]
}
