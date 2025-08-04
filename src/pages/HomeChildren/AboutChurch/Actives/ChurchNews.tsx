import useBlog from "../../../../features/NaverBlogs/useBlog";
import VideoEmbed from "../../../../features/Video/VideoEmbed";
import { Calendar, BookOpen, Users, Video, Clock, Hand } from "lucide-react";
import { languagePacks } from "../../../../entities/datas";
import useMenus from "../../../../features/Navbar/useMenus";

const ChurchNews = ({title}: {title: string}) => {
    const { setActive } = useBlog();
    const { languageIndex } = useMenus();

    return (
        <>
            {/* 블로그 */}
            <div
                className={`mt-28 c_md:m-0 ps-3 pe-3 transition-all duration-500 ease-in-out mb-20 w-full c_md:w-1/3`}
                onMouseEnter={() => setActive(null)}
                onMouseLeave={() => setActive(null)}
            >
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white font-semibold">{title}</p>
                <div className="h-auto md:h-screen w-full mb-14 md:mb-0 flex flex-col items-center text-center ttext-blue-900 dark:text-blue-100">
                    <div className="w-full mt-5 rounded-lg shadow-lg dark:shadow-slate-700 overflow-hidden">
                        <div className="aspect-video bg-gray-100">
                            <VideoEmbed 
                                className="w-full h-full rounded-lg"
                                url="https://www.youtube.com/embed/N1mLKxXqm18?list=PL5qH14UOP1Lkd84kcUj7wkK5HGQ28zQsB&index=1&autoplay=1&mute=1" 
                                autoplay={true}
                            />
                        </div>
                    </div>
    
                    <div className="text-start w-full mt-10 px-8 py-6 border-0.5 border-gray-100 dark:border-gray-900 rounded-xl shadow-lg dark:shadow-slate-700 text-lg">
                        <div className="pb-3 pt-2">
                            <p className="text-lg c_lg:text-2xl font-sans tracking-wide flex items-center gap-2 transition-all duration-500 ease-in-out">
                                <Calendar className="w-5 h-5 text-blue-900 dark:text-blue-100 me-1" />
                                <span>{languagePacks[languageIndex].aboutChurch.news.worship.title}</span>
                            </p>
                            <ul className="text-base c_lg:text-xl mt-3 space-y-3 text-gray-700 dark:text-gray-300 font-thin transition-all duration-500 ease-in-out">
                                <li className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" /> 
                                    <span>{languagePacks[languageIndex].aboutChurch.news.worship.p1}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" />
                                    <span>{languagePacks[languageIndex].aboutChurch.news.worship.p2}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" />
                                    <span>{languagePacks[languageIndex].aboutChurch.news.worship.p3}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 pb-3 pt-6">
                            <p className="text-lg c_lg:text-2xl font-sans tracking-wide flex items-center gap-2 transition-all duration-500 ease-in-out">
                                <Video className="w-5 h-5 text-blue-900 dark:text-blue-100 me-1" />
                                <span>{languagePacks[languageIndex].aboutChurch.news.class.title}</span>
                            </p>
                            <ul className="text-base c_lg:text-xl mt-3 space-y-3 text-gray-700 dark:text-gray-300 font-thin transition-all duration-500 ease-in-out">
                                <li className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" />
                                    <span>{languagePacks[languageIndex].aboutChurch.news.class.p1}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Hand className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" />
                                    <span>{languagePacks[languageIndex].aboutChurch.news.class.p2}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChurchNews;