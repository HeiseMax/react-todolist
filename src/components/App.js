import React from "react";

import ToDoItem from "./ToDoItem";
import todosData from "./todosData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(function (prevState) {
      return prevState.todos.map(function (task) {
        if (task.id === id) {
          task.completed = !task.completed;
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      });
    });
  }

  render() {
    const todoItems = this.state.todos.map((item) => (
      !item.completed ?
          <ToDoItem key={item.id} item={item} handleChange={this.handleChange} /> : null))
      const nottodoItems = this.state.todos.map((item) => (
        item.completed ?
        <ToDoItem key={item.id} item={item} handleChange={this.handleChange} /> : null))

    return <div className="todo-list">{todoItems} {nottodoItems}</div>;
  }
}

export default App;
