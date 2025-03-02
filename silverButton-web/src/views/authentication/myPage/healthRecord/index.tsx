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
  const [healthRecordItem, setHealthRecordItem] = useState<HealthRecordType[]>(
    []
  );
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
    e.preventDefault();
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

        setHealthRecordItem((prev) => [...prev, response.data.data]);
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
      }
    }
  };

  useEffect(() => {
    fetchHealthRecords();
  }, [id, cookies.token]);

  return (
    <div css={s.container}>
      <h1 css={s.title}>건강 기록 추가</h1>
      <form css={s.form} onSubmit={handleSubmit}>
        <div css={s.inputGroup}>
          <label css={s.label}>수축기 혈압:</label>
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
          <label css={s.label}>이완기 혈압:</label>
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
          <label css={s.label}>혈당:</label>
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
          <label css={s.label}>체중:</label>
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
          <label css={s.label}>신장:</label>
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
          <label css={s.label}>비고:</label>
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

      <div css={s.recordList}>
        <h2>건강 기록 목록</h2>
        {healthRecordItem.length > 0 ? (
          healthRecordItem.map((record) => (
            <div key={record.id} css={s.recordItem}>
              <p>
                수축기: {record.bloodPressureSystolic} | 이완기:{" "}
                {record.bloodPressureDiastolic}
              </p>
              <p>혈당: {record.bloodSugar}</p>
              <p>체중: {record.weight}</p>
              <p>신장: {record.height}</p>
              <p>비고: {record.notes}</p>
              <p>제출 날짜:{record.createdAt}</p>
            </div>
          ))
        ) : (
          <p>등록된 건강 기록이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
