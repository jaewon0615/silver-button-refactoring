import { css } from "@emotion/react";

// Container 스타일
export const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 5vh;
  box-sizing: border-box;
  padding-top: 10px;
  position: relative;
  font-family: 'Roboto', sans-serif; /* 기본 폰트 설정 */
`;

// ContentBox 스타일
export const contentBoxStyle = css`
  background-color: #ffffff;
  padding: 30px;
  width: 100%;
  max-width: 84%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin: 0 auto;
  top: 30%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

// HeaderContainer 스타일
export const headerContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

// SearchContainer 스타일
export const searchContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;
`;

// SearchSelect 스타일
export const searchSelectStyle = css`
  display: flex;
  justify-content: flex-start;
  width: 150px;
  font-size: 18px;
  padding: 10px;
  margin: 0 25px;
  color: #333;
  background-color: red;
  border: 1px solid #ccc;
  border-radius: 5px;

  outline: none;
  appearance: none;
  cursor: pointer;
  background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0,0 20,0 10,10" fill="%23333" /></svg>')
    no-repeat right 10px center;
  background-size: 12px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

// SearchInput 스타일
export const searchInputStyle = css`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
  margin-top: 16px;
  font-size: 20px;
  flex-grow: 1;

  &:focus {
    border-color: #007bff !important; /* 강조 색상 */
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5) !important;
    outline: none;
  }
`;

// SearchButton 스타일
export const searchButtonStyle = css`
  width: 10%;
  padding: 12px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #357abd;
  }

  &:active {
    background-color: #2c6693;
  }
`;


// ButtonContainer 스타일
export const buttonContainerStyle = css`
  width: 10%;
  padding: 12px;
  background-color: #5cb85c; /* 초록색 */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #4cae4f; /* 호버 시 색상 조정 */
  }

  &:active {
    background-color: #449d44; /* 클릭 시 색상 조정 */
  }
`;



// BoardLink 스타일
export const boardLinkStyle = css`
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

// BoardContainer 스타일
export const boardContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

// BoardItem 스타일
export const boardItemStyle = css`
  background-color: white; /* 흰색 배경 */
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #4a90e2; /* 파란색 테두리 추가 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 10px;
  transition: transform 0.2s, box-shadow 0.2s; /* 그림자 효과 전환 추가 */

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(74, 144, 226, 0.4); /* 호버 시 파란색 그림자 효과 */
    border-color: #9b59b6; /* 호버 시 보라색 테두리 변경 */
  }
`;

export const textStyle = css`
  color: #333; /* 어두운 색상으로 텍스트 설정 */
  font-size: 16px; /* 기본 폰트 크기 */
  line-height: 1.5; /* 줄 간격 */
  font-weight: 500; /* 폰트 두께 */
  margin: 0; /* 기본 마진 제거 */
  flex: 1; /* 공간을 균등하게 차지하도록 설정 */
`;

export const titleStyle = css`
  color: #4a90e2; /* 파란색 제목 텍스트 */
  font-size: 18px; /* 제목 폰트 크기 */
  font-weight: bold; /* 굵은 폰트 */
  margin-bottom: 10px; /* 아래 여백 */
`;


// BoardItemContent 스타일
export const boardItemContentStyle = css`
  flex: 9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
`;

// BoardHeader 스타일
export const boardHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

// BoardTitle 스타일
export const boardTitleStyle = css`
  font-weight: bold;
  font-size: 28px;
  color: #333; /* 제목 색상 */
`;

// BoardContent 스타일
export const boardContentStyle = css`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.4;
  min-height: 100px;
  max-height: 200px;
  overflow: hidden;
`;

// BoardFooter 스타일
export const boardFooterStyle = css`
  display: flex;
  font-size: 15px;
  color: #888;
`;

// Username 스타일
export const usernameStyle = css`
  font-weight: bold;
  color: #3b82f6; /* 사용자 이름 색상 */
`;

// CreatedAt 스타일
export const createdAtStyle = css`
  margin-left: 10px;
`;

// Likes 스타일
export const likesStyle = css`
  margin-left: 10px;
  color: red;
`;

// Views 스타일
export const viewsStyle = css`
  margin-left: 10px;
  color: blue;
`;

// BoardImage 스타일
export const boardImageStyle = css`
  width: 100%; /* 부모 요소의 너비에 맞추기 */
  height: 100%; /* 높이는 너비에 맞게 비율 유지 */  
  max-width: 150px;
  max-height: 150px;
  object-fit: contain; /* 잘림 방지 */
  border-radius: 4px;
  box-sizing: border-box;
`;

export const pageTitle = css`
  margin-bottom: 20px;
  font-size: 26px;
  color: #1e88e5;
  font-weight: bold;
  border-bottom: 2px solid #64b5f6;
  padding-bottom: 5px;
  width: 100%; /* 전체 너비를 차지하도록 설정 */
  text-align: center; /* 중앙 정렬 */
`;