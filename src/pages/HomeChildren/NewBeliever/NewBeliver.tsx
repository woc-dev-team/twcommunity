import useMenus from "../../../features/Navbar/useMenus";

const NewBeliever = () => {
  const { languageIndex } = useMenus();

  // 내부 텍스트 데이터 (0: 한국어, 1: 영어)
  const content = [
    {
      welcome: "Welcome",
      title_1: "처음 오신 분께,",
      title_2: "충분히 잘 오셨습니다.",
      desc_1: (
        <>
          더워드교회는 당신의 <span className="font-medium text-black dark:text-white underline underline-offset-4">속도</span>를 존중합니다. <br /><br />
          바로 등록하지 않아도, 신앙 이야기를 억지로 하지 않아도 괜찮습니다. 
          열심을 증명할 필요도 없습니다. 
          그저 조용히 앉아 말씀을 듣는 것, 그것으로 충분한 시작이라 믿기 때문입니다.
        </>
      ),
      quote: "다음 주도, 그 다음 주도 부담 없이 다시 오셔도 됩니다.",
      card_title: "미리 알려드리고 싶은 것",
      items: [
        { title: "등록은 선택입니다", desc: "마음이 머물고 싶을 때 결정하세요." },
        { title: "권유하지 않습니다", desc: "봉사나 헌신에 대한 부담을 드리지 않습니다." },
        { title: "재촉하지 않습니다", desc: "빠른 결단보다 천천히 회복되는 과정을 소중히 여깁니다." }
      ],
      footer: (
        <>
          예배 후 담임목사와 인사는 <span className="font-bold text-black dark:text-white">선택</span>입니다. <br />
          원치 않으시면 편하게 귀가하셔도 좋습니다.
        </>
      )
    },
    {
      welcome: "Welcome",
      title_1: "To our guests,",
      title_2: "We are truly glad you're here.",
      desc_1: (
        <>
          The Word Church respects your <span className="font-medium text-black dark:text-white underline underline-offset-4">pace</span>. <br /><br />
          You don't have to register right away, and there's no pressure to share your faith journey or prove your devotion. 
          We believe that simply sitting quietly and listening to the Word is a perfect place to start.
        </>
      ),
      quote: "Please feel free to visit us again next week, or whenever you feel ready.",
      card_title: "What you can expect",
      items: [
        { title: "Registration is optional", desc: "Take your time until you feel at home." },
        { title: "No obligations", desc: "We do not pressure you into service or commitment." },
        { title: "No rush", desc: "We value a gradual recovery in the Word over a hurried decision." }
      ],
      footer: (
        <>
          Meeting the pastor after service is <span className="font-bold text-black dark:text-white">entirely optional</span>. <br />
          Feel free to head home whenever you wish.
        </>
      )
    }
  ];

  const t = content[languageIndex] || content[0]; // 안전장치로 한국어 기본 설정

  return (
    <div id="newer" className="w-full min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] py-24 px-6 md:px-12 flex flex-col items-center justify-center transition-colors duration-500">
      
      <div className="max-w-4xl w-full text-center mb-20">
        <h2 className="text-zinc-400 uppercase tracking-[0.3em] text-sm mb-4">{t.welcome}</h2>
        <h1 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100 leading-tight">
          {t.title_1} <br />
          <span className="font-semibold underline underline-offset-[12px] decoration-zinc-300 dark:decoration-zinc-700">
            {t.title_2}
          </span>
        </h1>
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        
        <div className="space-y-8 border-l border-zinc-200 dark:border-zinc-800 pl-8">
          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-loose font-light break-keep">
            {t.desc_1}
          </p>
          
          <div className="pt-6">
            <p className="text-sm text-zinc-500 dark:text-zinc-500 italic">
              "{t.quote}"
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-10 md:p-12 shadow-sm rounded-2xl">
          <h3 className="text-xl font-bold mb-8 text-black dark:text-white">{t.card_title}</h3>
          
          <ul className="space-y-6">
            {t.items.map((item, index) => (
              <li key={index} className="group">
                <div className="flex flex-col">
                  <span className="text-md font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-500 transition-colors">
                    {item.title}
                  </span>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {item.desc}
                  </span>
                </div>
                {index !== t.items.length - 1 && <div className="h-[1px] w-full bg-zinc-100 dark:bg-zinc-800 mt-6" />}
              </li>
            ))}
          </ul>

          <div className="mt-12 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {t.footer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBeliever;