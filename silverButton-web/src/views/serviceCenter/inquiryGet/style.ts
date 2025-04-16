// style.ts
import { css } from '@emotion/react';

export const container = css`
width: 100%;
height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px 150px;
  background-color: #f9f6f1;
`;

export const card = css`
  background: #fff;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
`;

export const loading = css`
  font-size: 18px;
  text-align: center;
`;

export const error = css`
  font-size: 18px;
  color: #e74c3c;
  text-align: center;
`;

export const empty = css`
  font-size: 18px;
  color: #777;
  text-align: center;
`;

export const detailContent = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const title = css`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const content = css`
  font-size: 18px;
  line-height: 1.6;
  color: #444;
`;

export const status = css`
  font-size: 16px;
  font-weight: 500;
  color: #5d3a00;
  background-color: #f1e8dc;
  padding: 10px 16px;
  border-radius: 8px;
  width: fit-content;
`;

export const statusButton = css`
  font-size: 16px;
  font-weight: 600;
  color: #5d3a00;
  padding: 10px 18px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #5d3a00;
  background-color: #fff8ee;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #ffecd1;
    color: #3e2700;
    border-color: #3e2700;
  }
`;

export const row = css`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const replySection = css`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #ccc;
`;

export const replyTitle = css`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const replyBox = css`
  background: #f9f9f9;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
`;

export const replyContent = css`
  font-size: 1rem;
`;

export const replyDate = css`
  font-size: 0.8rem;
  color: #777;
  margin-top: 0.5rem;
`;

export const noReply = css`
  margin-top: 1rem;
  font-style: italic;
  color: #666;
`;
