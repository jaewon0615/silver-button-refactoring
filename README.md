# 🧓 Silver Button | 노인 복지 도움 사이트

Silver Button 사이트는 노인분들과 보호자가 함께 사용할 수 있는 복지 통합 사이트입니다.  
정보에 접근이 어려운 노인분들을 대신해 보호자가 연동된 계정으로 함께 사용하고, 요양보호사 매칭을 통해 직접적인 복지 지원을 받을 수 있도록 설계하였습니다.
프로젝트의 핵심 목적은 ‘정보 격차를 줄이고, 복지 접근성을 높이는 것’입니다.
---

## 📌 프로젝트 소개

1.부양자분들에게 필요한 정보를 제공하고 아직 사이트를 사용하기 어려운 부양자분들을 부양자들이 연동하여 더욱 쉽게 사이트 사용이 가능하게 합니다.
2.부양자분들과 보호사를 연결해 주어 부양자분들에게 더욱 직접적인 도움을 주는 것이 가능하게 합니다.

이 프로젝트는 백엔드(Spring Boot)와 프론트엔드(React)를 분리하여 개발하였으며, JWT 인증 및 RESTful API 기반으로 통신합니다.

---

## 👨‍👩‍👧‍👦 대상 사용자

- 노인 (60세 이상)
- 노인 보호자
- 사회복지사

---

## 🛠 사용 기술 스택

| 구분       | 기술                             |
|------------|----------------------------------|
| Frontend   | React |
| Backend    | Spring Boot, Spring Security, JPA, JWT       |
| Database   | MySQL                           |
| 기타        | GitHub, Notion|

---

## ✨ 주요 기능

### 👤 회원 기능
- 회원가입 및 로그인 (JWT 인증)
- 2차 비밀번호 설정
- 역할 기반 접근 (일반/관리자)

### 💌 메세지 전송 기능
- 회원간 메세지 전송 기능
- 사용자 개인 발신/수신함

### ❤️‍🩹 요양보호사 매칭 기능
- 노인으로 회원가입한 사용자만 매칭 가능
- 매칭된 요양보호사와 노인은 직접적인 도움 가능

### 💊 약품 검색 및 저장 기능
- 약품 이름으로 검색
- 약품 세부 정보페이지에서 저장 가능

### 📆 캘린더 기능
- 캘린더에 개인 일정 추가
- 홈페이지 메인에 오늘날짜 일정 표시

### 📋 게시판 기능
- 로그인 한 사용자만 게시글 등록 가능
- 댓글 달기

### 📰 헬스 매거진 기능
- 등록된 헬스 매거진을 최신/조회순으로 정렬 가능

### 🌄 여행지 추천 기능
- 여행지를 지역별로 조회 가능
- 여행지 세부 정보페이지에서 저장 가능
- 여행지에 좋아요, 싫어요 가능
- 여행지 리뷰 작성

### 💰 가계부 기능
- 가계부 등록 가능
- 날짜별, 사용지별 그래프 시각화 (Recharts 사용)

### 🤵‍♂️ 고객센터 기능
- 고객센터에 문의글 등록
- 관리자 아이디로 답변 등록 가능
- 문의글은 작성자만 조회 가능

### 💪 건강/운동 관리
- 운동 기록 등록 및 수정/삭제
- 날짜별 그래프 시각화 (Recharts 사용)

### 📞 긴급 연락망
- 보호자 연락처 등록 및 관리
- 위급 상황에서 한 번에 호출 가능한 기능 설계

### 📝 일기 작성
- 오늘의 일기 작성
---

## 🧪 실행 방법

### ✅ 프론트엔드 (React)
npm run start

### ✅ 백엔드 (Intelli J)

### 개인 포트폴리오(노션)
https://www.notion.so/17ca1f413c57805fa77bcf73e3a9ffc6?pvs=4

### 프로젝트 포트폴리오
https://www.canva.com/design/DAGk92HohHI/pmylLcXjOGvPv2tn8O5K_w/edit

### 백엔드 폴더 구조
silver-button-refactoring/
└── silverButton/
    ├── src/
    │   └── main/
    │       ├── java/
    │       │   └── com/
    │       │       └── silverbutton/
    │       │           ├── commom/constant/
    │       │           ├── config/
    │       │           ├── controller/
    │       │           ├── dto/
    │       │           ├── entity/
    │       │           ├── enums/
    │       │           ├── filter/
    │       │           ├── principal/
    │       │           ├── provider/
    │       │           ├── repository/
    │       │           └── service/
    │       └── resources/
    │           ├── application.yml
    │           └── static/
    └── build.gradle

### 프론트엔드 폴더 구조
silver-button-refactoring/
└── silverButton-web/
    ├── public/
    └── src/
        ├── apis/          
        ├── components/    
        ├── constants/     
        ├── layouts/       
        ├── stores/        
        ├── styles/        
        ├── types/         
        ├── views/         
        ├── App.tsx        
        ├── App.test.tsx   
        └── global.d.ts    

### 사용한 협업 도구
- GitHub
- Notion
- Figma
- Slack