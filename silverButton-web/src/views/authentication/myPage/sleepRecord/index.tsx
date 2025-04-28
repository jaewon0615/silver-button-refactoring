/** @jsxImportSource @emotion/react */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import * as s from "./style";
import { FaCalendarAlt, FaTrash } from "react-icons/fa";

export interface SleepRecordType {
  id: number;
  userId: string;
  sleepDate: number;
  sleepTime: number;
  wakeTime: number;
  sleepDuration: number;
  sleepQuality: number;
  sleepInterruptionCount: number;
  notes: string;
  dreamOccurred: string;
  createdAt: number;
}

export default function SleepRecord() {
  const { id } = useParams<{ id: string }>();
  const [sleepRecordItem, setSleepRecordItem] = useState<SleepRecordType[]>([]);
  const [newRecord, setNewRecord] = useState<SleepRecordType>({
    id: 0,
    userId: "",
    sleepDate: 0,
    sleepTime: 0,
    wakeTime: 0,
    sleepDuration: 0,
    sleepQuality: 0,
    sleepInterruptionCount: 0,
    notes: "",
    dreamOccurred: "",
    createdAt: 0,
  });

  const [cookies] = useCookies(["token"]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;

  const navigate = useNavigate();

  const fetchSleepRecord = async () => {
    const token = cookies.token;
    if (id && token) {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/sleep-record/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSleepRecordItem(response.data.data);
      } catch (e) {
        console.error("failed", e);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = cookies.token;

    if (token) {
      try {
        const response = await axios.post(
          `http://localhost:4040/api/v1/sleep-record/`,
          newRecord,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSleepRecordItem((prev) =>
          [response.data.data, ...prev].sort(
            (a, b) => b.createdAt - a.createdAt
          )
        );

        alert("수면 기록이 저장되었습니다.");

        setNewRecord({
          id: 0,
          userId: "",
          sleepDate: 0,
          sleepTime: 0,
          wakeTime: 0,
          sleepDuration: 0,
          sleepQuality: 0,
          sleepInterruptionCount: 0,
          notes: "",
          dreamOccurred: "",
          createdAt: 0,
        });
      } catch (e) {
        console.error("failed", e);
      }
    }
  };

  const handleDelete = async (recordId: number) => {
    const token = cookies.token;
    if (token) {
      try {
        await axios.delete(
          `http://localhost:4040/api/v1/sleep-record/${recordId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSleepRecordItem((prev) =>
          prev.filter((record) => record.id !== recordId)
        );

        alert("수면 기록이 삭제되었습니다");
      } catch (e) {
        console.error("failed", e);
      }
    }
  };

  const handleGraphView = () => {
    if (id) {
      navigate(`/sleep-record/${id}`);
    }
  };

  useEffect(() => {
    fetchSleepRecord();
  }, [id, cookies.token]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = sleepRecordItem.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(sleepRecordItem.length / recordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);

    const koreaOffset = 9 * 60;
    const localDate = new Date(date.getTime() + koreaOffset * 60 * 1000);

    return localDate.toISOString().replace("T", " ").split(".")[0];
  };

  const formatTime = (time: number) => {
    const timeString = time.toString().padStart(4, "0");
    const hours = timeString.slice(0, 2);
    const minutes = timeString.slice(2, 4);
    return `${hours}:${minutes}`;
  };

  return (
    <div css={s.container}>
      <div css={s.conttSt}>
        <div css={s.recordContainer}>
          <h1 css={s.title}>수면 기록 추가</h1>
          <form css={s.form} onSubmit={handleSubmit}>
            <div css={s.inputGroup}>
              <label css={s.label}>수면 날짜</label>
              <input
                type="date"
                name="sleepDate"
                onChange={handleInputChange}
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>잠에 든 시각</label>
              <input
                type="number"
                name="sleepTime"
                value={newRecord.sleepTime}
                onChange={handleInputChange}
                placeholder="예: 오후 11시 30분 => 1130"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>기상 시간</label>
              <input
                type="number"
                name="wakeTime"
                value={newRecord.wakeTime}
                onChange={handleInputChange}
                placeholder="예: 오전 7시 30분 => 0730"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>총 수면 시간</label>
              <input
                type="number"
                name="sleepDuration"
                value={newRecord.sleepDuration}
                onChange={handleInputChange}
                placeholder="예: 8시간"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>수면의 질(1~10점)</label>
              <input
                type="number"
                name="sleepQuality"
                value={newRecord.sleepQuality}
                onChange={handleInputChange}
                placeholder="예: 4점"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>잠에서 깬 횟수</label>
              <input
                type="number"
                name="sleepInterruptionCount"
                value={newRecord.sleepInterruptionCount}
                onChange={handleInputChange}
                placeholder="예: 3회"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>꿈 여부(꿈 | 꾸지않음)으로 입력</label>
              <input
                type="text"
                name="dreamOccurred"
                value={newRecord.dreamOccurred}
                onChange={handleInputChange}
                placeholder="예: 꿈 / 꾸지 않음"
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>추가 메모</label>
              <input
                type="text"
                name="notes"
                value={newRecord.notes}
                onChange={handleInputChange}
                css={s.input}
              />
            </div>
            <button type="submit" css={s.submitButton}>
              수면 기록 제출
            </button>
          </form>
        </div>

        <div css={s.recordContainer}>
          <h1 css={s.resultText}>수면 기록 목록</h1>
          {currentRecords.length > 0 ? (
            currentRecords.map((sleepRecord) => (
              <div key={sleepRecord.id} css={s.recordItem}>
                <div>
                  <h3 css={s.datePageText}>
                    <FaCalendarAlt css={s.icon} />
                    수면 날짜:{" "}
                    {new Date(sleepRecord.sleepDate).toLocaleString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </h3>
                  <h3 css={s.resultPageText}>
                    잠 든 시각:{formatTime(sleepRecord.sleepTime)}분
                  </h3>
                  <h3 css={s.resultPageText}>
                    기상 시각:{formatTime(sleepRecord.wakeTime)}분
                  </h3>
                  <h3 css={s.resultPageText}>
                    총 수면 시간:{sleepRecord.sleepDuration}시간
                  </h3>
                  <h3 css={s.resultPageText}>
                    수면의 질:{sleepRecord.sleepQuality}점
                  </h3>
                  <h3 css={s.resultPageText}>
                    잠에서 깬 횟수:{sleepRecord.sleepInterruptionCount}회
                  </h3>
                  <h3 css={s.resultPageText}>
                    꿈 내용/여부:{sleepRecord.dreamOccurred}
                  </h3>
                  <h3 css={s.resultPageText}>추가 메모{sleepRecord.notes}</h3>
                  <p css={s.resultPageText}>
                    <strong>제출 날짜:</strong>
                    {new Date(sleepRecord.createdAt).toLocaleDateString()}
                  </p>
                  <div>
                    <button
                      onClick={() => handleDelete(sleepRecord.id)}
                      css={s.deleteButton}
                    >
                      {" "}
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p css={s.errorMessage}>등록된 수면 기록이 없습니다.</p>
          )}
          <button onClick={handleGraphView} css={s.chartButton}>
            수면 그래프 보기
          </button>
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
