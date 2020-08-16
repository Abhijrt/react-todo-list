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
    console.log(id);
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
