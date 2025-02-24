import { create } from "zustand";

// 사용자 정보를 담을 interface 정의
interface User {
    id: number;
    userId: string;
    nickname: string;
    name?: string;
    role: string;
    phone: string;
    profileImg: string;
}

// 인증 상태의 interface 정의
interface AuthStateType {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;

  login: (user: User, token: string) => void;
  logout: () => void;
  loadFromLocalStorage: () => void;
}

const useAuthStore = create<AuthStateType>((set) => ({
  isAuthenticated: false,
  user: null,
  token: null,

  loadFromLocalStorage: () => {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    if (token && user) {
      const parsedUser = JSON.parse(user);
      set({ isAuthenticated: true, user: parsedUser, token });
    }
  },

  login: (user, token) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
    set({ isAuthenticated: true, user, token });
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    set({ isAuthenticated: false, user: null, token: null });
  },
}));

export default useAuthStore;
