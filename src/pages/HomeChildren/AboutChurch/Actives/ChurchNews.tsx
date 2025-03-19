import { useEffect } from "react";
import useBlog from "../../../../features/NaverBlogs/useBlog";
import useVideo from "../../../../features/Video/useVideo";
import VideoEmbed from "../../../../features/Video/VideoEmbed";
import { Calendar, BookOpen, Users, Video, Clock, Hand } from "lucide-react";

const ChurchNews = ({title}: {title: string}) => {
    const { setActive } = useBlog();
    const { getVideo, videoId } = useVideo();

    useEffect(() => {
        getVideo();
    }, [videoId])

    return (
        <>
            {/* 블로그 */}
            <div
                className={`transition-all duration-500 ease-in-out mb-20 w-full c_md:w-1/4`}
                onMouseEnter={() => setActive(null)}
                onMouseLeave={() => setActive(null)}
            >
                <p className="text-2xl c_md:text-3xl mb-4 c_md:mb-10 text-black dark:text-white font-semibold">{title}</p>
                <div className="h-auto md:h-screen w-full mb-14 md:mb-0 flex flex-col items-center text-center ttext-blue-900 dark:text-blue-100">
                    <div className="w-full h-[254px] bg-gray-100 mt-5 rounded-lg shadow-lg dark:shadow-slate-700">
                        {videoId ? 
                            <VideoEmbed className="w-full mx-aut rounded-lg overflow-hidden relative" url={`https://www.youtube.com/watch?v=${videoId}`} />
                        :
                            <div className="text-center font-light text-lg">
                                <p>영상을 불러오는 중입니다.</p>
                                <p>잠시만 기다려주세요.</p>
                            </div>
                        } 
                    </div>
    
                    <div className="w-full mt-10 px-8 py-6 border-0.5 border-gray-100 dark:border-gray-900 rounded-xl shadow-lg dark:shadow-slate-700 text-lg">
                        <div className="pb-3 pt-2 transition-all duration-700 ease-in-out hover:scale-105">
                            <p className="text-lg c_md:text-xl font-sans tracking-wide flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-blue-900 dark:text-blue-100 me-1" /> 주일 예배
                            </p>
                            <ul className="mt-3 space-y-3 text-gray-700 dark:text-gray-300 font-thin text-base">
                                <li className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" /> <span>오전 11시 - 세대통합 예배</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" /> <span>오후 1시 30분 - 소그룹 모임</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" /> <span>오후 3시 - 교리 강좌</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-6 pb-3 pt-6 transition-all duration-700 ease-in-out hover:scale-105">
                            <p className="text-lg c_md:text-xl font-sans tracking-wide flex items-center gap-2">
                                <Video className="w-5 h-5 text-blue-900 dark:text-blue-100 me-1" /> 주중 모임
                            </p>
                            <ul className="mt-3 space-y-3 text-gray-700 dark:text-gray-300 font-thin text-base">
                                <li className="flex items-center gap-2">
                                    <BookOpen className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" /> <span>수요일 오후 10시 - 온라인 성경공부</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <Hand className="w-4 h-4 text-blue-900 dark:text-blue-100 me-1" /> <span>금요일 오후 8시 - 금요통독기도회</span>
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