import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <div>
        <div style={style.mainContainer}>
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

const style = {
  mainContainer: {
    background: "#f4f4f4",
    padding: "-10px",
  },
};

export default TodoItem;
