import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export enum Role {
  unknown,
  user,
  admin,
}

export type UserType = {
  username: string;
  password: string;
  role: Role;
};

type UserStore = {
  user: UserType;
  setUser: (user: UserType) => void;
  logout: () => void;
};

const initialState: UserType = { username: '', password: '', role: Role.unknown };

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: initialState,
      setUser: (user) => set(() => ({ user })),
      logout: () => set(() => ({ user: initialState })),
    }),
    { name: 'user' }
  )
);
