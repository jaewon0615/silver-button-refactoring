/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from './style';
import { FaTrash, FaCopy } from 'react-icons/fa'; // FaCopy 추가

export interface UserSavedDestinationType {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  address: string;
  openingHours: string;
  closedHours: string;
  phoneNumber: string;
  rating: number;
  imageUrl: string;
  destinationId: number;
}

export default function SaveDestination() {
  const { id } = useParams<{ id: string }>();
  const [userSavedDestinationItem, setUserSavedDestinationItem] = useState<UserSavedDestinationType[]>([]);
  const [cookies] = useCookies(['token']);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4; // 2x2 레이아웃으로 크게 표시

  const navigate = useNavigate();

  const fetchDestination = async () => {
    const token = cookies.token;
    if (id && token) {
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/user-saved-destination/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserSavedDestinationItem(response.data.data);
      } catch (e) {
        console.error('failed', e);
      }
    }
  };

  const handleDelete = async (userSavedDestinationId: number) => {
    const token = cookies.token;
  
    // 확인: 삭제하려는 ID가 제대로 전달되고 있는지 로그로 확인
    console.log("삭제하려는 여행지 ID:", userSavedDestinationId);
  
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
  
    try {
      // API 요청
      const response = await axios.delete(
        `http://localhost:4040/api/v1/user-saved-destination/${userSavedDestinationId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      // 삭제 성공 후 상태 업데이트
      setUserSavedDestinationItem((prev) =>
        prev.filter((destination) => destination.id !== userSavedDestinationId)
      );
      alert("저장된 여행지가 삭제되었습니다.");
    } catch (error) {
      // 오류 발생 시 로그 출력
      console.error("삭제 실패:", error);
      alert("저장된 여행지 삭제에 실패했습니다.");
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("주소가 클립보드에 복사되었습니다.");
    }).catch((error) => {
      console.error("주소 복사 실패:", error);
      alert("주소 복사에 실패했습니다.");
    });
  };

  useEffect(() => {
    fetchDestination();
  }, [id, cookies.token]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = userSavedDestinationItem.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(userSavedDestinationItem.length / recordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const navigateToDestinationDetail = (destinationId: number) => {
    navigate(`/my-page/destination/id/${destinationId}`); // 경로를 수정하여 이동합니다.
  };

  return (
    <div css={s.container}>
      <h1 css={s.title}>저장된 여행지 목록</h1>
      {currentRecords.length > 0 ? (
        <div css={s.gridContainer}>
          {currentRecords.map((userSavedDestination) => (
            <div key={userSavedDestination.id} css={s.card}>
              <div>
                <img
                  src={userSavedDestination.imageUrl}
                  alt={userSavedDestination.name}
                  css={s.image}
                  onClick={() => navigateToDestinationDetail(userSavedDestination.destinationId)}
                />
              </div>
              <div css={s.cardContent}>
                <h3 css={s.cardTitle}>{userSavedDestination.name}</h3>
                <p css={s.category}>{userSavedDestination.category}</p>
                <p css={s.info}>
                  {userSavedDestination.location} | {userSavedDestination.address}
                  <button 
                    onClick={() => handleCopy(userSavedDestination.address)} 
                    css={s.copyButton}
                    title="주소 복사"
                  >
                    <FaCopy />
                  </button>
                </p>
                <p css={s.hours}>{userSavedDestination.openingHours} ~ {userSavedDestination.closedHours}</p>
                <p css={s.phone}>☎ {userSavedDestination.phoneNumber}</p>
                <p css={s.rating}>⭐ {userSavedDestination.rating.toFixed(1)}</p>
                <button onClick={() => handleDelete(userSavedDestination.id)} css={s.deleteButton}><FaTrash /></button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p css={s.noData}>등록된 여행지가 없습니다</p>
      )}

      {totalPages > 1 && (
        <div css={s.paginationContainer}>
          <button onClick={() => handlePageChange(currentPage - 1)} css={s.paginationButton} disabled={currentPage === 1}>
            &lt; 이전
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => handlePageChange(index + 1)} css={s.paginationButton}>
              {index + 1}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} css={s.paginationButton} disabled={currentPage === totalPages}>
            다음 &gt;
          </button>
        </div>
      )}
    </div>
  );
}
