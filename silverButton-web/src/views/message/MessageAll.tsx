/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import * as s from "./style";

interface Message {
  id: number;
  title: string;
  receiverName: string;
  createdAt: string;
  content: string;
}

const MessageAll: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState<any | null>(null);
  const [cookies] = useCookies(["token"]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMessage = async () => {
    const token = cookies.token;
    if (!token) {
      setError("인증이 필요합니다.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/message/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.data);
    } catch (e) {
      setError("쪽지를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessage();
  }, [id, cookies.token]);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <h2 css={s.headerStyle}>쪽지 내용</h2>
        {error && <p css={s.errorStyle}>{error}</p>}
        {message ? (
          <div css={s.messageStyle}>
            <h3>{message.title}</h3>
            <p>보낸 사람: {message.senderName}</p>
            <small>
              보낸 시간: {new Date(message.createdAt).toLocaleString()}
            </small>
            <p>{message.content}</p>
          </div>
        ) : (
          <p>해당 쪽지를 찾을 수 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default MessageAll;
