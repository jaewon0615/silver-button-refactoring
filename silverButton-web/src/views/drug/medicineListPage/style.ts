import { css } from "@emotion/react";

export const contSt = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 150px;
`;

export const conttSt = css`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const userId = css`
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid #007bff;
  padding-bottom: 10px;
`;

export const listCt = css`
  width: 100%;
  height: 250px;
  border: 2px solid rgba(147, 129, 255, 0.8);
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: rgba(147, 129, 255, 0.1);
  }
`;

export const medicinePr = css`
  width: 10%;
  height: 160px;
  border: 2px solid #007bff;
  border-radius: 8px;
  margin-left: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #555;
  cursor: pointer;
`;

export const detailName = css`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const medicineAll = css`
  width: 100%;
  height: 100%;
`;

export const medicineRow = css`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 20px;
`;

export const medicineName = css`
  border-bottom: 2.5px solid #007bff;
  display: flex;
  font-size: 30px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
`;

export const medicneDeatail = css`
  width: 95%;
  height: 175px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin-left: 2%;
  margin-top: 0.5%;
  cursor: pointer;
  font-size: 18px;
  color: black;
  padding-left: 10px;
  padding-top: 10px;
`;

export const detailText = css`
  margin-bottom: 10px;
`;

export const text = css`
  font-weight: bold;
  color: #007bff;
  font-size: 20px;
  margin-top: 13px;
`;

export const imageBox = css`
  width: 13%;
  height: 210px;
  border: 1px solid transparent;
  border-radius: 10px;
  margin-left: 1%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #aaa;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const paginationButton = css`
  background-color: rgba(147, 129, 255, 0.2);
  border: 1px solid rgba(147, 129, 255, 0.5);
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: rgba(147, 129, 255, 0.8);
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(147, 129, 255, 0.3);
    border-color: rgba(147, 129, 255, 0.8);
    color: #ffffff;
  }
`;

export const paginationButtonActive = css`
  background-color: rgba(147, 129, 255, 0.8);
  color: #ffffff;
  border-color: rgba(147, 129, 255, 1);

  &:hover {
    background-color: rgba(147, 129, 255, 1);
  }
`;

export const arrowButton = css`
  background-color: rgba(147, 129, 255, 0.2);
  border: 1px solid rgba(147, 129, 255, 0.5);
  color: rgba(147, 129, 255, 0.8);
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover:not(:disabled) {
    background-color: rgba(147, 129, 255, 0.3);
    border-color: rgba(147, 129, 255, 0.8);
    color: #ffffff;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: rgba(147, 129, 255, 0.1);
    color: rgba(147, 129, 255, 0.5);
    border-color: rgba(147, 129, 255, 0.2);
  }
`;

export const scrollableContent = css`
  max-height: 1000px;
  overflow-y: auto;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;

export const textdiv = css`
  color: black;
`;
