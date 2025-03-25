/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style";

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

export default function Destination() {
  const [destination, setDestination] = useState<DestinationType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const recordPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    fetchDestination();
  }, []);

  const fetchDestination = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/destination/`
      );
      setDestination(response.data.data);
    } catch (e) {
      console.error("failed", e);
    }
  };

  const filteredDestination = destination.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = filteredDestination.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredDestination.length / recordPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLocationSeoul = () => {
    navigate(`/destination/location/서울`);
};

const handleLocationBusan = () => {
  navigate(`/destination/location/부산`);
};

const handleLocationJeju = () => {
  navigate(`/destination/location/제주`);
};

const handleLocationGangwon = () => {
  navigate(`/destination/location/강원`);
};

const handleLocationGyeongbuk = () => {
  navigate(`/destination/location/경북`);
};

const handleLocationGyeongnam = () => {
  navigate(`/destination/location/경남`);
};

const handleLocationJeonnam = () => {
  navigate(`/destination/location/전남`);
};

  return (
    <div css={s.container}>
      <h1>여행지 목록</h1>
      {/* <input
        css={s.searchInput}
        type="text"
        placeholder="여행지 검색..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      <div css={s.buttonContainer}>
      <button css={s.buttonStyleSeoul} onClick={handleLocationSeoul}><span>서울</span></button>
      <button css={s.buttonStyleBusan} onClick={handleLocationBusan}><span>부산</span></button>
      <button css={s.buttonStyleJeju} onClick={handleLocationJeju}><span>제주</span></button>
      <button css={s.buttonStyleGangwon} onClick={handleLocationGangwon}><span>강원</span></button>
      <button css={s.buttonStyleGyeongbuk} onClick={handleLocationGyeongbuk}><span>경북</span></button>
      <button css={s.buttonStyleGyeongnam} onClick={handleLocationGyeongnam}><span>경남</span></button>
      <button css={s.buttonStyleJeonnam} onClick={handleLocationJeonnam}><span>전남</span></button>
      </div>
      
      

      <div css={s.gridContainer}>
        {currentRecords.length > 0 ? (
          currentRecords.map((destination) => (
            <div key={destination.id} css={s.card}>
              <img
                src={destination.imageUrl}
                alt={destination.name}
                css={s.image}
              />
              <h2 css={s.title}>{destination.name}</h2>
              <p css={s.category}>카테고리: {destination.category}</p>
              <p css={s.location}>지역: {destination.location}</p>
              <p css={s.location}>조회수: {destination.viewCount}회</p>
              <p>{destination.address}</p>
            </div>
          ))
        ) : (
          <p>등록된 여행지가 없습니다</p>
        )}
        {totalPages > 1 && (
          <div css={s.paginationContainer}>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              css={s.paginationButton}
              disabled={currentPage === 1}
            >
              &lt; 이전
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                css={s.paginationButton}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              css={s.paginationButton}
              disabled={currentPage === totalPages}
            >
              다음 &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
