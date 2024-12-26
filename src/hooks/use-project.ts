
import { create } from 'zustand';

type ProjectProps = {
    id: number
    title: string,
    description: string
};

type ProjectStore = {
    project: ProjectProps;
    setProject: (data: Partial<ProjectProps>) => void;
};

const initialValues: ProjectProps = {
    id: 0,
    title: 'Craftlore Projects',
    description: "Craftlore is spearheading a transformative movement in the world of Kashmiri handicrafts, with groundbreaking projects that combine tradition with cutting-edge innovation. Each project under Craftlore is meticulously designed to protect, preserve, and elevate Kashmir’s rich artisanal heritage while propelling it into the global marketplace. From leveraging blockchain technology for traceability to developing eco-friendly innovations, Craftlore's initiatives are setting new benchmarks for authenticity, sustainability, and economic empowerment. These projects not only safeguard centuries-old craftsmanship but also ensure that it thrives in the modern world, creating lasting impact for artisans and redefining the global perception of Kashmiri crafts."
};

export const useProject = create<ProjectStore>((set) => ({
    project: initialValues,
    setProject: (data) => set((state) => ({ project: { ...state.project, ...data }, })),
}));
