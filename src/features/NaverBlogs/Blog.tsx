import { useEffect, useState } from "react";
import { BlogItem } from "../../entities/interface";
import BlogList from "./BlogList";

const Blog = () => {
    const [data, setData] = useState<BlogItem[] | null>(null);
    const API_BASE_URL = import.meta.env.VITE_API_URL;

    const searchBlog = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/search/blog?query=더워드`);
          const datas = await response.json();
          setData(datas);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
      searchBlog();
    }, [])

    return (
        <div className="h-full w-full text-lg place-items-center">
          <p className="text-3xl mt-10 text-black dark:text-white">교회 소식</p>
          <p className="text-lg font-thin mb-10 text-blue-900 dark:text-blue-200">Blog</p>
          <ul className="text-start c_md:w-3/5 font-sans">
            {data ? (
              data.map((item, index) => <BlogList index={index} item={item} />)
            ) : (
              <li>교회 소식 불러오는 중...</li>
            )}
          </ul>
        </div>
    )
};

export default Blog;