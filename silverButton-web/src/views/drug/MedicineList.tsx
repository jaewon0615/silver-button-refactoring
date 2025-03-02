/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as s from "./medicineSearch/style";

interface Medicine {
  id: number;
  itemSeq: number;
  itemName: string;
  useMethodQesitm: string;
  atpnQesitm: string;
  seQesitm: string;
  depositMethodQesitm: string;
  intrcQesitm: string;
  medicineImage: string;
}

const MedicineDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [medicineData, setMedicineData] = useState<Medicine | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMedicineDetail = async () => {
    try {
      const response = await axios.get<Medicine>(
        `http://localhost:4040/api/v1/medicine/${id}`
      );
      setMedicineData(response.data);
    } catch (e) {
      setError("약품 정보를 불러오는 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedicineDetail();
  }, [id]);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>약품 상세 정보</h2>
      {medicineData ? (
        <div>
          <h3>{medicineData.itemName}</h3>
          <p>약품 고유 번호: {medicineData.itemSeq}</p>
          <p>사용 방법: {medicineData.useMethodQesitm}</p>
          <p>주의 사항: {medicineData.atpnQesitm}</p>
          <p>부작용: {medicineData.seQesitm}</p>
          <p>보관 방법: {medicineData.depositMethodQesitm}</p>
          <p>상호작용: {medicineData.intrcQesitm}</p>
          {medicineData.medicineImage && (
            <img src={medicineData.medicineImage} alt={medicineData.itemName} />
          )}
        </div>
      ) : (
        <p>약품 정보를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default MedicineDetail;
