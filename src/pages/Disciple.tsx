import { useState, useEffect, useRef } from 'react';

// 애니메이션 타입 정의
type AnimationDirection = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'fade';

type SectionPrefix = 
    | 'title' 
    | 'step1' | 'step2' | 'step3' | 'step4'
    | 'courses-title' 
    | 'part1' | 'part2' | 'part3'
    | 'special-lecture'
    | 'bible-title' | 'bible-left' | 'bible-right' | 'bible-summary'
    | 'doctrine-title' | 'doctrine-left' | 'doctrine-right' | 'doctrine-summary';

type AnimationType = `${SectionPrefix}-${AnimationDirection}`;

const Disciple = () => {
    const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target as HTMLElement;
                        const animateValue = target.dataset.animate;
                        if (animateValue) setVisibleElements(prev => new Set([...prev, animateValue]))
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const elements = document.querySelectorAll('[data-animate]');
        if (observerRef.current) elements.forEach(el => observerRef.current!.observe(el));

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, []);

    const getAnimationClass = (animationType: AnimationType): string => {
        const isVisible = visibleElements.has(animationType);
        
        const baseClasses = "transition-all duration-700 ease-out";
        
        if (animationType.includes('fade-up')) return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
        if (animationType.includes('fade-down')) return `${baseClasses} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`;
        if (animationType.includes('fade-left')) return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`;
        if (animationType.includes('fade-right')) return `${baseClasses} ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`;
        if (animationType.includes('scale')) return `${baseClasses} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
        if (animationType.includes('fade')) return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
        
        return baseClasses;
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black">
            {/* 섹션 1: 새 가족 정착과정 */}
            <section id="introduction" className="py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div 
                            className={`text-center mb-12 ${getAnimationClass('title-fade-up')}`}
                            data-animate="title-fade-up"
                        >
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">새 가족 정착과정</h2>
                            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* 1단계 */}
                            <div 
                                className={`text-center ${getAnimationClass('step1-fade-up')}`}
                                data-animate="step1-fade-up"
                                style={{ transitionDelay: '0.1s' }}
                            >
                                <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-300">1</span>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">교회방문 & 새가족 환영</h3>
                                    <p className="text-blue-600 dark:text-blue-400 font-medium">등록</p>
                                </div>
                            </div>

                            {/* 2단계 */}
                            <div 
                                className={`text-center ${getAnimationClass('step2-fade-up')}`}
                                data-animate="step2-fade-up"
                                style={{ transitionDelay: '0.2s' }}
                            >
                                <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-green-600 dark:text-green-300">2</span>
                                </div>
                                <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">새가족 소그룹 케어</h3>
                                    <p className="text-green-600 dark:text-green-400 font-medium">정착</p>
                                </div>
                            </div>

                            {/* 3단계 */}
                            <div 
                                className={`text-center ${getAnimationClass('step3-fade-up')}`}
                                data-animate="step3-fade-up"
                                style={{ transitionDelay: '0.3s' }}
                            >
                                <div className="bg-purple-100 dark:bg-purple-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">3</span>
                                </div>
                                <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">새가족 기본 교리반 6주</h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-medium">교육</p>
                                </div>
                            </div>

                            {/* 4단계 */}
                            <div 
                                className={`text-center ${getAnimationClass('step4-fade-up')}`}
                                data-animate="step4-fade-up"
                                style={{ transitionDelay: '0.4s' }}
                            >
                                <div className="bg-orange-100 dark:bg-orange-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-orange-600 dark:text-orange-300">4</span>
                                </div>
                                <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">소그룹 배치</h3>
                                    <p className="text-orange-600 dark:text-orange-400 font-medium">교제</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 2: 성도 양육훈련 과정 */}
            <section id="courses" className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div 
                            className={`text-center mb-12 ${getAnimationClass('courses-title-fade-up')}`}
                            data-animate="courses-title-fade-up"
                        >
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">성도 양육훈련 과정</h2>
                            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Part 1: 구원의 삶 */}
                            <div 
                                className={`text-center ${getAnimationClass('part1-fade-left')}`}
                                data-animate="part1-fade-left"
                                style={{ transitionDelay: '0.1s' }}
                            >
                                <div className="bg-indigo-100 dark:bg-indigo-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl font-bold text-indigo-600 dark:text-indigo-300">1</span>
                                </div>
                                <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">구원의 삶</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-300">
                                            <h5 className="font-medium text-gray-800 dark:text-gray-200">새가족 기본교리반</h5>
                                        </div>
                                        <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-600 transition-colors duration-300">
                                            <h5 className="font-medium text-gray-800 dark:text-gray-200">성장반</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Part 2: 성화의 삶 */}
                            <div 
                                className={`text-center ${getAnimationClass('part2-scale')}`}
                                data-animate="part2-scale"
                                style={{ transitionDelay: '0.2s' }}
                            >
                                <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl font-bold text-blue-600 dark:text-blue-300">2</span>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">성화의 삶</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white dark:bg-black rounded-lg p-3 border dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300">
                                            <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2 text-center">Sharing Club</h5>
                                            <div className="space-y-2">
                                                <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-center text-sm hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300 text-gray-800 dark:text-gray-200">북클럽</div>
                                                <div className="bg-gray-100 dark:bg-gray-800 rounded p-2 text-center text-sm hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors duration-300 text-gray-800 dark:text-gray-200">교리반A</div>
                                            </div>
                                        </div>
                                        <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300">
                                            <h5 className="font-medium text-gray-800 dark:text-gray-200">단기선교반</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Part 3: 제자의 삶 */}
                            <div 
                                className={`text-center ${getAnimationClass('part3-fade-right')}`}
                                data-animate="part3-fade-right"
                                style={{ transitionDelay: '0.3s' }}
                            >
                                <div className="bg-emerald-100 dark:bg-emerald-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                    <span className="text-xl font-bold text-emerald-600 dark:text-emerald-300">3</span>
                                </div>
                                <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                    <h3 className="text-xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">제자의 삶</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors duration-300">
                                            <h5 className="font-medium text-gray-800 dark:text-gray-200">교리반B</h5>
                                        </div>
                                        <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors duration-300">
                                            <h5 className="font-medium text-gray-800 dark:text-gray-200">리더반</h5>
                                        </div>
                                        <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors duration-300">
                                            <h5 className="font-medium text-gray-800 dark:text-gray-200">직분반</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 오픈 특강 */}
                        <div 
                            className={`mt-12 ${getAnimationClass('special-lecture-fade-up')}`}
                            data-animate="special-lecture-fade-up"
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <div className="bg-white dark:bg-black p-8 rounded-lg shadow-sm border dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                                <div className="text-center mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">오픈 특강</h3>
                                    <p className="text-gray-600 dark:text-gray-300">모든 과정 참여자가 함께하는 특별 강의</p>
                                </div>
                                <div className="flex sm:flex-row flex-col justify-center items-center sm:space-x-8 gap-2 sm:gap-0">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">구원의 삶</span>
                                    </div>
                                    <div className="w-3/5 sm:w-8 h-0.5 bg-gray-200 sm:bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">성화의 삶</span>
                                    </div>
                                    <div className="w-3/5 sm:w-8 h-0.5 bg-gray-200 sm:bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">제자의 삶</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 3: 성도 성경대학 */}
            <section id="smallgroups" className="py-16 bg-white dark:bg-black">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div 
                            className={`text-center mb-12 ${getAnimationClass('bible-title-fade-down')}`}
                            data-animate="bible-title-fade-down"
                        >
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">성도 성경대학</h2>
                            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600 dark:text-gray-300">신구약 성경대학(학기제)</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* 왼쪽: 학기별 과정 */}
                            <div 
                                className={`space-y-6 ${getAnimationClass('bible-left-fade-right')}`}
                                data-animate="bible-left-fade-right"
                            >
                                {/* 전반기 */}
                                <div className="text-center">
                                    <div className="bg-blue-100 dark:bg-blue-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-blue-600 dark:text-blue-300">전반기</span>
                                    </div>
                                    <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">구약 성경대학</h3>
                                        <p className="text-blue-600 dark:text-blue-400 font-medium">창세기부터 말라기까지</p>
                                    </div>
                                </div>

                                {/* 후반기 */}
                                <div className="text-center">
                                    <div className="bg-green-100 dark:bg-green-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-green-600 dark:text-green-300">후반기</span>
                                    </div>
                                    <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">신약 성경대학</h3>
                                        <p className="text-green-600 dark:text-green-400 font-medium">마태복음부터 요한계시록까지</p>
                                    </div>
                                </div>
                            </div>

                            {/* 오른쪽: 상세 정보 */}
                            <div 
                                className={`space-y-6 ${getAnimationClass('bible-right-fade-left')}`}
                                data-animate="bible-right-fade-left"
                                style={{ transitionDelay: '0.2s' }}
                            >
                                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-3"></div>
                                        대상
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 ml-5">누구나 참여 가능</p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full mr-3"></div>
                                        일시
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 ml-5">매주 수요일 저녁 격주 모임</p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mr-3"></div>
                                        교재
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 ml-5">구약 성경대학, 신약 성경대학<br/><span className="text-sm text-gray-500 dark:text-gray-400">(국제제자훈련원)</span></p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full mr-3"></div>
                                        내용
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 ml-5">전반기(구약) + 후반기(신약)</p>
                                </div>
                            </div>
                        </div>

                        {/* 하단 요약 */}
                        <div 
                            className={`mt-12 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/30 dark:to-green-900/30 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 ${getAnimationClass('bible-summary-fade-up')}`}
                            data-animate="bible-summary-fade-up"
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <div className="text-center">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">1년 과정으로 성경 전체를 학습</h3>
                                <div className="flex justify-center items-center space-x-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">구약 39권</span>
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">신약 27권</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 4: 성도 교리대학 */}
            <section id="registration" className="py-16 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div 
                            className={`text-center mb-12 ${getAnimationClass('doctrine-title-fade-up')}`}
                            data-animate="doctrine-title-fade-up"
                        >
                            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">성도 교리대학</h2>
                            <div className="w-24 h-1 bg-gray-300 dark:bg-gray-600 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600 dark:text-gray-300">성경 교리 대학(학기제)</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* 왼쪽: 커리큘럼 */}
                            <div 
                                className={`space-y-6 ${getAnimationClass('doctrine-left-fade-right')}`}
                                data-animate="doctrine-left-fade-right"
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">30주 과정 (1년)</h3>
                                    <p className="text-gray-600 dark:text-gray-300">체계적인 교리 학습</p>
                                </div>

                                {/* 1학기 */}
                                <div className="text-center">
                                    <div className="bg-red-100 dark:bg-red-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-red-600 dark:text-red-300">1학기</span>
                                    </div>
                                    <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">15주 과정</h3>
                                        <div className="space-y-2">
                                            <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-red-300 dark:hover:border-red-600 transition-colors duration-300">
                                                <h5 className="font-medium text-gray-800 dark:text-gray-200">인간론</h5>
                                            </div>
                                            <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-red-300 dark:hover:border-red-600 transition-colors duration-300">
                                                <h5 className="font-medium text-gray-800 dark:text-gray-200">신론</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2학기 */}
                                <div className="text-center">
                                    <div className="bg-purple-100 dark:bg-purple-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                                        <span className="text-xl font-bold text-purple-600 dark:text-purple-300">2학기</span>
                                    </div>
                                    <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                        <h3 className="text-xl font-semibold mb-4 text-purple-600 dark:text-purple-400">15주 과정</h3>
                                        <div className="space-y-2">
                                            <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-300">
                                                <h5 className="font-medium text-gray-800 dark:text-gray-200">구원론</h5>
                                            </div>
                                            <div className="bg-white dark:bg-black rounded-lg p-3 text-center border dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 transition-colors duration-300">
                                                <h5 className="font-medium text-gray-800 dark:text-gray-200">종말론</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 오른쪽: 상세 정보 */}
                            <div 
                                className={`space-y-6 ${getAnimationClass('doctrine-right-fade-left')}`}
                                data-animate="doctrine-right-fade-left"
                                style={{ transitionDelay: '0.2s' }}
                            >
                                <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full mr-3"></div>
                                        대상
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 ml-5">제자반 수료자 이상</p>
                                </div>

                                <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-3"></div>
                                        일시
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 ml-5">미정</p>
                                </div>

                                <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
                                        커리큘럼
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 ml-5">30주 (1년 과정)</p>
                                </div>

                                <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full mr-3"></div>
                                        주교재
                                    </h4>
                                    <div className="ml-5 text-gray-600 dark:text-gray-300">
                                        <p className="mb-2">앤서니 후크마</p>
                                        <p className="text-sm">(인간론, 구원론, 종말론)</p>
                                    </div>
                                </div>

                                <div className="bg-white dark:bg-black p-6 rounded-lg shadow-sm border dark:border-gray-600 hover:shadow-lg transition-shadow duration-300">
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-teal-500 dark:bg-teal-400 rounded-full mr-3"></div>
                                        보충교재
                                    </h4>
                                    <div className="ml-5 text-gray-600 dark:text-gray-300 space-y-1">
                                        <p>루이스 벌코프 (조직신학)</p>
                                        <p>헤르만 바빙크 (개혁교의학)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 하단 요약 */}
                        <div 
                            className={`mt-12 bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-900/30 dark:to-purple-900/30 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300 ${getAnimationClass('doctrine-summary-fade-up')}`}
                            data-animate="doctrine-summary-fade-up"
                            style={{ transitionDelay: '0.4s' }}
                        >
                            <div className="text-center">
                                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">체계적인 조직신학 학습</h3>
                                <div className="flex justify-center items-center space-x-8 whitespace-nowrap">
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">1학기 (15주)</span>
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                                    <div className="flex items-center space-x-2 sm:space-x-3">
                                        <div className="w-3 h-3 bg-purple-500 dark:bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">2학기 (15주)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Disciple;