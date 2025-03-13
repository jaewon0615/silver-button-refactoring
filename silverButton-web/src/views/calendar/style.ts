/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const modalContent = css`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  z-index: 1001;
`;

export const modalLeft = css`
  flex: 1;
`;

export const modalRight = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  textarea {
    font-size: 20px; /* 원하는 글자 크기로 조정 */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none; /* 크기 조정 방지 */
  }
`;

export const eventList = css`
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
`;

export const eventItem = css`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
`;

export const deleteButton = css`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
`;

export const addEvent = css`
  text-align: center;
  padding: 10px;
  background: #007bff;
  color: white;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
`;

export const saveButton = css`
  background: green;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

export const closeButton = css`
  background: gray;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

export const calendarContainer = css`
  width: 100%;
  margin: auto;
  padding: 20px 150px;
  position: relative;
  z-index: 1;
`;
