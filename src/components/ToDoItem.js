import React from "react";

function TodoItem(props) {
  if (!props.item.completed) {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        <p>{props.item.text}</p>
      </div>
    );
  } else {
    return (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={props.item.completed}
            onChange={() => props.handleChange(props.item.id)}
          />
          <p style={{color: "green"}}>{props.item.text} -DONE!</p>
        </div>
      );
  }
}

export default TodoItem;
