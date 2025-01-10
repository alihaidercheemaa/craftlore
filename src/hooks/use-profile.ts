import { create } from "zustand";
import { persist } from "zustand/middleware";

type Progress = {
    total: number;
    completed: number;
}

type Section = {
    id: string;
    completed: boolean;
};

type OpenStore = {
    progress: Progress;
    sections: Section[];
    email: string;
    setSection: (data: Section) => void;
    setProgress: (progress: Partial<Progress>) => void;
    setEmail: (email: string) => void;
};

export const useOpen = create<OpenStore>()(
    persist(
        (set) => ({
            progress: {
                total: 0,
                completed: 0
            },
            email: '',
            sections: [],
            setSection: (data: Section) => 
                set((state) => {
                    const existingIndex = state.sections.findIndex(
                        section => section.id === data.id
                    );
                    if (existingIndex !== -1) {
                        const updatedSections = [...state.sections];
                        updatedSections[existingIndex] = {
                            ...updatedSections[existingIndex],
                            ...data
                        };
                        return { sections: updatedSections };
                    }
                    return { sections: [...state.sections, data] };
                }),
            setProgress: (progress: Partial<Progress>) => 
                set((state) => ({ 
                    progress: { ...state.progress, ...progress } 
                })),
            setEmail: (email: string) => set({ email })
        }),
        {
            name: "CL-PROFILE",
        }
    )
);