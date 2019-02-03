import React, { Component } from "react";
import "./App.css";
import VideoContainer from "./components/VideoContainer";

class App extends Component {
  public render() {
    return (
      <div className="App">
          <VideoContainer />
      </div>
    );
  }
}

export default App;
