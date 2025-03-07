import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export interface SaveMedicineType {
  id: number;
  userId: string;
  itemSeq: number;
  itemName: string;
  efcyQesitm: string;
  useMethodQesitm: string;
  atpnQesitm: string;
  seQesitm: string;
  depositMethodQesitm: string;
  intrcQesitm: string;
  medicineImage: string;
}

interface SaveMedicineProps {
  saveMedicineItem: SaveMedicineType[];
}

export default function SaveMedicineUserId({
  saveMedicineItem: initialSaveMedicineItem,
}: SaveMedicineProps) {
  const [saveMedicineItem, setSaveMedicineItem] = useState(
    initialSaveMedicineItem
  );

  const [cookies] = useCookies(["token"]);

  const navigate = useNavigate();

  const handleSaveMedicine = async (itemSeq: number, itemName: string) => {
    const token = cookies.token;
    if (!token) {
      alert("로그인 상태가 아닙니다. 로그인 후 다시 시도해주세요.");
      return;
    }

    const confirmDelete = window.confirm(
      `${itemName} 약품을 삭제하시겠습니까?`
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:4040/api/v1/medicine-schedule/${itemSeq}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(`${itemName} 약품이 삭제되었습니다.`);

      setSaveMedicineItem((prevItems) =>
        prevItems.filter((item) => item.itemSeq !== itemSeq)
      );
    } catch (error) {
      console.error("약품 삭제 중 오류 발생:", error);
      alert("약품 삭제에 실패했습니다. 다시 시도해주세요.");
    }

    const handleMedicineClick = (id: number) => {
      navigate(`/medicine/medicineId/${id}`);
    };
  };

  return (
    <div>
      {saveMedicineItem.length > 0 ? (
        <div>
          <div css={s.userId}>
            {saveMedicineItem[0].userId}님이 복용 중인 약품 리스트
          </div>
          {saveMedicineItem.map((medicine) => (
            <div key={medicine.id}>
              <div css={s.listCt}>
                <div css={s.imageBox}>
                  <img src={medicine.medicineImage} alt={medicine.itemName} />
                </div>
                <div css={s.medicineAll}>
                  <div css={s.medicineRow}>
                    <div css={s.medicineName}>{medicine.itemName}</div>
                    <button
                      css={s.saveButton}
                      onClick={() =>
                        handleSaveMedicine(medicine.itemSeq, medicine.itemName)
                      }
                    >
                      약품 삭제
                    </button>
                  </div>
                  <div css={s.medicneDeatail}>
                    <div css={s.detailText}>
                      <span css={s.text}>약품 사용 방법: </span>
                      {medicine.useMethodQesitm}
                    </div>
                    <div css={s.detailText}>
                      <span css={s.text}>약품 효능: </span>
                      {medicine.efcyQesitm}
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
      ) : (
        <div>복용 중인 약품이 없습니다.</div>
      )}
    </div>
  );
}
