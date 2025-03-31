import axios from 'axios';
import { useAtom } from 'jotai';
import { activeAtom, blogAtom } from '../../entities/jotai';
import { BlogItem, Item } from '../../entities/interface';

const useBlog = () => {
  const openPopup = (url: string) => window.open(url, url);
  const [active, setActive] = useAtom<number | null>(activeAtom);
  const [data, setData] = useAtom<BlogItem[]>(blogAtom);

  const URL = `/v1/search/blog?query=더워드&display=100&sort=date`;

  const formatDate = (date: string) => `${date.slice(2, 4)}.${date.slice(4, 6)}.${date.slice(6, 8)}`;

  const searchBlog = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
            'X-Naver-Client-Id': "55gNZJeKLjjxwPSWalkT",
            'X-Naver-Client-Secret': "QFPPpwL_jB"
        }
      });

      console.log(response)

      const reduceData = response.data.items.reduce((acc: Item[], item: Item) => {
        if (acc.length >= 20) return acc;

        if (item.link.includes("thewordchurch__")) {
            acc.push({
                title: item.title.replace(/<b>/g, " ").replace(/<\/b>/g, " "),
                link: item.link.replace(/<b>/g, " ").replace(/<\/b>/g, " "),
                description: item.description.replace(/<b>/g, " ").replace(/<\/b>/g, " "),
                bloggername: item.bloggername.replace(/<b>/g, " ").replace(/<\/b>/g, " "),
                postdate: formatDate(item.postdate)
            });
        }
        return acc;
      }, []);
      
      setData(reduceData);
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