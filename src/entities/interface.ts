// Data Props Interfaces
interface BlogItem {
    title: string;
    description: string;
    link: string;
    bloggername: string;
    postdate: string;
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
    close: string;
}

interface NavListProps {
    menuText: string;
    menuLink: string;
}

interface NaverMapsProps {
    className: string;
}

interface PastorTextsProps {
    profileImg: string;
}

interface BlogListProps {
    item: BlogItem;
}

export type {
    BlogItem,
    ModalProps,
    NavListProps,
    NaverMapsProps,
    PastorTextsProps,
    CustomImageProps,
    BlogListProps
}