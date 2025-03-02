import React, { useEffect, useState } from "react";
import "../../../stores/auth.store";
import "./ReSign.css";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store";
import { useCookies } from "react-cookie";

const Resign = () => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [cookies, setCookies] = useCookies(["token"]);

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

  useEffect(() => {
    if (!cookies.token) {
      logout();
    }
  }, [cookies.token, logout]);

  const handleDelete = () => {
    setIsPasswordModalOpen(true);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e || !e.target) {
        throw new Error("유효하지않음음");
      }
      setPassword(e.target.value);
    } catch (error) {
      console.error("에러:", error);
    }
  };

  const handleConfirmPassword = async () => {
    try {
      const response = await fetch(
        "http://localhost:4040/api/v1/manage/delete-account",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ password }),
        }
      );

      if (response.ok) {
        alert("회원탈퇴가 완료되었습니다.");
        setIsConfirming(true);
        setCookies("token", "", { expires: new Date(0), path: "/" });
        logout();
        navigate("/");
      } else {
        const errorData = await response.json();
        alert(`회원탈퇴 실패: ${errorData.message}`);
      }
    } catch (error) {
      alert("회원탈퇴 중 오류가 발생했습니다.");
    } finally {
      setIsPasswordModalOpen(false);
      setPassword("");
    }
  };

  const handleCancelPassword = () => {
    setIsPasswordModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsConfirming(false);
  };

  return (
    <div className="delete-account-container">
      <div className="delete-account-box">
        <h2>회원 탈퇴</h2>
        <p>회원 탈퇴를 원하시면 아래 버튼을 클릭해주세요.</p>
        {!isConfirming ? (
          <>
            <button className="delete-button" onClick={handleDelete}>
              탈퇴하기
            </button>
          </>
        ) : (
          <div className="confirmation-box">
            <p>정말 탈퇴하시겠습니까?</p>
            <button className="confirm-button" onClick={handleConfirmPassword}>
              탈퇴
            </button>
            <button className="cancel-button" onClick={handleCancelDelete}>
              취소
            </button>
          </div>
        )}
      </div>

      {isPasswordModalOpen && (
        <div className="password-modal">
          <div className="password-modal-content">
            <h3>비밀번호를 입력하세요</h3>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              className="confirm-password-button"
              onClick={handleConfirmPassword}
            >
              확인
            </button>
            <button
              className="cancel-password-button"
              onClick={handleCancelPassword}
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resign;
