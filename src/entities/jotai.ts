import { atom } from 'jotai';

export interface BlogItem {
    title: string;
    description: string;
    link: string;
    bloggername: string;
}

export const darkModeAtom = atom<boolean>(localStorage.getItem('darkMode') === 'true');
export const menuToggleAtom = atom<boolean>(false);
export const scrollAtom = atom<boolean>(false);
export const mapsLoadedAtom = atom<boolean>(false);
export const mapsOpenAtom = atom<boolean>(false);
export const blogAtom = atom<BlogItem[]>([]);