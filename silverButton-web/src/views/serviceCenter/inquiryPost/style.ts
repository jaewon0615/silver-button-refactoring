// style.ts
import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const conttSt = css`
  width: 100%;
  
  background-color: #f8f1e4 ;
  border-radius: 24px;
  padding: 40px 80px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

export const title = css`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  text-align: center;
  color: #333;
`;

export const formWrapper = css`
  width: 100%;
  background-color: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const inputGroup = css`
  display: flex;
  flex-direction: column;
`;

export const label = css`
  font-size: 20px;
  margin-bottom: 6px;
  font-weight: bold;
  color: #444;
`;

export const input = css`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fafafa;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #8e44ad;
    outline: none;
    box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.1);
  }
`;

export const contentInput = css`
  padding: 12px 16px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fafafa;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #8e44ad;
    outline: none;
    box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.1);
  }
`;

export const passwordInput = css`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fafafa;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #8e44ad;
    outline: none;
    box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.1);
  }
`;

export const submitButton = css`
  background-color: #5d3a00;
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 14px 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  margin-top: 12px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
`;

export const textarea = css`
  padding: 14px 16px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: #fafafa;
  resize: vertical;
  
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #8e44ad;
    outline: none;
    box-shadow: 0 0 0 3px rgba(142, 68, 173, 0.1);
  }
`;

export const charCount = css`
  font-size: 17px;
  color: black;
  text-align: right;
  margin-top: 5px;
`;

export const togglePasswordButton = css`
  position: absolute;
  right: 12px;
  top: 36px;
  background-color: #f7e6d5;
  border: 1px solid #a67c52;
  border-radius: 6px;
  font-size: 14px;
  color: #5d3a00;
  cursor: pointer;
  padding: 10px 20px;
  height: auto;
  display: flex;
  align-items: center;
  transition: background-color 0.2s, transform 0.2s;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: #f0dbc5;
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const inputGroupPassword = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;