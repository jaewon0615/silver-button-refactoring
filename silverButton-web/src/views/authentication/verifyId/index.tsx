import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./verifyId.css";
import axios from "axios";

const VerifyId = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string | null>(null); // 찾은 아이디
  const [error, setError] = useState<string>(""); // 오류 메시지
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (!token) {
      setError("잘못된 접근입니다. 이메일 링크를 확인해주세요.");
      setLoading(false);
      return;
    }

    const fetchId = async () => {
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/mail/verify?token=${token}`);

        if (response) {
          setUserId(response.data || "아이디를 불러올 수 없습니다."); // 아이디 설정
        } else {
          setError("인증에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (err) {
        setError("서버 오류로 인증을 처리할 수 없습니다. 잠시 후 다시 시도해주세요.");
      } finally {
        setLoading(false);
      }
    };

    fetchId();
  }, [location.search]);

  return (
    <div className="verify-container">
      <div className="verify-header">
        <h1>아이디 찾기</h1>
      </div>
      <div className="verify-main">
        {loading && <p>인증 중입니다. 잠시만 기다려주세요...</p>}
        {error && !loading && <p className="error-message">{error}</p>}

        {userId && !loading && (
          <div className="result-container">
            <h2>찾은 아이디:</h2>
            <p>{userId}</p>
            <button
              className="verifyBtn"
              onClick={() => navigate("/")}>
              홈으로
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyId;
