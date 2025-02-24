/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // useNavigate 추가
import axios from "axios";
import * as s from "./style";

// Define the type for the medicine data
interface MedicineData {
  id:number
  itemName: string;
  medicineId: string; // medicineId 추가
  efcyQesitm: string | null;
  useMethodQesitm: string | null;
  depositMethodQesitm: string | null;
  medicineImage: string | null;
  intrcQesitm: string | null;
}

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate(); // navigate 사용
  const [data, setData] = useState<MedicineData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const itemName = location.state?.itemName;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (itemName) {
      setLoading(true);
      setError(null);
      axios
        .get(`http://localhost:4040/api/v1/medicine/name/${itemName}`)
        .then((response) => {
          const medicineData: MedicineData[] = response.data.data;
          setData(medicineData);
        })
        .catch(() => {
          setError("데이터를 불러오는 중 오류가 발생했습니다.");
        })
        .finally(() => setLoading(false));
    }
  }, [itemName]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleMedicineClick = (id: number) => {
    // 약품 ID를 클릭하면 해당 약품의 상세 페이지로 이동
    navigate(`/medicine/medicineId/${id}`);
  };

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        
        <div css={s.scrollableContent}>
          {currentItems.length === 0 ? (
            <div>No results found</div>
          ) : (
            currentItems.map((medicine) => (
              <div key={medicine.medicineId} onClick={() => handleMedicineClick(medicine.id)}>
                {medicine.medicineImage && (
                  <div css={s.listCt}>
                    <img
                      css={s.imageBox}
                      src={medicine.medicineImage}
                      alt={medicine.itemName}
                    />
                    <div css={s.medicineAll}>
                      <div css={s.medicineRow}>
                        <div css={s.medicineName}>{medicine.itemName}</div>
                        <div css={s.text}>효능: <span css={s.textdiv}>{medicine.intrcQesitm ?? "정보 없음"}</span></div>
                        <div css={s.text}>복용 방법: <span css={s.textdiv}>{medicine.useMethodQesitm ?? "정보 없음"}</span></div>
                        <div css={s.text}>보관 방법: <span css={s.textdiv}>{medicine.depositMethodQesitm ?? "정보 없음"}</span> </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
        
        <div css={s.paginationContainer}>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            css={s.arrowButton}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              css={[
                s.paginationButton,
                currentPage === index + 1 && s.paginationButtonActive,
              ]}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            css={s.arrowButton}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
