import React, { Component } from "react";
import TodoItem from "./TodoItem";

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        markCompleted={this.props.markCompleted}
        deleteItem={this.props.deleteItem}
        todo={todo}
      />
    ));
  }
}

export default Todos;
