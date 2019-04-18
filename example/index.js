import React from "react";
import ReactDOM from "react-dom";
import { Button, Box, Text } from "../lib";

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
        <h1>Text</h1>
        <div className="text-container">
          <p><Text>默认</Text></p>
          <p><Text type="npc">NPC</Text></p>
          <p><Text type="warrior">战士</Text></p>
          <p><Text type="rogue">潜行者</Text></p>
          <p><Text type="hunter">猎人</Text></p>
          <p><Text type="mage">法师</Text></p>
          <p><Text type="warlock">术士</Text></p>
          <p><Text type="priest">牧师</Text></p>
          <p><Text type="druid">德鲁伊</Text></p>
          <p><Text type="paladin">圣骑士</Text></p>
          <p><Text type="shaman">萨满</Text></p>
          <p><Text type="deathKnight">死亡骑士</Text></p>
          <p><Text type="monk">武僧</Text></p>
          <p><Text type="demonHunter">恶魔猎手</Text></p>
          <p><Text type="demonHunter" disabled>恶魔猎手</Text></p>
          <p><Text type="demonHunter" underline>恶魔猎手</Text></p>
          <p><Text type="demonHunter" strong>恶魔猎手</Text></p>
          <p><Text type="demonHunter" mark>恶魔猎手</Text></p>
        </div>
      </>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#app"),
);
