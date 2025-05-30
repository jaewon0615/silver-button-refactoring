/** @jsxImportSource @emotion/react */
import * as s from "./style";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import useAuthStore from "../../stores/auth.store";
import SideBar from "../sideBar/SideBar";

import { AiOutlineMedicineBox } from "react-icons/ai";
import { LuClipboardPenLine } from "react-icons/lu";
import { RiHealthBookLine } from "react-icons/ri";
import { RiCalendarTodoLine } from "react-icons/ri";

import { IoAirplaneOutline } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import axios from "axios";

function HeaderToolWrap() {
  const { isAuthenticated, user, logout, login } = useAuthStore();
  const [cookies, setCookies] = useCookies(["token"]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [editUser, setEditUser] = useState({
    profileImg: user?.profileImg || "/images/profile.png", 
  });

  useEffect(() => {
    if (!cookies.token) {
      logout();
    }
  }, [cookies.token, logout]);

  const handleLogOutClick = () => {
    setCookies("token", "", { expires: new Date(0), path: "/" });
    logout();
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const getRoleImage = (role: string) => {
    switch (role) {
      case "노인":
        return "/images/noin.png";
      case "요양사":
        return "/images/yoyangsa.png";
      case "보호자":
        return "/images/chungnyun.png";
      default:
        return "/images/error.png";
    }
  };

  const homeclick = () => {
    navigate("/");
  };
  return (
    <div css={s.headerToolWrap}>
      <div css={s.headerLogo} onClick={homeclick}>
        <img src="/logo.png" alt="icon" css={s.headerLogoImg} />
      </div>

      <div css={s.headerToolKit}>
        {isAuthenticated ? (
          <>
            <div css={s.profile}>
              {user && (
                <>
                  <img
                    src={editUser.profileImg}
                    alt="Profile"
                    style={{
                      width: "20%",
                      height: "auto",
                      borderRadius: "100%",
                    }}
                  />
                  <img
                    src={getRoleImage(user.role)}
                    alt={user.role}
                    css={s.roleImage}
                  />
                  <span>{user.nickname}님</span>
                </>
              )}
            </div>
            <button onClick={handleLogOutClick} css={s.logOutButton}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <Link to={"/auth"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>로그인</button>
            </Link>
            <Link to={"/auth/signup"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>회원가입</button>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <button css={s.headerButton}>홈 화면</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

function HeaderNaviWrap() {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div css={s.headerNaviWrap}>
      <div css={s.headerHamburger}>
        <SideBar />
      </div>

      <div css={s.headerNaviButtons}>
        <div
          css={s.haderNaviButton}
          onClick={() => navigateTo("/medicine/search")}
        >
          <AiOutlineMedicineBox css={s.naviIcon} />
          <div css={s.naviTitle}>약품 검색</div>
        </div>
        <div
          css={s.haderNaviButton}
          onClick={() => navigateTo("/my-page/calendar")}
        >
          <RiCalendarTodoLine css={s.naviIcon} />
          <div css={s.naviTitle}>할 일 목록</div>
        </div>
        <div css={s.haderNaviButton} onClick={() => navigateTo("/board")}>
          <LuClipboardPenLine css={s.naviIcon} />
          <div css={s.naviTitle}>게시판</div>
        </div>
        <div
          css={s.haderNaviButton}
          onClick={() => navigateTo("/health-magazine")}
        >
          <RiHealthBookLine css={s.naviIcon} />
          <div css={s.naviTitle}>헬스매거진</div>
        </div>
        <div
          css={s.haderNaviButton}
          onClick={() => navigateTo("/destination")}
        >
          <IoAirplaneOutline  css={s.naviIcon}/>
          <div css={s.naviTitle}>여행지</div>
        </div>
        <div
          css={s.haderNaviButton}
          onClick={() => navigateTo("/service-center")}
        >
          <RiCustomerService2Fill css={s.naviIcon} />
          <div css={s.naviTitle}>고객센터</div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div css={s.headerContianer}>
      <HeaderToolWrap />
      <HeaderNaviWrap />
    </div>
  );
}
