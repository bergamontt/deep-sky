import { create } from "zustand";
import type { User } from "../models/User";
import { getUserByUsername } from "../services/userService";

interface UserStore {
    user: User | null;
    loadingUser: boolean;
    error: string | null;
    fetchByUsername: (username: string) => Promise<void>;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    loadingUser: false,
    error: null,

    fetchByUsername: async (username: string) => {
        set({ loadingUser: true, error: null });
        try {
            const data = await getUserByUsername(username);
            set({ user: data });
        } catch (err) {
            set({ error: err instanceof Error ? err.message : "Unknown error" });
        } finally {
            set({ loadingUser: false });
        }
    },

    clearUser: () => set({ user: null, error: null }),
}));