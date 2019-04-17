import React from "react";
import ReactDOM from "react-dom";
import { Button, Box } from "../lib";

class App extends React.Component {
  render(){
    return (
      <>
        <h1>Button</h1>
        <div>
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
        </div>
        <h1>Box</h1>
        <div className="box-container">
          <Box>粗糙</Box>
          <Box type="ordinary">普通</Box>
          <Box type="excellent">优秀</Box>
          <Box type="sophisticated">精良</Box>
          <Box type="epic">史诗</Box>
          <Box type="legend">传说</Box>
          <Box type="inherited">传家宝</Box>
        </div>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#app"),
);
