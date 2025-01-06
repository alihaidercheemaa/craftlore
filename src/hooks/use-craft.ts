import { create } from 'zustand';
import { persist } from 'zustand/middleware'

type CraftStore = {
    craft: string
    setCraft: (craft: string) => void;
};

export const useCraft = create<CraftStore>()(persist(
    (set) => ({
        craft: "",
        setCraft: (craft) => set({ craft }),
    }), {
    name: 'CL-CRAFT',
}));