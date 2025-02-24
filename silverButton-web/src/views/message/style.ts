/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const layout = css`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

/*제목*/
export const header = css`
  font-size: 26px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;



export const messageTab = css`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #111;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #d9d9d9;
  }
`

export const activeTab = css`
  background-color: #007BFF;
  color: #FFF;
  font-weight: bold;
`;

export const messageList = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;



const paginationStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  gap: '10px',
};

const buttonStyle = {
  padding: '10px 20px',
  border: '1px solid #ccc',
  backgroundColor: '#fff',
  cursor: 'pointer',
};

const disabledButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#eee',
  color: '#aaa',
  cursor: 'not-allowed',
};

export const container = css`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 2px solid #d1d9e6;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;



export const tabs = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const tabButton = css`
  flex: 1;
  margin: 0 5px;
  padding: 12px 15px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  /*활성화된 버튼*/
  &[data-active="true"] {
    background-color: #0056b3;
    color: white;
  }
`;

export const messageItem = css`
  padding: 14px;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;

  h4 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #555;
  }
`;


export const pagination = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  button {
    padding: 8px 20px;
    width: 48%;
    background-color: #007bff;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:disabled {
      background-color: #ddd; /* 비활성화 */
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #0056b3;
    }
  }
`;

/* 에러 메시지 스타일 */
export const errorMessage = css`
  color: red;
  font-size: 14px;
  margin-top: 15px;
  text-align: center;
`;

/* 로딩 메시지 스타일 */
export const loadingMessage = css`
  color: #333;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

/* 메시지 카드 스타일 */
export const messageBox = css`
  background-color: #fff;
  width: 800px;
  max-width: 400px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
`;

export const createButton = css`
  position: absolute;
  bottom: 8px;
  right: 8px; 
  height: 4vh;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100px;

  &:hover {
    background-color: #0056b3;
  }
`;



export const composeContainer = css`
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const header1 = css`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

export const inputField = css`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
  }
`;

export const textArea = css`
  width: calc(100% - 20px);
  height: 120px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  resize: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0px 0px 5px rgba(0, 123, 255, 0.5);
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: space-between;
`;

export const sendButton = css`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const cancelButton = css`
  background-color: #ff6b6b;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e60000;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const messageList1 = css`
  list-style-type: none;
  padding: 0;
`;

export const messageItem2 = css`
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f4f4f4;
  }
`;

export const messageTitle = css`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const messageSender = css`
  font-size: 0.9rem;
  color: #666;
`;

export const messageDate = css`
  font-size: 0.8rem;
  color: #999;
`;

export const containerStyle = css`
width: 100%;
height: 800px;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
`;

export const headerStyle = css`
  margin-bottom: 20px;
  font-size: 24px;
  color: #1e88e5;
  display: flex;
  flex-direction: row;
  font-weight: bold;
  border-bottom: 2px solid #64b5f6;
  padding-bottom: 5px;
`;

export const inputStyle = css`
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  border: 2px solid #d1d9e6;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

export const textareaStyle = css`
  width: 100%;
  height: 400px; /* 기존 크기 유지 */
  padding: 12px;
  margin-bottom: 10px;
  border: 2px solid #d1d9e6;
  border-radius: 8px;
  font-size: 16px;
  resize: none;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

export const buttonStyle1 = css`
  width: 100%;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #357abd;
  }

  &:active {
    background-color: #2c6693;
  }
`;

export const deleteButton = css`
  background: linear-gradient(to right, #ff6b6b, #ff4757); /* 레드 그라데이션 */
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: linear-gradient(to right, #ff4757, #e63946);
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

export const buttonStyle2 = css`
  flex: 1;
  margin: 0 5px;
  padding: 10px 15px;
  background-color: white;
  border: 2px solid #4a90e2;
  color: #4a90e2;
  font-weight: bold;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #4a90e2;
    color: white;
  }

  &:active {
    background-color: #357abd;
    border-color: #357abd;
  }
`;

export const messageStyle = css`
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const contSt = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 5px 150px;
`;

export const conttSt = css`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* 부드러운 그림자 */
`;

export const buttonDiv = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  gap: 15px;
`;

export const errorStyle = css`
  color: red;
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
background-color: rgba(162, 143, 199, 0.2);
    border: 1px solid rgba(162, 143, 199, 0.5);
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    color: rgba(162, 143, 199, 0.8);
    cursor: pointer;
    transition: background-color 0.3s, border-color 0.3s, color 0.3s;

    &:hover {
      background-color: rgba(162, 143, 199, 0.3);
      border-color: rgba(162, 143, 199, 0.8);
      color: #ffffff;
    }
`;

export const paginationButtonActive = css`
background-color: rgba(162, 143, 199, 0.8); /* 활성화된 버튼의 배경 */
    color: #ffffff; /* 텍스트 색상 */
    border-color: rgba(162, 143, 199, 1);

    &:hover {
      background-color: rgba(162, 143, 199, 1); /* 호버 시 더 짙은 색 */
    }
`;

export const arrowButton = css`
background-color: rgba(162, 143, 199, 0.2); /* 버튼 배경 */
    border: 1px solid rgba(162, 143, 199, 0.5); /* 테두리 */
    color: rgba(162, 143, 199, 0.8); /* 텍스트 색상 */
    border-radius: 4px;
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;

    &:hover:not(:disabled) {
      background-color: rgba(162, 143, 199, 0.3); /* 호버 시 밝은 색상 */
      border-color: rgba(162, 143, 199, 0.8);
      color: #ffffff;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: rgba(162, 143, 199, 0.1);
      color: rgba(162, 143, 199, 0.5);
      border-color: rgba(162, 143, 199, 0.2);
    }
`;

export const messageLink = css`
  text-decoration: none;
  color: #1e88e5; /* 좀 더 선명한 블루 */
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
    color: #1565c0; /* 어두운 블루 */
  }
`;
