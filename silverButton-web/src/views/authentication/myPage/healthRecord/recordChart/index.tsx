/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./style"; // 스타일 파일 임포트
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom"; // useNavigate 제거
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// 차트 등록
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
        console.log(response.data.data); // 데이터 확인
        setHealthRecordItem(response.data.data); // 건강 기록 목록 업데이트
      } catch (e) {
        console.error("Failed to fetch health records", e);
      }
    }
  };

  useEffect(() => {
    console.log("User ID:", id); // ID 값 확인
    fetchHealthRecords(); // 데이터 로딩
  }, [id, cookies.token]);

  // 차트 데이터를 위한 준비
  const chartData = {
    labels: healthRecordItem.map((record) =>
      new Date(record.createdAt).toLocaleDateString()
    ),
    datasets: [
      {
        label: "수축기 혈압 (mmHg)",
        data: healthRecordItem.map((record) => record.bloodPressureSystolic),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "이완기 혈압 (mmHg)",
        data: healthRecordItem.map((record) => record.bloodPressureDiastolic),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "혈당 (mg/dl)",
        data: healthRecordItem.map((record) => record.bloodSugar),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "체중 (kg)",
        data: healthRecordItem.map((record) => record.weight),
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div css={s.container}>
      <div css={s.graphContainer}>
        <h1 css={s.resultText}>건강 기록 차트</h1>
        {healthRecordItem.length > 0 ? (
          <div css={s.chartContainer}>
            <Line data={chartData} options={{
              plugins: {
                legend: {
                  labels: {
                    font: {
                      size: 18,  // 범례 글자 크기 키움
                    }
                  }
                },
                
              },
              scales: {
                x: {
                  ticks: {
                    font: {
                      size: 15,  // x축 폰트 크기
                    }
                  }
                },
                y: {
                  ticks: {
                    font: {
                      size: 15,  // y축 폰트 크기
                    }
                  }
                }
              }
            }} />
          </div>
        ) : (
          <p css={s.errorMessage}>등록된 건강 기록이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
