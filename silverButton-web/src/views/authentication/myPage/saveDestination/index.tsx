/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from './style';

export interface DestinationType {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  address: string;
  openingHours: string;
  closingHours: string;
  phoneNumber: string;
  rating: number;
  imageUrl: string;
  destinationId:number;
}

export default function SaveDestination() {
  const { id } = useParams<{ id: string }>();
  const [destinationItem, setDestinationItem] = useState<DestinationType[]>([]);
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
        setDestinationItem(response.data.data);
      } catch (e) {
        console.error('failed', e);
      }
    }
  };

  useEffect(() => {
    fetchDestination();
  }, [id, cookies.token]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = destinationItem.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(destinationItem.length / recordsPerPage);

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
          {currentRecords.map((destination) => (
            <div key={destination.id} css={s.card}>
              <div>
              <img
                src={destination.imageUrl}
                alt={destination.name}
                css={s.image}
                onClick={() =>navigateToDestinationDetail(destination.destinationId)}
              />
            </div>
              <div css={s.cardContent}>
                <h3 css={s.cardTitle}>{destination.name}</h3>
                <p css={s.category}>{destination.category}</p>
                <p css={s.info}>{destination.location} | {destination.address}</p>
                <p css={s.hours}>{destination.openingHours} ~ {destination.closingHours}</p>
                <p css={s.phone}>☎ {destination.phoneNumber}</p>
                <p css={s.rating}>⭐ {destination.rating.toFixed(1)}</p>
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
