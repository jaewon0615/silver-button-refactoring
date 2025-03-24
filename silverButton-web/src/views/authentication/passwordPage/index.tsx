/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style"; // 스타일 파일 임포트

const PasswordPage = () => {
  const [secondPassword, setSecondPassword] = useState(""); // 2차 비밀번호
  const [error, setError] = useState(""); // 오류 메시지
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 표시 여부 상태
  const navigate = useNavigate();

  // 2차 비밀번호 저장 예시
  const storedSecondPassword = "1234"; // 데이터베이스에서 가져온 2차 비밀번호 예시

  // 2차 비밀번호 검증
  const handleSecondPasswordSubmit = () => {
    // 4자리 숫자인지 체크
    if (secondPassword.length !== 4 || isNaN(Number(secondPassword))) {
      setError("4자리 숫자로 입력해주세요.");
      return;
    }

    // 저장된 비밀번호와 비교
    if (secondPassword === storedSecondPassword) {
      alert("2차 비밀번호 인증 성공!");
      navigate("/my-page/mypage"); // 인증 성공 후 페이지 이동
    } else {
      setError("2차 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div css={s.passwordContainer}>
      <div css={s.passwordCard}>
        <h1 css={s.passwordCardTitle}>2차 비밀번호 입력</h1>
        <p css={s.passwordCardDescription}>마이페이지에 접근하려면 4자리 숫자를 입력하세요</p>
        <div css={s.passwordItem}>
          <div css={s.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"} // 상태에 따라 type 변경
              id="secondPassword"
              placeholder="4자리 숫자 입력 🔢"
              value={secondPassword}
              onChange={(e) => {
                const inputVal = e.target.value.replace(/\D/g, ""); // 숫자만 허용
                setSecondPassword(inputVal);
              }}
              maxLength={4}
              pattern="[0-9]*"
              css={s.inputField}
            />
            <button
              onClick={() => setShowPassword((prev) => !prev)} // 버튼 클릭 시 showPassword 상태 토글
              css={s.togglePasswordButton}
            >
              {showPassword ? "숨기기" : "보기"} {/* 텍스트도 토글 */}
            </button>
          </div>
          {error && <p css={s.errorMessage}>{error}</p>}
        </div>
        <button css={s.passwordSubmitButton} onClick={handleSecondPasswordSubmit}>
          확인
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;
