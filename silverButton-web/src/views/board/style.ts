import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 5vh;
  box-sizing: border-box;
  padding-top: 10px;
  position: relative;
  font-family: "Roboto", sans-serif;
`;

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

export const headerContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const searchContainerStyle = css`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding-bottom: 20px;
`;

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

export const buttonContainerStyle = css`
  width: 10%;
  padding: 12px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
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

export const boardLinkStyle = css`
  cursor: pointer;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

export const boardContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const boardItemStyle = css`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #4a90e2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  gap: 10px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(74, 144, 226, 0.4);
    border-color: #9b59b6;
  }
`;

export const textStyle = css`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  margin: 0;
  flex: 1;
`;

export const titleStyle = css`
  color: #4a90e2;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const boardItemContentStyle = css`
  flex: 9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 20px;
`;

export const boardHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const boardTitleStyle = css`
  font-weight: bold;
  font-size: 28px;
  color: #333;
`;

export const boardContentStyle = css`
  font-size: 18px;
  color: #555;
  margin-bottom: 10px;
  line-height: 1.4;
  min-height: 100px;
  max-height: 200px;
  overflow: hidden;
`;

export const boardFooterStyle = css`
  display: flex;
  font-size: 15px;
  color: #888;
`;

export const usernameStyle = css`
  font-weight: bold;
  color: #3b82f6;
`;

export const createdAtStyle = css`
  margin-left: 10px;
`;

export const likesStyle = css`
  margin-left: 10px;
  color: red;
`;

export const viewsStyle = css`
  margin-left: 10px;
  color: blue;
`;

export const boardImageStyle = css`
  width: 100%;
  height: 100%;
  max-width: 150px;
  max-height: 150px;
  object-fit: contain;
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
  width: 100%;
  text-align: center;
`;
