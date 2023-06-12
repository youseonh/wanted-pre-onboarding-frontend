import useNavigateToPage from '../hooks/useNavigateToPage'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import ToDoItem from '../components/todo/ToDoItem'
import useToDoList from '../hooks/useTodoList'

export default function Todo() {
  const navigateToPage = useNavigateToPage()
  const { token } = useContext(AuthContext)
  const { todoList, handleCreateTodo, getToDo } = useToDoList()
  const [list, setList] = useState(todoList)
  const [todo, setTodo] = useState('')
  const [isActiveAdd, setIsActiveAdd] = useState(true)

  useEffect(() => {
    setList(todoList)
  }, [todoList])

  useEffect(() => {
    if (todo && todo !== '') {
      setIsActiveAdd(false)
    } else {
      setIsActiveAdd(true)
    }
  }, [todo])

  // token 없으면 login화면으로 이동
  useEffect(() => {
    if (!token && !localStorage.getItem('token')) {
      navigateToPage(`signin`)
    }
  }, [navigateToPage, token])

  // todo 변경
  const handleTodo = e => {
    setTodo(e.target.value)
  }

  // todo 변경
  const updateList = () => {
    getToDo(token)
  }

  const onClickAdd = async e => {
    e.preventDefault()
    await handleCreateTodo(todo, token)
    setTodo('')
  }

  return (
    <div className="w-6/12">
      <div className="inline-flex w-full mb-7">
        <input
          type="text"
          data-testid="new-todo-input"
          className="border-2 border-gray-400 rounded-md px-4 py-2 w-11/12 mr-5"
          placeholder="내용을 입력해주세요"
          value={todo}
          onChange={handleTodo}
        />
        <button
          type="button"
          data-testid="new-todo-add-button"
          disabled={isActiveAdd}
          className="flex w-1/12 items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
          children="추가"
          onClick={onClickAdd}
        />
      </div>
      <ul>
        {list.map(item => {
          return <ToDoItem key={item.id} item={item} updateList={updateList} />
        })}
      </ul>
    </div>
  )
}
