/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const container = css`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const searchInput = css`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const card = css`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: left;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const image = css`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
`;

export const title = css`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

export const category = css`
  font-size: 16px;
  color: #777;
  margin-bottom: 5px;
`;

export const location = css`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
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

export const buttonStyle = css`
  background-color: #007bff;
  color: white;
  border: none;
  width: 13%;
  height: 60px;
  font-size: 20px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004494;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleSeoul = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/sunny/?src=https%3A%2F%2Fus.123rf.com%2F450wm%2Fnattanaicj%2Fnattanaicj1512%2Fnattanaicj151200188%2F50305740-%25EC%2584%259C%25EC%259A%25B8-%25ED%2595%259C%25EA%25B5%25AD%25EC%2597%2590%25EC%2584%259C-%25EB%25B0%25A4%25EC%2597%2590-%25EA%25B2%25BD%25EB%25B3%25B5%25EA%25B6%2581-%25EA%25B6%2581%25EC%25A0%2584.jpg%3Fver%3D6&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleBusan = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAxMjVfMTQz%2FMDAxNTQ4MzgzNzcwMjMx.nUDKaXGW3qVqthejVZ30xvM7vCZvS2Ohl1i5YhZcNFsg.oWVcDktQxCzz-fFnS_rNUh0ek4Nuate1Qxrfv7j_MKMg.JPEG.sungdaehue%2F%25B1%25A4%25BE%25C8%25B4%25EB%25B1%25B3.jpg&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleJeju = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/sunny/?src=https%3A%2F%2Fcdn.crowdpic.net%2Fdetail-thumb%2Fthumb_d_4707B7D506761FE6CD6FBA4965130729.jpg&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  overflow-x: auto; /* 가로 스크롤 가능 */
  white-space: nowrap; /* 버튼들이 한 줄에 유지되도록 설정 */
`;

export const buttonStyleGangwon = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTJfMTYg%2FMDAxNzA3NzQ3MTcyMzU5.pM3xPRqkv7mdh2adF0_WY5QU6eAw1wRKfU4Z7a0nN8Qg.4k2JOAxgbULQ44fWa8QWDunkEoZlLuYsvrsxmELRNhkg.JPEG.dobotv%2F20240208_135736.jpg&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleGyeongbuk = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjdfMTYz%2FMDAxNTk4NTM1ODE3NTQy.iwdsNh32nZ-nuAXXTR_c8h54GtEj82npmw89JjaiZXQg.QPTsSZyIPM11uiPI_pmC2pxnwm3IsQ1d7A7CrMCXy1gg.JPEG.yusini7272%2F%25C0%25AF1%25B1%25E8%25C4%25A5%25B1%25B8%25BB%25E7%25C1%25F8%25B0%25F8%25B8%25F0%25C0%25FC_%25B1%25E8%25C3%25B51_%25C0%25AF%25C0%25AF%25BD%25C5.jpg&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleGyeongnam = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/sunny/?src=https%3A%2F%2Fthumb2.gettyimageskorea.com%2Fimage_preview%2F700%2F201708%2FMBI%2FMWVD17000133.jpg&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleJeonnam = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210625_56%2F16246205489709YoVt_JPEG%2FizIqv-ID2Xf40C83Y5UYToFP.jpg") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleJeonbuk = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20150615_235%2Fpgu1224_14343484468201tYVi_JPEG%2F20150612_102029.jpg&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleChungbuk = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20131002_230%2F2990045_1380684871602FJMH4_JPEG%2F1380684010777_20130921_170204.jpg&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleChungnam = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F003%2F2018%2F10%2F22%2FNISI20181021_0000217193_web_20181021170743_20181022065054940.jpg&type=sc960_832") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const buttonStyleGyeongki = css`
  width: 17%;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  color: white; /* 텍스트 색깔을 선명하게 유지 */
  border: none;
  border-radius: 15px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://news.tbs.seoul.kr/Upload/Image/20230520/00000000000001325124.jpg") 
                no-repeat center center / cover;
    opacity: 0.5; /* 배경 이미지만 50% 투명하게 설정 */
    z-index: 0;
  }

  span {
    position: relative;
    z-index: 1; /* 글자가 배경 위에 위치하도록 설정 */
    color: white; /* 텍스트 색깔을 원래대로 유지 */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 텍스트에 그림자 추가하여 가독성 향상 */
  }

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;