import React, { useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Home from "./views/home";
import "./App.css";

import MedicineSearch from "./views/drug/medicineSearch";
import MedicineSearchList from "./views/drug/medicineListPage";
import MedicineDetailPage from "./views/drug/medicineDetailPage";

import Authentication from "./views/authentication";
import SignUp from "./views/authentication/signUp";
import FindId from "./views/authentication/findId";
import FindPassword from "./views/authentication/findPassword";
import VerifyId from "./views/authentication/verifyId";
import VerifyPassword from "./views/authentication/verifyPassword";

import Board from "./views/board";
import CreateBoard from "./views/board/boardCreate/createBoard";
import BoardDetail from "./views/board/boardDetail/boardDetail";
import EditBoard from "./views/board/boardUpdate/editBoard";

import MyPage from "./views/authentication/myPage";
import Resign from "./views/authentication/resign";
import Calendar from "./views/calendar/Calendar";
import SaveMedicine from "./views/authentication/myPage/saveMedicine";
import HealthRecord from "./views/authentication/myPage/healthRecord";
import RecordChart from "./views/authentication/myPage/healthRecord/recordChart";
import EmergencyContact from "./views/authentication/myPage/emergencyContact";
import Diary from "./views/authentication/myPage/diary";
import DiaryDetail from "./views/authentication/myPage/diary/diaryDetail";
import Exercise from "./views/authentication/myPage/exercise"
import ExerciseChart from "./views/authentication/myPage/exercise/exerciseChart"
import Expense from "./views/authentication/myPage/expense"
import ExpenseChart from "./views/authentication/myPage/expense/expenseChart"

import RootLayout from "./layouts/rootLayout/RootLayout";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import HeaderLayout from "./layouts/headerLayout/HeaderLayout";
import FooterLayout from "./layouts/footerLayout/FooterLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";

import HealthMagazineList from "./views/healthMagazine/healthMagazineList";
import HealthMagazineDetail from "./views/healthMagazine/healthMagazineDetail";
import PasswordPage from "./views/authentication/passwordPage";
import useAuthStore from "./stores/auth.store";

import CaregiverList from "./views/matching/caregiverList";
import MatchingProfile from "./views/matching/matchingProfile";

import MessageReceive from "./views/message/MessageReceive";
import MessageOutgoing from "./views/message/MessageOutgoing";
import MessageAll from "./views/message/MessageAll";
import MessageBox from "./views/message/MessageBox";

import Map from "./views/map";

import CardGame from "./views/cardGame";

import Destination from "./views/destination"

export default function App() {
  const { isAuthenticated, loadFromLocalStorage } = useAuthStore();

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  return (
    <RootLayout>
      <HeaderLayout>
        <Header />
      </HeaderLayout>

      <MainLayout>
        <Routes>
          {/* AUTH 인증없는 페이지 - 토큰 필요없는 페이지 */}

          <Route path="/" element={<Home />} />

          <Route path="/health-magazine" element={<HealthMagazineList />} />
          <Route
            path="/health-magazine/:id"
            element={<HealthMagazineDetail />}
          />

          {/* 약품 검색기능 */}
          <Route
            path="/medicine/*"
            element={
              <Routes>
                <Route path="/search" element={<MedicineSearch />} />
                <Route path="/list-page" element={<MedicineSearchList />} />
                <Route path="medicineId/:id" element={<MedicineDetailPage />} />
                {/* <Route path="/:id" element={<MedicineList />} /> */}
                {/* <Route path="/search-results" element={<MedicineSearchList />} /> */}
              </Routes>
            }
          />

          {/* 회원가입 / 로그인 기능 */}
          <Route path="/auth" element={<Authentication />} />
          <Route path="/passwordpage" element={<PasswordPage />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/findPassword" element={<FindPassword />} />
          <Route path="/findId" element={<FindId />} />
          <Route path="/verifyId" element={<VerifyId />} />
          <Route path="/verifyPassword" element={<VerifyPassword />} />

          {/* 게시판 - 로그인 필요 X */}
          <Route
            path="/board/*"
            element={
              <Routes>
                <Route path="/" element={<Board />} />
                <Route path="/:id" element={<BoardDetail />} />
                <Route path="/create" element={<CreateBoard />} />
                <Route path="/edit/:id" element={<EditBoard />} />
              </Routes>
            }
          />

          {/* AUTH 인증 필요 페이지 */}

          {/* 마이페이지 */}
          <Route
            path="/my-page/*"
            element={
              <Routes>
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/resign" element={<Resign />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route
                  path="/save-medicine/:userId"
                  element={<SaveMedicine />}
                />
                <Route path="/health-record/:id" element={<HealthRecord />} />

                <Route
                  path="/emergency-contact/:id"
                  element={<EmergencyContact />}
                />
                <Route path="diary/:id" element={<Diary />} />
                <Route path="diary/diaryId/:id" element={<DiaryDetail />} />
                <Route path="exercise/:id" element={<Exercise/>}/>
                <Route path="expense/:id" element={<Expense/>}/>

              </Routes>
            }
          />

          {/* 메시지 */}
          <Route path="/message" element={<MessageBox />} />
          <Route path="/message/receive" element={<MessageReceive />} />
          <Route path="/message/sender" element={<MessageOutgoing />} />
          <Route path="/message/All/:id" element={<MessageAll />} />
          {/* <Route path="/message/:id" element={<MessageDetails />} />
        <Route path="/message/compose" element={<MessageCompose />} />
        <Route path="/message/sent" element={<MessageSent />} />
        <Route path="/message/receive" element={<MessageReceive />} />  */}

          {/*매칭 기능*/}
          <Route
            path="/matching/*"
            element={
              <Routes>
                <Route path="/caregiverList" element={<CaregiverList />} />
                <Route path="/profile" element={<MatchingProfile />} />
              </Routes>
            }
          />

          {/* 지도 */}
          <Route path="/map" element={<Map />} />

          <Route path="health-record/:id" element={<RecordChart />} />
          <Route path="exercise/:id" element={<ExerciseChart/>}/>
          <Route path="expense/:id" element={<ExpenseChart/>}/>
          
          <Route path="/cardGame" element={<CardGame />} />

          <Route path="/destination" element={<Destination/>}/>

          
        </Routes>
      </MainLayout>

      <FooterLayout>
        <Footer />
      </FooterLayout>
    </RootLayout>
  );
}
