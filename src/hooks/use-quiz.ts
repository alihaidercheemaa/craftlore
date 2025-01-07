import { create } from 'zustand';
import { persist } from 'zustand/middleware'

type Answer = {
    quizId: string;
    selectedOption: string;
};

type QuizStore = {
    answers: Answer[];
    setAnswer: (quizId: string, selectedOption: string) => void;
    clearAnswers: () => void;
};

export const useQuizStore = create<QuizStore>()(persist(
    (set) => ({
        answers: [],
        setAnswer: (quizId, selectedOption) =>
            set((state) => ({
                answers: [
                    ...state.answers.filter((answer) => answer.quizId !== quizId),
                    { quizId, selectedOption },
                ],
            })),
        clearAnswers: () => set({ answers: [] }),
    }),
    {name:'CL-QUIZ'}
));