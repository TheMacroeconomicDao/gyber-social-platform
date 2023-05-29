import { create } from "zustand";

interface IStore {
	slide: number;
	setSlide: (value: number) => void;
}

export const useSlider = create<IStore>()((set) => ({
	slide: 0,
	setSlide: (value) => set(() => ({ slide: value })),
}));
