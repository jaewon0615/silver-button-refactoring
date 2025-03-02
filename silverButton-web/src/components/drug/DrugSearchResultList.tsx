/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";
import { useLocation, useNavigate } from "react-router-dom";

export interface SearchMedicineType {
  id: number;
  itemSeq: number;
  itemName: string;
  efcyQesitm: string;
  useMethodQesitm: string;
  seQesitm: string;
  depositMethodQesitm: string;
  intrcQesitm: string;
  medicineImage: string;
}

interface SearchMedicineProps {
  searchMedicineItem: SearchMedicineType[];
}

export default function SearchMedicineUserId({
  searchMedicineItem,
}: SearchMedicineProps) {
  const location = useLocation();
  const { data } = location.state || {};
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/medicine/detail-page");
  };

  return (
    <div css={s.scroll}>
      {searchMedicineItem.length > 0 && (
        <div>
          <div css={s.userId}></div>
          {searchMedicineItem.map((medicine) => (
            <div key={medicine.id}>
              <div css={s.listCt}>
                <div css={s.imageBox}>
                  <img src={medicine.medicineImage} alt={medicine.itemName} />
                </div>
                <div css={s.medicineAll}>
                  <div css={s.medicineRow}>
                    <div css={s.medicineName}>{medicine.itemName}</div>
                  </div>
                  <div css={s.medicneDeatail}>
                    <div css={s.detailText}>
                      <span css={s.text}>약품 사용 방법: </span>
                      {medicine.useMethodQesitm}
                    </div>
                    <div css={s.detailText}>
                      <span css={s.text}>약품 효능: </span>
                      {medicine.intrcQesitm}
                    </div>
                    <div css={s.detailText}>
                      <span css={s.text}>약품 보관방법: </span>
                      {medicine.depositMethodQesitm}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {searchMedicineItem.length === 0 && <div>복용 중인 약품이 없습니다.</div>}
    </div>
  );
}
