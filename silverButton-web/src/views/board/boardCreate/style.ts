import { css } from "@emotion/react";

export const formWrapper = css`
  min-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 1500px;
  margin: 0 auto;
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
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;

// 이미지 스타일 (이미지가 삽입될 위치 설정)
export const imagePreview = css`
  margin-top: 16px;
  max-width: 100%;
  max-height: 400px; /* 이미지의 최대 높이를 설정하여 화면에 적당히 표시 */
  object-fit: contain; /* 이미지의 비율을 유지하며 크기를 조정 */
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
  background: linear-gradient(to right, #6ee7b7, #3b82f6);
  border: none;
  color: white;
  padding: 14px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
`;

export const exitButton = css`
  background: linear-gradient(to right, #f97316, #f43f5e);
  border: none;
  color: white;
  padding: 14px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
`;
