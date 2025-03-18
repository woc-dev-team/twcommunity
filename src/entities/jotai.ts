import { atom } from "jotai";
import { BlogItem } from "./interface";

export const darkModeAtom = atom<boolean>(localStorage.getItem('darkMode') === 'true');
export const menuToggleAtom = atom<boolean>(false);
export const scrollAtom = atom<boolean>(false);
export const mapsLoadedAtom = atom<boolean>(false);
export const mapsOpenAtom = atom<boolean>(false);
export const dropdownAtom = atom<boolean>(false);
export const blogAtom = atom<BlogItem[]>([]);
export const activeAtom = atom<number | null>(null);
export const languageAtom = atom<number>(0);
export const videoAtom = atom<string | "">("");