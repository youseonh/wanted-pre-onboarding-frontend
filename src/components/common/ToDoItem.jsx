import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../../context/AuthContext'
import useToDo from './hooks/useTodo'

const ToDoItem = ({ item, updateList }) => {
  const { token } = useContext(AuthContext)
  const { todoData, handleChangeCheck, handleChangeText, handleRemove } = useToDo(item)
  const [todo, setTodo] = useState(todoData)
  const [isDisableEdit, setIsDisableEdit] = useState(false)
  const [updatedToDo, setUpdatedToDo] = useState(item.todo)
  const [isEdit, setIsEdit] = useState(false)
  const [isCompleted, setIsCompleted] = useState(item.isCompleted)

  useEffect(() => {
    setTodo(todoData)
  }, [todoData])

  useEffect(() => {
    if (updatedToDo === '') {
      setIsDisableEdit(true)
    } else {
      setIsDisableEdit(false)
    }
  }, [updatedToDo])

  // 수정 버튼 클릭
  const changeInput = () => {
    setIsEdit(true)
  }

  // 체크박스 클릭
  const changeCheck = () => {
    setIsCompleted(!isCompleted)
    handleChangeCheck({ id: todo.id, todo: todo.todo, isCompleted: !isCompleted, token })
  }

  // 수정 취소
  const handleCancel = () => {
    setIsEdit(false)
    setUpdatedToDo(item.todo)
  }

  // 수정
  const updateToDo = async () => {
    await handleChangeText({ id: todo.id, todo: updatedToDo, isCompleted, token })
    setIsEdit(false)
  }

  // 삭제
  const removeToDo = async () => {
    // 1. 삭제
    const isRemoved = await handleRemove({ id: todo.id, token })
    // 2. 삭제 후 todoList 재조회
    if (isRemoved) {
      updateList()
    }
  }

  return (
    <li className="inline-flex w-full">
      <label className="w-10/12 inline-flex mr-5">
        <input id="toDoItem" type="checkbox" className="mr-4" checked={todo.isCompleted} onChange={changeCheck} />
        {/* 수정 여부에 따라? input : label */}
        {isEdit ? (
          <>
            <input
              type="text"
              data-testid="modify-input"
              className="border-2 w-full border-gray-400 rounded-md px-4 py-2"
              value={updatedToDo}
              onChange={e => {
                setUpdatedToDo(e.target.value)
              }}
            />
          </>
        ) : (
          <>
            <span className="w-full self-center">{todo.todo}</span>
          </>
        )}
      </label>
      <div className="inline-flex w-2/12">
        {/* 수정 여부에 따라 버튼 변경 */}
        {isEdit ? (
          <>
            <button
              type="button"
              data-testid="submit-button"
              className="flex items-center justify-center mr-3 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={updateToDo}
              disabled={isDisableEdit}
            >
              제출
            </button>
            <button
              type="button"
              data-testid="cancel-button"
              className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCancel}
            >
              취소
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              data-testid="modify-button"
              className="flex items-center mr-3 justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={changeInput}
            >
              수정
            </button>
            <button
              type="button"
              data-testid="delete-button"
              className="flex items-center justify-center w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={removeToDo}
            >
              삭제
            </button>
          </>
        )}
      </div>
    </li>
  )
}

export default ToDoItem
