import React, { Component } from "react";

class TodoItem extends Component {
  getStyleTodo = () => {
    return {
      background: "#f4f4f4",
      padding: "1px",
      borderBottom: "1px solid #ccc",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };
  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <div style={this.getStyleTodo()}>
          <p>
            <input
              type="checkbox"
              onChange={this.props.markCompleted.bind(this, id)}
            />{" "}
            {title}
          </p>
        </div>
      </div>
    );
  }
}

export default TodoItem;
