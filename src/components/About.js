import React, { Component } from "react";
import myImage from "../images/my_image.jpeg";

export default class About extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", displayDirection: "row", flexWrap: "wrap" }}
      >
        <div style={styles.imageContainer}></div>
        <div>
          <h1 style={styles.artistName}>Abhay Jirati</h1>
          <p style={{ marginTop: "10%" }}>
            Its a ToDo List Created in React.js
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  imageContainer: {
    display: "flex",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundImage: `url(${myImage})`,
    backgroundSize: "cover",
    padding: "10px",
    margin: "10%",
    flexWarp: "wrap",
    justifyContent: "space-around",
  },
  artistName: {
    marginLeft: "6%",
    padding: "10px",
  },
};
