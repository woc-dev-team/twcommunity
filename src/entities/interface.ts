// Data Props Interfaces
interface Item {
    title: string;
    link: string;
    description: string;
}

interface BlogItem {
    title: string;
    description: string;
    link: string;
    bloggername: string;
}


// Components Props Interfaces
interface CustomImageProps {
    alt: string;
    src: string;
    gradation: string;
    className: string;
}

interface ModalProps {
    title: string;
    open: boolean;
    handler: () => void;
    children: React.ReactNode;
}

interface NavListProps {
    menuText: string;
    menuLink: string;
    menuLocation: number;
}

interface NaverMapsProps {
    className: string;
}

interface PastorTextsProps {
    profileImg: string;
}

export type {
    Item,
    BlogItem,
    ModalProps,
    NavListProps,
    NaverMapsProps,
    PastorTextsProps,
    CustomImageProps
}