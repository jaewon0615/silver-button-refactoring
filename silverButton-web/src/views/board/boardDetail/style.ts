import { css } from "@emotion/react";

export const mainBox = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-bottom: 50px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const upperBox = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 9;
`;

export const lowerBox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8%;
  width: 100%;
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
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

export const boardTitle = css`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

export const boardAuthor = css`
  font-size: 16px;
  color: #666;
  margin: 0;
  padding-top: 5px;
`;

export const boardContent = css`
  padding-right: 20px;
  margin-bottom: 10px;
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
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
  font-size: 12px;
  color: #aaa;
  width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: -0.6px;
  padding-left: 100px;
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

  height: 85vh;
  overflow-y: hidden;
`;

export const commentList = css`
  flex: 8;
  height: 85%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
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
  min-height: 80px;
  max-height: 200px;
`;

export const deleteButton = css`
  background: none;
  border: none;
  color: #e53e3e;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: #c53030;
  }
`;

export const commentInputBox = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
`;

export const commentActionBox = css`
  display: flex;
  justify-content: center;
`;

export const commentInputStyle = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  height: 80px;

  &:focus {
    border-color: #6ee7b7;
    box-shadow: 0 0 4px rgba(110, 231, 183, 0.5);
    outline: none;
  }
`;

export const commentInput = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  resize: none;
  height: 80px;
`;

export const actionBox = css`
  flex: 7;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: transparent;
`;

export const buttonContainer = css`
  position: absolute;
  left: 2%;
  display: flex;
  gap: 100px;
  align-items: center;
`;

export const exitButtonContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const exitButton = css`
  padding: 12px 20px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #c9302c;
  }

  &:active {
    background-color: #ac2925;
  }
`;

export const fixedButtonContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  padding: 12px 20px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #4cae4f;
  }

  &:active {
    background-color: #449d44;
  }
`;

export const clickableIcon = css`
  cursor: pointer;
  font-size: 13px;
  margin-right: 10px;
`;
