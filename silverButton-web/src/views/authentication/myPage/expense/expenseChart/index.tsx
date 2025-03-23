/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useParams } from "react-router-dom";
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, Legend 
} from "recharts";
import * as s from "./style";

export interface ExpenseType {
  id: number;
  userId: string;
  paymentDate: number;
  category: string;
  description: string;
  amount: number;
  paymentMethod: string;
  notes: string;
  createdAt: number;
}

const ExpenseChart = () => {
  const { id } = useParams<{ id: string }>();
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const fetchExpenses = async () => {
      if (id && cookies.token) {
        try {
          const response = await axios.get(`http://localhost:4040/api/v1/expense/${id}`, {
            headers: { Authorization: `Bearer ${cookies.token}` },
          });
          setExpenses(response.data.data);
        } catch (e) {
          console.error("Failed to fetch expenses", e);
        }
      }
    };

    fetchExpenses();
  }, [id, cookies.token]);

  const barChartData = expenses.map((expense) => ({
    name: new Date(expense.paymentDate).toLocaleDateString("ko-KR"),
    amount: expense.amount,
  }));

  const categoryData = Object.values(
    expenses.reduce((acc, expense) => {
      acc[expense.category] = acc[expense.category] || { name: expense.category, value: 0 };
      acc[expense.category].value += expense.amount;
      return acc;
    }, {} as Record<string, { name: string; value: number }>))
  
  const paymentData = Object.values(
    expenses.reduce((acc, expense) => {
      acc[expense.paymentMethod] = acc[expense.paymentMethod] || { name: expense.paymentMethod, value: 0 };
      acc[expense.paymentMethod].value += expense.amount;
      return acc;
    }, {} as Record<string, { name: string; value: number }>))

  const descriptionData = Object.values(
    expenses.reduce((acc, expense) => {
      acc[expense.description] = acc[expense.description] || { name: expense.description, value: 0 };
      acc[expense.description].value += 1;
      return acc;
    }, {} as Record<string, { name: string; value: number }>))

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF6384", "#36A2EB"];

  return (
    <div css={s.chartContainer}>
      <h2>날짜별 지출 변화</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h2>카테고리별 지출 비율</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8" label>
            {categoryData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <h2>결제 수단별 사용 금액</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={paymentData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <h2>지출 항목별 사용 빈도</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={descriptionData} dataKey="value" nameKey="name" outerRadius={120} fill="#FF8042" label>
            {descriptionData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseChart;
