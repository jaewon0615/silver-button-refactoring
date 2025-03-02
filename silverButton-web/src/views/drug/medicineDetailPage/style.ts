import { css } from "@emotion/react";

export const contSt = css`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 150px;
  font-family: "Roboto", sans-serif;
`;

export const conttSt = css`
  width: 100%;
  height: auto;
  background-color: rgba(147, 129, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const medicineName = css`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  font-family: "Montserrat", sans-serif;
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
  color: #007bff;
  font-size: 25px;
  font-family: "Roboto", sans-serif;
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
  font-family: "Roboto", sans-serif;

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
  font-family: "Roboto", sans-serif;
`;

export const error = css`
  color: #dc3545;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
`;

export const loading = css`
  color: #6c757d;
  text-align: center;
  font-size: 1.1rem;
  margin-top: 10px;
  font-family: "Roboto", sans-serif;
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
  border: 1px solid rgba(147, 129, 255, 0.8);
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  &:active {
    background-color: red;
  }
`;

export const modal = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const modalContent = css`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 12px;
  width: 500px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  color: #333;
  font-family: "Roboto", sans-serif;
  border: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

export const modalButton = css`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 24px;
  margin: 15px 0;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }
`;

export const closeButton = css`
  background-color: #f1f1f1;
  color: #333;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease;
  margin-left: 20px;
  font-family: "Roboto", sans-serif;

  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
  }
`;

export const modalText = css`
  font-size: 20px;
  color: #333;
  font-family: "Roboto", sans-serif;
`;
