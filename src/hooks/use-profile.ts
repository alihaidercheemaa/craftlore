import { create } from "zustand";
import { persist } from "zustand/middleware";


type Progress = {
    total: number
    completed: number
}

type Section = {
    id: string;
    completed: boolean;
};

type OpenStore = {
    progress: Progress,
    sections: Section[];
    setSection: (data: Section) => void;
    setProgress: (progress: Partial<Progress>) => void;
};

export const useOpen = create<OpenStore>()(
    persist(
        (set) => ({
            progress: {
                total: 0,
                completed: 0
            },
            sections: [],
            setSection: (data: Section) =>  set((state) => ({ sections: [...state.sections, data], })),
            setProgress: (progress: Partial<Progress>) =>  set((state) => ({ progress: { ...state.progress, ...progress } })),
        }),
        {
            name: "CL-PROFILE",
        }
    )
);
