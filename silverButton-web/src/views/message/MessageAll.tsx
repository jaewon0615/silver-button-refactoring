/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // URL 파라미터를 가져오기 위해 사용
import { useCookies } from "react-cookie";
import * as s from "./style"; // 스타일 임포트

interface Message {
  id: number;
  title: string;
  receiverName: string;
  createdAt: string;
  content: string;
}

const MessageAll: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 ID 가져오기
  const [message, setMessage] = useState<any | null>(null); // 쪽지 상태
  const [cookies] = useCookies(["token"]); // 쿠키에서 토큰 가져오기
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMessage = async () => {
    const token = cookies.token; // 쿠키에서 토큰 가져오기
    if (!token) {
      setError("인증이 필요합니다.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:4040/api/v1/message/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
        },
      });
      setMessage(response.data.data); // 쪽지 데이터를 상태에 저장
    } catch (e) {
      setError("쪽지를 불러오는 중 오류가 발생했습니다."); // 오류 메시지 추가
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
            <small>보낸 시간: {new Date(message.createdAt).toLocaleString()}</small>
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
