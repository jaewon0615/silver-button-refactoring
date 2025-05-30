/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../../../styles/drugSearchStyle";
import { SelectedDrugOption } from "../../../types/DrugSearchListType";
import {
  drugColor,
  drugShape,
  drugLine,
} from "../../../constants/DrugSearchList";
import axios from "axios";

const optionInitialData: SelectedDrugOption = {
  shape: "전체",
  color: "전체",
  line: "전체",
};

export default function SearchPage() {
  const [itemName, setItemName] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDrugOption, setSelectedDrugOption] =
    useState<SelectedDrugOption>(optionInitialData);
  const [visibleColors, setVisibleColors] = useState(10);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleShapeClick = (shapeName: string) => {
    setSelectedDrugOption((prev) => ({
      ...prev,
      shape: shapeName,
    }));
  };

  const handleColorClick = (colorName: string) => {
    setSelectedDrugOption((prev) => ({
      ...prev,
      color: colorName,
    }));
  };

  const handleLineClick = (lineName: string) => {
    setSelectedDrugOption((prev) => ({
      ...prev,
      line: lineName,
    }));
  };

  const handleShowMoreColors = () => {
    setVisibleColors((prev) => prev + 7);
  };

  const handleShowLessColors = () => {
    setVisibleColors(7);
  };

  const callApi = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/medicine/search`,
        {
          params: {
            itemName,
            shape: selectedDrugOption.shape,
            color: selectedDrugOption.color,
            line: selectedDrugOption.line,
          },
        }
      );
      setData(response.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!itemName) return;
    setLoading(true);
    try {
      navigate("/medicine/list-page", { state: { itemName } });
    } catch (error) {
      console.log("Error navigating to results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div css={s.contSt}>
      <div css={s.conttSt}>
        <div css={s.headerSt}>실버니즈 약품 검색</div>

        <div css={s.nameSt}>
          <div css={s.textSearch}>약품 이름으로 검색</div>
          <div>
            <input
              css={s.inputSt}
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="검색하고자 하는 약품 이름을 입력해주세요."
            />
          </div>
          <div>
            <button
              onClick={handleSearch}
              disabled={loading}
              css={s.s1buttonSt}
            >
              {loading ? "검색중" : "검색"}
            </button>
          </div>
          {error && <p>Error: {error}</p>}
        </div>

        <hr />

        <div css={s.text}>약품 모양으로 검색</div>
        <div css={s.shapeSt}>
          <div css={s.medicineAll}>
            <div css={s.medicineName1}>약품 모양 선택</div>
            <div css={s.shapeLt}>
              {drugShape.map((shape) => (
                <div
                  className="shape"
                  key={shape.id}
                  onClick={() => handleShapeClick(shape.name)}
                  css={[
                    shape.style,
                    selectedDrugOption.shape === shape.name && s.selectSt,
                  ]}
                >
                  {shape.icon}
                  <div css={s.Text}>{shape.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div css={s.shapeSt2}>
          <div css={s.medicineAll}>
            <div css={s.medicineName1}>약품 색상 선택</div>
            <div css={s.colorLt}>
              {drugColor.slice(0, visibleColors).map((color) => (
                <div
                  className="color"
                  key={color.id}
                  onClick={() => handleColorClick(color.name)}
                  css={[
                    color.style,
                    selectedDrugOption.color === color.name && s.selectSt,
                  ]}
                >
                  {color.icon}
                  <div css={s.Text}>{color.name}</div>
                </div>
              ))}
              <div css={s.arrowButtonSt}>
                {visibleColors < drugColor.length ? (
                  <button
                    onClick={handleShowMoreColors}
                    style={{ fontSize: "30px" }}
                  >
                    +
                  </button>
                ) : (
                  <button
                    onClick={handleShowLessColors}
                    style={{ fontSize: "30px" }}
                  >
                    −
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div css={s.shapeSt3}>
          <div css={s.medicineAll}>
            <div css={s.medicineName1}>약품 분할선 선택</div>
            <div css={s.lineLi}>
              {drugLine.map((line) => (
                <div
                  className="line"
                  key={line.id}
                  onClick={() => handleLineClick(line.name)}
                  css={[
                    line.style,
                    selectedDrugOption.line === line.name && s.selectSt,
                  ]}
                >
                  {line.icon}
                  <div css={s.Text}>{line.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div css={s.buttonCT}>
          <button css={s.s2buttonSt} onClick={callApi}>
            검색
          </button>
          <button
            css={s.s2buttonSt}
            onClick={() => setSelectedDrugOption(optionInitialData)}
          >
            초기화
          </button>
        </div>

        {data && (
          <div>
            <h3>검색 결과:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
