import { css } from "@emotion/react";

export const calculatorStyle = css`
  width: 300px;
  background-color: #1e1e1e;
  padding: 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(145deg, #2c2c2c, #3a3a3a);
  margin: 40px auto;
  border: 1px solid #444;
  box-sizing: border-box;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  pointer-events: none;
`;

export const showCalculator = css`
  animation: slideIn 0.5s ease-out forwards;
  opacity: 1;
  pointer-events: auto;
`;

export const hideCalculator = css`
  animation: slideOut 0.5s ease-in forwards;
  opacity: 0;
  pointer-events: none;
`;

export const showButtonStyle = css`
  padding: 15px 25px;
  background-color: #37474f;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 15px auto;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background-color: #263238;
  }
`;

export const displayStyle = css`
  width: 100%;
  height: 60px;
  font-size: 28px;
  text-align: right;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #424242;
  color: #ffffff;
  border: 1px solid #616161;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const buttonContainerStyle = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  width: 100%;
  margin-top: 15px;
`;

export const buttonStyle = css`
  height: 55px;
  font-size: 30px;
  background-color: #263238;
  border: 1px solid #1e1e1e;
  border-radius: 10px;
  color: #eceff1;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s ease, box-shadow 0.3s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #455a64;
    transform: scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #1e1e1e;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    border-color: #607d8b;
  }
`;

export const cStyle = css`
  height: 55px;
  font-size: 15px;
  background-color: #263238;
  border: 1px solid #1e1e1e;
  border-radius: 10px;
  color: #eceff1;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s ease, box-shadow 0.3s;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #455a64;
    transform: scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #1e1e1e;
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
    border-color: #607d8b;
  }
`;

export const keyframes = css`
  @keyframes slideIn {
    from {
      transform: translateX(-50%) translateY(-100%);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
    to {
      transform: translateX(-50%) translateY(-100%);
      opacity: 0;
    }
  }
`;

export const container = css`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 35px;
`;

export const title = css`
  text-align: center;
  color: #1e88e5;
  padding-bottom: 20px;
  font-weight: bold;
  border-bottom: 2px solid #1e88e5;
`;

export const form = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const inputGroup = css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const label = css`
  font-weight: bold;
  color: #1565c0;
  font-size: 25px;
`;

export const input = css`
  padding: 10px;
  border: 1px solid #64b5f6;
  border-radius: 4px;
  transition: border-color 0.3s;
  font-size: 17px;
  background: #ffffff;

  &:focus {
    border-color: #1e88e5;
    outline: none;
  }
`;

export const submitButton = css`
  padding: 12px 20px;
  background-color: #1e88e5;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #1565c0;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #0d47a1;
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const chartButton = css`
  padding: 12px 20px;
  background-color: #ff7043;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s, transform 0.2s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-top: 28px;

  &:hover {
    background-color: #f4511e;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    background-color: #e64a19;
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const recordList = css`
  margin-top: 20px;
  border-top: 1px solid #64b5f6;
  padding-top: 10px;
`;

export const recordItem = css`
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 10px 0;
  transition: 0.3s;
  margin-top: 50px;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const recordContainer = css`
  width: 100%;
  height: 100%;
`;

export const resultContainer = css`
  width: 100%;
  height: 600px;
`;

export const resultText = css`
  text-align: center;
  padding-bottom: 20px;
  color: #1e88e5;
  font-weight: bold;
  border-bottom: 2px solid #1e88e5;
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
  margin-top: 14px;

  &:hover {
    background-color: #d32f2f;
  }

  &:active {
    background-color: #c62828;
  }
`;

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

export const recordLabel = css`
  font-weight: bold;
  color: #555;
`;

export const recordValue = css`
  margin-left: 5px;
  color: #777;
`;

export const createdDate = css`
  font-size: 12px;
  color: #888;
  margin-top: 10px;
`;

export const resultPageText = css`
  font-weight: bold;
  margin-top: 15px;
  font-size: 23px;
`;

export const datePageText = css`
  font-weight: bold;
  margin-top: 15px;
  font-size: 23px;
  color: red;
`;

export const resultPageText2 = css`
  font-weight: bold;
  margin-top: 10px;
  font-size: 15px;
`;

export const dataText = css`
  font-weight: bold;
  color: red;
  margin-top: 10px;
`;
export const errorMessage = css`
  text-align: center;
  font-size: 16px;
  color: #d32f2f;
  font-weight: bold;
  background: #ffccbc;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #e57373;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const labelStyle = css`
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
`;

export const inputStyle = css`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #f9f9f9;
  margin-bottom: 20px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const span = css`
  font-weight: bold;
  color: orange;
`;

export const recordCard = css`
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 10px 0;
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const recordHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

export const recordDetails = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
`;

export const amount = css`
  font-weight: bold;
  font-size: 18px;
  color: #e44d26;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const moreDetails = css`
  margin-top: 8px;
  summary {
    cursor: pointer;
    font-weight: bold;
    color: #007bff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const iconStyle = css`
  margin-right: 5px;
  font-size: 16px;
  color: #555;
`;

export const icon = css`
  height: 20px;
`;

export const conttSt = css`
  width: 100%;
  height: auto;
  background-color: rgba(147, 129, 255, 0.08);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 30px;
`;
