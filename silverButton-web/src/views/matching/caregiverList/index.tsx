/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const CaregiverList = () => {
  const [caregivers, setCaregivers] = useState<Caregiver[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const role = useAuthStore((state) => state.user?.role);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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
    localStorage.clear();
    fetchCaregivers();
  }, []);

  const fetchCaregivers = async () => {
    try {
      const response = await fetch(
        "http://localhost:4040/api/v1/matching/search-caregiver",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("요양사 리스트를 확인하려면 로그인 해주세요.");
      }

      const data = await response.json();
      console.log("✅ API 응답 데이터:", data);
      console.log("✅ 요양사 목록:", data.data);

      if (Array.isArray(data.data)) {
        setCaregivers(data.data);
        localStorage.setItem("caregivers", JSON.stringify(data.data));
      } else {
        throw new Error("잘못된 데이터 구조입니다.");
      }
    } catch (error: any) {
      setError(error.message);
      console.error("요양사 목록을 가져오는 중 오류 발생:", error);
    }
  };

  const handleMatchingClick = (caregiver: Caregiver) => {
    if (role === "노인") {
      const confirmMatch = window.confirm("매칭 신청하시겠습니까?");
      if (confirmMatch) {
        const dependent = {
          name: user?.name,
          userId: user?.id,
          phone: user?.phone,
        };

        navigate("/matching/profile", {
          state: { caregiver, dependent },
        });
      }
    } else {
      alert("노인만 매칭 신청할 수 있습니다.");
    }
  };

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = caregivers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(caregivers.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div css={s.CaregiverListContainer}>
      <h1 css={s.Title}>신청 가능한 요양사 리스트</h1>
      {error ? (
        <p css={s.ErrorMessage}>{error}</p>
      ) : currentItems.length > 0 ? (
        <ul css={s.CaregiverListWrapper}>
          {currentItems.map((caregiver, index) => (
            <li key={caregiver.id || index} css={s.CaregiverItem}>
              <h3 css={s.CaregiverNameStyle}>이름: {caregiver.name}</h3>
              <p css={s.CaregiverNicknameStyle}>닉네임: {caregiver.nickname}</p>
              <p css={s.CaregiverEmailStyle}>이메일: {caregiver.email}</p>
              <p css={s.CaregiverBirthDateStyle}>
                생년월일: {caregiver.birthDate.slice(0, 10)}
              </p>
              <button
                css={s.ViewProfileButton}
                onClick={() => handleMatchingClick(caregiver)}
              >
                매칭 신청하기
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data">등록된 요양사가 없습니다.</p>
      )}
      <div css={s.paginationContainer}>
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          css={s.arrowButton}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            css={[
              s.paginationButton,
              currentPage === index + 1 && s.paginationButtonActive,
            ]}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageClick(currentPage + 1)}
          css={s.arrowButton}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CaregiverList;
