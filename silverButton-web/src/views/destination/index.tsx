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

  return (
    <div css={s.container}>
      <h1>여행지 목록</h1>
      <input
        css={s.searchInput}
        type="text"
        placeholder="여행지 검색..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div css={s.gridContainer}>
        {currentRecords.length > 0 ? (
          currentRecords.map((destination) => (
            <div key={destination.id} css={s.card}>
              <img src={destination.imageUrl} alt={destination.name} css={s.image} />
              <h2 css={s.title}>{destination.name}</h2>
              <p css={s.category}>카테고리: {destination.category}</p>
              <p css={s.location}>지역: {destination.location}</p>
              <p>{destination.address}</p>
            </div>
          ))
        ) : (
          <p>등록된 여행지가 없습니다</p>
        )}
      </div>

      <div css={s.pagination}>
        <button
          css={s.pageButton}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          이전
        </button>
        <span>
          {currentPage} / {totalPages}
        </span>
        <button
          css={s.pageButton}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
}
