/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

export interface ReplyType {
  id: number;
  userId: string;
  inquiryId: number;
  reply: string;
  createdAt: number;
}

export default function InquiryDetail() {
  const { id } = useParams<{ id: string }>();
  const [inquiryItem, setInquiryItem] = useState<InquiryType | null>(null);
  const [replyItem, setReplyItem] = useState<ReplyType[] | null>(null); // ✅ 배열 형태로 수정
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInquiryDetail = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/inquiries/id/${id}`);
        setInquiryItem(response.data.data);
      } catch (e) {
        console.error("failed to fetch inquiry", e);
        setError("문의글을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    const fetchReplies = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`http://localhost:4040/api/v1/inquiries-replies/inquiryId/${id}`);
        setReplyItem(response.data.data); // ✅ 배열로 저장
      } catch (e) {
        console.error("failed to fetch replies", e);
        // 실패해도 error는 inquiry 용만 유지
      }
    };

    fetchInquiryDetail();
    fetchReplies();
  }, [id]);

  // ✅ 비밀번호 확인 후 페이지 이동
  const navigateToInquiryReply = (id: number) => {
    const enteredPassword = prompt("비밀번호를 입력하세요:");
    if (enteredPassword === null) return;

    if (enteredPassword === inquiryItem?.password) {
      navigate(`/inquiries-replies/${id}`);
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
  
    // 한국 시간(KST)으로 변환: UTC+9
    const koreaOffset = 9 * 60; // 9 hours in minutes
    const localDate = new Date(date.getTime() + koreaOffset * 60 * 1000);
  
    return localDate.toISOString().replace('T', ' ').split('.')[0]; // 'T' 제거하고 밀리초 제외
  };

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
              <div>
                <button css={s.statusButton} onClick={() => navigateToInquiryReply(inquiryItem.id)}>
                  답변하기
                </button>
              </div>
            </div>

            {/* ✅ 답변 목록 */}
            <div css={s.replySection}>
              <h2 css={s.replyTitle}>답변</h2>
              {replyItem && replyItem.length > 0 ? (
                replyItem.map((reply) => (
                  <div key={reply.id} css={s.replyBox}>
                    <p css={s.replyContent}>{reply.reply}</p>
                    <p css={s.replyDate}>
                      작성일: {new Date(reply.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))
              ) : (
                <p css={s.noReply}>아직 등록된 답변이 없습니다.</p>
              )}
            </div>
          </div>
        ) : (
          <div css={s.empty}>문의글이 존재하지 않습니다.</div>
        )}
      </div>
    </div>
  );
}
