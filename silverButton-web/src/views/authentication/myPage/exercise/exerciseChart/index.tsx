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

export interface ExerciseType {
  id: number;
  userId: string;
  exerciseType: string;
  duration: number;
  caloriesBurned: number;
  intensity: number;
  exerciseDate: number;
  location: string;
  notes: string;
  createdAt: number;
  heart:number;
  weight:number;
}

export default function Exercise() {
  const { id } = useParams<{ id: string }>();
  const [exerciseItem, setExerciseItem] = useState<ExerciseType[]>([]);
  const [cookies] = useCookies(["token"]);

  // 운동 기록을 가져오는 함수
  const fetchExercises = async () => {
    const token = cookies.token;
    if (id && token) {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/exercise/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.data);
        setExerciseItem(response.data.data); // 운동 기록 업데이트
      } catch (e) {
        console.error("Error fetching exercise records", e);
      }
    }
  };

  // 컴포넌트가 처음 렌더링될 때 운동 기록을 가져오는 effect
  useEffect(() => {
    console.log("User ID:", id);
    fetchExercises();
  }, [id, cookies.token]);

  // 차트 데이터 준비
  const chartData = {
    labels: exerciseItem.map((exercise) =>
      new Date(exercise.createdAt).toLocaleDateString()
    ),
    datasets: [
      {
        label: "운동 시간 (분)",
        data: exerciseItem.map((exercise) => exercise.duration),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "칼로리 소모 (칼로리)",
        data: exerciseItem.map((exercise) => exercise.caloriesBurned),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "운동 강도",
        data: exerciseItem.map((exercise) => exercise.intensity),
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "심박수",
        data: exerciseItem.map((exercise) => exercise.heart),
        borderColor: "rgb(153, 102, 255)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
      {
        label: "체중",
        data: exerciseItem.map((exercise) => exercise.weight),
        borderColor: "rgb(255, 159, 64)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },

    ],
  };

  return (
    <div css={s.container}>
      <div css={s.graphContainer}>
        <h1 css={s.resultText}>운동 기록 차트</h1>
        {exerciseItem.length > 0 ? (
          <div css={s.chartContainer}>
            <Line
              data={chartData}
              options={{
                plugins: {
                  legend: {
                    labels: {
                      font: {
                        size: 18, // 범례 글자 크기 키움
                      },
                    },
                  },
                },
                scales: {
                  x: {
                    ticks: {
                      font: {
                        size: 15, // x축 폰트 크기
                      },
                    },
                  },
                  y: {
                    ticks: {
                      font: {
                        size: 15, // y축 폰트 크기
                      },
                    },
                  },
                },
              }}
            />
          </div>
        ) : (
          <p css={s.errorMessage}>등록된 운동 기록이 없습니다.</p>
        )}
      </div>
    </div>
  );
}
