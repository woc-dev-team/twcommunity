import { atom } from 'jotai';

export const darkModeAtom = atom<boolean>(localStorage.getItem('darkMode') === 'true');
export const menuToggleAtom = atom<boolean>(false);