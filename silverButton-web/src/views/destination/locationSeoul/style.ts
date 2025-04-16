import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  margin: 0 auto;
  padding: 20px 150px;
  text-align: center;
`;

export const searchInput = css`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const gridContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

export const card = css`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

export const image = css`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const cardContent = css`
  padding: 15px;
  text-align: left;
`;

export const title = css`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const category = css`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

export const location = css`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

export const viewCount = css`
  font-size: 12px;
  color: #999;
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

export const buttonContainer = css`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const buttonStyle = css`
  color: black;
  border: none;
  width: 18%;
  height: 80px;
  font-size: 25px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  background-image: url("https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-0b0c-622f-bcb4-20e905922443/raw?se=2025-04-16T07%3A05%3A20Z&sp=r&sv=2024-08-04&sr=b&scid=53c95b19-aec3-59fc-b031-bc59627ba37a&skoid=a3336399-497e-45e5-8f28-4b88ecca3d1f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T19%3A19%3A09Z&ske=2025-04-16T19%3A19%3A09Z&sks=b&skv=2024-08-04&sig=oVXZHsnLaN/%2B%2Bw4p1R7Gm51wjOyR/vpJ%2BexDmkq22Fo%3D");
  
  background-size: cover;             // 이미지가 버튼을 꽉 채우도록
  background-position: center;       // 중앙 정렬
  background-repeat: no-repeat;      // 반복 방지

  transition: background-color 0.3s ease-in-out;
`;

export const buttonStyleGn = css`
  color: black;
  border: none;
  width: 18%;
  height: 80px;
  font-size: 25px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  background-image: url("https://sdmntpritalynorth.oaiusercontent.com/files/00000000-1c28-6246-9ec0-15441342798c/raw?se=2025-04-16T07%3A23%3A53Z&sp=r&sv=2024-08-04&sr=b&scid=cd12f922-ccd7-5a2f-947c-b50e251a755e&skoid=a3336399-497e-45e5-8f28-4b88ecca3d1f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-15T19%3A17%3A57Z&ske=2025-04-16T19%3A17%3A57Z&sks=b&skv=2024-08-04&sig=dfPECbUNP3BVu96POPWhoqm2EgImPhcw%2BVQCUbjX6Ss%3D");
  
  background-size: cover;             // 이미지가 버튼을 꽉 채우도록
  background-position: center;       // 중앙 정렬
  background-repeat: no-repeat;      // 반복 방지

  transition: background-color 0.3s ease-in-out;
`;

export const buttonStyleJg = css`
  color: black;
  border: none;
  width: 18%;
  height: 80px;
  font-size: 25px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  background-image: url("https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-cd24-61f7-8d00-327931316717/raw?se=2025-04-16T16%3A05%3A14Z&sp=r&sv=2024-08-04&sr=b&scid=ec3a9f70-a6b4-5f6d-9a19-373380fcf8bc&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T13%3A52%3A34Z&ske=2025-04-17T13%3A52%3A34Z&sks=b&skv=2024-08-04&sig=JHTEp/b8mwcKhWmDwodtn0O3mEQGUNAAmzoiorFk3Dk%3D");
  
  background-size: cover;             // 이미지가 버튼을 꽉 채우도록
  background-position: center;       // 중앙 정렬
  background-repeat: no-repeat;      // 반복 방지

  transition: background-color 0.3s ease-in-out;
`;

export const buttonStyleYDP = css`
  color: black;
  border: none;
  width: 18%;
  height: 80px;
  font-size: 25px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  background-image: url("https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-8ed4-61f7-a565-e5fdae1364b2/raw?se=2025-04-16T16%3A01%3A58Z&sp=r&sv=2024-08-04&sr=b&scid=d1d24f0d-0f3c-5997-853d-9c3d6d412e2c&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T07%3A45%3A26Z&ske=2025-04-17T07%3A45%3A26Z&sks=b&skv=2024-08-04&sig=EqDyXu37WG0GTJi/oJcFIjpUVo2qDBGTm52LCIO%2BImI%3D");
  
  background-size: cover;             // 이미지가 버튼을 꽉 채우도록
  background-position: center;       // 중앙 정렬
  background-repeat: no-repeat;      // 반복 방지

  transition: background-color 0.3s ease-in-out;
`;

export const buttonStyleSP = css`
  color: black;
  border: none;
  width: 18%;
  height: 80px;
  font-size: 25px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  background-image: url("https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-c400-61f7-b27a-fa1dce5b3459/raw?se=2025-04-16T16%3A10%3A38Z&sp=r&sv=2024-08-04&sr=b&scid=ea03d94a-5010-560a-9248-70e8081f459a&skoid=fa7966e7-f8ea-483c-919a-13acfd61d696&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-16T08%3A53%3A27Z&ske=2025-04-17T08%3A53%3A27Z&sks=b&skv=2024-08-04&sig=dTvJlCnJiY/G2N4M3r0VR8FpmSTg0JAh4B5sAx7VL5o%3D");
  
  background-size: cover;             // 이미지가 버튼을 꽉 채우도록
  background-position: center;       // 중앙 정렬
  background-repeat: no-repeat;      // 반복 방지

  transition: background-color 0.3s ease-in-out;
`;






