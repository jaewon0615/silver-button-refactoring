/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as s from "./style"; // 스타일을 별도로 분리한 파일을 import

export interface ReviewType {
  id: number;
  userId: string;
  destinationId: number;
  rating: number;
  reviewText: string;
  createdAt: number;
  name: string;
}

export default function Review() {
  const { id } = useParams<{ id: string }>();
  const [review, setReview] = useState<ReviewType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const [newReview, setNewReview] = useState<ReviewType>({
    id: 0,
    userId: "",
    destinationId: 0,
    rating: 0,
    reviewText: "",
    createdAt: Date.now(),
    name: "",
  });
  const [destinationName, setDestinationName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const destinationId = id ? parseInt(id, 10) : 0;

  const [hoveredRating, setHoveredRating] = useState<number>(0); // Hover된 별점 상태

  useEffect(() => {
    if (destinationId) {
      fetchDestinationName(destinationId);
    }
  }, [destinationId]);

  const fetchDestinationName = async (destinationId: number) => {
    try {
      const response = await axios.get(`http://localhost:4040/api/v1/destination/${destinationId}`);
      setDestinationName(response.data.name);
    } catch (error) {
      console.error("Error fetching destination name:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddReview = async () => {
    const token = cookies.token;
    if (!token) {
      navigate("/auth");
      alert("로그인한 사용자만 리뷰를 작성할 수 있습니다. 로그인 창으로 이동합니다.")
      return;
    }

    const reviewData = { ...newReview, destinationId };
    try {
      await axios.post(`http://localhost:4040/api/v1/review/${destinationId}`, reviewData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("리뷰가 등록되었습니다!");
      setNewReview({
        id: 0,
        userId: "",
        destinationId,
        rating: 0,
        reviewText: "",
        createdAt: Date.now(),
        name: "",
      });
    } catch (error) {
      console.error("Error posting review:", error);
      if (error === 403) {
        alert("권한이 없습니다. 로그인 후 다시 시도하세요.");
      }
    }
  };

  const filteredDiaries = review.filter((review) =>
    review.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = filteredDiaries.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredDiaries.length / recordPerPage);

  // 별점 클릭 이벤트 처리 (0.5 단위로 클릭)
  const handleRatingClick = (star: number) => {
    const roundedRating = Math.round(star * 2) / 2; // 0.5 단위로 반올림
    setNewReview((prev) => ({ ...prev, rating: roundedRating }));
  };

  // 별점 hover 이벤트 처리 (미리 보여주기)
  const handleMouseEnter = (star: number) => {
    setHoveredRating(star);
  };

  // hover가 끝났을 때, 상태 초기화
  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleReviewGet = () => {
    navigate(`/review/destinationId/${id}`);
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  const maxTextLength = 300; // 최대 글자 수 설정



  return (
    <div css={s.detailContainer}>
      <div css={s.conttSt}>
      <h2 css={s.title}>여행지 리뷰</h2>
      <div css={s.formContainer}>
        <h3 css={s.formTitle}>{destinationName}리뷰 작성</h3>
        <div css={s.starRating}>
          {/* 별을 1부터 5까지 반복하여 표시 */}
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRatingClick(star)} // 클릭하면 별점 설정
              onMouseEnter={() => handleMouseEnter(star)} // hover 시 미리 보여주기
              onMouseLeave={handleMouseLeave} // hover 종료 시
              css={s.star}
            >
              {star <= (hoveredRating || newReview.rating) ? "★" : "☆"}
            </span>
          ))}
        </div>
        

<div css={s.inputContainer}>
  <textarea
    name="reviewText"
    value={newReview.reviewText}
    onChange={handleInputChange}
    placeholder="리뷰 내용을 입력하세요"
    maxLength={maxTextLength} // 글자 수 제한
    css={s.textarea}
  />
  <p css={s.charCount}>
    {newReview.reviewText.length} / {maxTextLength}
  </p>
</div>
        <div>

        </div>
        <button onClick={handleAddReview} disabled={!newReview.rating || !newReview.reviewText} css={s.button}>
          리뷰 등록
        </button>
        <button css={s.reviewbutton} onClick={handleReviewGet}>
          리뷰 조회
        </button>
      </div>
      </div>
      
    </div>
  );
}
