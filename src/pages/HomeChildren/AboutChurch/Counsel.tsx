import useBlog from "../../../features/NaverBlogs/useBlog";
import QRCode from "../../../assets/images/qr_code.jpeg";
// import { languagePacks } from "../../../entities/datas";
// import useMenus from "../../../features/Navbar/useMenus";

const Counsel = ({title}: {title: string}) => {
    const { active } = useBlog();
    // const { languageIndex } = useMenus();

    return (
        <>
            {/* 상담 신청 */}
            <div
                className={`transition-all duration-500 ease-in-out ${active === 2 ? "w-full" : "w-full c_md:w-1/3"}`}
                // onMouseEnter={() => setActive(2)}
                // onMouseLeave={() => setActive(null)}
            >
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white">{title}</p>
                <div>
                    <div className="grid grid-rows-2 p-2 pt-8">
                        <div className="row-span-1 grid grid-cols-2">
                            <img src={QRCode} className="h-auto w-auto rounded-lg place-self-center col-span-1"></img>
                            <span className="row-span-1 h-full w-full text-black dark:text-white text-lg mt-20">{`< 양육 신청`}</span>
                        </div>
                        <span className="row-span-1 h-full w-full text-black dark:text-white text-lg mt-10">{`뭐시기하는 뭐시기하며 뭐시기하는 뭐시기하며 뭐시기하는 뭐시기하며 양육 과정 입니다`}</span>
                    </div>
                    <div className="grid grid-rows-2 p-2">
                        <div className="row-span-1 grid grid-cols-2">
                            <img src={QRCode} className="h-auto w-auto rounded-lg place-self-center col-span-1"></img>
                            <span className="row-span-1 h-full w-full text-black dark:text-white text-lg mt-20">{`< 상담 신청`}</span>
                        </div>
                        <span className="row-span-1 h-full w-full text-black dark:text-white text-lg mt-10">{`뭐시기하는 뭐시기하며 뭐시기하는 뭐시기하며 뭐시기하는 뭐시기하며 신앙 상담 입니다`}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counsel;