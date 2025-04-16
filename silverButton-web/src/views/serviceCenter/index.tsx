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
  nickname: string;
  password: string; // ✅ 추가된 비밀번호 필드
}

export default function ServiceCenter() {
  const { id } = useParams<{ id: string }>();
  const [serviceCenter, setServiceCenter] = useState<ServiceCenterType[]>([]);
  const [replyCountMap, setReplyCountMap] = useState<{ [key: number]: number }>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<ServiceCenterType | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const recordPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    fetchServiceCenter();
  }, []);

  useEffect(() => {
    if (serviceCenter.length > 0) {
      checkReplyCountForAll();
    }
  }, [serviceCenter]);

  const fetchServiceCenter = async () => {
    try {
      const response = await axios.get(`http://localhost:4040/api/v1/inquiries/all/all`);
      setServiceCenter(response.data.data);
    } catch (e) {
      console.error("문의글 불러오기 실패", e);
    }
  };

  const checkReplyCountForAll = async () => {
    const newCountMap: { [key: number]: number } = {};

    await Promise.all(
      serviceCenter.map(async (inquiry) => {
        try {
          const res = await axios.get(`http://localhost:4040/api/v1/inquiries-replies/inquiryId/${inquiry.id}`);
          newCountMap[inquiry.id] = res.data.data.length;
        } catch (e) {
          console.error(`답변 확인 실패 (ID: ${inquiry.id})`, e);
          newCountMap[inquiry.id] = 0;
        }
      })
    );

    setReplyCountMap(newCountMap);
  };

  const filteredInquiries = serviceCenter.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = filteredInquiries.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(filteredInquiries.length / recordPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePost = () => {
    navigate(`/inquiries`);
  };

  const openPasswordModal = (inquiry: ServiceCenterType) => {
    setSelectedInquiry(inquiry);
    setInputPassword("");
    setError("");
    setModalOpen(true);
  };

  const handlePasswordCheck = () => {
    if (!inputPassword || inputPassword.length !== 4) {
      setError("4자리 비밀번호를 입력해주세요.");
      return;
    }

    if (selectedInquiry && inputPassword === selectedInquiry.password) {
      navigate(`/inquiries/${selectedInquiry.id}`);
      setModalOpen(false);
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <div css={s.container}>
      <div css={s.conttSt}>
        <div css={s.header}>
          <h1 css={s.title}>고객센터</h1>
          <button onClick={handlePost}>등록하기</button>
        </div>

        {currentRecords.length > 0 ? (
          currentRecords.map((service) => {
            const replyCount = replyCountMap[service.id] || 0;
            const statusLabel =
              replyCount > 0 ? "완료됨" :
              service.status === "IN_PROGRESS" ? "처리중" : "대기중";

            return (
              <div key={service.id} css={s.inquiryCard}>
                <div css={s.inquiryTitle} onClick={() => openPasswordModal(service)}>
                  {service.title} {" "}
                  <span css={{ fontSize: "1.2rem", color: "gray" }}>
                    ({replyCount})
                  </span>
                </div>
                <div css={s.inquiryNick}>{service.nickname}</div>
                <div css={s.inquiryStatus}>상태: {statusLabel}</div>
                <div css={s.inquiryStatus}>
                  {new Date(service.createdAt).toLocaleString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </div>
              </div>
            );
          })
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

        {/* 🔐 비밀번호 입력 모달 */}
        {modalOpen && selectedInquiry && (
          <div css={s.modalOverlay}>
            <div css={s.modalContent}>
              <h3 css={s.modalTitle}>비밀번호 확인</h3>
              <input
                type="password"
                value={inputPassword}
                maxLength={4}
                placeholder="4자리 비밀번호"
                onChange={(e) => setInputPassword(e.target.value)}
                css={s.modalInput}
              />
              {error && <span css={s.modalError}>{error}</span>}
              <div css={s.modalButtons}>
                <button onClick={() => setModalOpen(false)} css={s.modalButton}>취소</button>
                <button onClick={handlePasswordCheck} css={s.modalButton}>확인</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
