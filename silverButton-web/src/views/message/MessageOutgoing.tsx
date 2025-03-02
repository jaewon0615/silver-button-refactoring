/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import * as s from "./style";

interface Message {
  id: number;
  title: string;
  receiverName: string;
  createdAt: string;
  content: string;
}

const OutgoingMessages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [cookies] = useCookies(["token"]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const fetchOutgoingMessages = async () => {
    const token = cookies.token;
    if (!token) {
      setError("인증이 필요합니다.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        "http://localhost:4040/api/v1/message/sender",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessages(response.data.data);
    } catch (e) {
      setError("쪽지를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number | undefined) => {
    if (!id) {
      setError("유효하지 않은 메시지 ID입니다.");
      return;
    }

    const token = cookies.token;
    if (!token) {
      setError("인증이 필요합니다.");
      return;
    }

    setDeletingId(id);

    try {
      await axios.delete(`http://localhost:4040/api/v1/message/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== id)
      );
      alert("쪽지가 삭제되었습니다.");
    } catch (e) {
      setError("쪽지를 삭제하는 중 오류가 발생했습니다.");
    } finally {
      setDeletingId(null);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = messages.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(messages.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchOutgoingMessages();
  }, [cookies.token]);

  if (loading) {
    return <p css={s.headerStyle}>로딩 중...</p>;
  }

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <h2 css={s.headerStyle}>발신한 쪽지</h2>
        {error && <p css={s.errorStyle}>{error}</p>}
        {currentItems.length === 0 ? (
          <p css={s.headerStyle}>발신한 쪽지가 없습니다.</p>
        ) : (
          currentItems.map((message) => (
            <div key={message.id} css={s.messageStyle}>
              <Link to={`/message/all/${message.id}`} css={s.messageLink}>
                <h3>제목: {message.title}</h3>
              </Link>
              <p>받을 사람: {message.receiverName}</p>
              <small>
                보낸 시간: {new Date(message.createdAt).toLocaleString()}
              </small>
              <p>{message.content}</p>
              <button
                css={s.deleteButton}
                onClick={() => handleDelete(message.id)}
                disabled={deletingId === message.id}
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

export default OutgoingMessages;
