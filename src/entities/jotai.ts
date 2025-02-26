import { atom } from 'jotai';

export const darkModeAtom = atom<boolean>(localStorage.getItem('darkMode') === 'true');
export const menuToggleAtom = atom<boolean>(false);
export const scrollAtom = atom<boolean>(false);
export const mapsLoadedAtom = atom<boolean>(false);
export const mapsOpenAtom = atom<boolean>(false);