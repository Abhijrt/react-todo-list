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
            <i
              style={deleteIconStyle}
              onClick={this.props.deleteItem.bind(this, id)}
              className="fas fa-trash"
            ></i>
          </p>
        </div>
      </div>
    );
  }
}

const deleteIconStyle = {
  padding: "5px",
  float: "right",
  color: "red",
  borderRadius: "50%",
  cursor: "pointer",
};

export default TodoItem;
