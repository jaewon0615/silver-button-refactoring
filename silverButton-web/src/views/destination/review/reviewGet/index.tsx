/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as s from './style'; // 스타일을 별도로 분리한 파일을 import

export interface ReviewGetType {
  id: number;
  userId: string;
  destinationId: number;
  name: string;  // 여행지 이름
  nickname: string;  // 유저 닉네임
  rating: number;
  reviewText: string;
  createdAt: number;  // createdAt은 타임스탬프 형태로 받아온다고 가정
}

export default function ReviewGet() {
  const { destinationId } = useParams<{ destinationId: string }>();
  const [reviewGet, setReviewGet] = useState<ReviewGetType[]>([]);
  const [destinationName, setDestinationName] = useState<string>(""); // 여행지 이름 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [averageRating, setAverageRating] = useState<number | null>(null);

  useEffect(() => {
    fetchReviewGet();
    fetchDestinationName();
  }, [destinationId]);

  useEffect(() => {
    if (reviewGet.length > 0) {
      const totalRating = reviewGet.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating(totalRating / reviewGet.length);
    } else {
      setAverageRating(null);
    }
  }, [reviewGet]);

  const fetchReviewGet = async () => {
    try {
      const response = await axios.get(`http://localhost:4040/api/v1/review/destinationId/${destinationId}`);
      setReviewGet(response.data.data);
    } catch (error) {
      console.error("리뷰를 불러오는 데 실패했습니다.");
    }
  };

  const fetchDestinationName = async () => {
    try {
      const response = await axios.get(`http://localhost:4040/api/v1/destination/${destinationId}`);
      setDestinationName(response.data.name);
    } catch (error) {
      console.error("여행지 정보를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const filteredReviews = reviewGet.filter((review) =>
    review.nickname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = filteredReviews.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredReviews.length / recordPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 별점 표시 함수
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {'★'.repeat(fullStars)}{'☆'.repeat(emptyStars)}
      </>
    );
  };

  // 날짜 포맷 함수 (KST로 변환)
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const koreaOffset = 9 * 60; // 9 hours in minutes
    const localDate = new Date(date.getTime() + koreaOffset * 60 * 1000);
    return localDate.toISOString().replace('T', ' ').split('.')[0]; // 'T' 제거하고 밀리초 제외
  };

  return (
    <div css={s.detailContainer}>
      <div css={s.subCt}>
        <h1 css={s.title}>여행지 리뷰</h1>
        {destinationName && !loading && (
          <h1 css={s.destinationTitle}>{destinationName}</h1>
        )}
        {averageRating !== null && (
          <h2 css={s.averageRating}>실버니즈 평균 평점: {averageRating.toFixed(1)}점</h2>
        )}
        <div css={s.reviewListContainer}>
          {currentRecords.length > 0 ? (
            currentRecords.map((review) => (
              <div key={review.id} css={s.reviewBox}>
                <p css={s.name}>{review.name}</p>
                <p css={s.reviewNickname}>{review.nickname}</p>
                <div css={s.starRating}>{renderStars(review.rating)}</div>
                <p css={s.reviewText}>{review.reviewText}</p>
                <p css={s.colck}>{formatDate(review.createdAt)}</p>
              </div>
            ))
          ) : (
            <p css={s.errorMessage}>등록된 리뷰가 없습니다.</p>
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
      </div>
    </div>
  );
}
