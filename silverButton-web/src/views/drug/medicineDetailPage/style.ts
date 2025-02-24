
import { css } from "@emotion/react";

export const contSt = css`
width: 100%;
height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 150px;
`;

export const conttSt = css`
  width: 100%;
  height: 100%;
  background-color: rgba(162, 143, 199, 0.15);
  border-radius: 10px;
  padding: 20px;

`;

export const listCt = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const medicineAll = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const medicineRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const medicineName = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
`;

export const imageBox = css`
  text-align: center;
  img {
    max-width: 100%;
    max-height: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const medicneDeatail = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const detailText = css`
  font-size: 15px;
  line-height: 1.5;
  color: #555;
  margin-top: 20px;
`;

export const text = css`
  font-weight: 600;
  color: #222;
  font-size: 25px;
  color: blue;
`;

export const button = css`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const saveMessage = css`
  margin-top: 10px;
  font-size: 1rem;
  color: #28a745;
  text-align: center;
`;

export const error = css`
  color: #dc3545;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const loading = css`
  color: #6c757d;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const saveButton = css`
  padding: 8px 12px;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid rgba(162, 143, 199, 0.8);
  &:hover {
    background-color: blue;
    color: white;
  }

  &:active {
    background-color: red;
  }
`;