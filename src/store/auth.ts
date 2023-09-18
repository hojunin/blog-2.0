import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserState {
  password: number;
  setPassword: (input: string) => void;
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      password: 0,
      setPassword: (input) =>
        set((state) => {
          if (input !== process.env.PASSWORD) {
            throw new Error('넌 가짜야');
          }
          return { password: input };
        }),
    }),
    {
      name: 'user',
    },
  ),
);

export default useUserStore;
