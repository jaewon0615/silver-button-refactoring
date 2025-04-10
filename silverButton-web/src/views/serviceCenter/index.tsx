/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export type InquiryStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

export interface ServiceCenterType {
  id: number;
  userId: string;
  title: string;
  content: string;
  status: InquiryStatus;
  createdAt: number;
  nickname:string;
}

export default function ServiceCenter() {
  const { id } = useParams<{ id: string }>();
  const [serviceCenter, setServiceCentet] = useState<ServiceCenterType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const recordPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    fetchServiceCenter();
  }, []);

  const fetchServiceCenter = async () => {
    try {
      const response = await axios.get(`http://localhost:4040/api/v1/inquiries/all/all`);
      setServiceCentet(response.data.data);
    } catch (e) {
      console.error("failed", e);
    }
  };

  const filteredDestination = serviceCenter.filter((serviceCenter) =>
    serviceCenter.title.toLowerCase().includes(searchTerm.toLowerCase())
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

  const handlePost = () => {
    navigate(`/inquiries`)
  }

    // 제목 클릭 시 상세 페이지로 이동하는 함수 수정
    const navigateToInquiryDetail = (id: number) => {
      navigate(`/inquiries/${id}`); // ✅ 올바른 경로 이동
    };

  return (
    <div css={s.container}>
      <div css={s.conttSt}>
        <div css={s.header}>
          <h1 css={s.title}>고객센터</h1>
          <button onClick={handlePost}>등록하기</button>
        </div>

        {currentRecords.length > 0 ? (
          currentRecords.map((service) => (
            <div key={service.id} css={s.inquiryCard}>
              <div css={s.inquiryTitle} onClick={() => navigateToInquiryDetail(service.id)}>{service.title}</div>
              <div css={s.inquiryNick}>{service.nickname}</div>
              <div css={s.inquiryStatus}>상태: {service.status}</div>
              <div css={s.inquiryStatus}>{service.createdAt}</div>
            </div>
          ))
        ) : (
          <p>등록된 문의가 없습니다.</p>
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
  );
}
