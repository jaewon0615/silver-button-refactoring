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

export default function LocationSeoul() {
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
        `http://localhost:4040/api/v1/destination/location/서울`
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

  const handleLocationJunggu = () => {
    navigate(`/destination/location/서울/중구`);
};

const handleLocationGangnamgu = () => {
  navigate(`/destination/location/서울/강남구`);
};

const handleLocationYeongdeungpo = () => {
  navigate(`/destination/location/서울/영등포구`);
};

const handleLocationSongpa = () => {
  navigate(`/destination/location/서울/송파구`);
};

const handleLocationGangbuk = () => {
  navigate(`/destination/location/서울/강북구`);
};

const handleLocationMapo = () => {
  navigate(`/destination/location/서울/마포구`);
};

const handleLocationSeocho = () => {
  navigate(`/destination/location/서울/서초구`);
};

const handleLocationJongro = () => {
  navigate(`/destination/location/서울/종로구`);
};

const navigateToDestinationDetail = (destinationId: number) => {
  navigate(`/my-page/destination/id/${destinationId}`); // 경로를 수정하여 이동합니다.
};

  return (
    <div css={s.container}>
      <h1>서울 여행지</h1>
      <input
        type="text"
        placeholder="여행지 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        css={s.searchInput}
      />
      <div css={s.buttonContainer}>
      <button onClick={handleLocationJunggu} css={s.buttonStyleJg}>중구</button>
      <button onClick={handleLocationGangnamgu} css={s.buttonStyleGn}>강남구</button>
      <button onClick={handleLocationYeongdeungpo} css={s.buttonStyleYDP}>영등포구</button>
      <button onClick={handleLocationSongpa} css={s.buttonStyleSP}>송파구</button>
      <button onClick={handleLocationGangbuk} css={s.buttonStyle}>강북구</button>
      <button onClick={handleLocationMapo} css={s.buttonStyle}>마포구</button>
      <button onClick={handleLocationSeocho} css={s.buttonStyle}>서초구</button>
      <button onClick={handleLocationJongro} css={s.buttonStyle}>종로구</button>

      </div>
      
      <div css={s.gridContainer}>
        {currentRecords.length > 0 ? (
          currentRecords.map((destination) => (
            <div key={destination.id} css={s.card}>
              <img src={destination.imageUrl} alt={destination.name} css={s.image} onClick={() =>navigateToDestinationDetail(destination.id)}/>
              <div css={s.cardContent}>
                <h2 css={s.title}>{destination.name}</h2>
                <p css={s.category}>{destination.category}</p>
                <p css={s.location}>{destination.location}</p>
                <p css={s.viewCount}>조회수: {destination.viewCount}</p>
              </div>
            </div>
          ))
        ) : (
          <p>등록된 여행지가 없습니다</p>
        )}
      </div>
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
  );
}
