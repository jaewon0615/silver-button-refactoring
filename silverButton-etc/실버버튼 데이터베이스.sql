CREATE DATABASE IF NOT EXISTS silver_button;
USE silver_button;

CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL unique,
  password VARCHAR(50) NOT NULL, 
  name VARCHAR(50) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE,
  nickname VARCHAR(50) UNIQUE,
  birth_date DATE,
  gender ENUM('M', 'F') NOT NULL,
  profile_image VARCHAR(255),
  role ENUM('노인', '보호자', '요양사') NOT NULL,
  license_number VARCHAR(50),
  specialization VARCHAR(50),
  protector_id BIGINT,
  FOREIGN KEY (protector_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE matchings (
  dependent_id BIGINT NOT NULL, 
  caregiver_id BIGINT NOT NULL,
  FOREIGN KEY (dependent_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (caregiver_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE schedules (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  dependent_id BIGINT,
  schedule_date DATE NOT NULL,
  task VARCHAR(255),
  FOREIGN KEY (dependent_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE medicine_schedule (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(255), 
    item_seq VARCHAR(50),
    item_name VARCHAR(50),
    use_method_qesitm VARCHAR(500),
    atpn_qesitm VARCHAR(500),
    se_qesitm VARCHAR(255),
    deposit_method_qesitm VARCHAR(255),
    intrc_qesitm VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE health_magazine (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,         
    thumbnail_image_url VARCHAR(255) NOT NULL, 
    title VARCHAR(255) NOT NULL,               
    content TEXT NOT NULL,                     
    published_date DATETIME NOT NULL,          
    source VARCHAR(255) NOT NULL,              
    view_count INT DEFAULT 0,                 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
);

CREATE TABLE board (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  image_url LONGTEXT DEFAULT NULL, -- 이미지를 저장할 열 추가
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  likes INT DEFAULT 0,
  views INT DEFAULT 0,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comment (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  board_id BIGINT NOT NULL,
  writer BIGINT NOT NULL,
  content varchar(200),
  FOREIGN KEY (board_id) REFERENCES board(id) ON DELETE CASCADE,
  FOREIGN KEY (writer) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE board_like (
  id  bigint primary key auto_increment,   -- 좋아요 id  (관리번호)
  board_id BIGINT,   -- 좋아요 눌린 게시글
  liker_id bigint,    -- 좋아요 누른 사람
  FOREIGN KEY (board_id) REFERENCES board(id) ON DELETE CASCADE ON update cascade,
  foreign key(liker_id) references users(id) ON UPDATE CASCADE
);

CREATE TABLE message (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  sender_id BIGINT NOT NULL,
  receiver_id BIGINT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  content TEXT,
  title VARCHAR(50),
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (receiver_id) REFERENCES users(id)
);

CREATE TABLE health_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    record_date DATE NOT NULL,
    blood_pressure_systolic INT,
    blood_pressure_diastolic INT,
    blood_sugar INT,
    weight DECIMAL(5,2),
    notes VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    height DECIMAL(5,2)
);

CREATE TABLE meal_records (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    meal_date DATE NOT NULL,  -- 식사 날짜
    meal_time VARCHAR(10) NOT NULL,  -- 식사 시간 (아침, 점심, 저녁, 간식)
    food_items TEXT NOT NULL,  -- 먹은 음식 목록
    calories INT,  -- 대략적인 칼로리 (선택 사항)
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE emergency_contacts (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  user_id BIGINT NOT NULL,
  name VARCHAR(100) NOT NULL,
  relation VARCHAR(50) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  address VARCHAR(255),
  memo VARCHAR(20),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE diary (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,   -- 일기 항목의 고유 ID
    user_id BIGINT NOT NULL,
    title VARCHAR(100) NOT NULL,          -- 일기의 제목
    weather VARCHAR(50),
    content TEXT NOT NULL,                 -- 일기 내용
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,  -- 일기 작성일시
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,  -- 일기 수정일시
    mood  VARCHAR(50),-- 감정 상태
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE exercise (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,         -- 고유 ID
    user_id BIGINT NOT NULL,
    exercise_type VARCHAR(255) NOT NULL,        -- 운동 종류
    duration INT NOT NULL,                     -- 운동 시간 (분 단위)
    calories_burned INT NOT NULL,              -- 칼로리 소모
    intensity VARCHAR(50) NOT NULL,            -- 운동 강도 (낮음, 중간, 높음)
    exercise_date DATE NOT NULL,               -- 운동 날짜
    location VARCHAR(255),                     -- 운동 장소
    notes TEXT,                                -- 메모
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- 기록 생성 시간
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- 기록 수정 시간
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE expense (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    date DATE NOT NULL, -- 지출 날짜
    category VARCHAR(50) NOT NULL,  -- 카테고리
    description VARCHAR(255) NOT NULL, -- 지출 항목 설명
    amount DECIMAL(10,2) NOT NULL,  -- 지출 금액
	payment_method VARCHAR(50) NOT NULL, -- 결제 수단 (현금, 카드, 계좌이체 등)
    notes TEXT NULL, -- 추가 메모 (영수증 정보, 상세 내용 등)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE destination (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,        -- 여행지 고유 ID
    name VARCHAR(255) NOT NULL,                -- 여행지 이름
    category VARCHAR(100),                     -- 여행지 카테고리 (예: 자연, 역사, 문화 등)
    description TEXT,                          -- 여행지에 대한 설명
    location VARCHAR(255),                     -- 여행지의 위치 (예: 서울, 부산 등)
    address VARCHAR(255),                      -- 여행지의 구체적인 주소
    opening_hours VARCHAR(255),                -- 여행지의 운영 시간 (예: 09:00 ~ 18:00)
    closing_hours varchar(255),
    public_transportation varchar(255),
    phone_number VARCHAR(15),                  -- 여행지 전화번호
    website VARCHAR(255),                      -- 여행지의 공식 웹사이트 URL
    ticket_price DECIMAL(10, 2),               -- 입장료
    facilities TEXT,                           -- 제공되는 시설 (예: 화장실, 주차장, 카페 등)
    rating DECIMAL(3, 2),                      -- 여행지 평균 평점 (1~5)
    image_url TEXT,                    -- 여행지 이미지 URL
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- 여행지 등록일
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- 여행지 마지막 수정일
);

