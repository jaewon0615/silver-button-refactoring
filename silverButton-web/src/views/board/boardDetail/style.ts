import { css } from "@emotion/react";

export const mainBox = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px; /* 둥근 모서리 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 */
  background-color: #fff; /* 흰색 배경 */
`;

export const upperBox = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 9; /* 상단 박스가 9의 비율 */
`;

export const lowerBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8%; /* mainBox 높이의 10% */
  width: 100%; /* mainBox 너비와 동일 */
`;

export const contentContainer = css`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;

export const boardBox = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
  flex: 7;
  border: 1px solid #ccc;
  border-radius: 10px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  padding: 15px;
  box-sizing: border-box;
  
`;

export const boardHeader = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;  /* 제목과 작성자 구간 간격 추가 */
  border-bottom: 1px solid #ddd;  /* 연한 밑줄 추가 */
  padding-bottom: 10px;  /* 밑줄과 내용 간 간격 */
`;

export const boardTitle = css`
  font-size: 24px;
  font-weight: bold; /* 제목을 굵게 */
  color: #333;
  margin: 0;
`;

export const boardAuthor = css`
  font-size: 16px;
  color: #666;
  margin: 0;
  padding-top: 5px; /* 작성자와 제목 간 간격 */
`;

export const boardContent = css`
  padding-right: 20px;
  margin-bottom: 10px;
  flex-grow: 1; /* 남은 공간을 차지하도록 설정 */
  overflow-y: auto; /* 스크롤 활성화 */
  scrollbar-width: none; /* 스크롤바 제거 (Firefox) */
  -ms-overflow-style: none; /* 스크롤바 제거 (IE, Edge) */
  
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 제거 (Chrome, Safari) */
  }
`;

export const boardStats = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const likeViewContainer = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const boardTime = css`
  font-size: 12px; /* 글자 크기 줄이기 */
  color: #aaa;
  width: 300px; /* 너비 조정 */
  white-space: nowrap; /* 내용이 넘치지 않도록 처리 */
  text-overflow: ellipsis; /* 넘칠 경우 "..."으로 표시 */
  letter-spacing: -0.6px; /* 글자 간격 좁히기 */
  padding-left: 100px; /* 왼쪽 여백을 약간 추가하여 오른쪽으로 이동 */
`;

export const commentsBox = css`
  width: 30%;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  box-sizing: border-box;

  height: 85vh; /* 화면 비율에 맞게 높이 설정 */
  overflow-y: hidden; /* 스크롤바를 표시하지 않음 */
`;

export const commentList = css`
 flex:8;
height: 85%;
  overflow-y: auto; /* 댓글 목록이 넘칠 경우 스크롤 활성화 */
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge에서 스크롤바 숨기기 */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari에서 스크롤바 숨기기 */
  }
`;
export const commentItem = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  
`;

export const commentHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

export const commentContent = css`
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  min-height: 80px; /* 높이 설정 */
  max-height: 200px; /* 최대 높이 설정 (필요 시) */
`;


export const deleteButton = css`
  background: none;
  border: none;
  color: #e53e3e; /* 빨강 계열 색상 */
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #c53030; /* 삭제 버튼 호버시 색상 */
  }
`;

export const commentInputBox = css`
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 입력창을 하단에 배치 */
  padding: 10px;
  box-sizing: border-box;
  width: 100%; /* 부모 컨테이너 너비에 맞춤 */
`;


export const commentActionBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* FixedButtonContainer 너비와 동일 */
  height: 100%; /* FixedButtonContainer 높이와 동일 */
  background-color: transparent; /* 배경 제거 */
`;

export const commentInputStyle = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none; /* 크기 조절 불가능 */
  height: 80px; /* 고정 높이 설정 */

  &:focus {
    border-color: #6ee7b7; /* 포커스 시 테두리 색상 */
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5); /* 포커스 시 그림자 */
    outline: none; /* 기본 outline 제거 */
  }
`;

export const commentInput = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  height: 80px; /* 고정 높이 설정 */
`;

export const actionBox = css`
  flex: 7; /* 7:3 비율 설정 */
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: transparent; /* 배경 제거 */
`;

export const buttonContainer = css`
  position: absolute; /* ActionBox 내에서 절대 위치 지정 */
  left: 2%; /* ActionBox 너비의 10% 지점에 위치 */
  display: flex;
  gap: 100px; /* 버튼 간격 */
  align-items: center;
`;

export const exitButtonContainer = css`
  position: absolute; /* ActionBox 내에서 절대 위치 지정 */
  right: 5%; /* ActionBox 오른쪽 끝에 위치 */
  display: flex;
  align-items: center;
`;

export const exitButton = css`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(to right, #f97316, #f43f5e);  /* 나가기 버튼에만 그라디언트 배경 */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e63946; /* 호버 시 색상 */
  }
`;

export const fixedButtonContainer = css`
  flex: 3; /* 7:3 비율 설정 */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  background-color: transparent; /* 배경 제거 */
`;

export const actionButtons = css`
  display: flex;
  justify-content: space-between;
`;

export const editDeleteButtons = css`
  display: flex;
  gap: 10px;
`;

export const button = css`
  padding: 8px 16px;
  font-size: 14px;
  border: none; /* 테두리 제거 */
  border-radius: 5px; /* 약간의 둥근 모서리 */
  background-color: #007bff; /* 버튼 배경색 */
  color: #fff; /* 버튼 글자색 */
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* 호버 시 색상 */
  }
`;

export const clickableIcon = css`
  cursor: pointer;
  font-size: 13px;
  margin-right: 10px;
`;
