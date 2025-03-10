import { css } from "@emotion/react";

export const main = css`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 150px;
`;

export const video = css`
  box-sizing: border-box;
  padding: 10px;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const videoBackground = css`
  box-sizing: border-box;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  border-radius: 5px;
`;

export const homeContentContainer = css`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const healthMegazineTop5 = css`
  width: 50%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const top5Box = css`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
`;

export const top5Title = css`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  color: #4682b4;
`;

export const loginTitle = css`
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  color: black;
`;

export const titleContetn = css`
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;

export const snsLogin = css`
  width: 50%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const loginBox = css`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
`;

export const loginAll = css`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const naverLogin = css`
  width: 85%;
  height: 70px;
  margin-bottom: 5px;
  background-color: #03c75a;
  font-size: 25px;
  text-align: center;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: #35b62c;
  }
`;

export const naverIcon = css`
  position: absolute;
  left: 1px;
  width: 60px;
  height: 48px;
  object-fit: contain;
`;

export const kakaoLogin = css`
  width: 85%;
  height: 70px;
  background-color: #fee500;
  font-size: 25px;
  text-align: center;
  color: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    background-color: #f0d200;
  }
`;

export const kakaoIcon = css`
  position: absolute;
  left: 6px;
  width: 50px;
  height: 35px;
  object-fit: contain;
`;

export const generalLogin = css`
  box-sizing: border-box;
  width: 85%;
  height: 70px;
  margin-top: 25px;
  font-size: 25px;
  text-align: center;
  background-color: rgba(162, 143, 199, 0.8);
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  &:hover {
    border: 1px solid rgba(162, 143, 199, 0.8);
    background-color: white;
    color: black;
  }
`;

export const magazineBox = css`
  margin-top: 16px;
`;

export const listStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 23px;
  color: #333;
  margin-left: 1%;
  margin-bottom: 20px;
`;

export const levelText = (level: number) => css`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
  color: ${level < 6 ? "#333" : level < 11 ? "#ff9800" : "#e91e63"};
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  :hover{
    text-decoration: underline;
  }

  ${level >= 11 &&
  `animation: pulse 1s infinite alternate;
   @keyframes pulse {
     0% { transform: scale(1); }
     100% { transform: scale(1.1); }
   }`}
`;

export const scheduleContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
`;

// ✅ 일정 카드 스타일 (흰색 배경 + 파란색 테두리 + 그림자)
export const scheduleBox = css`
  width: 90%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 12px;
  border: 2px solid #4682b4;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  padding: 15px;
  text-align: center;
`;

// ✅ 일정 제목 (굵은 파란색)
export const scheduleTitle = css`
  font-size: 1.8rem;
  font-weight: bold;
  color: #4682b4;
  margin-bottom: 10px;
`;

// ✅ 일정 내용 스타일
export const scheduleContent = css`
  font-size: 1.2rem;
  color: #555;
  min-height: 50px;
`;

// ✅ 일정이 없을 때
export const emptySchedule = css`
  font-size: 1.2rem;
  color: #aaa;
`;

// ✅ 게임 단계 박스 (보라색 테두리 + 흰색 배경)
export const gameLevelBox = css`
  width: 90%;
  max-width: 500px;
  background: #ffffff;
  border-radius: 12px;
  border: 2px solid #7b68ee;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  padding: 15px;
  text-align: center;
`;

// // ✅ 리스트 스타일 (검은색 대신 어두운 파란색)
// export const listStyle = css`
//   font-size: 1.3rem;
//   font-weight: 500;
//   color: #2c3e50;
//   margin-bottom: 10px;
// `;

// // ✅ 로그인 타이틀 (보라색)
// export const loginTitle = css`
//   font-size: 2rem;
//   font-weight: bold;
//   color: #7b68ee;
//   text-align: center;
//   margin-bottom: 10px;
// `;

// // ✅ 로그인 버튼 배경 색상 조정 (보라색 & 파란색 조합)
// export const generalLogin = css`
//   width: 85%;
//   height: 70px;
//   font-size: 25px;
//   text-align: center;
//   background: linear-gradient(135deg, #9370db, #4682b4);
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   font-weight: bold;
//   border-radius: 5px;
//   transition: 0.3s;

//   &:hover {
//     background: linear-gradient(135deg, #7b68ee, #5a9bd5);
//   }
// `;
