/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as s from "./style";
import { useCookies } from "react-cookie";
import useAuthStore from "../../../stores/auth.store";
import { css } from "@emotion/react";

interface MedicineData {
  id: number;
  userId: string;
  itemName: string;
  efcyQesitm: string | null;
  useMethodQesitm: string | null;
  depositMethodQesitm: string | null;
  medicineImage: string | null;
  intrcQesitm: string | null;
  atpnQesitm: string | null;
  seQesitm: string | null;
}

export default function MedicineDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState<MedicineData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cookies] = useCookies(["token", "userId"]);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const { user } = useAuthStore();
  const [showModal, setShowModal] = useState(false);

  const userId = cookies.userId;

  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length);
      }
    }
    return null;
  };

  const token = getTokenFromCookies();

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);
      axios
        .get(`http://localhost:4040/api/v1/medicine/medicineId/${id}`)
        .then((response) => {
          setMedicine(response.data.data);
        })
        .catch(() => {
          setError("약품 정보를 불러오는 중 오류가 발생했습니다.");
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSaveMedicine = async () => {
    if (!token || !user?.userId) {
      console.log(token);
      console.log("userId: " + user?.userId);

      setShowModal(true);
      return;
    }

    if (medicine) {
      try {
        await axios.post(
          `http://localhost:4040/api/v1/medicine-schedule/`,
          {
            userId: user.userId,
            itemSeq: medicine.id,
            itemName: medicine.itemName,
            efcyQesitm: medicine.efcyQesitm,
            useMethodQesitm: medicine.useMethodQesitm,
            depositMethodQesitm: medicine.depositMethodQesitm,
            medicineImage: medicine.medicineImage,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setSaveMessage("약품이 성공적으로 저장되었습니다.");
        navigate(`/my-page/save-medicine/${userId}`);
      } catch (error) {
        setSaveMessage("약품 저장에 실패했습니다.");
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLoginRedirect = () => {
    navigate("/auth");
    setShowModal(false);
  };

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        {loading && <div css={s.loading}>Loading...</div>}
        {error && <div css={s.error}>{error}</div>}
        {medicine ? (
          <div css={s.listCt}>
            <div css={s.medicineAll}>
              <div css={s.medicineRow}>
                <div css={s.medicineName}>약품 이름: {medicine.itemName}</div>
                <button onClick={handleSaveMedicine} css={s.saveButton}>
                  약품 저장
                </button>
                {saveMessage && <div css={s.saveMessage}>{saveMessage}</div>}
              </div>
              <div css={s.imageBox}>
                <img
                  src={medicine.medicineImage || ""}
                  alt={medicine.itemName}
                />
              </div>
              <div css={s.medicneDeatail}>
                <div css={s.detailText}>
                  <span css={s.text}>효능: </span>
                  {medicine.efcyQesitm ?? "정보 없음"}
                </div>
                <div css={s.detailText}>
                  <span css={s.text}>복용 방법: </span>
                  {medicine.useMethodQesitm ?? "정보 없음"}
                </div>
                <div css={s.detailText}>
                  <span css={s.text}>보관 방법: </span>
                  {medicine.depositMethodQesitm ?? "정보 없음"}
                </div>
                <div css={s.detailText}>
                  <span css={s.text}>약품 복용 시 주의 사항: </span>
                  {medicine.atpnQesitm ?? "정보 없음"}
                </div>
                <div css={s.detailText}>
                  <span css={s.text}>약품 부작용: </span>
                  {medicine.seQesitm ?? "정보 없음"}
                </div>
                <div css={s.detailText}>
                  <span css={s.text}>약품 사용방법: </span>
                  {medicine.useMethodQesitm ?? "정보 없음"}
                </div>
                <div css={s.detailText}>
                  <span css={s.text}>약품 상호작용: </span>
                  {medicine.intrcQesitm ?? "정보 없음"}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>약품 정보가 없습니다.</div>
        )}
      </div>

      {showModal && (
        <div css={s.modal}>
          <div css={s.modalContent}>
            <p css={s.modalText}>
              등록된 회원만 저장 가능합니다. 로그인 화면으로 이동하시겠습니까?
            </p>
            <button onClick={handleLoginRedirect} css={s.modalButton}>
              예
            </button>
            <button onClick={handleCloseModal} css={s.closeButton}>
              아니오
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
