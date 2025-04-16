/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from './style';
import { FaTrash } from 'react-icons/fa';

export type InquiryStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

export interface MyInquiryType {
  id: number;
  userId: string;
  title: string;
  content: string;
  createdAt: number;
  status: InquiryStatus;
}

export default function MyInquiry() {
  const { id } = useParams<{ id: string }>();
  const [myInquiryItem, setMyInquiryItem] = useState<MyInquiryType[]>([]);
  const [replyCountMap, setReplyCountMap] = useState<{ [key: number]: number }>({});
  const [cookies] = useCookies(["token"]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;

  const navigate = useNavigate();

  const fetchInquiry = async () => {
    const token = cookies.token;
    if (id && token) {
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/inquiries/userId/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        setMyInquiryItem(response.data.data);
      } catch (e) {
        console.error("failed", e);
      }
    }
  };

  const fetchRepliesCount = async () => {
    const newCountMap: { [key: number]: number } = {};
    await Promise.all(
      myInquiryItem.map(async (inquiry) => {
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

  useEffect(() => {
    fetchInquiry();
  }, [id, cookies.token])

  useEffect(() => {
    if (myInquiryItem.length > 0) {
      fetchRepliesCount();
    }
  }, [myInquiryItem]);

  const handleDelete = async (inquiryId: number) => {
    const token = cookies.token;
    if (token) {
      try {
        await axios.delete(`http://localhost:4040/api/v1/inquiries/delete/${inquiryId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMyInquiryItem((prev) => prev.filter((inquiry) => inquiry.id !== inquiryId));
        alert("문의글 기록이 삭제되었습니다")
      } catch (e) {
        console.error("failed", e);
      }
    }
  }

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = myInquiryItem.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(myInquiryItem.length / recordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const navigateToinquiryId = (inquiryId: number) => {
    navigate(`/inquiries/${inquiryId}`);
  };

  return (
    <div css={s.container}>
      <h1>작성한 문의글 관리</h1>
      <div css={s.inquiryList}>
        {currentRecords.map((inquiry) => {
          const replyCount = replyCountMap[inquiry.id] || 0;
          const statusLabel = replyCount > 0 ? "완료됨" : inquiry.status === "IN_PROGRESS" ? "처리중" : "대기중";

          return (
            <div key={inquiry.id} css={s.inquiryCard}>
              <div>
                <div css={s.inquiryTitle} onClick={() => navigateToinquiryId(inquiry.id)}>
                  {inquiry.title} <span css={{ color: 'gray' }}>({replyCount})</span>
                </div>
                <div css={s.inquiryDate}>
                  {new Date(inquiry.createdAt).toLocaleString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                <div>{statusLabel}</div>
              </div>
              <div>
                <button onClick={() => handleDelete(inquiry.id)} css={s.deleteButton}>
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}

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
