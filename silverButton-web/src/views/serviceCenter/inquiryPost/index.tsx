/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import * as s from "./style";

export type InquiryStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";

export interface ServicePostType {
  id: number;
  userId: string;
  title: string;
  content: string;
  status: InquiryStatus;
  createdAt: number;
  nickname: string;
  password: string;
}

export default function InquiryPost() {
  const [newRecord, setNewRecord] = useState<ServicePostType>({
    id: 0,
    userId: "",
    title: "",
    content: "",
    status: "PENDING",
    createdAt: 0,
    nickname: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // 

  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = cookies.token;
    if (!token) {
      alert("로그인이 필요합니다.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4040/api/v1/inquiries/`,
        newRecord,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("문의글이 등록되었습니다!");
      navigate("/service-center"); // 목록 페이지로 이동
    } catch (error) {
      console.error("문의 등록 실패:", error);
      alert("문의 등록 중 오류가 발생했습니다.");
    }
  };

  const maxTextLength = 300; // 최대 글자 수 설정

  return (
    <div css={s.container}>
      <h1 css={s.title}>문의 등록하기</h1>
      <div css={s.conttSt}>
        <form css={s.form} onSubmit={handleSubmit}>
          <div css={s.inputGroup}>
            <label css={s.label}>제목</label>
            <input
              type="text"
              name="title"
              onChange={handleInputChange}
              value={newRecord.title}
              required
              css={s.input}
            />
          </div>
          <div css={s.inputGroup}>
  <label css={s.label}>내용</label>
  <textarea
    name="content"
    onChange={handleInputChange}
    value={newRecord.content}
    required
    css={s.textarea}
    rows={6}
    maxLength={maxTextLength} // 글자 수 제한
  />
  <p css={s.charCount}>
    {newRecord.content.length} / {maxTextLength}
  </p>
</div>
          <div css={s.inputGroupPassword}>
            <label css={s.label}>비밀번호</label>
            <input
              name="password"
              onChange={handleInputChange}
              value={newRecord.password}
              required
              placeholder="숫자 4자리 입력"
              css={s.input}
              type={showPassword ? "text" : "password"} // 상태에 따라 type 변경
            />
             <button
              onClick={() => setShowPassword((prev) => !prev)} // 버튼 클릭 시 showPassword 상태 토글
              css={s.togglePasswordButton}
            >
              {showPassword ? "숨기기" : "보기"} {/* 텍스트도 토글 */}
            </button>
          </div>
          <button type="submit" css={s.submitButton}>
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}
