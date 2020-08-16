import React from "react";

export default function () {
  return (
    <div style={styles.mainContainer}>
      <h1>ToDo List</h1>
    </div>
  );
}

const styles = {
  mainContainer: {
    background: "#333",
    textAlign: "center",
    height: "80px",
    color: "white",
    padding: "10px",
  },
};
