/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import * as s from "./style";
import { userId } from "../../../drug/medicineListPage/style";
import { SiAccuweather } from "react-icons/si";
import { MdMood } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

export interface DiaryType {
  id: number;
  userId: string;
  title: string;
  content: string;
  weather: string;
  mood: string;
  createdAt: number;
}

export default function Diary() {
  const { id } = useParams<{ id: string }>();
  const [diaries, setDiaries] = useState<DiaryType[]>([]);
  const [cookies] = useCookies(["token"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const [newDiary, setNewDiary] = useState<DiaryType>({
    id: 0,
    userId: id || "",
    title: "",
    content: "",
    weather: "",
    mood: "",
    createdAt: Date.now(),
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchDiaries();
  }, [id, cookies.token]);

  const fetchDiaries = async () => {
    const token = cookies.token;

    if (!id) {
      console.error("Error: id 값이 없습니다");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/diary/userId/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setDiaries(response.data.data || []);
    } catch (error) {
      console.error("Failed to fetch diaries", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewDiary({ ...newDiary, [name]: value });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = cookies.token;

    if (!id) {
      alert("유효하지 않은 사용자입니다.");
      return;
    }

    try {
      await axios.post(`http://localhost:4040/api/v1/diary/`, newDiary, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("일기 등록 완료");
      setNewDiary({
        id: 0,
        userId: id,
        title: "",
        content: "",
        weather: "",
        mood: "",
        createdAt: Date.now(),
      });
      fetchDiaries();
    } catch (error) {
      console.error("Failed to save diary", error);
      alert("일기 등록에 실패했습니다.");
    }
  };

  const handleDelete = async (diaryId: number) => {
    const token = cookies.token;

    if (!window.confirm("정말 삭제하시겠습니까?")) return;

    try {
      await axios.delete(`http://localhost:4040/api/v1/diary/${diaryId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDiaries((prev) => prev.filter((diary) => diary.id !== diaryId));
      alert("일기가 삭제되었습니다.");
    } catch (error) {
      console.error("Failed to delete diary", error);
      alert("일기 삭제에 실패했습니다.");
    }
  };

  const filteredDiaries = diaries.filter((diary) =>
    diary.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastRecord = currentPage * recordPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordPerPage;
  const currentRecords = filteredDiaries.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(filteredDiaries.length / recordPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const navigateToDiaryDetail = (diaryId: number) => {
    navigate(`/my-page/diary/diaryId/${diaryId}`);
  };

  return (
    <div css={s.container}>
      <div css={s.conttSt}>
        <div css={s.recordContainer}>
          <h1 css={s.title}>오늘의 일기</h1>
          <form onSubmit={handleSubmit} css={s.form}>
            <div css={s.inputGroup}>
              <label css={s.label}>제목</label>
              <input
                type="text"
                name="title"
                value={newDiary.title}
                onChange={handleInputChange}
                placeholder="제목"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>
                <SiAccuweather css={s.icon} />
                날씨
              </label>
              <input
                type="text"
                name="weather"
                value={newDiary.weather}
                onChange={handleInputChange}
                placeholder="예) 눈,비,맑음,흐림"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>
                <MdMood css={s.icon} />
                기분
              </label>
              <input
                type="text"
                name="mood"
                value={newDiary.mood}
                onChange={handleInputChange}
                placeholder="예)행복,좋음,슬픔,화남,무기력"
                required
                css={s.input}
              />
            </div>
            <div css={s.contentGroup}>
              <label css={s.label}>내용</label>
              <textarea
                name="content"
                value={newDiary.content}
                onChange={handleInputChange}
                placeholder="내용"
                required
                css={s.contentInput}
              />
            </div>

            <button type="submit" css={s.submitButton}>
              일기 등록
            </button>
          </form>
        </div>

        <div css={s.recordContainer}>
          <h1 css={s.resultText}>일기 목록</h1>
          <h1 css={s.labels}>검색</h1>
          <input
            type="text"
            placeholder="제목 검색..."
            value={searchTerm}
            onChange={handleSearchChange}
            css={s.searchInput}
          />
          <ul>
            {currentRecords.length > 0 ? (
              currentRecords.map((diary) => (
                <div key={diary.id} css={s.recordItem}>
                  <p
                    onClick={() => navigateToDiaryDetail(diary.id)}
                    css={s.linkStyle}
                  >
                    제목: {diary.title}
                  </p>
                  <p css={s.dataText}>
                    작성일: {new Date(diary.createdAt).toLocaleDateString()}
                  </p>
                  <div>
                    <button
                      onClick={() => handleDelete(diary.id)}
                      css={s.deleteButton}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p css={s.errorMessage}>등록된 일기가 없습니다.</p>
            )}
          </ul>
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
      </div>
    </div>
  );
}
