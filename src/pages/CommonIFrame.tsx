import { useState, useEffect, FC } from 'react';

interface IFrameProps {
    blogUrl: string;
    blogUrlM: string;
}

const IFrame: FC<IFrameProps> = ({ blogUrl, blogUrlM }) => { 
    
    // 로딩 상태 관리
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkIsMobile = () => {
            const isMobileView = window.innerWidth < 768;
            setIsMobile(isMobileView);
        
            if (isMobileView) {
                // props로 받은 blogUrlM 사용
                window.open(blogUrlM, '_blank');
                window.location.replace('/'); 
                return; 
            }
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, [blogUrlM]); // 의존성 배열에 props 추가

    const handleLoad = () => {
        setIsLoading(false);
    };

    if (isMobile) {
        return null;
    }

    const zoomScaleClass = 'scale-150'; 
    const originClass = 'origin-center';
    const translateYClass = blogUrl === "https://blog.naver.com/thewordchurch__" ? "translate-y-[-20%]" : "translate-y-[0%]";

    return (
        <div className="fixed top-0 left-0 w-screen max-h-full h-screen overflow-hidden bg-white dark:bg-gray-900">
            
            {isLoading && (
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-900">
                    <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-500 font-medium animate-pulse">
                        블로그를 불러오는 중입니다...
                    </p>
                </div>
            )}

            <iframe
                src={blogUrl} // props로 받은 blogUrl 사용
                title="임베드된 페이지"
                onLoad={handleLoad} 
                className={`w-full h-full transform-gpu ${zoomScaleClass} ${originClass} ${translateYClass} 
                            transition-opacity duration-700 ease-in-out 
                            ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                
                sandbox="allow-popups allow-forms allow-same-origin allow-scripts"
                allowFullScreen
            >
                브라우저가 iframe을 지원하지 않아 내용을 표시할 수 없습니다.
            </iframe>
        </div>
    )
}

export default IFrame;