import { v4 as uuidv4 } from "uuid"

function Form({ input, setInput, todos, setTodos, selectedTodo, setSelectedTodo }) {
  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
    setInput("")
  }
  return (
    <form onSubmit={onFormSubmit}>
      <input className="todo-input" type="text" placeholder="Enter a Task" value={input} onChange={onInputChange} />
      <button className="todo-submit" type="submit">
        Add
      </button>
    </form>
  )
}

export default Form
