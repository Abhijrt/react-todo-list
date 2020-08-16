import React from "react";
import * as uuid from "uuid";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Header from "./Header";

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

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos
          todos={this.state.todos}
          markCompleted={this.markCompleted}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
