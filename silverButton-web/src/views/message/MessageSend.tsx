/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import * as s from "./style";

const MessageSend: React.FC = () => {
  const [receiverUserId, setReceiverUserId] = useState<string>("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleSend = async () => {
    const token = cookies.token;

    if (!token) {
      setMessage("로그인한 사용자만 메세지를 전송할 수 있습니다.");
      return;
    }

    if (!receiverUserId.trim()) {
      setMessage("ID를 다시 확인해주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/message/",
        {
          receiverUserId,
          title,
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setMessage("쪽지가 성공적으로 전송되었습니다.");
        setReceiverUserId("");
        setTitle("");
        setContent("");
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 400) {
          setMessage("존재하지 않는 ID입니다. 다시 확인해주세요.");
        } else {
          setMessage(
            `오류 발생: ${
              error.response.data?.message ||
              "쪽지 전송 중 오류가 발생했습니다."
            }`
          );
        }
      } else {
        setMessage("네트워크 오류 또는 알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  const handleReceivedMessages = () => {
    navigate("/message/receive");
  };

  const handleOutgoingMessages = () => {
    navigate("/message/sender");
  };

  return (
    <div css={s.containerStyle}>
      <div css={s.headerStyle}>메세지 전송</div>
      <div css={s.buttonDiv}>
        <button css={s.buttonStyle2} onClick={handleReceivedMessages}>
          수신함
        </button>
        <button css={s.buttonStyle2} onClick={handleOutgoingMessages}>
          발신함
        </button>
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
      <button onClick={handleSend} css={s.buttonStyle1}>
        전송
      </button>
      {message && <p css={s.errorMessage}>{message}</p>}
    </div>
  );
};

export default MessageSend;
