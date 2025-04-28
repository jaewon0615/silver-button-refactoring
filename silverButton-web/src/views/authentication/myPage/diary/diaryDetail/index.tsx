/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./style";
import { SiAccuweather } from "react-icons/si";
import { MdMood } from "react-icons/md";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetchDiary(id);
    }
  }, [id]);

  const navigate = useNavigate();

  const handleBack = () => {
    if (diary?.userId) {
      navigate(`/my-page/diary/${diary.userId}`);
    }
  };

  const fetchDiary = async (id: string) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:4040/api/v1/diary/diaryId/${id}`
      );
      setDiary(response.data.data);
    } catch (error) {
      console.error("Failed to fetch diary", error);
      setError("일기를 불러오는 데 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div css={s.detailContainer}>
      <div css={s.conttSt}>
        {loading ? (
          <p>일기를 불러오는 중...</p>
        ) : error ? (
          <p>{error}</p>
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
            <p css={s.time}>
              작성 일자: {new Date(diary.createdAt).toLocaleDateString()}
            </p>
            <div>
              <button onClick={handleBack} css={s.backButton}>
                이전 페이지
              </button>
            </div>
          </div>
        ) : (
          <p>일기가 존재하지 않습니다.</p>
        )}
      </div>
    </div>
  );
}
