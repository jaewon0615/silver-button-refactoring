/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // URL에서 ID를 가져오기 위해 사용
import axios from "axios";
import * as s from "./medicineSearch/style"; // 스타일 파일 경로

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
  const { id } = useParams<{ id: string }>(); // URL 파라미터에서 ID 가져오기
  const [medicineData, setMedicineData] = useState<Medicine | null>(null); // 약품 데이터 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [error, setError] = useState<string | null>(null); // 오류 상태

  const fetchMedicineDetail = async () => {
    try {
      const response = await axios.get<Medicine>(`http://localhost:4040/api/v1/medicine/${id}`); // API 호출
      setMedicineData(response.data); // 데이터 상태 업데이트
    } catch (e) {
      setError("약품 정보를 불러오는 중 오류가 발생했습니다."); // 오류 메시지 설정
    } finally {
      setLoading(false); // 로딩 종료
    }
  };

  useEffect(() => {
    fetchMedicineDetail(); // 컴포넌트 마운트 시 API 호출
  }, [id]);

  if (loading) {
    return <p>로딩 중...</p>; // 로딩 중 메시지
  }

  if (error) {
    return <p>{error}</p>; // 오류 메시지
  }

  return (
    <div>
      <h2>약품 상세 정보</h2>
      {medicineData ? (
        <div >
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
