import { css } from "@emotion/react";

export const paginationContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;
  border-radius: 8px;
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

export const container = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const title = css`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const gridContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const card = css`
  background: #fff;
  width: 48%;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const image = css`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
`;

export const cardContent = css`
  padding: 20px;
`;

export const cardTitle = css`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const category = css`
  font-size: 16px;
  color: #777;
`;

export const info = css`
  font-size: 16px;
  margin-top: 8px;
  color: #555;
`;

export const hours = css`
  font-size: 16px;
  color: #008080;
  font-weight: bold;
  margin-top: 8px;
`;

export const phone = css`
  font-size: 16px;
  color: #333;
  margin-top: 8px;
`;

export const rating = css`
  font-size: 18px;
  color: #f39c12;
  font-weight: bold;
  margin-top: 8px;
`;

export const noData = css`
  text-align: center;
  font-size: 18px;
  color: #888;
`;

export const deleteButton = css`
  padding: 8px 13px;
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;
  width: auto;
  display: inline-block;
  white-space: nowrap;

  &:hover {
    background-color: #d32f2f;
  }

  &:active {
    background-color: #c62828;
  }
`;

export const copyButton = css`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  margin-left: 10px;
  font-size: 1.2em;

  &:hover {
    color: #0056b3;
  }
`;
