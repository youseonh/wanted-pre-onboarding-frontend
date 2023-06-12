import axios from 'axios'
import { useEffect, useState, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { BASE_URL } from '../constants/common'

export default function useToDoList() {
  const [todoList, setTodoList] = useState([])
  const { token } = useLocalStorage()

  useEffect(() => {
    if (token) {
      getToDo(token)
    }
  }, [token])

  const handleCreateTodo = async (todo, token) => {
    const result = await axios.post(
      `${BASE_URL}todos`,
      { todo },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    setTodoList(pre => [...pre, result.data])
  }

  const getToDo = async token => {
    const result = await axios.get(`${BASE_URL}todos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setTodoList(result.data)
  }

  return { todoList, handleCreateTodo, getToDo }
}
