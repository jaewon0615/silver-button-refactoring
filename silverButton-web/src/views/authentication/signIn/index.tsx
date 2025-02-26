import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store"; 
import "./Signin.css";

interface Credentials {
  userId: string;
  password: string;
}

interface ElderCredentials {
  userId: string;
  name: string;
  phone: string;
}

interface SignInResponseDto {
  token: string;
  user: {
    id: number;
    userId: string;
    nickname: string;
    role: string;
    phone: string;
    profileImg: string;
  };
  exprTime: number;
}

export default function SignIn() {
  const [credentials, setCredentials] = useState<Credentials>({
    userId: "",
    password: "",
  });

  const [elderCredentials, setElderCredentials] = useState<ElderCredentials>({
    userId: "",
    name: "",
    phone: "",
  });

  const [error, setError] = useState<string>("");
  const [, setCookies] = useCookies(["token"]);
  const { isAuthenticated, login } = useAuthStore(); // ✅ Zustand 상태 사용
  const navigate = useNavigate();
  const [isElder, setIsElder] = useState(false);

  // ✅ Zustand의 `isAuthenticated`를 이용해 로그인 여부 체크
  useEffect(() => {
    if (isAuthenticated) {
      alert("이미 로그인된 상태입니다.");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const SignInSuccessResponse = (data: SignInResponseDto) => {
    if (data) {
      console.log(data);
      const { token, exprTime, user } = data;
      setToken(token, exprTime);
      login(user, token); // ✅ Zustand 상태 업데이트
      navigate("/");
    } else {
      setError("로그인 실패: 인증 정보를 확인해주세요.");
    }
  };

  const setToken = (token: string, exprTime: number) => {
    const expires = new Date(Date.now() + exprTime);
    setCookies("token", token, { path: "/", expires });
  };

  // 로그인 요청
  const handleSignIn = async () => {
    const { userId, password } = credentials;
    const { name, phone } = elderCredentials;

    if (isElder) {
      if (!name || !phone) {
        setError("이름과 전화번호를 모두 입력해주세요.");
        return;
      }
    } else {
      if (!userId || !password) {
        setError("아이디, 비밀번호를 모두 입력해주세요.");
        return;
      }
    }

    try {
      const url = isElder
        ? "http://localhost:4040/api/v1/auth/dependent-login"
        : "http://localhost:4040/api/v1/auth/login";

      const payload = isElder ? elderCredentials : credentials;
      const response = await axios.post(url, payload);

      if (response.data) {
        console.log("응답 정보:", response.data.data);
        SignInSuccessResponse(response.data.data);
      }
    } catch (error) {
      setError("로그인 중 문제가 발생했습니다.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSignIn();
    }
  };

  const handleFindId = () => navigate("/findId");
  const handleFindPassword = () => navigate("/findPassword");
  const handleSignUp = () => navigate("/signup");

  return (
    <div className="signin-container">
      <Card className="signin-card">
        <CardContent>
          <div className="signin-tabs">
            <div onClick={() => setIsElder(false)} className="signin-tab">
              일반 & 요양사 로그인
            </div>
            <div onClick={() => setIsElder(true)} className="signin-tab">
              노인 로그인
            </div>
          </div>

          {/* 일반 로그인 필드 */}
          {!isElder && (
            <>
              <TextField
                label="아이디"
                name="userId"
                variant="outlined"
                value={credentials.userId}
                onChange={(e) =>
                  setCredentials({ ...credentials, userId: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="비밀번호"
                name="password"
                type="password"
                variant="outlined"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                fullWidth
                margin="normal"
              />
            </>
          )}

          {/* 노인 로그인 필드 */}
          {isElder && (
            <>
              <TextField
                label="이름"
                name="name"
                variant="outlined"
                value={elderCredentials.name}
                onChange={(e) =>
                  setElderCredentials({ ...elderCredentials, name: e.target.value })
                }
                fullWidth
                margin="normal"
              />
              <TextField
                label="전화번호"
                name="phone"
                variant="outlined"
                value={elderCredentials.phone}
                onChange={(e) =>
                  setElderCredentials({ ...elderCredentials, phone: e.target.value })
                }
                fullWidth
                margin="normal"
              />
            </>
          )}

          {/* 에러 메시지 */}
          {error && (
            <Typography color="error" className="error-message">
              {error}
            </Typography>
          )}
        </CardContent>

        <CardActions>
          <Button onClick={handleSignIn} fullWidth variant="contained">
            로그인
          </Button>
        </CardActions>
        
        <CardActions className="kakao">
          <Button onClick={handleSignIn} fullWidth variant="contained">
            카카오 로그인
          </Button>
        </CardActions>

        <CardActions className="naver">
          <Button onClick={handleSignIn} fullWidth variant="contained">
            네이버 로그인
          </Button>
        </CardActions>

        {/* 아이디 찾기, 비밀번호 찾기, 회원가입 버튼 */}
        <CardActions className="footer-actions">
          <Button onClick={handleFindId} fullWidth variant="text">
            아이디 찾기
          </Button>
          <Button onClick={handleFindPassword} fullWidth variant="text">
            비밀번호 찾기
          </Button>
          <Button onClick={handleSignUp} fullWidth variant="text">
            회원가입
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
