import { css } from "@emotion/react";

export const userId = css`
  font-size: 40px;
  font-weight: bold;
  border-bottom: 3px solid black;
  padding-bottom: 10px;
`;

export const listCt = css`
  width: 100%;
  height: 220px;
  border: 2px solid rgba(162, 143, 199, 0.8);
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  &:hover {
    cursor: pointer;
    background-color: rgba(147, 129, 255, 0.05);
  }
`;

export const medicinePr = css`
  width: 10%;
  height: 160px;
  border: 2px solid black;

  border-radius: 8px;
  margin-left: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #aaa;
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
  align-items: center;
`;

export const medicineName = css`
  border-bottom: 2.5px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2.5%;
  margin-top: 1%;
  font-size: 20px;
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
`;

export const imageBox = css`
  width: 23%;
  height: 200px;
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

export const saveButton = css`
  padding: 8px 12px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid rgba(162, 143, 199, 0.8);
  &:hover {
    background-color: #0056b3;
    color: white;
  }

  &:active {
    background-color: #003f7f;
  }
`;

export const scroll = css``;
