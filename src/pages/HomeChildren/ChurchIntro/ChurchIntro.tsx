import useMenus from "../../../features/Navbar/useMenus";

const ChurchIntro = () => {
  const { languageIndex } = useMenus();

  // 0: 한국어, 1: 영어
  const content = [
    {
      subtitle: "Establish / Recover / Deepen",
      sectionTitle: "숨을 고르는 시간",
      mainText: (
        <>
          더워드교회는 삶에 지쳐 신앙이 느슨해진 사람들이 <br />
          말씀 앞에서 다시 <span className="font-bold underline underline-offset-8">숨을 고르는 교회</span>입니다.
        </>
      ),
      subText: (
        <>
          우리는 믿음이 늘 단단해야 한다고 말하지 않습니다. <br />
          기도를 못 하는 시간이 길어질 수도 있고, 예배가 부담스러워질 수도 있다는 것을 알고 있습니다. <br />
          <span className="italic block mt-4 text-xl">“그래도 괜찮습니다.”</span>
          하나님은 우리가 무너져 있을 때도 여전히 말씀으로 우리를 부르시는 분이기 때문입니다.
        </>
      ),
      forYouTitle: "For You",
      forYouItems: [
        "신앙이 예전 같지 않아 마음이 무거운 분",
        "열심을 요구받는 신앙에 지친 분",
        "말씀을 통해 차분히 다시 시작하고 싶은 분"
      ],
      closing: "아무 부담 없이 앉아 말씀을 들을 수 있는 자리, 그 자리를 지키고 싶습니다."
    },
    {
      subtitle: "Establish / Recover / Deepen",
      sectionTitle: "A Moment to Breathe",
      mainText: (
        <>
          The Word Church is a sanctuary where those weary from life <br />
          can <span className="font-bold underline underline-offset-8">pause and breathe</span> before the Word.
        </>
      ),
      subText: (
        <>
          We don't believe faith must always be unbreakable. <br />
          We understand that there are seasons when prayer feels distant and worship feels heavy. <br />
          <span className="italic block mt-4 text-xl">“And that is okay.”</span>
          Because God calls us through His Word not only when we are strong, but also when we are broken.
        </>
      ),
      forYouTitle: "For You",
      forYouItems: [
        "Those whose faith feels different than before",
        "Those weary from the pressure to perform in faith",
        "Those who wish to start again quietly through the Word"
      ],
      closing: "A place where anyone can sit and listen without burden—that is the place we keep."
    }
  ];

  const t = content[languageIndex] || content[0];

  return (
    <div id="intro" className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-700 overflow-hidden">
      
      {/* 배경 장식 요소 */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gray-100 dark:bg-zinc-900 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl w-full px-8 py-20 flex flex-col md:flex-row gap-12 md:gap-20 items-start justify-between">
        
        {/* 왼쪽: 메인 타이틀 */}
        <div className="flex-1 sticky top-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight italic">
            THE <br /> WORD <br /> CHURCH
          </h2>
          <div className="h-2 w-12 bg-black dark:bg-white mt-6" />
          <p className="mt-8 text-sm uppercase tracking-widest opacity-60">{t.subtitle}</p>
        </div>

        {/* 오른쪽: 본문 */}
        <div className="flex-[1.5] space-y-12">
          <section className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold border-b border-black/10 dark:border-white/10 pb-4">
              {t.sectionTitle}
            </h3>
            <p className="text-lg md:text-xl leading-relaxed font-light break-keep opacity-90">
              {t.mainText}
            </p>
            <p className="text-base md:text-lg leading-loose opacity-80 font-light">
              {t.subText}
            </p>
          </section>

          {/* 포인트 섹션 */}
          <section className="grid grid-cols-1 gap-8 pt-10">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500">{t.forYouTitle}</h4>
              <ul className="space-y-3 text-lg md:text-xl font-medium">
                {t.forYouItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-black dark:bg-white rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <p className="text-sm opacity-50 pt-10 italic">
            {t.closing}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChurchIntro;