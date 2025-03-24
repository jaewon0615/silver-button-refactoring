/** @jsxImportSource @emotion/react */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as s from './style';
import { SiAccuweather } from 'react-icons/si';
import { MdMood } from 'react-icons/md';

export interface DiaryType {
  id: number;
  userId: string;
  title: string;
  content: string;
  weather: string;
  mood: string;
  createdAt: number;
}

export default function DiaryDetail() {
  const { id } = useParams<{ id: string }>();
  const [diary, setDiary] = useState<DiaryType | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 추가
  const [error, setError] = useState<string | null>(null); // 오류 상태 추가

  useEffect(() => {
    if (id) {
      fetchDiary(id);
    }
  }, [id]);

  const navigate = useNavigate();

  const handleBack = () => {
    if (diary?.userId) {
      navigate(`/my-page/diary/${diary.userId}`); // userId를 diary에서 가져옴
    }
  };

  const fetchDiary = async (id: string) => {
    try {
      setLoading(true); // 데이터 로딩 시작
      const response = await axios.get(`http://localhost:4040/api/v1/diary/diaryId/${id}`);
      setDiary(response.data.data);
    } catch (error) {
      console.error('Failed to fetch diary', error);
      setError('일기를 불러오는 데 실패했습니다.'); // 오류 메시지 설정
    } finally {
      setLoading(false); // 데이터 로딩 종료
    }
  };

  return (
    <div css={s.detailContainer}>
      <div css={s.conttSt}>
      {loading ? (
        <p>일기를 불러오는 중...</p>
      ) : error ? (
        <p>{error}</p> // 오류 메시지 표시
      ) : diary ? (
        <div css={s.diaryContainer}>
          <div css={s.title}>제목 : {diary.title}</div>
          <div css={s.column}>
            <div css={s.weather}>
              <SiAccuweather css={s.icon} />
              날씨 : {diary.weather}
            </div>
            <div css={s.weather}>
              <MdMood css={s.icon} />
              기분: {diary.mood}
            </div>
          </div>
          <div css={s.contents}>{diary.content}</div>
          <p css={s.time}>작성 일자: {new Date(diary.createdAt).toLocaleDateString()}</p>
          <div>
            <button onClick={handleBack} css={s.backButton}>
              이전 페이지
            </button>
          </div>
        </div>
      ) : (
        <p>일기가 존재하지 않습니다.</p> // 일기가 없을 경우 메시지
      )}
      </div>
      
    </div>
  );
}
