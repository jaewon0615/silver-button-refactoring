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
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;


  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;


// SearchInput 스타일
export const searchInputStyle = css`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 40px;
  margin-top: 16px;
  flex-grow: 1;

  &:focus {
    border-color: #6ee7b7 !important;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5) !important;
    outline: none;
  }
`;

// SearchButton 스타일
export const searchButtonStyle = css`
  background: linear-gradient(to right, #6ee7b7, #3b82f6);
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 65px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:hover {
    background: linear-gradient(to right, #4ade80, #2563eb);
  }
`;

// ButtonContainer 스타일
export const buttonContainerStyle = css`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 20px;
  gap: 50px;
`;

// BoardLink 스타일
export const boardLinkStyle = css`
  cursor: pointer;
  font-size: 30px;
  text-decoration: none;
  color: inherit;

  &:hover {
    color: inherit;
  }
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
  
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 10px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

// BoardItemContent 스타일
export const boardItemContentStyle = css`
  flex: 9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
`;

// BoardItemImage 스타일
// export const boardItemImageStyle = css`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   max-width: 80px; /* 최대 너비 */
//   max-height: 80px; /* 최대 높이 */
//   overflow: hidden; /* 넘치는 부분 제거 */
//   flex: 1;
// `;

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
  font-size: 18px;
`;

// BoardContent 스타일
export const boardContentStyle = css`
  font-size: 14px;
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
  font-size: 12px;
  color: #888;
`;

// Username 스타일
export const usernameStyle = css`
  font-weight: bold;
`;

// CreatedAt 스타일
export const createdAtStyle = css`
  margin-left: 10px;
`;

// Likes 스타일
export const likesStyle = css`
  margin-left: 10px;
`;

// Views 스타일
export const viewsStyle = css`
  margin-left: 10px;
`;

// BoardImage 스타일
export const boardImageStyle = css`
  width: 100%; /* 부모 요소의 너비에 맞추기 */
  height: 100%; /* 높이는 너비에 맞게 비율 유지 */  
  max-width: 150px;
  max-height: 150px;
  object-fit: cotain;
  border-radius: 4px;
  box-sizing: border-box;
`;
