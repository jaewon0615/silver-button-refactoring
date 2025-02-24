/** @jsxImportSource @emotion/react */
import React from "react";
import * as s from "./style";

export interface SearchMedicineDetailType {
  id: number;
  itemSeq: number;
  itemName: string;
  efcyQesitm:string;
  useMethodQesitm: string;
  atpnQesitm: string;
  seQesitm: string;
  depositMethodQesitm: string;
  intrcQesitm: string;
  medicineImage:string
}

interface SearchMedicineDetailProps {
  searchMedicineDetailItem: SearchMedicineDetailType[];
}

export default function DrugSearchDetailPage({searchMedicineDetailItem}:SearchMedicineDetailProps) {
  
  return (
    <div>
      {searchMedicineDetailItem.length > 0 && (
        <div>
          <div css={s.userId}>
          </div>
          {searchMedicineDetailItem.map((medicine) => (
            <div key={medicine.id}>
              <div css={s.listCt}>
                <div css={s.imageBox}><img src={medicine.medicineImage} alt={medicine.itemName} /></div>
                <div css={s.medicineAll}>
                  <div css={s.medicineRow}>
                    <div css={s.medicineName}>{medicine.itemName}</div>
                  </div>
                  <div css={s.medicneDeatail}>
                    <div css={s.detailText}><span css={s.text}>약품 저ㅇ재원 방법: </span>{medicine.useMethodQesitm}</div>
                    <div css={s.detailText}><span css={s.text}>약품 복용 시 주의사항: </span>{medicine.efcyQesitm}</div>
                    <div css={s.detailText}><span css={s.text}>약품 부작용: </span>{medicine.seQesitm}</div>

                    <div css={s.detailText}><span css={s.text}>약품 보관방법: </span>{medicine.depositMethodQesitm}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {searchMedicineDetailItem.length === 0 && <div>복용 중중인 약품이 없습니다.</div>}
    </div>
  );
}
