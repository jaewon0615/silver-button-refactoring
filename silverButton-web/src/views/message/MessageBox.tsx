import React from "react";
import MessageSend from "./MessageSend"; // 경로를 조정하세요
import * as s from "./style";

const App: React.FC = () => {
  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
      <MessageSend />
      

      </div>
    </div>
  );
};

export default App;
