import { css } from "@emotion/react";

export const formWrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const formContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  min-height: 70vh;
  border: 1px solid #ddd;
  border-radius: 12px;
`;

export const titleInput = css`
  margin-bottom: 1px;
  padding: 12px;
  font-size: 18px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;

export const fileInput = css`
  margin-bottom: 1px;
  padding: 12px;
  font-size: 16px;
  width: 100%;
  border: 2px solid #3b82f6;
  border-radius: 4px;
  background-color: #e7f3ff;
  color: #3b82f6;
  cursor: pointer;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #1e88e5;
    box-shadow: 0 0 4px rgba(30, 136, 229, 0.5);
    outline: none;
  }

  &:hover {
    border-color: #1e88e5;
    background-color: #d1e8ff;
  }
`;

export const imagePreview = css`
  margin-top: 16px;
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const contentTextarea = css`
  margin-bottom: 1px;
  padding: 12px;
  font-size: 16px;
  width: 100%;
  height: 48vh;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow-y: auto;
  resize: vertical;
  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const submitButton = css`
  width: 10%;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #357abd;
  }

  &:active {
    background-color: #2c6693;
  }
`;

export const exitButton = css`
  width: 10%;
  padding: 12px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #ff1a1a;
  }

  &:active {
    background-color: #e60000;
  }
`;

export const pageTitle = css`
  margin-bottom: 20px;
  font-size: 26px;
  color: #1e88e5;
  font-weight: bold;
  border-bottom: 2px solid #64b5f6;
  padding-bottom: 5px;
  width: 90%;
  text-align: center;
`;

export const titleContainer = css`
  text-align: center;
  margin-bottom: 20px;
`;
