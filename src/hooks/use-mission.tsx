
import { create } from 'zustand';

type MissionProps = {
    id: number
    title: string,
    description: string
};

type MissionStore = {
    mission: MissionProps;
    setMission: (data: Partial<MissionProps>) => void;
};

const initialValues: MissionProps = {
    id: 0,
    title: 'Craftlore Mission',
    description: 'Our mission is to establish Kashmiri crafts as a premium global brand, carefully curating their identity to embody the highest standards of authenticity, craftsmanship excellence, and cultural heritage. Through this initiative, we aim to position Kashmiri crafts as the epitome of artisanal luxury, driving brand recognition and consumer loyalty on the international stage. We are committed to strategic global market expansion, elevating Kashmir’s craft industry to a leadership position within the luxury handicraft sector. By employing cutting-edge market entry strategies and forging international partnerships, CraftLore aims to expand the global presence of Kashmiri crafts, solidifying their status as a dominant player in high-value, culturally significant markets.'
};

export const useMissionStore = create<MissionStore>((set) => ({
    mission: initialValues,
    setMission: (data) => set((state) => ({ mission: { ...state.mission, ...data }, })),
}));
