/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as s from './style';

export type InquiryStatus = "PENDING" | "IN_PROGRESS" | "COMPLETED";

export interface InquiryType {
  id: number;
  userId: string;
  title: string;
  content: string;
  status: InquiryStatus;
  createdAt: number;
  nickname: string;
  password: string;
}

export default function InquiryDetail() {
  const { id } = useParams<{ id: string }>();
  const [inquiryItem, setInquiryItem] = useState<InquiryType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInquiryDetail = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/inquiries/id/${id}`);
        setInquiryItem(response.data.data);
      } catch (e) {
        console.error("failed", e);
        setError("문의글을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchInquiryDetail();
  }, [id]);

  return (
    <div css={s.container}>
      <div css={s.card}>
        {loading ? (
          <div css={s.loading}>로딩중...</div>
        ) : error ? (
          <div css={s.error}>{error}</div>
        ) : inquiryItem ? (
          <div css={s.detailContent}>
            <h1 css={s.title}>제목: {inquiryItem.title}</h1>
            <p css={s.content}>내용: {inquiryItem.content}</p>
            <div css={s.row}>
            <div css={s.status}>
              상태: {
                inquiryItem.status === "PENDING"
                  ? "대기중"
                  : inquiryItem.status === "IN_PROGRESS"
                  ? "처리중"
                  : "완료됨"
              }
            </div>
            <div>
              <button css={s.statusButton}>답변하기</button>
            </div>
            </div>
            
            
          </div>
        ) : (
          <div css={s.empty}>문의글이 존재하지 않습니다.</div>
        )}
      </div>
    </div>
  );
}