import { useState, useRef, useEffect } from "react";

// --- 아이콘 컴포넌트 (Lucide React 스타일, 직접 정의) ---
const IconWrapper = ({ children, className }) => (
  <div className={`flex items-center justify-center ${className}`}>
    {children}
  </div>
);

const ChevronRight = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const BookOpen = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const Stethoscope = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path>
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path>
    <circle cx="20" cy="10" r="2"></circle>
  </svg>
);

const Monitor = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const GraduationCap = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const Activity = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const Brain = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
  </svg>
);

const Database = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const MessageCircle = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const X = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const Send = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const Loader = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`${className} animate-spin`}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
  </svg>
);

// --- 상수 데이터 ---
// ⚠ 깃허브에 올릴 때는 비워두고, 로컬에서만 값 넣어 쓰기
const apiKey = "";

// 탭 / 컨텐츠 정의
const TABS = [
  { id: "info", label: "학과 정보" },
  { id: "college", label: "대학 분석" },
  { id: "future", label: "전망" },
  { id: "guide", label: "고교 가이드" },
];

const CONTENT = {
  cs: {
    color: "blue",
    info: {
      title: "컴퓨터공학과 학과 정보",
      desc: "문제 해결의 핵심, 논리와 기술의 집약체입니다. 하드웨어부터 AI까지 폭넓게 탐구합니다.",
      items: [
        "기초: 프로그래밍, 자료구조, 알고리즘, 컴퓨터 구조",
        "응용: 네트워크, 데이터베이스, 웹/앱, 인공지능, 보안",
        "핵심 자질: 논리적 사고, 집요함, 지속적인 학습 능력",
      ],
    },
    college: {
      title: "대학/입시 분석",
      desc: "최상위권의 각축장이나, SW 특성화로 기회의 문이 넓어지고 있습니다.",
      items: [
        "최상위권: 서울대, KAIST, 포스텍, 연고대 SW 계열 집중",
        "중상위권: SW 특성화 대학 및 수도권 주요 대학 인기 지속",
        "포인트: 수학/과학 내신 + 정보 교과 세특 및 실전 프로젝트",
      ],
    },
    future: {
      title: "졸업 후 전망",
      desc: "AI 시대, 단순 코더가 아닌 '아키텍트'의 수요가 폭발하고 있습니다.",
      items: [
        "개발자 너머: PM, 데이터 사이언티스트, 보안 전문가",
        "산업 확장: 금융(FinTech), 바이오, 모빌리티 등 전 분야",
        "특징: 실력 중심 연봉 체계, 유연한 근무 환경, 글로벌 기회",
      ],
    },
    guide: {
      title: "고1 준비 가이드",
      desc: "화려한 기술보다 '단단한 기초'가 우선입니다. 수학적 사고력을 기르세요.",
      items: [
        "수학: 수1·수2 개념 완벽 이해 및 문제 해결력 배양",
        "과학/정보: 물리적 원리 이해 + 파이썬/JS 기초 문법 습득",
        "활동: 거창한 대회보다 '나만의 작은 문제'를 해결해본 경험",
      ],
    },
  },
  med: {
    color: "emerald",
    info: {
      title: "의예과 학과 정보",
      desc: "생명을 다루는 숭고한 책임감, 과학적 지식과 인술을 함양합니다.",
      items: [
        "기초의학: 해부학, 생리학, 생화학, 병리학 등 인체 탐구",
        "임상의학: 내과, 외과 등 실제 환자 진료를 위한 실습",
        "핵심 자질: 생명 존중, 강인한 체력, 성실함, 공감 능력",
      ],
    },
    college: {
      title: "대학/입시 분석",
      desc: "대한민국 이과 최상위권의 목표, 정시와 수시 모두 빈틈이 없어야 합니다.",
      items: [
        "전형: 높은 수능 최저 기준 + 1.0에 수렴하는 내신 등급",
        "필수: 생명과학/화학에 대한 깊이 있는 탐구 및 세특",
        "인성: MMI 면접 등 의사로서의 윤리적 자질 평가 강화",
      ],
    },
    future: {
      title: "졸업 후 전망",
      desc: "고령화 사회, 필수의료의 중요성은 변치 않습니다. 진로는 다양해지고 있습니다.",
      items: [
        "임상: 대학병원 교수, 전문의, 개원의 (가장 보편적)",
        "연구/비임상: 의학자, 제약/바이오 연구원, 의료 행정",
        "융합: 뇌과학, 의료 AI 스타트업 창업, 헬스케어 투자",
      ],
    },
    guide: {
      title: "고1 준비 가이드",
      desc: "완벽에 가까운 교과 성적 관리와 진정성 있는 탐구 활동이 병행되어야 합니다.",
      items: [
        "내신: 전 과목(국영수과사) 1등급 유지를 목표로 철저 관리",
        "탐구: 교과 지식을 심화시킨 '질문-실험-결과'의 보고서",
        "인성: 꾸준한 의료/복지 봉사활동으로 진정성 증명",
      ],
    },
  },
};

// --- 컴포넌트 ---

// 1. 채팅 위젯
function ChatWidget({ selectedMajor }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "안녕하세요! 진로 고민이 있으신가요? 편하게 물어보세요.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const isCS = selectedMajor === "cs";
  const themeClass = isCS
    ? "bg-blue-600 text-white"
    : "bg-emerald-600 text-white";
  const bubbleUser = isCS
    ? "bg-blue-600 text-white"
    : "bg-emerald-600 text-white";
  const buttonHover = isCS ? "hover:bg-blue-700" : "hover:bg-emerald-700";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // API 키 없으면 데모 응답
    if (!apiKey) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "model",
            text: "API 키가 설정되지 않아 데모 모드로 동작합니다.\nGoogle Gemini API 키를 설정하면 실제 답변을 받을 수 있어요.",
          },
        ]);
        setIsLoading(false);
      }, 500);
      return;
    }

    try {
      const systemPrompt = `당신은 고1 학생들을 위한 따뜻하고 전문적인 진로 상담 선생님입니다. 현재 학생은 '${
        isCS ? "컴퓨터공학과" : "의예과"
      }'에 관심이 있습니다. 친절하게 존댓말로, 핵심만 간결하게 답변해주세요.`;
      const fullPrompt = `${systemPrompt}\n\n학생 질문: ${input}`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [{ text: fullPrompt }],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Gemini API error:", response.status, data);
        const msg =
          data.error?.message ||
          `요청이 거절되었습니다. (status ${response.status})`;
        setMessages((prev) => [...prev, { role: "model", text: msg }]);
        return;
      }

      const parts = data.candidates?.[0]?.content?.parts || [];
      const aiText =
        parts
          .map((p) => p.text)
          .filter(Boolean)
          .join("\n") || "죄송해요, 답변을 가져오지 못했어요.";

      setMessages((prev) => [...prev, { role: "model", text: aiText }]);
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "네트워크 오류가 발생했습니다." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* 플로팅 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 ${themeClass} ${
          isOpen ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100"
        }`}
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* 채팅 창 */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[90vw] max-w-[360px] h-[500px] max-h-[80vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right border border-gray-100 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-90 opacity-0 pointer-events-none translate-y-10"
        }`}
      >
        {/* Header */}
        <div
          className={`p-5 ${themeClass} flex justify-between items-center bg-opacity-95 backdrop-blur-sm`}
        >
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-md">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-base tracking-tight">
                AI 진로 멘토
              </h3>
              <p className="text-xs text-white/80 font-medium">
                무엇이든 물어보세요
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  msg.role === "user"
                    ? `${bubbleUser} rounded-2xl rounded-tr-none`
                    : "bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-tl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                <Loader
                  className={`w-4 h-4 ${
                    isCS ? "text-blue-500" : "text-emerald-500"
                  }`}
                />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 focus-within:ring-2 focus-within:ring-offset-1 ring-gray-200 transition-all">
            <input
              className="flex-1 bg-transparent border-none outline-none text-sm placeholder-gray-400 text-gray-800"
              placeholder="궁금한 점 입력..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSend()
              }
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={`p-2 rounded-full transition-all ${
                input.trim()
                  ? `${themeClass} ${buttonHover}`
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// 2. 카드 컴포넌트
function InfoCard({ title, badge, items, color, icon }) {
  const isBlue = color === "cs";

  const badgeBg = isBlue
    ? "bg-blue-50 text-blue-600"
    : "bg-emerald-50 text-emerald-600";
  const iconBg = isBlue
    ? "bg-blue-100 text-blue-600"
    : "bg-emerald-100 text-emerald-600";
  const borderColor = isBlue
    ? "group-hover:border-blue-200"
    : "group-hover:border-emerald-200";

  return (
    <div
      className={`group bg-white p-6 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border border-transparent ${borderColor} transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="flex justify-between items-start mb-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${badgeBg}`}
        >
          {badge}
        </span>
        <div
          className={`p-2.5 rounded-2xl ${iconBg} transition-transform duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2 text-sm text-gray-600 leading-snug"
          >
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                isBlue ? "bg-blue-400" : "bg-emerald-400"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 3. 메인 앱
export default function App() {
  const [selectedMajor, setSelectedMajor] = useState("cs");
  const [activeTab, setActiveTab] = useState("info");

  const isCS = selectedMajor === "cs";
  const themeGradient = isCS
    ? "from-blue-50 via-indigo-50 to-white"
    : "from-emerald-50 via-teal-50 to-white";
  const accentText = isCS ? "text-blue-600" : "text-emerald-600";
  const accentBg = isCS ? "bg-blue-600" : "bg-emerald-600";
  const accentLight = isCS ? "bg-blue-50" : "bg-emerald-50";

  const infoCardsData = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "어떤 학과인가요?",
      badge: "개요",
      items: isCS
        ? [
            "컴퓨터 구조, OS, 알고리즘 심화 학습",
            "소프트웨어 아키텍처 설계 능력 배양",
          ]
        : [
            "인체의 구조와 기능, 질병 기전 학습",
            "의사로서의 윤리와 책임감 함양",
          ],
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "입시 난이도",
      badge: "분석",
      items: isCS
        ? ["최상위권 공대, 경쟁률 지속 상승 중", "수학/과학 및 정보 역량 중요"]
        : ["이과 최상위권의 집결지", "내신 1.0대 초반 + 수능 최저 필수"],
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "진로 및 미래",
      badge: "전망",
      items: isCS
        ? ["AI, 빅데이터 등 신기술 분야 확장", "실력 중심의 높은 보상 체계"]
        : ["안정적이고 존경받는 전문직", "고령화로 인한 의료 수요 지속 증가"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "고1 핵심 전략",
      badge: "가이드",
      items: isCS
        ? ["수학 기초 체력 다지기", "코딩 경험으로 흥미와 적성 증명"]
        : ["전 과목 내신 퍼펙트 관리", "생기부에 '생명존중' 녹여내기"],
    },
  ];

  return (
    <div
      className={`min-h-screen font-sans text-slate-800 bg-gradient-to-br ${themeGradient} transition-colors duration-700`}
    >
      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/70 border-b border-white/50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2.5">
          <div
            className={`p-2 rounded-xl text-white shadow-lg transition-colors duration-500 ${accentBg}`}
          >
            <GraduationCap className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight text-slate-800">
            진로 가이드{" "}
            <span className="text-slate-400 text-sm font-normal ml-1">
              2025 Ver.
            </span>
          </span>
        </div>
        <div className="hidden sm:flex gap-6 text-sm font-medium text-slate-500">
          <a href="#" className="hover:text-slate-800 transition-colors">
            홈
          </a>
          <a href="#" className="hover:text-slate-800 transition-colors">
            전공비교
          </a>
          <a href="#" className="hover:text-slate-800 transition-colors">
            상세정보
          </a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 pb-32">
        {/* Hero Section */}
        <section className="text-center mb-16 relative">
          <div
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] opacity-20 blur-[100px] rounded-full transition-colors duration-700 pointer-events-none ${
              isCS ? "bg-blue-400" : "bg-emerald-400"
            }`}
          />

          <h1 className="relative text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            나의 미래는 <br className="md:hidden" />
            <span className={`transition-colors duration-500 ${accentText}`}>
              {isCS ? "디지털 혁신가" : "생명을 살리는 의사"}
            </span>
          </h1>
          <p className="relative text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            2028 대입 개편안 세대를 위한 맞춤형 가이드.
            <br />
            <span className="font-semibold text-slate-700">컴퓨터공학과</span>와{" "}
            <span className="font-semibold text-slate-700">의예과</span>, 당신의
            선택을 도와드립니다.
          </p>
        </section>

        {/* Major Toggle */}
        <div className="flex justify-center mb-16 relative z-10">
          <div className="bg-white p-2 rounded-[2rem] shadow-xl shadow-slate-200/50 flex gap-2 w-full max-w-md border border-slate-100">
            <button
              onClick={() => setSelectedMajor("cs")}
              className={`flex-1 py-4 px-6 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all duration-300 ${
                isCS
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Monitor className="w-5 h-5" />
              <span className="font-bold">컴퓨터공학</span>
            </button>
            <button
              onClick={() => setSelectedMajor("med")}
              className={`flex-1 py-4 px-6 rounded-[1.5rem] flex items-center justify-center gap-3 transition-all duration-300 ${
                !isCS
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200 scale-105"
                  : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Stethoscope className="w-5 h-5" />
              <span className="font-bold">의예과</span>
            </button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {infoCardsData.map((data, idx) => (
            <InfoCard key={idx} {...data} color={selectedMajor} />
          ))}
        </div>

        {/* Detail Tabs */}
        <section className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-2xl shadow-slate-200/50 p-6 md:p-10 transition-all duration-500">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                상세 가이드북
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                각 탭을 클릭하여 상세 정보를 확인하세요.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 bg-slate-100/80 p-1.5 rounded-full">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-slate-800 shadow-md"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="animate-fadeIn">
            <div
              className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 transition-colors duration-300 ${accentLight} ${accentText}`}
            >
              # {TABS.find((t) => t.id === activeTab)?.label}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-slate-800">
              {CONTENT[selectedMajor][activeTab].title}
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl">
              {CONTENT[selectedMajor][activeTab].desc}
            </p>

            <div className="grid gap-4">
              {CONTENT[selectedMajor][activeTab].items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm transition-transform hover:scale-[1.01]"
                >
                  <div
                    className={`p-2 rounded-full ${accentLight} ${accentText}`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-700 text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-10 text-center">
        <p className="text-slate-500 text-sm">
          © 2025 Career Guide. Designed for students by AI.
        </p>
      </footer>

      <ChatWidget selectedMajor={selectedMajor} />
    </div>
  );
}
