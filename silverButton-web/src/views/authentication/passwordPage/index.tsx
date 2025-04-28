/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style";

const PasswordPage = () => {
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const storedSecondPassword = "1234";

  const handleSecondPasswordSubmit = () => {
    if (secondPassword.length !== 4 || isNaN(Number(secondPassword))) {
      setError("4자리 숫자로 입력해주세요.");
      return;
    }

    if (secondPassword === storedSecondPassword) {
      alert("2차 비밀번호 인증 성공!");
      navigate("/my-page/mypage");
    } else {
      setError("2차 비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div css={s.passwordContainer}>
      <div css={s.passwordCard}>
        <h1 css={s.passwordCardTitle}>2차 비밀번호 입력</h1>
        <p css={s.passwordCardDescription}>
          마이페이지에 접근하려면 4자리 숫자를 입력하세요
        </p>
        <div css={s.passwordItem}>
          <div css={s.inputWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="secondPassword"
              placeholder="4자리 숫자 입력 🔢"
              value={secondPassword}
              onChange={(e) => {
                const inputVal = e.target.value.replace(/\D/g, "");
                setSecondPassword(inputVal);
              }}
              maxLength={4}
              pattern="[0-9]*"
              css={s.inputField}
            />
            <button
              onClick={() => setShowPassword((prev) => !prev)}
              css={s.togglePasswordButton}
            >
              {showPassword ? "숨기기" : "보기"}
            </button>
          </div>
          {error && <p css={s.errorMessage}>{error}</p>}
        </div>
        <button
          css={s.passwordSubmitButton}
          onClick={handleSecondPasswordSubmit}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;
