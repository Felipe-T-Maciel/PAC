'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

type User = { email: string; token: string; img: string };
type UserContextType = {
  user: User | null;
  setUser: (u: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    fetch('http://127.0.0.1:8092/token', {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        if (data.user?.email) {
          setUserState({
            email: data.user.email,
            token: token,
            img: data.img || '',
          });
        } else {
          localStorage.removeItem('access_token');
        }
      })
      .catch(() => {
        localStorage.removeItem('access_token');
      });
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('access_token', user.token);
      localStorage.setItem(
        'user_data',
        JSON.stringify({ email: user.email, img: user.img })
      );
    } else {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user_data');
    }
  }, [user]);

  const setUser = (u: User | null) => setUserState(u);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser deve ser usado dentro de UserProvider');
  return ctx;
};
