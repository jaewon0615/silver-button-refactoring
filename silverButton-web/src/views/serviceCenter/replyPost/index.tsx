/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from "./style";

export default function Reply() {
  const { id } = useParams<{ id: string }>();
  const [replyText, setReplyText] = useState(""); // 답변 내용만 관리
  const [password, setPassword] = useState(""); // 2차 비밀번호
  const [error, setError] = useState(""); // 오류 메시지

  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const inquiryId = id ? parseInt(id, 10) : 0;
  const storedPassword = "1234"; // 예시용 2차 비밀번호

  const maxTextLength = 300;

  const handleAddReply = async () => {
    const token = cookies.token;

    if (!token) {
      alert("로그인한 사용자만 답변을 작성할 수 있습니다.");
      navigate("/auth");
      return;
    }

    if (replyText.trim().length === 0) {
      setError("답변 내용을 입력해주세요.");
      return;
    }

    if (password.length !== 4 || isNaN(Number(password))) {
      setError("2차 비밀번호는 4자리 숫자로 입력해주세요.");
      return;
    }

    if (password !== storedPassword) {
      setError("2차 비밀번호가 일치하지 않습니다.");
      return;
    }

    const replyData = {
      inquiryId,
      reply: replyText,
      password,
    };

    try {
      await axios.post(`http://localhost:4040/api/v1/inquiries-replies/${inquiryId}`, replyData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("답변이 등록되었습니다.");
      navigate(`/inquiries/${id}`);
      setReplyText("");
      setPassword("");
      setError("");
    } catch (e) {
      console.error("답변 등록 실패", e);
      alert("답변 등록에 실패했습니다.");
    }
  };

  return (
    <div css={s.detailContainer}>
      <div css={s.conttSt}>
        <h2 css={s.title}>답변 등록</h2>
        <div css={s.formContainer}>
          <h3 css={s.formTitle}>답변 등록하기</h3>
          <div css={s.inputContainer}>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="답변을 입력하세요"
              maxLength={maxTextLength}
              css={s.textarea}
            />
            <p css={s.charCount}>
              {replyText.length} / {maxTextLength}
            </p>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="2차 비밀번호 (4자리 숫자)"
              css={s.input}
            />
            {error && <p css={s.error}>{error}</p>}

            <button onClick={handleAddReply} css={s.button}>
              답변 등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
