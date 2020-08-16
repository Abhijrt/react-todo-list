import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input style={styles.inputContainer} type="text"></input>
        <button style={styles.btn}>Submit</button>
      </form>
    );
  }
}

const styles = {
  inputContainer: {
    border: "1px solid black",
    display: "flex",
    flex: "10",
  },
  btn: {
    border: "1px solid black",
    display: "flex",
    flex: "1",
  },
};
