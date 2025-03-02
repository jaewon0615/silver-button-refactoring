/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const title = css`
  text-align: center;
  color: #333;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const inputGroup = css`
  display: flex;
  flex-direction: column;
`;

export const label = css`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

export const input = css`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const submitButton = css`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const recordList = css`
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

export const recordItem = css`
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fff;
`;
