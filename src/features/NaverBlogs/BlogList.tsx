import { BlogListProps } from "../../entities/interface";
import useBlog from "./useBlog";

const BlogList = ({item}: BlogListProps) => {
    const { openPopup } = useBlog();

    return (
        <li className="mt-3.5 text-xs c_sm:text-sm text-gray-400 hover:text-black w-full dark:text-gray-400 dark:hover:text-white">
            <div className="grid grid-cols-3">
                <button className="col-span-2 text-start" onClick={() => openPopup(item.link)}>
                    <span className="border-b border-gray-400">
                        {item.title}
                    </span>
                </button>
                <p className="col-span-1 text-end">{item.postdate}</p>
            </div>
            <p className="text-xs text-start">{item.description}</p>
        </li>
    )
}

export default BlogList;