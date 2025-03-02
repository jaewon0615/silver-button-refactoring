import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/auth.store";
import "./myPage.css";
import axios from "axios";

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

        console.log(response);

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
  }, []);

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

  const handleMessageClick = () => {
    navigate("/message");
  };

  const handleResignClick = () => {
    navigate("/my-page/resign");
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
      console.log("전송된 데이터:", {
        nickname: editUser.nickname,
        phone: editUser.phone,
        password: editUser.password,
      });

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
    <div className="mypage-container">
      <div className="mypage-header">
        <h1>My Page</h1>
      </div>
      <div className="mypage-main">
        <div className="mypage-left">
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
            <button className="edit-button" onClick={handleProfileImgEdit}>
              수정하기
            </button>
          </div>
        </div>
        <div className="mypage-right">
          <div className="item">
            <label htmlFor="nickname">변경하실 닉네임</label>
            <input
              type="text"
              id="nickname"
              placeholder="변경할 닉네임을 입력하세요"
              className="input-field"
              value={editUser.nickname}
              onChange={(e) =>
                setEditUser({ ...editUser, nickname: e.target.value })
              }
            />
          </div>
          <div className="item">
            <label htmlFor="phone">변경하실 전화번호</label>
            <input
              type="text"
              id="phone"
              placeholder="변경할 전화번호를 입력하세요"
              className="input-field"
              value={editUser.phone}
              onChange={(e) => {
                if (e.target.value.length <= 11) {
                  setEditUser({ ...editUser, phone: e.target.value });
                }
              }}
            />
          </div>
          <div className="item">
            <label htmlFor="password">변경하실 비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="변경할 비밀번호를 입력하세요"
              className="input-field"
              value={editUser.password}
              onChange={handlePasswordChange}
            />
            <small>
              비밀번호는 8-16자, 대소문자 및 특수문자를 포함해야 합니다.
            </small>

            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="tmi-buttons">
            <button className="tmi-button" onClick={handleMessageClick}>
              내 쪽지함 가기
            </button>
            <button className="tmi-button" onClick={handleSaveMedicineClick}>
              저장된 약품 정보보기
            </button>
            <button className="tmi-button" onClick={handleHealthRecordClick}>
              건강 기록 관리
            </button>
          </div>
        </div>
      </div>
      <div className="mypage-footer">
        <button className="save-button" onClick={handleSaveChanges}>
          변경사항 저장하기
        </button>
        <button className="save-button" onClick={handleResignClick}>
          회원탈퇴하기
        </button>
      </div>
    </div>
  );
};

export default MyPage;
