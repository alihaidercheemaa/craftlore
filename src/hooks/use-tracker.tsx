import { create } from "zustand";
import { persist } from "zustand/middleware";



type OpenStore = {
    sectionList:string[]
    setList: (sectionList: string[]) => void;
};

export const useTracker = create<OpenStore>()(
    persist(
        (set) => ({
           sectionList:[],
            setList: (sectionList: string[]) =>  set({sectionList})
        }),
        {
            name: "CL-TRACKER",
        }
    )
);