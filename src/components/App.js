import React from "react";
import * as uuid from "uuid";
import Todos from "./Todos";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "You are good",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "You are Sweet",
        completed: false,
      },
      {
        id: uuid.v4(),
        title: "You are Bad",
        completed: false,
      },
    ],
  };

  markCompleted = (id) => {
    this.setState({
      todo: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markCompleted={this.markCompleted} />
      </div>
    );
  }
}

export default App;
