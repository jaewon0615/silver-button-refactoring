import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 컨텐츠가 공간에 맞게 배치되도록 설정 */
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;

  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  resize: both;
  overflow: hidden /* 크기 조정 시 내용이 잘리지 않도록 처리 */
  position: relative;
  height: 800px;
`;

export const formStyle = css`
  width: 100%;
  max-width: 1200px;
  height: 100%; /* 폼 전체 높이를 100%로 설정 */
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden; /* 내부 스크롤바 숨기기 */
  position: relative; /* 버튼을 form 내부에서 고정시키기 위해 필요 */
  padding-bottom: 60px; /* 버튼을 위한 여백 */
  flex-grow: 1;
  flex: 1;
  
   /* 내용에만 스크롤을 적용 */
  overflow-y: auto; /* 내용에 스크롤 기능 추가 */
  -webkit-overflow-scrolling: touch; /* 터치 스크롤을 부드럽게 함 */
  
  /* 스크롤바 숨기기 */
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
  flex-shrink: 0; /* 크기가 줄어들지 않도록 설정 */

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
  flex-grow: 1; /* 상위 div가 남은 공간을 차지하게 설정 */
  min-height: 0; /* 최소 높이 설정 */
  height: calc(100% - 120px); /* 버튼, 파일 입력창을 제외한 높이 */
`;

export const contentTextareaStyle = css`
  width: 100%; 
  margin-bottom: 12px;
  max-hight: 300px;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  resize: none; /* 크기 조정 가능하도록 설정 */
  overflow-y: auto;
  height: 100%; /* 기본 높이 설정, 사용자가 적절히 늘릴 수 있도록 */
  flex-grow: 1;
  flex : 1;
  cursor: text; /* 텍스트 입력에 맞는 커서 스타일 추가 */

  /* 스크롤바 숨기기 */
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
  flex-shrink: 0; /* 크기 변하지 않도록 설정 */
  position: absolute; /* 파일 입력창을 하단에 고정 */
  bottom: 120px; /* 버튼 박스 바로 위로 위치 설정 */
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
  position: absolute; /* 버튼을 페이지 하단에 고정 */
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
