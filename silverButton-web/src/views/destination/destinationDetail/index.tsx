/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./style";
import { BiCategory } from "react-icons/bi";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaRoad, FaLocationArrow, FaClock, FaPhoneAlt, FaStar, FaSubway } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { IoIosPricetags } from "react-icons/io";
import { MdDescription } from "react-icons/md";
import { TbEyeSearch } from "react-icons/tb";
import { FaCopy } from "react-icons/fa";

export interface DestinationType {
  id: number;
  name: string;
  category: string;
  description: string;
  location: string;
  address: string;
  openingHours: string;
  closingHours: string;
  publicTransportation: string;
  phoneNumber: string;
  website: string;
  ticketPrice: string;
  facilities: string;
  rating: number;
  imageUrl: string;
  createdAt: number;
  viewCount: number;
}

export default function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<DestinationType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (id) {
      fetchDestination(id);
    }
  }, [id]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/destination`);
  };

  const handleReview = () => {
    navigate(`/review/${id}`);
  };

  const handleReviewGet = () => {
    navigate(`/review/destinationId/${id}`);
  };

  const fetchDestination = async (id: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:4040/api/v1/destination/id/${id}`
      );
      setDestination(response.data.data);
    } catch (error) {
      console.error("failed", error);
    } finally {
      setLoading(false);
    }
  };

  // 여행지를 저장하는 함수
  const saveDestination = async () => {
    if (!token) {
      alert("로그인 상태에서만 여행지를 저장할 수 있습니다.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4040/api/v1/user-saved-destination/",
        {
          destinationId: destination?.id, // 여행지 ID
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // JWT 토큰을 헤더에 포함
          },
        }
      );

      if (response.data.result) {
        alert("여행지가 저장되었습니다!");
      } else {
        alert("여행지를 저장하는데 실패했습니다.");
      }
    } catch (error) {
      console.error("저장 실패", error);
      alert("저장에 실패했습니다.");
    }
  };

  // 주소를 클립보드에 복사하는 함수
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("주소가 클립보드에 복사되었습니다.");
    }).catch((error) => {
      console.error("주소 복사 실패:", error);
      alert("주소 복사에 실패했습니다.");
    });
  };

  return (
    <div css={s.detailContainer}>
      <div css={s.conttSt}>
        {loading ? (
          <p>여행지를 불러오는 중...</p>
        ) : error ? (
          <p>{error}</p>
        ) : destination ? (
          <div css={s.diaryContainer}>
            <div css={s.title}>
              {destination.name}{" "}
              <span css={s.rating}>
                <FaStar css={s.star} />
                {destination.rating}
                <button onClick={saveDestination} css={s.saveButton}>저장</button>
              </span>
            </div>
            <div>
              <img
                src={destination.imageUrl}
                alt={destination.name}
                css={s.image}
              />
            </div>

            <div css={s.flex}>
              <div css={s.column}>
                <BiCategory />
                카테고리: {destination.category}
              </div>
              <div css={s.column}>
                <FaLocationArrow />
                지역: {destination.location}
              </div>
            </div>
            <div css={s.flex}>
              <div css={s.column}>
                <FaClock /> 운영시간: {destination.openingHours}~{destination.closingHours}
              </div>
              <div css={s.column}>
                <FaRoad />
                상세주소: {destination.address}
                <button onClick={() => handleCopy(destination.address)} css={s.copyButton} title="주소 복사">
                <FaCopy />
                </button>
              </div>
            </div>

            <div css={s.column}>
              <MdDescription />
              {destination.description}
            </div>

            <div css={s.flex}>
              <div css={s.column}>
                <FaPhoneAlt />
                {destination.phoneNumber}
              </div>
              <div css={s.column}>
                <CgWebsite />
                <a
                  href={
                    destination.website.startsWith("http")
                      ? destination.website
                      : `https://${destination.website}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {destination.website}
                </a>
              </div>
            </div>
            <div css={s.flex}>
              <div css={s.column}>
                <IoIosPricetags />
                {destination.ticketPrice}
              </div>
            </div>

            <div css={s.flex}>
              <div css={s.column}>
                <FaSubway />
                {destination.publicTransportation}
              </div>
              <div css={s.column}>
                <TbEyeSearch />
                조회수: {destination.viewCount}회
              </div>
            </div>
            
            <div css={s.buttonCt}>
            <button onClick={handleBack} css={s.backButton}>
              이전 페이지
            </button>
            <button css={s.reviewButton} onClick={handleReview}>
              리뷰 작성
            </button>
            <button css={s.reviewGetButton} onClick={handleReviewGet}>
              리뷰 조회
            </button>
            </div>
            
          </div>
        ) : (
          <p>여행지가 존재하지 않습니다</p>
        )}
      </div>
    </div>
  );
}
