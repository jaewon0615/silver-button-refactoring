/** @jsxImportSource @emotion/react */
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store";
import * as s from "./style";

interface Caregiver {
  id: number;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  caregiverCertNo: string;
  birthDate: string;
  profileImage: string;
  licenseNumber: string;
}

interface Dependent {
  name: string;
  userId: string;
  phone: string;
  birthDate: string;
  email: string;
  nickName:string;
}

const MatchingProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
  const { user } = useAuthStore();

  const role = useAuthStore((state) => state.user?.role);
  
  // location.state를 Caregiver와 Dependent 타입으로 명시
  const { caregiver, dependent } = location.state as { caregiver: Caregiver; dependent: Dependent } || {
    caregiver: null,
    dependent: null,
  };

  if (!role) {
    navigate("/");
    return null;
  }

  if (role === "보호자") {
    navigate("/");
    return null;
  }

  if (!caregiver || !dependent) {
    return <p>잘못된 접근입니다.</p>;
  }

  const handlePreviousPage = () => {
    // 요양사 리스트 페이지로 이동
    navigate("/matching/caregiverList");
  };

  const handleCompleteMatching = () => {
    // 매칭 신청 완료 후 메인 페이지로 이동
    alert("매칭 신청이 완료되었습니다.");
    navigate("/"); // 메인 페이지로 리디렉션
  };

  return (
    <div css={s.MatchingProfileContainer}>
      <h1>매칭 프로필</h1>

      <div css={s.MatchingProfileContent}>
      <div css={s.CaregiverInfo}>
    <h2 css={s.InfoHeader}>매칭된 요양사</h2>
    <p css={s.InfoText}>이름: {caregiver.name}</p>
    <p css={s.InfoText}>닉네임: {caregiver.nickname}</p>
    <p css={s.InfoText}>전화번호: {caregiver.phone}</p>
    <p css={s.InfoText}>이메일: {caregiver.email}</p>
    <p css={s.InfoText}>생년월일: {caregiver.birthDate.slice(0, 10)}</p>
    <p css={s.InfoText}>요양사 인증번호: {caregiver.licenseNumber}</p>
  </div>

  <div css={s.DependentInfo}>
    <h2 css={s.InfoHeader}>회원님</h2>
    <p css={s.InfoText}>이름: {dependent.name}</p>
    <p css={s.InfoText}>전화번호: {dependent.phone}</p>
  </div>
      </div>

      <div css={s.ButtonsContainer}>
        <button
          css={s.Button}
          onClick={handlePreviousPage} // 함수로 변경
        >
          이전 페이지
        </button>
        <button
          css={s.Button}
          onClick={handleCompleteMatching} // 함수로 변경
        >
          신청 완료
        </button>
      </div>
    </div>
  );
};

export default MatchingProfile;
