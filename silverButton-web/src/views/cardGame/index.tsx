/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 카드 타입 정의
interface Card {
  id: number;
  emoji: string;
  flipped: boolean;
  matched: boolean;
}

const baseCardImages = [
  "🐶", "🐱", "🐰", "🐼", "🦊", "🐻", "🐸", "🐯", "🐨", "🐷",
  "🦁", "🐵", "🐔", "🐙", "🦄", "🐢", "🐍", "🦉", "🦀", "🐞"
];

const shuffledCards = (level: number): Card[] => {
  let selectedCards;
  if (level <= baseCardImages.length - 2) {
    selectedCards = baseCardImages.slice(0, level + 2);
  } else {
    selectedCards = [...baseCardImages].sort(() => Math.random() - 0.5).slice(0, level + 2);
  }

  // 카드 두 개씩 섞어서 배열로 만듦
  const doubledCards = [...selectedCards, ...selectedCards]
    .sort(() => Math.random() - 0.5) // 랜덤으로 섞기
    .map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false
    }));
  
  return doubledCards;
};

export default function MemoryGame() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // 레벨 상태 관리
  const [level, setLevel] = useState(() => {
    if (isLoggedIn) {
      const savedLevel = localStorage.getItem('gameLevel');
      return savedLevel ? Number(savedLevel) : 1;
    }
    return 1;
  });

  // 카드 상태 관리
  const [cards, setCards] = useState<Card[]>(() => {
    if (isLoggedIn) {
      const savedCards = localStorage.getItem('gameCards');
      if (savedCards) {
        return JSON.parse(savedCards);
      }
    }
    return shuffledCards(level);
  });

  const [selected, setSelected] = useState<number[]>([]);
  const [matchedCount, setMatchedCount] = useState(0);

  // 게임 설명 모달 상태
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 시간 상태 관리
  const [time, setTime] = useState(0); // 시간을 0으로 초기화
  const [isGameRunning, setIsGameRunning] = useState(false); // 게임이 진행 중인지를 나타내는 상태
  const [timeAtLevelEnd, setTimeAtLevelEnd] = useState<number | null>(null); // 레벨 완료 시 소요 시간

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isGameRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1); // 1초마다 시간 증가
      }, 1000);
    }

    return () => clearInterval(timer); // 타이머 클린업
  }, [isGameRunning]);

  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected;
      if (cards[first]?.emoji === cards[second]?.emoji) {
        setCards((prev: Card[]) => prev.map((card: Card) => 
          (card.id === first || card.id === second) ? { ...card, matched: true } : card
        ));
        setMatchedCount(prev => prev + 2);
      } else {
        setTimeout(() => {
          setCards((prev: Card[]) => prev.map((card: Card) => 
            (card.id === first || card.id === second) ? { ...card, flipped: false } : card
          ));
        }, 1000);
      }
      setSelected([]);
    }
  }, [selected, cards]);

  useEffect(() => {
    if (matchedCount === cards.length && matchedCount > 0) {
      // 레벨 완료 후 시간 기록
      const completedTime = time;
      setTimeAtLevelEnd(completedTime); // 레벨 완료 시 소요 시간 저장

      // 소요 시간 모달창 표시
      alert(`레벨 완료! 소요 시간: ${completedTime}초`);

      setTimeout(() => {
        const newLevel = level + 1;
        setLevel(newLevel);
        
        // 새 레벨의 카드 초기화
        if (isLoggedIn) {
          localStorage.setItem('gameLevel', newLevel.toString());
          const newCards = shuffledCards(newLevel);
          setCards(newCards);
          localStorage.setItem('gameCards', JSON.stringify(newCards));
        } else {
          setCards(shuffledCards(newLevel));
        }

        setMatchedCount(0);
        setTime(0); // 레벨업 시 시간 초기화
        setIsGameRunning(false); // 레벨업 후 타이머 멈추기
      }, 1000);
    }
  }, [matchedCount, cards, level, isLoggedIn, time]);

  const handleCardClick = (index: number) => {
    if (!cards[index]?.flipped && selected.length < 2) {
      // 게임 시작 상태로 변경
      if (!isGameRunning) {
        setIsGameRunning(true); // 게임이 시작되면 타이머 시작
      }
      setCards((prev: Card[]) => prev.map((card: Card, i: number) => i === index ? { ...card, flipped: true } : card));
      setSelected([...selected, index]);
    }
  };

  const handleRestart = () => {
    setLevel(1);
    setCards(shuffledCards(1));
    setMatchedCount(0);
    setSelected([]);
    setTime(0); // 시간 리셋
    setIsGameRunning(true); // 게임 시작

    if (isLoggedIn) {
      localStorage.removeItem('gameLevel');
      localStorage.removeItem('gameCards');
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div css={s.gameContainer}>
      <h1 css={s.gameTitle}>미니 카드 짝 맞추기 게임</h1>
      <div>
        <button onClick={handleRestart} css={s.restartButton}>게임 초기화</button>
        <button onClick={toggleModal} css={s.infoButton}>게임 설명</button>
      </div>
     
      <h2 css={s.levelText(level)}>{level}단계</h2>
      <h3 css={s.timerText}>시간: {time}초</h3> {/* 시간이 표시될 부분 */}
      
      <div css={s.cardGrid}>
        {cards.map((card: Card, index: number) => (
          <motion.div 
            key={card.id} 
            css={[s.card, card.matched && s.matched]}
            onClick={() => handleCardClick(index)}
            whileTap={{ scale: 0.9 }}
          >
            {card.flipped || card.matched ? card.emoji : "❓"}
          </motion.div>
        ))}
      </div>
      {matchedCount === cards.length && (
        <h2 css={s.winMessage}>🎉 레벨 업! 🎉</h2>
      )}

      {isModalOpen && (
        <div css={s.modalOverlay} onClick={toggleModal}>
          <motion.div
            css={s.modalContent}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>게임 설명</h2>
            <ul css={s.list}>
              <li css={s.listStyle}><strong css={s.indexStyle}>게임의 목표는 뭐예요?</strong><br /> 게임의 목표는 두 개의 같은 그림을 찾는 것이에요. 그림이 똑같은 카드 두 개를 찾아서 맞추면, 그 카드는 더 이상 나오지 않아요. 모든 카드의 그림을 다 맞추면 레벨이 올라가고, 게임에서 이긴 거예요!</li>
              <li css={s.listStyle}><strong css={s.indexStyle}>게임 시작은 어떻게 하나요?</strong><br /> 게임을 시작하면 여러 개의 카드가 화면에 보여요. 카드들은 뒤집혀 있어서 그림을 볼 수 없어요. 카드들을 한 장씩 클릭해서, 그 카드에 어떤 그림이 있는지 확인해 보세요. 두 개의 카드를 확인하고 나면, 그 카드가 같은 그림이면 맞춘 거예요! 만약 두 카드가 다르면, 다시 뒤집어지기 전에 잠깐 시간이 주어져요.</li>
              <li css={s.listStyle}><strong css={s.indexStyle}>게임을 진행하는 방법은요?</strong><br /> 카드 클릭: 카드 한 장을 클릭하면 그 카드가 뒤집혀서 그림이 보여요. 두 번째 카드를 클릭해서 그림이 같은지 비교해보세요. 맞다면: 두 카드는 계속 보여요. <br /> 다르면: 두 카드는 다시 뒤집혀요. 이런 식으로 카드를 하나씩 맞추면서, 모든 카드를 다 맞추면 레벨이 올라갑니다.</li>
              <li css={s.listStyle}><strong css={s.indexStyle}>게임을 다시 시작하려면?</strong><br /> 만약 다시 처음부터 시작하고 싶다면, “게임 다시 시작” 버튼을 눌러주세요. 그러면 레벨은 1로 돌아가고, 카드도 처음 상태로 돌아가요.</li>
              <li css={s.listStyle}><strong css={s.indexStyle}>레벨 업은 어떻게 하나요?</strong><br /> 모든 카드를 다 맞추면, 레벨이 하나씩 올라가요. 그때마다 더 어려운 카드들이 나오겠죠? 레벨이 올라가면 더 많은 카드를 맞춰야 하니까 점점 더 도전이 될 거예요!</li>
              <li css={s.listStyle}><strong css={s.indexStyle}>게임의 장점은 뭐예요?</strong><br /> 이 게임은 기억력과 집중력을 향상시킬 수 있어요. 재미있게 게임을 하면서 뇌를 활성화시킬 수 있어요.</li>
              <li css={s.listStyle}><strong css={s.indexStyle}>게임을 멈추고 싶으면 어떻게 하나요?</strong> <br />언제든지 게임을 멈추고 싶으면, 그냥 게임 창을 닫거나, 다른 일을 하시면 돼요!</li>
            </ul>
            <button onClick={toggleModal} css={s.closeButton}>닫기</button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
