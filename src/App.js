import { useState } from "react"
import "./app.css"

import Form from "./Components/Form"
import Header from "./Components/Header"
import TodoList from "./Components/TodoList"

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState([])
  const [addButton, setAddButton] = useState(true)

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodos)
  }

  const handleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const handleEdit = (todoItem) => {
    setAddButton(false)
    //setTodos(todos.filter((todo) => todo.id !== todoItem.id))
    setSelectedTodo(todoItem)
    setInput(todoItem.title)
  }
  return (
    <div className="app-container">
      <div className="todo-card">
        <Header />
        <Form addButton={addButton} setAddButton={setAddButton} input={input} setInput={setInput} todos={todos} setTodos={setTodos} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
        <TodoList todos={todos} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />
      </div>
    </div>
  )
}

export default App
