import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div style={styles.mainContainer}>
      <h1>ToDo List</h1>
      <Link style={styles.linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={styles.linkStyle} to="/about">
        About
      </Link>
    </div>
  );
}

const styles = {
  mainContainer: {
    background: "#333",
    textAlign: "center",
    height: "80px",
    color: "white",
    // padding: "5px",
  },
  linkStyle: {
    color: "white",
    textDecoration: "none",
    padding: "5px",
  },
};
