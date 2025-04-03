/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  BarChart,
  Bar,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import * as s from "./style";

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

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384"];

const SleepChart = () => {
  const { id } = useParams<{ id: string }>();
  const [sleepRecords, setSleepRecords] = useState<SleepRecordType[]>([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const fetchSleepRecords = async () => {
      if (id && cookies.token) {
        try {
          const response = await axios.get(
            `http://localhost:4040/api/v1/sleep-record/${id}`,
            {
              headers: { Authorization: `Bearer ${cookies.token}` },
            }
          );
          setSleepRecords(response.data.data);
        } catch (e) {
          console.error("Failed to fetch sleep records", e);
        }
      }
    };

    fetchSleepRecords();
  }, [id, cookies.token]);

  const sleepChartData = sleepRecords.map((record) => ({
    date: new Date(record.sleepDate).toLocaleDateString("ko-KR"),
    duration: record.sleepDuration,
    quality: record.sleepQuality,
    interruptions: record.sleepInterruptionCount,
    sleepTime: record.sleepTime,
    wakeTime: record.wakeTime,
    dreamOccurred: record.dreamOccurred === "yes" ? 1 : 0,
  }));

  return (
    <div css={s.chartContainer}>
      <h1 css={s.resultText}>수면 기록 차트</h1>
      
      <h2>수면 시간, 수면 질, 깨는 횟수</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={sleepChartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ fontSize: 14 }} />
          <YAxis tick={{ fontSize: 14 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 14 }} />
          <ReferenceLine y={8} stroke="red" label="최소 권장 수면 (8시간)" />
          <Line type="monotone" dataKey="duration" stroke="#8884d8" name="수면 시간 (시간)" dot={{ r: 6 }} />
          <Line type="monotone" dataKey="quality" stroke="#82ca9d" name="수면의 질 (점수)" dot={{ r: 6 }} />
          <Line type="monotone" dataKey="interruptions" stroke="#FF8042" name="깨는 횟수" dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>

      <h2>잠든 시간 & 깬 시간</h2>
<ResponsiveContainer width="100%" height={400}>
  <LineChart data={sleepChartData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" tick={{ fontSize: 14 }} />
    <YAxis tick={{ fontSize: 14 }} domain={[0, 24]} label={{ value: "시간", angle: -90, position: "insideLeft" }} />
    <Tooltip />
    <Legend wrapperStyle={{ fontSize: 14 }} />
    <ReferenceLine y={0} stroke="gray" />
    <ReferenceLine y={24} stroke="gray" />
    
    {/* 잠든 시간 선 그래프 */}
    <Line type="monotone" dataKey="sleepTime" stroke="#8884d8" name="잠든 시간" dot={{ r: 5 }} />
    
    {/* 깬 시간 선 그래프 */}
    <Line type="monotone" dataKey="wakeTime" stroke="#FF8042" name="깬 시간" dot={{ r: 5 }} />
  </LineChart>
</ResponsiveContainer>

      <h2>꿈 여부 비율</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            dataKey="value"
            data={[{ name: "꿈 O", value: sleepRecords.filter(r => r.dreamOccurred === "꿈").length },
                   { name: "꿈 X", value: sleepRecords.filter(r => r.dreamOccurred === "꾸지 않음").length }]}
            outerRadius={120}
            fill="#8884d8"
            label={{ fontSize: 14 }}
          >
            {["#0088FE", "#FF8042"].map((color, index) => (
              <Cell key={`cell-${index}`} fill={color} />
            ))}
          </Pie>
          <Legend wrapperStyle={{ fontSize: 14 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SleepChart;
