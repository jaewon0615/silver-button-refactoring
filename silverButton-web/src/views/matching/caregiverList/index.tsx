import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../../stores/auth.store'; // zustand 스토어 임포트
import './CaregiverList.css';

interface Caregiver {
  id: number;
  name: string;
  nickname: string;
  email: string;
  phone: string;
  caregiverCertNo: string;
}

interface Dependent {
  name: string;
  userId: string;
  phone: string;
}

const CaregiverList = () => {
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuthStore();

  // 로그인된 사용자의 role 정보를 가져오기
  const role = useAuthStore(state => state.user?.role);

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

  // 새로고침 후에도 데이터가 유지되도록 로컬스토리지에서 불러오기
  useEffect(() => {
    const storedCaregivers = localStorage.getItem('caregivers');
    if (storedCaregivers) {
      setCaregivers(JSON.parse(storedCaregivers));
    } else {
      fetchCaregivers();
    }
  }, []);

  const fetchCaregivers = async () => {
    try {
      const response = await fetch('http://localhost:4040/api/v1/matching/search-caregiver', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('네트워크 응답이 올바르지 않습니다.');
      }

      const data = await response.json();
      if (data && data.data) {
        setCaregivers(data.data);
        // 데이터를 가져온 후 로컬스토리지에 저장
        localStorage.setItem('caregivers', JSON.stringify(data.data));
      } else {
        throw new Error('잘못된 데이터 구조입니다.');
      }
    } catch (error: any) {
      setError(error.message);
      console.error('요양사 목록을 가져오는 중 오류가 발생했습니다:', error);
    }
  };

  const handleMatchingClick = (caregiver: Caregiver) => {
    // '노인'으로 로그인한 경우에만 매칭 신청 가능
    if (role === '노인') {
      const confirmMatch = window.confirm('매칭 신청하시겠습니까?');
      if (confirmMatch) {
        // 로그인된 노인의 정보
        const dependent = {
          name: user?.name,  
          userId: user?.id,      
          phone: user?.phone 
        };
        console.log(user+"rgegrege");

        navigate('/matching/profile', {
          state: { caregiver, dependent }
        });
      }
    } else {
      alert('노인만 매칭 신청할 수 있습니다.');
    }
  };

  return (
    <div className="caregiver-list-container">
      <h1 className="title">요양사 리스트</h1>
      {error ? (
        <p className="error-message">{error}</p>
      ) : caregivers.length > 0 ? (
        <ul className="caregiver-list">
          {caregivers.map((caregiver) => (
            <li key={caregiver.id} className="caregiver-item">
              <h3>이름: {caregiver.name}</h3>
              <p>닉네임: {caregiver.nickname}</p>
              <p>이메일: {caregiver.email}</p>
              <button 
                className="view-profile-btn" 
                onClick={() => handleMatchingClick(caregiver)}>
                매칭 신청하기
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data">등록된 요양사가 없습니다.</p>
      )}
    </div>
  );
};

export default CaregiverList;
