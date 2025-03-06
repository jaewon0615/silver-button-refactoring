/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./style"; // 스타일 파일 임포트
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";

export interface HealthRecordType {
  id: number;
  userId: string;
  bloodPressureSystolic: number;
  bloodPressureDiastolic: number;
  bloodSugar: number;
  weight: number;
  height: number;
  notes: string;
  createdAt: number;
}

export default function HealthRecord() {
  const { id } = useParams<{ id: string }>();
  const [healthRecordItem, setHealthRecordItem] = useState<HealthRecordType[]>([]);
  const [newRecord, setNewRecord] = useState<HealthRecordType>({
    id: 0,
    userId: "",
    bloodPressureSystolic: 0,
    bloodPressureDiastolic: 0,
    bloodSugar: 0,
    weight: 0,
    height: 0,
    notes: "",
    createdAt: 0,
  });

  const [cookies] = useCookies(["token"]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3; // 페이지당 5개씩 표시

  const fetchHealthRecords = async () => {
    const token = cookies.token;
    if (id && token) {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/health-record/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setHealthRecordItem(response.data.data);
      } catch (e) {
        console.error("Failed to fetch health records", e);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRecord({ ...newRecord, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 기본 제출 방지
    const token = cookies.token;
    
    if (token) {
      try {
        const response = await axios.post(
          `http://localhost:4040/api/v1/health-record/`,
          newRecord,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        // 상태 업데이트 (최신순 정렬)
        setHealthRecordItem((prev) =>
          [response.data.data, ...prev].sort((a, b) => b.createdAt - a.createdAt)
        );
  
        // ✅ 건강 기록 제출 성공 시 alert 띄우기
        alert("건강 기록이 제출되었습니다.");
  
        // 입력 폼 초기화
        setNewRecord({
          id: 0,
          userId: "",
          bloodPressureSystolic: 0,
          bloodPressureDiastolic: 0,
          bloodSugar: 0,
          weight: 0,
          height: 0,
          notes: "",
          createdAt: 0,
        });
  
      } catch (e) {
        console.error("Failed to save health record", e);
        alert("건강 기록 제출에 실패했습니다."); // 오류 발생 시 알림
      }
    }
  };

  const handleDelete = async (recordId: number) => {
    const token = cookies.token;
    if (token) {
      try {
        // DELETE 요청을 통해 해당 기록 삭제
        await axios.delete(`http://localhost:4040/api/v1/health-record/${recordId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // 삭제 후 상태 업데이트 (삭제된 기록을 목록에서 제거)
        setHealthRecordItem((prev) =>
          prev.filter((record) => record.id !== recordId)
        );

        alert("건강 기록이 삭제되었습니다.");
      } catch (e) {
        console.error("Failed to delete health record", e);
        alert("건강 기록 삭제에 실패했습니다.");
      }
    }
  };

  useEffect(() => {
    fetchHealthRecords();
  }, [id, cookies.token]);

  // 페이지네이션 관련 계산
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = healthRecordItem.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.ceil(healthRecordItem.length / recordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div css={s.container}>
      <div css={s.recordContainer}>
        <h1 css={s.title}>건강 기록 추가</h1>
        <form css={s.form} onSubmit={handleSubmit}>
          <div css={s.inputGroup}>
            <label css={s.label}>수축기 혈압</label>
            <input
              type="number"
              name="bloodPressureSystolic"
              value={newRecord.bloodPressureSystolic}
              onChange={handleInputChange}
              placeholder="예: 120"
              required
              css={s.input}
            />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>이완기 혈압</label>
            <input
              type="number"
              name="bloodPressureDiastolic"
              value={newRecord.bloodPressureDiastolic}
              onChange={handleInputChange}
              placeholder="예: 80"
              required
              css={s.input}
            />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>혈당</label>
            <input
              type="number"
              name="bloodSugar"
              value={newRecord.bloodSugar}
              onChange={handleInputChange}
              placeholder="예: 100"
              required
              css={s.input}
            />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>체중</label>
            <input
              type="number"
              name="weight"
              value={newRecord.weight}
              onChange={handleInputChange}
              placeholder="예: 65.5"
              required
              css={s.input}
            />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>신장</label>
            <input
              type="number"
              name="height"
              value={newRecord.height}
              onChange={handleInputChange}
              placeholder="예: 170"
              required
              css={s.input}
            />
          </div>
          <div css={s.inputGroup}>
            <label css={s.label}>비고</label>
            <input
              type="text"
              name="notes"
              value={newRecord.notes}
              onChange={handleInputChange}
              placeholder="추가 메모"
              css={s.input}
            />
          </div>
          <button type="submit" css={s.submitButton}>
            건강 기록 제출
          </button>
        </form>
      </div>

      <div css={s.resultContainer}>
        <h1 css={s.resultText}>건강 기록 목록</h1>
        {currentRecords.length > 0 ? (
          currentRecords.map((record) => (
            <div key={record.id} css={s.recordItem}>
              <div>
                <h3 css={s.resultPageText}>수축기: {record.bloodPressureSystolic}mmhg | 이완기: {record.bloodPressureDiastolic}mmhg</h3>
                <h3 css={s.resultPageText}>혈당: {record.bloodSugar}mg/dl</h3>
                <h3 css={s.resultPageText}>체중: {record.weight}kg</h3>
                <h3 css={s.resultPageText}>신장: {record.height}cm</h3>
                <h3 css={s.resultPageText}>비고: {record.notes}</h3>
                <h3 css={s.dataText}>제출 날짜: {new Date(record.createdAt).toLocaleDateString()}</h3>
              </div>
              <div>
                <button onClick={() => handleDelete(record.id)} css={s.deleteButton}>삭제</button>
              </div>
            </div>
          ))
        ) : (
          <p>등록된 건강 기록이 없습니다.</p>
        )}

        {/* 페이지네이션 UI */}
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
