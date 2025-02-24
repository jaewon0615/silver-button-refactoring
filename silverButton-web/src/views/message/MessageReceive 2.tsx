/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom"; // Link 컴포넌트 임포트
import * as s from "./style";

interface Message {
  id: number;
  title: string;
  senderName: string;
  createdAt: string;
  content: string;
}

const ReceivedMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [cookies] = useCookies(["token"]); // 쿠키에서 토큰 가져오기
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [deletingId, setDeletingId] = useState<number | null>(null); // 삭제 중인 메시지 ID
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 4; // 페이지당 항목 수

  const fetchReceivedMessages = async () => {
    const token = cookies.token; // 쿠키에서 토큰 가져오기
    if (!token) {
      setError("인증이 필요합니다.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get("http://localhost:4040/api/v1/message/receive", {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
        },
      });
      setMessages(response.data.data); // 메시지 데이터를 상태에 저장
    } catch (e) {
      setError("쪽지를 불러오는 중 오류가 발생했습니다."); // 오류 메시지 추가
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number | undefined) => {
    if (!id) {
      setError("유효하지 않은 메시지 ID입니다.");
      return;
    }

    const token = cookies.token; // 쿠키에서 토큰 가져오기
    if (!token) {
      setError("인증이 필요합니다.");
      return;
    }

    setDeletingId(id); // 삭제 중인 메시지 ID 설정

    try {
      await axios.delete(`http://localhost:4040/api/v1/message/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // 토큰을 헤더에 추가
        },
      });
      // 삭제 후 메시지 상태 업데이트
      setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
      alert("쪽지가 삭제되었습니다."); // 삭제 알림
    } catch (e) {
      setError("쪽지를 삭제하는 중 오류가 발생했습니다."); // 오류 메시지 추가
    } finally {
      setDeletingId(null); // 삭제 완료 후 ID 초기화
    }
  };

  // 페이지네이션 관련
  const indexOfLastItem = currentPage * itemsPerPage; // 현재 페이지의 마지막 항목 인덱스
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 현재 페이지의 첫 번째 항목 인덱스
  const currentItems = messages.slice(indexOfFirstItem, indexOfLastItem); // 현재 페이지 메시지 추출
  const totalPages = Math.ceil(messages.length / itemsPerPage); // 전체 페이지 수

  const handlePageClick = (page: number) => {
    setCurrentPage(page); // 페이지 설정
  };

  useEffect(() => {
    fetchReceivedMessages();
  }, [cookies.token]);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <h2 css={s.headerStyle}>수신한 쪽지</h2>
        {error && <p css={s.errorStyle}>{error}</p>}
        {currentItems.length === 0 ? (
          <p>수신한 쪽지가 없습니다.</p>
        ) : (
          currentItems.map((message) => (
            <div key={message.id} css={s.messageStyle}>
              <h3>
                <Link to={`/message/All/${message.id}`} css={s.messageLink}>
                  {message.title}
                </Link>
              </h3>
              <p>보낸 사람: {message.senderName}</p>
              <small>보낸 시간: {new Date(message.createdAt).toLocaleString()}</small>
              <p>{message.content}</p>
              <button
                css={s.deleteButton}
                onClick={() => handleDelete(message.id)}
                disabled={deletingId === message.id} // 삭제 중 버튼 비활성화
              >
                {deletingId === message.id ? "삭제 중..." : "삭제"}
              </button>
            </div>
          ))
        )}
        <div css={s.paginationContainer}>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            css={s.arrowButton}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              css={[
                s.paginationButton,
                currentPage === index + 1 && s.paginationButtonActive,
              ]}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            css={s.arrowButton}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceivedMessages;
