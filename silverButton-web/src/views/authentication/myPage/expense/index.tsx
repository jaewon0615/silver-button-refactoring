/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./style";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import Draggable from "react-draggable";
import { FaCalendarAlt, FaMoneyBillWave, FaTrash } from "react-icons/fa";

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

const Calculator = () => {
  const { id } = useParams<{ id: string }>();
  const [expensItem, setExpenseItem] = useState<ExpenseType[]>([]);
  const [newExpenses, setNewExpenses] = useState<ExpenseType>({
    id: 0,
    userId: "",
    paymentDate: 0,
    category: "",
    description: "",
    amount: 0,
    paymentMethod: "",
    notes: "",
    createdAt: 0,
  });
  const [cookies] = useCookies(["token"]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;

  const navigate = useNavigate();

  const fetchExpenses = async () => {
    const token = cookies.token;
    if (id && token) {
      try {
        const response = await axios.get(
          `http://localhost:4040/api/v1/expense/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setExpenseItem(response.data.data);
      } catch (e) {
        console.error("failed", e);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewExpenses({ ...newExpenses, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = cookies.token;

    if (token) {
      try {
        const response = await axios.post(
          `http://localhost:4040/api/v1/expense/`,
          newExpenses,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        alert("가계뷰가 저장되었습니다");

        setNewExpenses({
          id: 0,
          userId: "",
          paymentDate: 0,
          category: "",
          description: "",
          amount: 0,
          paymentMethod: "",
          notes: "",
          createdAt: 0,
        });
      } catch (e) {
        console.error("Failed to save health record", e);
        alert("운동 기록 제출에 실패했습니다.");
      }
    }
  };

  const handleDelete = async (expenseId: number) => {
    const token = cookies.token;
    if (token) {
      try {
        await axios.delete(
          `http://localhost:4040/api/v1/expense/${expenseId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setExpenseItem((prev) =>
          prev.filter((expense) => expense.id !== expenseId)
        );
        alert("가계부 기록이 삭제되었습니다.");
      } catch (e) {
        console.error("Failed to delete expense record", e);
        alert("가계부 기록 삭제에 실패했습니다.");
      }
    }
  };

  const handleGraphView = () => {
    if (id) {
      navigate(`/expense/${id}`);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [id, cookies.token]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = expensItem.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const totalPages = Math.ceil(expensItem.length / recordsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [display, setDisplay] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const appendNumber = (number: string) => {
    setDisplay((prev) => prev + number);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const toggleCalculator = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div css={s.container}>
      <div css={s.conttSt}>
        <div css={s.recordContainer}>
          <h1 css={s.title}>가계부 기록 추가</h1>
          <form css={s.form} onSubmit={handleSubmit}>
            <div css={s.inputGroup}>
              <label css={s.label}>지출 날짜</label>
              <input
                type="date"
                name="paymentDate"
                onChange={handleInputChange}
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>지출 종류</label>
              <input
                type="text"
                name="category"
                value={newExpenses.category}
                onChange={handleInputChange}
                placeholder="예:식비,교통,의료,여가"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>지출 항목 설명</label>
              <input
                type="text"
                name="description"
                value={newExpenses.description}
                onChange={handleInputChange}
                placeholder="예:점심 - 00메뉴, 지하철 요금, 병원 진료비"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>지출 금액</label>
              <input
                type="number"
                name="amount"
                value={newExpenses.amount}
                onChange={handleInputChange}
                placeholder="예:00000원"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>결제 수단</label>
              <input
                type="text"
                name="paymentMethod"
                value={newExpenses.paymentMethod}
                onChange={handleInputChange}
                placeholder="예:카드,현금"
                required
                css={s.input}
              />
            </div>
            <div css={s.inputGroup}>
              <label css={s.label}>추가 메모</label>
              <input
                type="text"
                name="notes"
                value={newExpenses.notes}
                onChange={handleInputChange}
                placeholder="예:카드,현금"
                css={s.input}
              />
            </div>
            <button type="submit" css={s.submitButton}>
              가계부 기록 제출
            </button>
            <button onClick={toggleCalculator} css={s.showButtonStyle}>
              {isVisible ? "계산기 닫기" : "계산기 열기"}
            </button>
          </form>
        </div>

        <div css={s.resultContainer}>
          <h1 css={s.resultText}>가계부 기록 목록</h1>
          {currentRecords.length > 0 ? (
            currentRecords.map((expense) => (
              <div key={expense.id} css={s.recordItem}>
                <div>
                  <h3 css={s.datePageText}>
                    <FaCalendarAlt css={s.icon} />
                    지출 날짜:{" "}
                    {new Date(expense.paymentDate).toLocaleString("ko-KR", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </h3>
                  <h3 css={s.resultPageText}>지출 종류: {expense.category}</h3>
                  <h3 css={s.resultPageText}>
                    지출 항목 설명: {expense.description}
                  </h3>
                  <h3 css={s.resultPageText}>
                    <FaMoneyBillWave css={s.icon} />
                    지출 금액: {expense.amount.toLocaleString()}원
                  </h3>
                  <h3 css={s.resultPageText}>
                    결제 수단: {expense.paymentMethod}
                  </h3>
                  <details css={s.moreDetails}>
                    <summary>추가 정보 보기</summary>
                    <p css={s.resultPageText2}>
                      <strong>추가 메모:</strong> {expense.notes}
                    </p>
                    <p css={s.resultPageText2}>
                      <strong>제출 날짜:</strong>{" "}
                      {new Date(expense.createdAt).toLocaleDateString()}
                    </p>
                  </details>
                  <div>
                    <button
                      onClick={() => handleDelete(expense.id)}
                      css={s.deleteButton}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p css={s.errorMessage}>등록된 가계뷰가 없습니다.</p>
          )}

          <button onClick={handleGraphView} css={s.chartButton}>
            그래프 보기
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

          <Draggable>
            <div
              css={[
                s.calculatorStyle,
                isVisible ? s.showCalculator : s.hideCalculator,
              ]}
            >
              <input
                type="text"
                value={display}
                disabled
                css={s.displayStyle}
              />
              <div css={s.buttonContainerStyle}>
                <button onClick={clearDisplay} css={s.cStyle}>
                  초기화
                </button>
                <button onClick={calculate} css={s.buttonStyle}>
                  =
                </button>
                <button onClick={() => appendNumber("/")} css={s.buttonStyle}>
                  /
                </button>
                <button onClick={() => appendNumber("+")} css={s.buttonStyle}>
                  +
                </button>
                <button onClick={() => appendNumber("1")} css={s.buttonStyle}>
                  1
                </button>
                <button onClick={() => appendNumber("2")} css={s.buttonStyle}>
                  2
                </button>
                <button onClick={() => appendNumber("3")} css={s.buttonStyle}>
                  3
                </button>
                <button onClick={() => appendNumber("-")} css={s.buttonStyle}>
                  -
                </button>
                <button onClick={() => appendNumber("4")} css={s.buttonStyle}>
                  4
                </button>
                <button onClick={() => appendNumber("5")} css={s.buttonStyle}>
                  5
                </button>
                <button onClick={() => appendNumber("6")} css={s.buttonStyle}>
                  6
                </button>
                <button onClick={() => appendNumber("*")} css={s.buttonStyle}>
                  X
                </button>
                <button onClick={() => appendNumber("7")} css={s.buttonStyle}>
                  7
                </button>
                <button onClick={() => appendNumber("8")} css={s.buttonStyle}>
                  8
                </button>
                <button onClick={() => appendNumber("9")} css={s.buttonStyle}>
                  9
                </button>
                <button onClick={() => appendNumber("0")} css={s.buttonStyle}>
                  0
                </button>
              </div>
            </div>
          </Draggable>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
