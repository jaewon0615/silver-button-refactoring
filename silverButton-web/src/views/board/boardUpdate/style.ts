import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;

  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  resize: both;
  overflow: hidden;
  position: relative;
  height: 800px;
`;

export const formStyle = css`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
  position: relative;
  padding-bottom: 60px;
  flex-grow: 1;
  flex: 1;

  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const inputStyle = css`
  width: 80%;
  margin-bottom: 12px;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-sizing: border-box;
  flex-shrink: 0;

  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;

export const contentWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  min-height: 0;
  height: calc(100% - 120px);
`;

export const contentTextareaStyle = css`
  width: 100%;
  margin-bottom: 12px;
  max-height: 300px;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  resize: none;
  overflow-y: auto;
  height: 100%;
  flex-grow: 1;
  flex: 1;
  cursor: text;

  &::-webkit-scrollbar {
    display: none;
  }

  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;

export const fileInputStyle = css`
  width: 100%;
  margin-bottom: 12px;
  font-size: 16px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  flex-shrink: 0;
  position: absolute;
  bottom: 120px;
  z-index: 1;

  &:hover {
    border-color: #3b82f6;
  }
`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: space-between;
  gap: 14px;
  width: 100%;
  margin-top: 20px;
  position: absolute;
  bottom: 20px;
  z-index: 0;
`;

export const buttonStyle = css`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s ease, transform 0.2s ease;
  border: none;

  &:hover {
    transform: scale(1);
  }

  &:active {
    transform: scale(1);
  }
`;

export const submitButtonStyle = css`
  ${buttonStyle};
  background: linear-gradient(to right, #6ee7b7, #3b82f6);
  color: white;

  &:hover {
    background: linear-gradient(to right, #3b82f6, #6ee7b7);
  }
`;

export const exitButtonStyle = css`
  ${buttonStyle};
  background: linear-gradient(to right, #f97316, #f43f5e);
  color: white;

  &:hover {
    background: linear-gradient(to right, #f43f5e, #f97316);
  }
`;
