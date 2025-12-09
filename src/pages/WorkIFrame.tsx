import React, { useState, useEffect } from 'react';

const WorkIFrame: React.FC = () => { 
    const naverBlogUrl = '목사님 사역 페이지 블로그 URL';
    const naverBlogMobileUrl = '목사님 사역 페이지 블로그 모바일 URL';
    
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkIsMobile = () => {
            const isMobileView = window.innerWidth < 768;
            setIsMobile(isMobileView);
        
            if (isMobileView) {
                window.open(naverBlogMobileUrl, '_blank');
                window.location.replace('/'); 
                return; 
            }
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, [naverBlogMobileUrl]);

    if (isMobile) {
        return null;
    }

    const currentUrl = naverBlogUrl;
    const zoomScaleClass = 'scale-150'; 
    const originClass = 'origin-center';
    const translateYClass = 'translate-y-[-20%]';

    return (
        <div className="fixed top-0 left-0 w-screen max-h-full h-screen overflow-hidden bg-white dark:bg-gray-900">
            
            <iframe
                src={currentUrl}
                title="전체 화면 임베드된 더워드처치 블로그"
                className={`w-full h-full transform-gpu ${zoomScaleClass} ${originClass} ${translateYClass}`}
                
                sandbox="allow-popups allow-forms allow-same-origin allow-scripts"
                allowFullScreen
            >
                브라우저가 iframe을 지원하지 않아 내용을 표시할 수 없습니다.
            </iframe>
        </div>
    )
}

export default WorkIFrame;