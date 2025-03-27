/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "./style";
import { IoIosArrowBack } from "react-icons/io";


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

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
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

  const handleLocationJeonbuk = () => {
    navigate(`/destination/location/전북`);
  };

  const handleLocationChungbuk = () => {
    navigate(`/destination/location/충북`);
  };

  const handleLocationChungnam = () => {
    navigate(`/destination/location/충남`);
  };

  const handleLocationGyeongki = () => {
    navigate(`/destination/location/경기`);
  };

  const navigateToDestinationDetail = (destinationId: number) => {
    navigate(`/my-page/destination/id/${destinationId}`);
  };

  return (
    <div css={s.container}>
      <h1>여행지 목록</h1>
      
      {/* Location buttons carousel */}
      <div css={s.buttonCarouselContainer}>
      <button css={s.arrowButtonTop} onClick={scrollLeft}>
            ◀
          </button>
        <div css={s.buttonCarousel} ref={carouselRef}>
          <button css={s.buttonStyleSeoul} onClick={handleLocationSeoul}><span>서울</span></button>
          <button css={s.buttonStyleBusan} onClick={handleLocationBusan}><span>부산</span></button>
          <button css={s.buttonStyleJeju} onClick={handleLocationJeju}><span>제주</span></button>
          <button css={s.buttonStyleGangwon} onClick={handleLocationGangwon}><span>강원</span></button>
          <button css={s.buttonStyleGyeongbuk} onClick={handleLocationGyeongbuk}><span>경북</span></button>
          <button css={s.buttonStyleGyeongnam} onClick={handleLocationGyeongnam}><span>경남</span></button>
          <button css={s.buttonStyleJeonnam} onClick={handleLocationJeonnam}><span>전남</span></button>
          <button css={s.buttonStyleJeonbuk} onClick={handleLocationJeonbuk}><span>전북</span></button>
          <button css={s.buttonStyleChungbuk} onClick={handleLocationChungbuk}><span>충북</span></button>
          <button css={s.buttonStyleChungnam} onClick={handleLocationChungnam}><span>충남</span></button>
          <button css={s.buttonStyleGyeongki} onClick={handleLocationGyeongki}><span>경기</span></button>
        </div>
        <button css={s.arrowButtonTop} onClick={scrollRight}>
          ▶
        </button>
      </div>
      
      <div css={s.gridContainer}>
        {currentRecords.length > 0 ? (
          currentRecords.map((destination) => (
            <div key={destination.id} css={s.card}>
              <img
                src={destination.imageUrl}
                alt={destination.name}
                css={s.image}
                onClick={() => navigateToDestinationDetail(destination.id)}
              />
              <h2 css={s.title}>{destination.name}</h2>
              <p css={s.category}>카테고리: {destination.category}</p>
              <p css={s.location}>지역: 