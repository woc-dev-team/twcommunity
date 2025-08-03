import { Book, Users, Target, Calendar } from 'lucide-react';

const Disciple = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* 헤더 섹션 */}
            {/* <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">제자훈련</h1>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        예수님의 제자로 성장하는 여정을 함께하며, 하나님의 말씀으로 변화되는 삶을 경험하세요
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
                        지금 시작하기
                    </button>
                </div>
            </section> */}

            {/* 섹션 1: 제자훈련 소개 */}
            <section id="introduction" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">제자훈련이란?</h2>
                            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="bg-blue-100 p-8 rounded-lg mb-6">
                                    <Book className="w-12 h-12 text-blue-600 mb-4" />
                                    <h3 className="text-2xl font-semibold mb-4">말씀 중심의 훈련</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        성경을 체계적으로 학습하며 하나님의 뜻을 깊이 이해하고, 
                                        일상 속에서 말씀을 실천하는 방법을 배웁니다.
                                    </p>
                                </div>
                                
                                <div className="bg-green-100 p-8 rounded-lg">
                                    <Target className="w-12 h-12 text-green-600 mb-4" />
                                    <h3 className="text-2xl font-semibold mb-4">실천적 신앙</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        배운 말씀을 삶 속에서 실천하며, 예수님의 성품을 닮아가는 
                                        구체적인 훈련 과정을 제공합니다.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <img 
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop" 
                                    alt="제자훈련 이미지" 
                                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 2: 훈련 과정 */}
            <section id="courses" className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">훈련 과정</h2>
                        <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            체계적이고 단계적인 과정을 통해 성숙한 제자로 성장해 나갑니다
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">기초 과정</h3>
                            <p className="text-gray-600 mb-6">
                                신앙의 기초를 다지고 기본적인 성경 지식을 습득하는 과정입니다.
                            </p>
                            <ul className="text-left text-gray-600 space-y-2">
                                <li>• 구원의 확신</li>
                                <li>• 기도의 생활</li>
                                <li>• 말씀 묵상</li>
                                <li>• 교제의 중요성</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-green-600">2</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">성장 과정</h3>
                            <p className="text-gray-600 mb-6">
                                영적 성숙을 위한 심화 과정으로 실제적인 신앙 생활을 배웁니다.
                            </p>
                            <ul className="text-left text-gray-600 space-y-2">
                                <li>• 성경 전체 개관</li>
                                <li>• 전도와 선교</li>
                                <li>• 청지기 생활</li>
                                <li>• 섬김과 봉사</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-purple-600">3</span>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4">리더십 과정</h3>
                            <p className="text-gray-600 mb-6">
                                다른 사람을 양육하고 인도할 수 있는 리더로 성장하는 과정입니다.
                            </p>
                            <ul className="text-left text-gray-600 space-y-2">
                                <li>• 제자 양육법</li>
                                <li>• 소그룹 인도</li>
                                <li>• 영적 상담</li>
                                <li>• 사역 계획</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 3: 소그룹 활동 */}
            <section id="smallgroups" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-800 mb-4">소그룹 활동</h2>
                            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="mb-8">
                                    <Users className="w-12 h-12 text-green-600 mb-4" />
                                    <h3 className="text-2xl font-semibold mb-4">함께 성장하는 공동체</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        소그룹은 제자훈련의 핵심입니다. 8-12명의 소규모 그룹에서 
                                        깊이 있는 교제와 학습이 이루어집니다.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-green-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-2">정기 모임</h4>
                                        <p className="text-sm text-gray-600">주 1회 정기 모임을 통한 지속적인 성장</p>
                                    </div>
                                    <div className="bg-blue-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-2">개인 점검</h4>
                                        <p className="text-sm text-gray-600">1:1 멘토링을 통한 개별 성장 관리</p>
                                    </div>
                                    <div className="bg-purple-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-2">실습 과제</h4>
                                        <p className="text-sm text-gray-600">말씀을 삶에 적용하는 실제적 과제</p>
                                    </div>
                                    <div className="bg-orange-50 p-6 rounded-lg">
                                        <h4 className="font-semibold mb-2">특별 활동</h4>
                                        <p className="text-sm text-gray-600">수련회, 봉사활동 등 다양한 프로그램</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-8 rounded-lg">
                                    <h4 className="text-xl font-semibold mb-4">현재 운영 중인 소그룹</h4>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-3xl font-bold">12</div>
                                            <div className="text-sm">활성 그룹</div>
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold">120+</div>
                                            <div className="text-sm">참여 인원</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h4 className="font-semibold mb-4">모임 시간</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>주일 오후</span>
                                            <span className="text-blue-600">오후 2:00 - 4:00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>수요일 저녁</span>
                                            <span className="text-blue-600">오후 7:30 - 9:30</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>토요일 오전</span>
                                            <span className="text-blue-600">오전 10:00 - 12:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 섹션 4: 참가 신청 */}
            <section id="registration" className="py-16 bg-gray-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">참가 신청</h2>
                            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-300">
                                제자훈련에 참여하여 영적 성장의 여정을 시작하세요
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <div className="mb-8">
                                    <Calendar className="w-12 h-12 text-yellow-500 mb-4" />
                                    <h3 className="text-2xl font-semibold mb-4">2024년 하반기 모집</h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        새로운 기수의 제자훈련이 시작됩니다. 함께 성장할 동역자들을 찾고 있습니다.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                                        <span>신청 기간: 8월 1일 - 8월 31일</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                                        <span>훈련 시작: 9월 첫째 주</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                                        <span>훈련 기간: 6개월 과정</span>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                                        <span>참가비: 교재비 3만원</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white text-gray-900 p-8 rounded-lg">
                                <h3 className="text-2xl font-semibold mb-6 text-center">신청서 작성</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-2">이름</label>
                                        <input 
                                            type="text" 
                                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="이름을 입력하세요"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">연락처</label>
                                        <input 
                                            type="tel" 
                                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="010-0000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">이메일</label>
                                        <input 
                                            type="email" 
                                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">희망 시간대</label>
                                        <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                            <option>선택해주세요</option>
                                            <option>주일 오후 (2:00-4:00)</option>
                                            <option>수요일 저녁 (7:30-9:30)</option>
                                            <option>토요일 오전 (10:00-12:00)</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2">참가 동기</label>
                                        <textarea 
                                            rows={3}
                                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="제자훈련에 참가하시는 이유를 간단히 적어주세요"
                                        ></textarea>
                                    </div>
                                    <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold">
                                        신청서 제출
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-gray-400 mb-4">문의사항이 있으시면 언제든 연락주세요</p>
                            <div className="flex justify-center space-x-8">
                                <div>
                                    <span className="text-yellow-500 font-semibold">전화:</span>
                                    <span className="ml-2">02-123-4567</span>
                                </div>
                                <div>
                                    <span className="text-yellow-500 font-semibold">이메일:</span>
                                    <span className="ml-2">disciple@thewordchurch.or.kr</span>
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