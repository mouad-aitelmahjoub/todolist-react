import React from "react"

function TodoListItem({ todoItem, handleDelete, handleCompleted, handleEdit }) {
  const iconColor = todoItem.completed ? "green" : "gray"
  const titleStyle = todoItem.completed ? "todo-list-item-text checked" : "todo-list-item-text"
  return (
    <li className="todo-list-item">
      <span className={titleStyle}>{todoItem.title}</span>
      <span className="todo-list-item-icons">
        <i style={{ color: iconColor }} className="fas fa-check-circle" onClick={() => handleCompleted(todoItem.id)}></i>
        <i style={{ color: "orange" }} className="fas fa-edit" onClick={() => handleEdit(todoItem)}></i>
        <i style={{ color: "red" }} className="fas fa-trash" onClick={() => handleDelete(todoItem.id)}></i>
      </span>
    </li>
  )
}

export default TodoListItem
