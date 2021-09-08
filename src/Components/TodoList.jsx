import React from "react"
import TodoListItem from "./TodoListItem"

function TodoList({ todos, handleDelete, handleCompleted, handleEdit }) {
  return (
    <ul className="todo-list">
      {todos.map((todoItem) => (
        <TodoListItem key={todoItem.id} todoItem={todoItem} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit} />
      ))}
    </ul>
  )
}

export default TodoList
