import { languagePacks } from "../../../entities/datas";
import useMenus from "../../../features/Navbar/useMenus";
import useBlog from "../../../features/NaverBlogs/useBlog";
import { FaInstagram, FaYoutube, FaRegNewspaper } from "react-icons/fa";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// 1. 부모로부터 받을 함수에 대한 타입을 정의합니다.
interface MainTextsProps {
    onLocationClick: () => void;
}

const MainTexts = ({ onLocationClick }: MainTextsProps) => {
    // 2. 더 이상 useMaps 훅이 필요 없으므로 제거합니다.
    const { languageIndex } = useMenus(); 
    const { openPopup } = useBlog();

    return (
        <>
            <span className="hidden text-sm c_md:text-lg c_sm:block text-black dark:text-white p-2">WELCOME TO THE WORD CHURCH!</span>
            <span className="block text-sm c_md:text-lg c_sm:hidden text-black dark:text-white p-2">WELCOME TO WORD CHURCH!</span>
            <p className="text-black dark:text-white p-2 text-4xl c_lg:text-5xl twc_main_text_xl:text-7xl font-semibold transition-all duration-500 ease-in-out hover:scale-105">{languagePacks[languageIndex].mainTexts?.title}</p>
            <p className="text-black dark:text-white p-2 text-sm c_md:text-lg">{languagePacks[languageIndex].mainTexts?.word}</p>
            {/* 3. props로 받은 onLocationClick 함수를 버튼 클릭 시 실행합니다. */}
            <button onClick={onLocationClick}>
                <p className="dark:text-white p-2 text-sm c_md:text-xl dark:hover:bg-gray-500 hover:bg-gray-200 hover:scale-105 rounded-lg transition-all duration-500 ease-in-out">{languagePacks[languageIndex].mainTexts?.location}</p>
            </button>
            <div className="p-2 mt-2 c_md:mt-10 flex w-2/5 c_md:w-1/2 h-auto justify-between items-center">
                <Tippy content="더워드처치 유튜브" key={"youtube"}>
                    <button 
                        className="hover:scale-125 transition-all duration-500 ease-in-out" 
                        onClick={() => openPopup("https://www.youtube.com/@더워드교회")}>
                            <FaYoutube className="w-[20px] c_md:w-[30px] h-auto text-red-600 dark:text-white"/>
                    </button>
                </Tippy>
                <Tippy content="더워드처치 인스타그램" key={"instagram"}>
                    <button 
                        className="hover:scale-125 transition-all duration-500 ease-in-out" 
                        onClick={() => openPopup("https://www.instagram.com/p/DBsdQS8SccW/?img_index=2")}>
                            <FaInstagram className="w-[20px] c_md:w-[30px] h-auto text-black dark:text-white"/>
                    </button>
                </Tippy>
                <Tippy content="더워드처치 블로그" key={"blog"}>
                    <button
                        className="hover:scale-125 transition-all duration-500 ease-in-out" 
                        onClick={() => openPopup("https://blog.naver.com/thewordchurch__")}>
                            <FaRegNewspaper className="w-[20px] c_md:w-[30px] h-auto text-black dark:text-white"/>
                    </button>
                </Tippy>
            </div>
        </>
    )
}

export default MainTexts;