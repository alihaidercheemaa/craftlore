import { create } from 'zustand';

type OpenStore = {
    open: string[]
    setOpen: (open: string[]) => void;
};

export const useOpen = create<OpenStore>((set) => ({
    open: [],
    setOpen: (open) => set({open}),
}));
