import axios from 'axios';
import { useAtom } from 'jotai';
import { activeAtom, blogAtom } from '../../entities/jotai';
import { BlogItem } from '../../entities/interface';

const useBlog = () => {
  const openPopup = (url: string) => window.open(url, url);
  const [active, setActive] = useAtom<number | null>(activeAtom);
  const [data, setData] = useAtom<BlogItem[]>(blogAtom);

  const URL = `https://twcommunity-server.store/search/blog`;

  const searchBlog = async () => {
    try {
      const response = await axios.get(URL, {
        params: {
          query: '더워드',
        },
        withCredentials: false
      });

      const datas = response.data;
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
    searchBlog,
  };
};

export default useBlog;