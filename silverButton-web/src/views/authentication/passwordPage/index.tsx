/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as s from "./style"; // 스타일 파일 임포트

const PasswordPage = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length);
      }
    }
    return null;
  };

  const token = getTokenFromCookies();

  const handlePasswordSubmit = async () => {
    if (!password) {
      setError("비밀번호가 틀렸습니다.");
      return;
    }

    console.log("입력된 비밀번호:", password);
    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/manage/verify-password",
        { currentPassword: password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;
      console.log("응답 결과:", result);

      if (result.result) {
        alert("비밀번호 인증 성공!");
        navigate("/my-page/mypage");
      } else {
        setError("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      setError("오류가 발생하였습니다. 다시 시도해 주세요");
      console.error("API 요청 중 오류 발생:", error);
    }
  };

  return (
    <div css={s.passwordContainer}>
      <div css={s.passwordCard}>
        <h1 css={s.passwordCardTitle}>비밀번호 입력</h1>
        <p css={s.passwordCardDescription}>마이페이지에 접근하려면 비밀번호를 입력하세요</p>
        <div css={s.passwordItem}>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요🙇‍♀️"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            css={s.inputField}
          />
          {error && <p css={s.errorMessage}>{error}</p>}
        </div>
        <button
          css={s.passwordSubmitButton}
          onClick={handlePasswordSubmit}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;
