import { BlogListProps } from "../../entities/interface";
import useBlog from "./useBlog";

const BlogList = ({item}: BlogListProps) => {
    const { openPopup } = useBlog();

    return (
        <li className="mt-3.5 text-gray-400 hover:text-black w-full dark:text-gray-400 dark:hover:text-white transition-all duration-500 ease-in-out font-sans c_md:font-sans hover:font-semibold">
            <div className="grid grid-cols-10">
                <button className="col-span-8 text-start" onClick={() => openPopup(item.link)}>
                    {item.title}
                </button>
                <p className="col-span-2 text-end">{item.postdate}</p>
            </div>
            {/* <p className="text-xs text-start">{item.description}</p> */}
        </li>
    )
}

export default BlogList;