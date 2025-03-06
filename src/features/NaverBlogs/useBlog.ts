import { useAtom } from "jotai";
import { activeAtom, blogAtom } from "../../entities/jotai";
import { BlogItem } from "../../entities/interface";

const useBlog = () => {
    const openPopup = (url: string) => window.open(url, url);
    const [active, setActive] = useAtom<number | null>(activeAtom);
    const [data, setData] = useAtom<BlogItem[]>(blogAtom);

    const searchBlog = async () => {
        try {
            const response = await fetch(`/search/blog?query=더워드`);
            const datas = await response.json();
            setData(datas);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    return {
        openPopup,
        active,
        setActive,
        data,
        setData,
        searchBlog
    }
}

export default useBlog;