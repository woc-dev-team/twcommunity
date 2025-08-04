const Disciple = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* 섹션 1: 새 가족 정착과정 */}
            <section id="introduction" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">새 가족 정착과정</h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* 1단계 */}
                            <div className="text-center">
                                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-blue-600">1</span>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="font-semibold mb-2">교회방문 & 새가족 환영</h3>
                                    <p className="text-blue-600 font-medium">등록</p>
                                </div>
                            </div>

                            {/* 2단계 */}
                            <div className="text-center">
                                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-green-600">2</span>
                                </div>
                                <div className="bg-green-50 p-6 rounded-lg">
                                    <h3 className="font-semibold mb-2">새가족 목장 케어</h3>
                                    <p className="text-green-600 font-medium">정착</p>
                                </div>
                            </div>

                            {/* 3단계 */}
                            <div className="text-center">
                                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-purple-600">3</span>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg">
                                    <h3 className="font-semibold mb-2">새가족 기본 교리반 6주</h3>
                                    <p className="text-purple-600 font-medium">교육</p>
                                </div>
                            </div>

                            {/* 4단계 */}
                            <div className="text-center">
                                <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-2xl font-bold text-orange-600">4</span>
                                </div>
                                <div className="bg-orange-50 p-6 rounded-lg">
                                    <h3 className="font-semibold mb-2">목장 배치</h3>
                                    <p className="text-orange-600 font-medium">교제</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 2: 평신도 양육훈련 과정 */}
            <section id="courses" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">평신도 양육훈련 과정</h2>
                            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Part 1: 구원의 삶 */}
                            <div className="text-center">
                                <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-xl font-bold text-indigo-600">1</span>
                                </div>
                                <div className="bg-indigo-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-indigo-600">구원의 삶</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white rounded-lg p-3 text-center border">
                                            <h5 className="font-medium text-gray-800">새가족 기본교리반</h5>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border">
                                            <h5 className="font-medium text-gray-800">성장반</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Part 2: 성화의 삶 */}
                            <div className="text-center">
                                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-xl font-bold text-blue-600">2</span>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-blue-600">성화의 삶</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white rounded-lg p-3 border">
                                            <h5 className="font-medium text-gray-800 mb-2 text-center">Sharing Club</h5>
                                            <div className="space-y-2">
                                                <div className="bg-gray-100 rounded p-2 text-center text-sm">목클럽 A/B/C</div>
                                                <div className="bg-gray-100 rounded p-2 text-center text-sm">
                                                    커피 브레이크
                                                    <span className="block text-xs text-gray-500">*여성 전용</span>
                                                </div>
                                                <div className="bg-gray-100 rounded p-2 text-center text-sm">교리반A</div>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border">
                                            <h5 className="font-medium text-gray-800">선교반(리더양성)</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Part 3: 제자의 삶 */}
                            <div className="text-center">
                                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <span className="text-xl font-bold text-emerald-600">3</span>
                                </div>
                                <div className="bg-emerald-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-emerald-600">제자의 삶</h3>
                                    <div className="space-y-3">
                                        <div className="bg-white rounded-lg p-3 text-center border">
                                            <h5 className="font-medium text-gray-800">제자반</h5>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border">
                                            <h5 className="font-medium text-gray-800">교리반B</h5>
                                        </div>
                                        <div className="bg-white rounded-lg p-3 text-center border">
                                            <h5 className="font-medium text-gray-800">목자반</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 오픈 특강 */}
                        <div className="mt-12">
                            <div className="bg-white p-8 rounded-lg shadow-sm border">
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">오픈 특강</h3>
                                    <p className="text-gray-600">모든 과정 참여자가 함께하는 특별 강의</p>
                                </div>
                                <div className="flex justify-center items-center space-x-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">구원의 삶</span>
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-300"></div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">성화의 삶</span>
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-300"></div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">제자의 삶</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 3: 평신도 성경대학 */}
            <section id="smallgroups" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">평신도 성경대학</h2>
                            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600">신구약 성경대학(학기제)</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            {/* 왼쪽: 학기별 과정 */}
                            <div className="space-y-6">
                                {/* 전반기 */}
                                <div className="text-center">
                                    <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-xl font-bold text-blue-600">전반기</span>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-2">구약 성경대학</h3>
                                        <p className="text-blue-600 font-medium">창세기부터 말라기까지</p>
                                    </div>
                                </div>

                                {/* 후반기 */}
                                <div className="text-center">
                                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-xl font-bold text-green-600">후반기</span>
                                    </div>
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-2">신약 성경대학</h3>
                                        <p className="text-green-600 font-medium">마태복음부터 요한계시록까지</p>
                                    </div>
                                </div>
                            </div>

                            {/* 오른쪽: 상세 정보 */}
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                        대상
                                    </h4>
                                    <p className="text-gray-600 ml-5">누구나 참여 가능</p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                                        일시
                                    </h4>
                                    <p className="text-gray-600 ml-5">2021년 1월부터 매주 수요일 저녁 격주 모임</p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                                        교재
                                    </h4>
                                    <p className="text-gray-600 ml-5">구약 성경대학, 신약 성경대학<br/><span className="text-sm text-gray-500">(국제제자훈련원)</span></p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                                        내용
                                    </h4>
                                    <p className="text-gray-600 ml-5">전반기(구약) + 후반기(신약)</p>
                                </div>
                            </div>
                        </div>

                        {/* 하단 요약 */}
                        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">1년 과정으로 성경 전체를 학습</h3>
                                <div className="flex justify-center items-center space-x-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">구약 39권</span>
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-300"></div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">신약 27권</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 4: 평신도 교리대학 */}
            <section id="registration" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">평신도 교리대학</h2>
                            <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-600">성경 교리 대학(학기제)</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* 왼쪽: 커리큘럼 */}
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">30주 과정 (1년)</h3>
                                    <p className="text-gray-600">체계적인 교리 학습</p>
                                </div>

                                {/* 1학기 */}
                                <div className="text-center">
                                    <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-xl font-bold text-red-600">1학기</span>
                                    </div>
                                    <div className="bg-red-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-4 text-red-600">15주 과정</h3>
                                        <div className="space-y-2">
                                            <div className="bg-white rounded-lg p-3 text-center border">
                                                <h5 className="font-medium text-gray-800">인간론</h5>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 text-center border">
                                                <h5 className="font-medium text-gray-800">신론</h5>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 text-center border">
                                                <h5 className="font-medium text-gray-800">가족론</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 2학기 */}
                                <div className="text-center">
                                    <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-xl font-bold text-purple-600">2학기</span>
                                    </div>
                                    <div className="bg-purple-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-4 text-purple-600">15주 과정</h3>
                                        <div className="space-y-2">
                                            <div className="bg-white rounded-lg p-3 text-center border">
                                                <h5 className="font-medium text-gray-800">구원론</h5>
                                            </div>
                                            <div className="bg-white rounded-lg p-3 text-center border">
                                                <h5 className="font-medium text-gray-800">종말론</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 오른쪽: 상세 정보 */}
                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                        대상
                                    </h4>
                                    <p className="text-gray-600 ml-5">제자반 수료자 이상</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                                        일시
                                    </h4>
                                    <p className="text-gray-600 ml-5">미정</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                        커리큘럼
                                    </h4>
                                    <p className="text-gray-600 ml-5">30주 (1년 과정)</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                                        주교재
                                    </h4>
                                    <div className="ml-5 text-gray-600">
                                        <p className="mb-2">앤서니 후크마</p>
                                        <p className="text-sm">(인간론, 구원론, 종말론)</p>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm border">
                                    <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                                        <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                                        보충교재
                                    </h4>
                                    <div className="ml-5 text-gray-600 space-y-1">
                                        <p>루이스 벌코프 (조직신학)</p>
                                        <p>헤르만 바빙크 (개혁교의학)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 하단 요약 */}
                        <div className="mt-12 bg-gradient-to-r from-red-50 to-purple-50 p-8 rounded-lg">
                            <div className="text-center">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">체계적인 조직신학 학습</h3>
                                <div className="flex justify-center items-center space-x-8">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">1학기 (15주)</span>
                                    </div>
                                    <div className="w-8 h-0.5 bg-gray-300"></div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">2학기 (15주)</span>
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