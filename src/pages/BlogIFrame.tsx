// BlogIFrame.tsx 또는 BlogIFrame.jsx

import React, { useState, useEffect } from 'react';

const BlogIFrame: React.FC = () => { 
    // 임베드할 네이버 블로그 URL
    const naverBlogUrl = 'https://blog.naver.com/thewordchurch__';
    const naverBlogMobileUrl = 'https://m.blog.naver.com/thewordchurch__?tab=1';
    
    // 모바일 상태를 저장할 state
    const [isMobile, setIsMobile] = useState(false);
    
    // 모바일 감지 로직
    useEffect(() => {
        // 화면 너비가 768px 미만이면 모바일로 간주 (Tailwind CSS의 md breakpoint 기준)
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // 컴포넌트 마운트 시 최초 실행
        checkIsMobile();

        // 리사이즈 이벤트 리스너 등록
        window.addEventListener('resize', checkIsMobile);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    // 현재 선택된 URL
    const currentUrl = isMobile ? naverBlogMobileUrl : naverBlogUrl;

    // 모바일일 경우 스타일을 다르게 적용
    const zoomScaleClass = isMobile ? 'scale-100' : 'scale-150'; 
    const originClass = isMobile ? 'origin-top' : 'origin-center';
    const translateYClass = isMobile ? 'translate-y-[5%]' : 'translate-y-[-20%]';

    return (
        <div className="fixed top-0 left-0 w-screen max-h-full h-screen overflow-hidden bg-white dark:bg-gray-900">
            
            <p className="p-2 text-center text-sm text-yellow-600 dark:text-yellow-400">
                현재: {isMobile ? '**모바일 링크**' : '**PC 링크**'}로 로드 중
            </p>
            
            <iframe
                // [수정된 부분]: 모바일/PC 환경에 따라 URL 선택
                src={currentUrl}
                title="전체 화면 임베드된 더워드처치 블로그"
                
                // [수정된 부분]: 모바일/PC 환경에 따라 스타일 선택
                className={`w-full h-full transform-gpu ${zoomScaleClass} ${originClass} ${translateYClass}`}
                
                sandbox="allow-popups allow-forms allow-same-origin allow-scripts"
                allowFullScreen
            >
                브라우저가 iframe을 지원하지 않아 내용을 표시할 수 없습니다.
            </iframe>
        </div>
    )
}

export default BlogIFrame;