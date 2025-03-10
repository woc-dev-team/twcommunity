import { useEffect } from "react";
import BlogList from "./BlogList";
import useBlog from "./useBlog";
import { NaverMapsProps } from "../../entities/interface";

const Blog = ({className}: NaverMapsProps) => {
  const { data, searchBlog } = useBlog();

  useEffect(() => {
    searchBlog();
  }, [])

  return (
    <>
      <ul className={className}>
        {data ? (
          data.map((item, index) => <BlogList key={index} item={item} />)
        ) : (
          <li className="text-black dark:text-white text-2xl">교회 소식 불러오는 중...</li>
        )}
      </ul>
    </>
  )
};

export default Blog;