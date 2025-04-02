/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as s from './style';
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";
import { useCookies } from 'react-cookie';

export interface ReviewGetType {
  id: number;
  userId: string;
  destinationId: number;
  name: string;
  nickname: string;
  rating: number;
  reviewText: string;
  createdAt: number;
  likeCount: number;
  dislikeCount: number;
  hasLiked: boolean; // 사용자가 좋아요를 눌렀는지 여부
  hasDisliked: boolean; // 사용자가 싫어요를 눌렀는지 여부
}

export default function ReviewGet() {
  const { destinationId } = useParams<{ destinationId: string }>();
  const [reviewGet, setReviewGet] = useState<ReviewGetType[]>([]);
  const [destinationName, setDestinationName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [averageRating, setAverageRating] = useState<number | null>(null);
  const [cookies] = useCookies(["token"]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");

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
      setReviewGet(response.data.data.map((review: { likeCount: any; dislikeCount: any; hasLiked: any; hasDisliked: any; }) => ({
        ...review,
        likeCount: review.likeCount ?? 0,
        dislikeCount: review.dislikeCount ?? 0,
        hasLiked: review.hasLiked ?? false, // 사용자가 좋아요를 눌렀는지 여부
        hasDisliked: review.hasDisliked ?? false // 사용자가 싫어요를 눌렀는지 여부
      })));
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

  const handleLike = async (reviewId: number, hasLiked: boolean) => {
    try {
      if (hasLiked) {
        // 이미 좋아요를 눌렀다면 좋아요 취소
        await axios.delete(`http://localhost:4040/api/v1/review-like/`, { data: { reviewId }, headers: { Authorization: `Bearer ${cookies.token}` } });
        setReviewGet(prevReviews =>
          prevReviews.map(review =>
            review.id === reviewId ? { ...review, likeCount: review.likeCount - 1, hasLiked: false } : review
          )
        );
      } else {
        // 좋아요를 누르지 않았다면 좋아요 추가
        await axios.post(`http://localhost:4040/api/v1/review-like/`, { reviewId }, { headers: { Authorization: `Bearer ${cookies.token}` } });
        setReviewGet(prevReviews =>
          prevReviews.map(review =>
            review.id === reviewId ? { ...review, likeCount: review.likeCount + 1, hasLiked: true } : review
          )
        );
      }
    } catch (error) {
      console.error("좋아요를 처리하는 데 실패했습니다.");
    }
  };

  const handleDislike = async (reviewId: number, hasDisliked: boolean) => {
    try {
      if (hasDisliked) {
        // 이미 싫어요를 눌렀다면 싫어요 취소
        await axios.delete(`http://localhost:4040/api/v1/review-dislike/`, { data: { reviewId }, headers: { Authorization: `Bearer ${cookies.token}` } });
        setReviewGet(prevReviews =>
          prevReviews.map(review =>
            review.id === reviewId ? { ...review, dislikeCount: review.dislikeCount - 1, hasDisliked: false } : review
          )
        );
      } else {
        // 싫어요를 누르지 않았다면 싫어요 추가
        await axios.post(`http://localhost:4040/api/v1/review-dislike/`, { reviewId }, { headers: { Authorization: `Bearer ${cookies.token}` } });
        setReviewGet(prevReviews =>
          prevReviews.map(review =>
            review.id === reviewId ? { ...review, dislikeCount: review.dislikeCount + 1, hasDisliked: true } : review
          )
        );
      }
    } catch (error) {
      console.error("싫어요를 처리하는 데 실패했습니다.");
    }
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {'★'.repeat(fullStars)}{'☆'.repeat(emptyStars)}
      </>
    );
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    const koreaOffset = 9 * 60;
    const localDate = new Date(date.getTime() + koreaOffset * 60 * 1000);
    return localDate.toISOString().replace('T', ' ').split('.')[0];
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

  return (
    <div css={s.detailContainer}>
      <div css={s.subCt}>
        <h1 css={s.title}>여행지 리뷰</h1>
        {destinationName && !loading && <h1 css={s.destinationTitle}>{destinationName}</h1>}
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
                <div css={s.count}>
                  <button onClick={() => handleLike(review.id, review.hasLiked)} css={s.likeButton}>
                    <AiTwotoneLike css={s.icon} /> {review.likeCount}
                  </button>
                  <button onClick={() => handleDislike(review.id, review.hasDisliked)} css={s.likeButton}>
                    <AiTwotoneDislike css={s.icon} /> {review.dislikeCount}
                  </button>
                </div>
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
