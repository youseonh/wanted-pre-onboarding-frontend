import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/'

export default function useToDo(item) {
  const [todoData, setToDoData] = useState(item)

  useEffect(() => {
    setToDoData(todoData)
  }, [todoData])

  const handleRemove = async ({ id, token }) => {
    const isConfirm = window.confirm(`${id}번 째 리스트를 삭제하시겠습니까?`)
    if (isConfirm) {
      await axios.delete(`${BASE_URL}todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return true
    }
    return false
  }

  // 체크 버튼 수정
  const handleChangeCheck = async ({ id, todo, isCompleted, token }) => {
    const result = await axios.put(
      `${BASE_URL}todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    setToDoData({ ...result.data })
  }

  // 수정된 텍스트 제출
  const handleChangeText = async ({ id, todo, isCompleted, token }) => {
    const result = await axios.put(
      `${BASE_URL}todos/${id}`,
      { todo, isCompleted },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    setToDoData({ ...result.data })
  }

  return { todoData, handleChangeCheck, handleRemove, handleChangeText }
}
