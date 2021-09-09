import { v4 as uuidv4 } from "uuid"

function Form({ input, setInput, todos, setTodos, selectedTodo, setSelectedTodo, addButton, setAddButton }) {
  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (selectedTodo.id) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === selectedTodo.id) {
            return {
              ...todo,
              title: input,
            }
          }
          return todo
        })
      )
      setSelectedTodo([])
    } else {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
    }
    setInput("")
    setAddButton(true)
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input className="todo-input" type="text" placeholder="Enter a Task" value={input} onChange={onInputChange} />
      <button className="todo-submit" type="submit">
        {addButton ? "Add" : "Edit"}
      </button>
    </form>
  )
}

export default Form
