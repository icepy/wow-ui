import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../lib";

class App extends React.Component {
  render(){
    return (
      <>
      <Button
        className="app-container"
        onClick={() => {
          alert(1)
        }}
      >
        default
      </Button>
      <Button type="danger">danger</Button>
      <Button type="primary">primary</Button>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#app"),
);
