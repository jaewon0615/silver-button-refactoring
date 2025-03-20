/** @jsxImportSource @emotion/react */
import HealthMegazineTop5 from "../../components/HealthMagazine/HealthMegazineTop5";
import * as s from "./style";
import { useNavigate, useParams } from "react-router-dom";
import kakaoLogins from "./kakaoLogins.png";
import naverIcom from "./naverIcom.png";
import mainIcon from "./mainIcon.png";
import useAuthStore from "../../stores/auth.store";
import { useEffect, useState } from "react";
import axios from "axios";
import SaveMedicineHome from "../../components/saveMedicine/saveMedicineHome";
import { useCookies } from "react-cookie";
import { format } from "date-fns"; // 날짜 포맷을 위한 라이브러리

const getTokenFromCookies = (): string | null => {
  const cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    if (cookie.startsWith("token=")) {
      return cookie.substring("token=".length);
    }
  }
  return null;
};

export default function SaveMedicineHomeList() {
  const { userId } = useParams<{ userId: string }>();
  const [cookies] = useCookies(["token"]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [scheduleData, setScheduleData] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const [gameLevel, setGameLevel] = useState<number | null>(null); // 게임 레벨 상태 추가
  const [diaryExists, setDiaryExists] = useState<boolean>(false); // 일기 작성 여부 상태 추가

  const loginNavigate = () => {
    navigate("/auth");
  };

  const gameNavigate = () => {
    navigate("/cardGame");
  };

  const { isAuthenticated } = useAuthStore();
  const token = getTokenFromCookies();

  const fetchSchedule = async () => {
    if (!token) return;

    setLoading(true);
    try {
      const response = await axios.get(
        "http://localhost:4040/api/v1/schedule/today",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.result) {
        setScheduleData(response.data.data);
      } else {
        setError("일정을 불러오는 데 문제가 발생했습니다.");
      }
    } catch (err) {
      setError("일정을 불러오는 데 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const getGameLevel = () => {
    const savedLevel = localStorage.getItem("gameLevel");
    return savedLevel ? Number(savedLevel) : null;
  };

  // 오늘의 일기 확인 함수
  const checkDiaryExistence = async () => {
    const todayDate = format(new Date(), "yyyy-MM-dd"); // 오늘 날짜를 yyyy-MM-dd 형식으로 가져오기

    if (!token) return;

    try {
      const response = await axios.get(
        `http://localhost:4040/api/v1/diary/check/${todayDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // 응답 값 확인 후 diaryExists 설정
      if (response.data.exists) {
        setDiaryExists(true);
      } else {
        setDiaryExists(false);
      }
    } catch (err) {
      console.error("일기 확인 중 오류 발생", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchSchedule();
      const level = getGameLevel();
      setGameLevel(level); // 게임 레벨 설정
      checkDiaryExistence(); // 오늘의 일기 존재 여부 확인
    }
  }, [isAuthenticated]);

  return (
    <div css={s.main}>
      <div css={s.video}>
        <video css={s.videoBackground} autoPlay loop muted>
          <source src="/video/backVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div css={s.homeContentContainer}>
        <div css={s.healthMegazineTop5}>
          <div css={s.top5Box}>
            <div css={s.top5Title}>헬스매거진 TOP5</div>
            <div css={s.magazineBox}>
              <HealthMegazineTop5 />
            </div>
          </div>
        </div>

        <div css={s.snsLogin}>
          <div css={s.loginBox}>
            {isAuthenticated ? (
              <>
                <div css={s.scheduleContainer}>
                  <div css={s.scheduleBox}>
                    <h2 css={s.scheduleTitle}>오늘의 일정</h2>
                    <div css={s.scheduleContent}>
                      {loading ? (
                        <div>일정을 불러오는 중...</div>
                      ) : error ? (
                        <div>{error}</div>
                      ) : scheduleData.length > 0 ? (
                        scheduleData.map((schedule) => (
                          <div key={schedule.id} css={s.listStyle}>
                            📅 {schedule.task}
                          </div>
                        ))
                      ) : (
                        <div css={s.emptySchedule}>오늘의 일정이 없습니다.</div>
                      )}
                    </div>
                  </div>

                  {/* 🔹 게임 진행 단계 */}
                  {gameLevel === null ? (
                    <button css={s.startButton} onClick={gameNavigate}>
                      미니 카드 게임 시작
                    </button>
                  ) : (
                    <div css={s.gameLevelBox}>
                      <h2 css={s.levelText(gameLevel)} onClick={gameNavigate}>
                        현재 미니 게임 단계: {gameLevel}단계
                      </h2>
                    </div>
                  )}

                  {/* 🔹 오늘의 일기 */}
                  {diaryExists ? (
                    <div css={s.gameLevelBox}>오늘의 일기 작성 완료</div>
                  ) : (
                    <button
                      css={s.startButton}
                      onClick={() => navigate(`/passwordPage`)}
                    >
                      일기 작성하러 가기
                    </button>
                  )}
                </div>
              </>
            ) : (
              <>
                <div css={s.loginTitle}>간편 SNS 로그인 서비스</div>
                <div css={s.titleContetn}>
                  네이버 / 카카오톡으로 간편하게 로그인 하세요.
                </div>
                <div css={s.loginAll}>
                  <div css={s.naverLogin}>
                    <img src={naverIcom} alt="" css={s.naverIcon} />
                    네이버로 로그인
                  </div>
                  <div css={s.kakaoLogin}>
                    <img src={kakaoLogins} alt="" css={s.kakaoIcon} />
                    카카오로 로그인
                  </div>
                  <div css={s.generalLogin} onClick={loginNavigate}>
                    <img src={mainIcon} alt="" css={s.kakaoIcon} />
                    일반회원 로그인
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
