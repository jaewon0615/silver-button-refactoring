/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled';

export const SignupContainer = css`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  
  h1 {
    text-align: center;
    color: #333;
    font-size: 24px;
    margin-bottom: 30px;
  }
`;

export const InputGroup = css`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    margin-bottom: 5px;
    color: #555;
  }

  input {
    padding: 12px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    transition: border 0.3s ease;

    &:focus {
      border-color: rgba(147, 129, 255, 0.5);
    }
  }
`;

export const UserIdWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckButton = css`
  padding: 10px 20px;
  background: linear-gradient(to right bottom, rgb(147, 129, 255), #6EE7B7);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(to right bottom, rgba(147, 129, 255, 0.8), #6EE7B7);
  }
`;

export const Message = css`
  font-size: 14px;
  margin-top: 5px;
`;

export const GenderOptions = css`
  display: flex;
  gap: 15px;
`;

export const Terms = css`
  display: flex;
  align-items: center;

  label {
    font-size: 14px;
    color: #555;
  }

  span {
    color: rgba(147, 129, 255, 0.5);
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: rgba(147, 129, 255, 0.8);
    }
  }
`;

export const Modal = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = css`
  background-color: white;
  padding: 20px;
  width: 80%;
  max-width: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  
  h2 {
    text-align: center;
    font-size: 20px;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    font-size: 16px;

    li {
      margin-bottom: 10px;
    }
  }

  button {
    display: block;
    margin: 20px auto 0;
    padding: 10px 20px;
    background: linear-gradient(to right bottom, rgb(147, 129, 255), #6EE7B7);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: linear-gradient(to right bottom, rgba(147, 129, 255, 0.8), #6EE7B7);
    }
  }
`;

export const ButtonContainer = css`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const BackButton = css`
  width: 48%;
  padding: 12px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  background-color: #6c757d;
  color: white;
  border: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a6268;
  }
`;

export const SignupButton = css`
  background: linear-gradient(to right bottom, rgb(147, 129, 255), #6EE7B7);

  &:hover {
    background: linear-gradient(to right bottom, rgba(147, 129, 255, 0.8), #6EE7B7);
  }
`;
