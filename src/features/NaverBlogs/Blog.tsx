import { useState } from "react";

const Blog = () => {
    const [data, setData] = useState<JSON>()

    const searchBlog = async (query: string) => {
        try {
          const response = await fetch(`/search/blog?query=${encodeURIComponent(query)}`);
          const datas = await response.json();
          console.log(datas);
          setData(datas);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <button onClick={() => searchBlog("더워드")}>검색하기</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
};

export default Blog;