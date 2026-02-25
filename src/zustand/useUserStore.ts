import { IUser } from "@/types/users";
import { create } from "zustand";

interface IUserStore {
  user: IUser | null;
  error: string | null;
  loading: boolean;
  setUser: (user: IUser) => void;
  setLoading: (state?: boolean) => void;
  setError: (error: string) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  error: null,
  loading: true,
  setError: (error) => set({ error, loading: false }),
  setLoading: (state = true) => set({ loading: state }),
  setUser: (user: IUser) => set({ user, loading: false }),
}));
