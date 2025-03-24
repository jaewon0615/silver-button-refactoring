/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const searchInput = css`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const card = css`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const image = css`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

export const title = css`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const category = css`
  font-size: 16px;
  color: #777;
  margin-bottom: 5px;
`;

export const location = css`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const pageButton = css`
  padding: 10px 15px;
  margin: 5px;
  border: none;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border-radius: 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
