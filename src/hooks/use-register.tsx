
import { create } from 'zustand';

type RegisterProps = {
    id: number
    title: string,
    description: string
};

type RegisterStore = {
    register: RegisterProps;
    setRegister: (data: Partial<RegisterProps>) => void;
};

const initialValues: RegisterProps = {
    id: 0,
    title: 'Craftlore Registries',
    description: "The CraftLore Kashmir Craft Registries are a revolutionary platform ensuring the authenticity, sustainability, and global recognition of Kashmiri crafts. Through blockchain-backed traceability, eco-friendly innovations, and socio-economic insights, these registries safeguard centuries-old traditions while empowering artisans in a modern marketplace. More than a tool, the CraftLore Registries are the foundation for preserving the cultural legacy of Kashmir’s crafts and protecting them from counterfeiting and exploitation."
};

export const useRegister = create<RegisterStore>((set) => ({
    register: initialValues,
    setRegister: (data) => set((state) => ({ register: { ...state.register, ...data }, })),
}));
