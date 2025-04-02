/** @jsxImportSource @emotion/react */
import * as s from "./style";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store";
import axios from "axios";
import { MdOutlineMessage } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineChangeCircle } from "react-icons/md";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { IoIosJournal } from "react-icons/io";
import { MdOutlineDirectionsRun } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdCardTravel } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";

const MyPage = () => {
  const { isAuthenticated, user, login, logout } = useAuthStore();
  const navigate = useNavigate();
  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length);
      }
    }
    return null;
  };

  const token = getTokenFromCookies();

  const [editUser, setEditUser] = useState({
    nickname: user?.nickname || "",
    phone: user?.phone || "",
    profileImg: user?.profileImg || "/images/profile.png",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfileImg = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4040/api/v1/manage/profile-img",
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && response.data.data) {
          setEditUser((prev) => ({
            ...prev,
            profileImg: response.data.data,
          }));
        } else {
          setEditUser((prev) => ({
            ...prev,
            profileImg: "/images/profile.png",
          }));
        }
      } catch (err) {
        console.error("프로필 이미지 조회 중 오류 발생:", err);
        setError("프로필 이미지를 조회하는 데 오류가 발생했습니다.");
      }
    };

    fetchProfileImg();
  }, [token]);

  const handleProfileImgEdit = () => {
    alert("프로필 이미지를 수정합니다.");
    document.getElementById("profileImgUpload")?.click();
  };

  const handleProfileImgChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("이미지 파일만 업로드 가능합니다.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await axios.patch(
          "http://localhost:4040/api/v1/manage/upload-profile-img",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && response.data.data) {
          setEditUser((prev) => ({
            ...prev,
            profileImg: response.data.data,
          }));
        } else {
          setError("프로필 이미지 업로드에 실패했습니다.");
        }
      } catch (err) {
        console.log(formData);
        console.error("프로필 이미지 수정 중 오류 발생:", err);
        setError("프로필 이미지 수정에 오류가 발생했습니다.");
      }
    }
  };

  const handleSaveMedicineClick = () => {
    if (user) {
      navigate(`/my-page/save-medicine/${user.userId}`);
    }
  };

  const handleHealthRecordClick = () => {
    if (user) {
      navigate(`/my-page/health-record/${user.id}`);
    }
  };

  const handleEmergenctContactClick = () => {
    if (user) {
      navigate(`/my-page/emergency-contact/${user.id}`);
    }
  };

  const handleDiaryClick = () => {
    if (user) {
      navigate(`/my-page/diary/${user.id}`);
    }
  };

  const handleExerciseClick = () => {
    if (user) {
      navigate(`/my-page/exercise/${user.id}`);
    }
  };

  const handleExpenseClick = () => {
    if (user) {
      navigate(`/my-page/expense/${user.id}`);
    }
  };

  const handleDestinaionClick = () => {
    if (user) {
      navigate(`/my-page/user-saved-destination/${user.id}`);
    }
  };

  const handleDestinaionReviewClick = () => {
    if (user) {
      navigate(`/my-page/review/${user.id}`);
    }
  };

  const handleSleepRecordClick = () => {
    if (user) {
      navigate(`/my-page/sleep-record/${user.id}`);
    }
  };

  const handleMessageClick = () => {
    navigate("/message");
  };

  const handleResignClick = () => {
    navigate("/my-page/resign");
  };
  

  // 🔄 버튼 캐러셀 기능 (좌우 스크롤)
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditUser({ ...editUser, password: e.target.value });
    const newPassword = e.target.value;
    const password =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&]{8,16}$/;

    if (password.test(newPassword) || newPassword === "") {
      setEditUser((prev) => ({ ...prev, password: newPassword }));
    }
  };

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        "http://localhost:4040/api/v1/manage/update",
        {
          nickname: editUser.nickname || "",
          phone: editUser.phone || "",
          password: editUser.password || "",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("변경사항이 저장되었습니다.");
        navigate("/");
      } else {
        setError("변경사항 저장에 실패했습니다.");
      }
    } catch (error) {
      console.error("변경사항 저장 중 오류 발생:", error);
      setError("변경사항 저장에 실패했습니다.");
    }
  };

  return (
    <div css={s.myPageContainer}>
      <div css={s.myPageHeader}>
        <h1>내 정보</h1>
      </div>
      <div css={s.myPageMain}>
        <div css={s.myPageLeft}>
          <div className="profileImg">
            <img
              src={editUser.profileImg}
              alt="Profile"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "50%",
              }}
            />
            <input
              type="file"
              accept="image/*"
              id="profileImgUpload"
              style={{ display: "none" }}
              onChange={handleProfileImgChange}
            />
            <button css={s.editButton} onClick={handleProfileImgEdit}>
              수정하기
            </button>
          </div>
        </div>
        <div css={s.myPageRight}>
          <div css={s.formItem}>
            <label htmlFor="nickname" css={s.text}>변경하실 닉네임</label>
            <input
              type="text"
              id="nickname"
              placeholder="변경할 닉네임을 입력하세요"
              css={s.inputField}
              value={editUser.nickname}
              onChange={(e) =>
                setEditUser({ ...editUser, nickname: e.target.value })
              }
            />
          </div>
          <div css={s.formItem}>
            <label htmlFor="phone" css={s.text}>변경하실 전화번호</label>  
            <input
              type="text"
              id="phone"
              placeholder="변경할 전화번호를 입력하세요"
              css={s.inputField}
              value={editUser.phone}
              onChange={(e) => {
                if (e.target.value.length <= 11) {
                  setEditUser({ ...editUser, phone: e.target.value });
                }
              }}
            />
          </div>
          <div css={s.formItem}>
            <label htmlFor="password" css={s.text}>변경하실 비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="변경할 비밀번호를 입력하세요"
              css={s.inputField}
              value={editUser.password}
              onChange={handlePasswordChange}
            />
            <small css={s.small}>
              비밀번호는 8-16자, 대소문자 및 특수문자를 포함해야 합니다.
            </small>

            {error && <p css={s.errorMessage}>{error}</p>}
          </div>
        </div>
      </div>

      <div css={s.tmiButtons}>
        <div css={s.buttonCarouselContainer}>
          <button css={s.arrowButton} onClick={scrollLeft}>
            ◀
          </button>
          <div css={s.buttonCarousel} ref={carouselRef}>
            <button css={s.messageButton} onClick={handleMessageClick}> <MdOutlineMessage /> 내 쪽지함 </button>
            <button css={s.medicineButton} onClick={handleSaveMedicineClick}> <AiOutlineMedicineBox /> 약품 정보 </button>
            <button css={s.recordButton} onClick={handleHealthRecordClick}> <MdOutlineHealthAndSafety /> 건강 기록 </button>
            <button css={s.emergencyButton} onClick={handleEmergenctContactClick}> <IoIosContacts /> 비상연락망 </button>
            <button css={s.diaryButton} onClick={handleDiaryClick}> <IoIosJournal /> 오늘의 일기 </button>
            <button css={s.exerciseButton} onClick={handleExerciseClick}> <MdOutlineDirectionsRun /> 운동 기록 </button>
            <button css={s.expenseButton} onClick={handleExpenseClick}> <FaMoneyCheckDollar /> 가계부 목록 </button>
            <button css={s.destinationButton} onClick={handleDestinaionClick}> <MdCardTravel /> 여행지 목록 </button>
            <button css={s.destinationReviewButton} onClick={handleDestinaionReviewClick}> <MdOutlineRateReview /> 리뷰 관리 </button>
            <button css={s.destinationReviewButton} onClick={handleSleepRecordClick}> <MdOutlineRateReview /> 수면 패턴 </button>
          </div>
          <button css={s.arrowButton} onClick={scrollRight}>
            ▶
          </button>
        </div>
        <div css={s.myPageFooter}>
          <button css={s.saveButton} onClick={handleSaveChanges}>
            <MdOutlineChangeCircle css={s.messageIcon} /> 변경사항 저장하기
          </button>
          <button css={s.deleteButton} onClick={handleResignClick}>
            <MdOutlineDeleteForever css={s.messageIcon} /> 회원탈퇴하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
