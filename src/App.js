import { useState } from "react"
import "./app.css"

import Form from "./Components/Form"
import Header from "./Components/Header"
import TodoList from "./Components/TodoList"

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [selectedTodo, setSelectedTodo] = useState([])

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

  const handleEdit = (id) => {
    setSelectedTodo(todos.find((todo) => todo.id === id))
    console.log(selectedTodo)
    setInput(selectedTodo.title)
  }
  return (
    <div className="app-container">
      <div className="todo-card">
        <Header />
        <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
        <TodoList todos={todos} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />
      </div>
    </div>
  )
}

export default App
