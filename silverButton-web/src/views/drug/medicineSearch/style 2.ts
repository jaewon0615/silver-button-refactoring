/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const searchContainer = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`;

export const searchInput = css`
  flex: 1;
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;

export const searchButton = css`
  padding: 8px 16px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const listContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
`;

export const card = css`
  width: 300px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const image = css`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

export const details = css`
  padding: 16px;
`;

