// src/global.d.ts
declare global {
  interface Window {
    kakao: any; // kakao 속성을 명시적으로 선언
  }
}
export {}; // 파일을 모듈로 처리하기 위해 추가