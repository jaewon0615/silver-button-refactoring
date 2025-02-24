/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import * as s from "./style";

const MessageSend: React.FC = () => {
  const [receiverUserId, setReceiverUserId] = useState<string>("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [cookies] = useCookies(["token"]); // 쿠키에서 토큰 가져오기
  const navigate = useNavigate(); // navigate 훅 사용

  const handleSend = async () => {
    const token = cookies.token; // 쿠키에서 토큰 가져오기
    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/message",
        {
          receiverUserId,
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
          },
        }
      );

      if (response.status === 201) {
        setMessage("쪽지가 성공적으로 전송되었습니다.");
        // 입력 필드 초기화
        setReceiverUserId("");
        setTitle("");
        setContent("");
      }
    } catch (error) {
      setMessage("쪽지 전송 중 오류가 발생했습니다.");
    }
  };

  const handleReceivedMessages = () => {
    navigate("/message/receive"); // 수신함 페이지로 이동
  };

  const handleOutgoingMessages = () =>{
    navigate("/message/sender");
  }

  return (
    <div css={s.containerStyle}>
      <div css={s.headerStyle}>쪽지 발송</div>
      <div css={s.buttonDiv}>
        <button css={s.buttonStyle2} onClick={handleReceivedMessages}>수신함</button>
        <button css={s.buttonStyle2} onClick={handleOutgoingMessages}>발신함</button>
      </div>
      <input
        value={receiverUserId}
        onChange={(e) => setReceiverUserId(e.target.value)}
        placeholder="수신인 ID"
        css={s.container}
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
        css={s.inputStyle}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        css={s.textareaStyle}
      />
      <button onClick={handleSend} css={s.buttonStyle1}>보내기</button>
      {message && <p css={s.messageStyle}>{message}</p>}
    </div>
  );
};

export default MessageSend;
