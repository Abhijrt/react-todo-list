import React, { Component } from "react";

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    const { title } = this.state.title;
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          style={styles.inputContainer}
          type="text"
          value={title}
          onChange={this.onChange}
        />
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
    height: "25px",
    color: "red",
    backgroundColor: "#f4f4f4",
  },
  btn: {
    border: "1px solid black",
    display: "flex",
    flex: "1",
    alignSelf: "center",
    height: "30px",
  },
};
