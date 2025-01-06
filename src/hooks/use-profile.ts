import { create } from 'zustand';
import { persist } from 'zustand/middleware'

type OpenStore = {
    open: string[]
    setOpen: (open: string[]) => void;
};


export const useOpen = create<OpenStore>()(persist(
    (set) => ({
        open: [],
        setOpen: (open) => set({ open }),
    }), {
    name: 'CL-PROFILE',
}));
