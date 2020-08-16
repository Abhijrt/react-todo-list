import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as uuid from "uuid";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Header from "./Header";
import About from "./About";

class App extends React.Component {
  state = {
    todos: [],
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
      <Router>
        <div className="App" style={mainAppComponent}>
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markCompleted={this.markCompleted}
                  deleteItem={this.deleteItem}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

const mainAppComponent = {
  width: "50%",
  margin: "auto",
};

export default App;
