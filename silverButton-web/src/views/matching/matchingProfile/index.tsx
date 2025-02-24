import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../stores/auth.store'; // zustand 스토어 임포트
import './MatchingProfile.css';

interface Caregiver {
  name: string;
  userId: string;
  nickname: string;
  phone: string;
  email: string;
  caregiverCertNo: string; // 요양사 인증번호
}

interface Dependent {
  name: string;
  userId: string;
  phone: string;
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
  
  const role = useAuthStore(state => state.user?.role);
  const { caregiver, dependent } = location.state || { caregiver: null, dependent: null };


  if (!role) {
    navigate('/');
    return null;
  }

  if (role === '보호자') {
    navigate('/'); 
    return null;
  }

  if (!caregiver || !dependent) {
    return <p>잘못된 접근입니다.</p>;
  }

  const handlePreviousPage = () => {
    // 요양사 리스트 페이지로 이동
    navigate('/matching/caregiverList'); 
  };

  const handleCompleteMatching = () => {
    // 매칭 신청 완료 후 메인 페이지로 이동
    alert('매칭 신청이 완료되었습니다.');
    navigate('/'); // 메인 페이지로 리디렉션
  };

  return (
    <div className="matching-profile-container">
      <h1>매칭 프로필</h1>

      <div className="matching-profile-content">
      <div className="caregiver-info">
        <h2>매칭된 요양사</h2>
        <p>이름: {caregiver.name}</p>
        <p>아이디: {caregiver.userId}</p>
        <p>닉네임: {caregiver.nickname}</p>
        <p>전화번호: {caregiver.phone}</p>
        <p>이메일: {caregiver.email}</p>
        <p>요양사 인증번호: {caregiver.caregiverCertNo}</p>
      </div>

      <div className="dependent-info">
        <h2>나</h2>
        <p>이름: {dependent.name}</p>
        <p>아이디: {dependent.userId}</p>
        <p>전화번호: {dependent.phone}</p>
      </div>
    </div>

      {/* 버튼 추가 */}
      <div className="buttons-container">
      <button className="button prev-button" onClick={() => navigate('/matching/caregiverList')}>이전 페이지</button>
      <button className="button complete-button" onClick={() => navigate('/')}>신청 완료</button>
    </div>
  </div>
  );
};

export default MatchingProfile;
