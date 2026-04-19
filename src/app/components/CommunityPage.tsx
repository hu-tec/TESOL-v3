import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  HelpCircle, 
  Star, 
  Search, 
  ChevronRight, 
  MessageSquare,
  User,
  Clock,
  Quote
} from "lucide-react";

const notices = [
  { id: 1, title: "2026년 3월 서울 TESOL 과정 개강 안내", date: "2026.02.15", category: "공지", mainType: "tesol", subType: "class" },
  { id: 2, title: "AI 번역 교정 전문가 과정 신규 오픈", date: "2026.02.10", category: "이벤트", mainType: "tesol", subType: "ai-trans" },
  { id: 3, title: "타임스미디어 교육센터 설 연휴 휴무 안내", date: "2026.01.25", category: "공지", mainType: "common" },
  { id: 4, title: "홈페이지 리뉴얼 기념 수강료 할인 이벤트", date: "2026.01.20", category: "이벤트", mainType: "orientation", subType: "tuition" },
  { id: 5, title: "AI 프롬프트 과정 주말반 모집중", date: "2026.01.15", category: "공지", mainType: "tesol", subType: "prompt" },
];

const faqs = [
  { id: 1, mainType: "tesol", category: "프로그램 정보", question: "TESOL (영어교사 양성과정)이 무엇인가요?", answer: "TESOL(Teaching English to Speakers of Other Languages)은 영어가 모국어가 아닌 사람들에게 영어를 가르치기 위한 국제 공인 영어교수법 과정입니다. 전 세계적으로 인정받는 영어 교사 양성 프로그램입니다." },
  { id: 2, mainType: "kids-tesol", category: "프로그램 정보", question: "TESOL for Children (어린이테솔)은 무엇인가요?", answer: "어린이테솔은 3세부터 12세 미만의 어린이들을 대상으로 영어를 효과적이고 흥미롭게 가르칠 수 있는 교수법을 배우는 특화된 과정입니다." },
  { id: 3, mainType: "tesol", category: "자격증", question: "해외에서도 활용 가능한 Certificate인가요?", answer: "네, 맞습니다. 캘리포니아 주립대 롱비치(CSULB) 명의로 발급되는 Certificate는 미국을 비롯한 전 세계 어느 곳에서나 그 권위와 수준을 인정받고 있습니다." },
  { id: 4, mainType: "tesol", category: "기관 소개", question: "캘리포니아 주립대학교 롱비치는 어떤 대학인가요?", answer: "캘리포니아 주립대학교 롱비치(CSULB)는 캘리포니아 주립대 시스템 중 가장 크고 명성 높은 캠퍼스 중 하나로, 특히 교육학 분야에서 뛰어난 평가를 받고 있는 우수한 주립대학교입니다." },
  { id: 5, mainType: "tesol", category: "수강신청", question: "학사이상만 지원할 수 있나요? 지원자격이 궁금합니다.", answer: "아닙니다. 전문대졸, 재학생, 고졸 등 학력에 제한 없이 지원 가능합니다." },
  { id: 6, mainType: "tesol", category: "수업관련", question: "한국인 강사가 강의하나요?", answer: "TESOL 과정은 다년간의 강의 경력과 테솔/언어학 관련 석사 이상의 학위를 보유한 우수한 원어민 강사진이 100% 영어로 진행합니다." },
  { id: 7, mainType: "common", category: "수업료", question: "비용이 많이 비싸네요?", answer: "미국 현지로 유학 가서 관련 과정을 이수하는 것에 비해 훨씬 경제적입니다." },
  { id: 8, mainType: "tesol", category: "프로그램 정보", question: "국내 대학에도 TESOL프로그램들이 있던데 다른 점이 무엇인가요?", answer: "국내 대학 테솔 과정의 경우 해당 대학 명의의 수료증이 발급되는 반면, 본 과정은 미국 주립대학교 (CSULB) 총장 명의의 Certificate가 직접 발급되어 공신력이 다릅니다." },
];

const qnas = [
  { id: 1, title: "어린이 테솔 주말반 개설 계획이 있나요?", name: "김*철", date: "2026.03.05", status: "답변완료", mainType: "kids-tesol" },
  { id: 2, title: "테솔 대비반 수강 후 정규 과정 할인 혜택이 있나요?", name: "박*연", date: "2026.03.04", status: "답변대기", mainType: "tesol-prep" },
  { id: 3, title: "AI 프롬프트 과정 수강료 할인이 가능한가요?", name: "최*호", date: "2026.03.02", status: "답변완료", mainType: "tesol", subType: "prompt" },
  { id: 4, title: "오프라인 수업 출석 기준이 궁금합니다.", name: "이*진", date: "2026.03.01", status: "답변완료", mainType: "common", subType: "class" },
  { id: 5, title: "레벨테스트 결과는 언제 나오나요?", name: "정*우", date: "2026.02.28", status: "답변대기", mainType: "common", subType: "level" },
  { id: 6, title: "ITT 통번역 자격증 갱신 기간이 어떻게 되나요?", name: "강*희", date: "2026.02.26", status: "답변완료", mainType: "itt" },
  { id: 7, title: "온라인 라이브러리 접속이 안 됩니다.", name: "윤*영", date: "2026.02.25", status: "답변완료", mainType: "common" },
  { id: 8, title: "미국 주립대 테솔 수료증 재발급 가능한가요?", name: "조*민", date: "2026.02.24", status: "답변대기", mainType: "tesol" },
  { id: 9, title: "무료 레벨테스트 예약은 어디서 하나요?", name: "임*준", date: "2026.02.22", status: "답변완료", mainType: "common", subType: "level" },
  { id: 10, title: "주말반 결석 시 보강이 가능한가요?", name: "한*지", date: "2026.02.20", status: "답변완료", mainType: "common", subType: "class" },
  { id: 11, title: "AI번역 교육 과정은 어떤 툴을 사용하나요?", name: "백*현", date: "2026.02.18", status: "답변완료", mainType: "ai-trans" },
  { id: 12, title: "설명회 참석 후 당일 등록 혜택이 있나요?", name: "홍*성", date: "2026.02.15", status: "답변대기", mainType: "common", subType: "orientation" },
  { id: 13, title: "취업 지원 서비스 내용이 궁금합니다.", name: "오*수", date: "2026.02.10", status: "답변완료", mainType: "common", subType: "job" }
];

const reviews = [
  {
    id: 1, name: "김*아", course: "TESOL 8주 완성반", mainType: "tesol", rating: 5,
    content: "8주라는 짧은 시간 동안 영어로 수업을 구성하고 진행하는 능력이 몰라보게 향상되었습니다. 강사님의 열정적인 피드백이 큰 도움이 되었습니다.",
    date: "2026.01.20"
  },
  {
    id: 2, name: "이*준", course: "AI 프롬프트 실무 전문가", mainType: "tesol", subType: "prompt", rating: 5,
    content: "막연했던 AI 활용법이 업무에 즉각 적용 가능한 무기가 되었습니다. 특히 업무 자동화 워크플로우를 직접 짜보는 실습이 백미였습니다.",
    date: "2026.01.15"
  }
];

const tabList = [
  { id: "notice", label: "공지사항" },
  { id: "faq", label: "자주 묻는 질문 (FAQ)" },
  { id: "qna", label: "Q&A" },
  { id: "review", label: "졸업생 후기" },
];

export function CommunityPage() {
  const [activeTab, setActiveTab] = useState("notice");
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filterBySearch = (items: any[]) => {
    if (!search) return items;
    return items.filter((item: any) => {
      const text = item.title || item.question || "";
      return text.toLowerCase().includes(search.toLowerCase());
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="theme-title mb-4">커뮤니티</h1>
            <p className="text-lg opacity-80" style={{maxWidth: '1000px', margin: '0 auto'}}>
              타임스미디어의 최신 소식과 다양한 수강생 이야기를 만나보세요.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-16">
        {/* Tabs */}
        <div className="sub-tabs">
          {tabList.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "active" : ""}
              onClick={() => { setActiveTab(tab.id); setSearch(""); setOpenFaq(null); }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        {(activeTab === "notice" || activeTab === "faq" || activeTab === "qna") && (
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
            <div style={{ position: 'relative', width: '280px' }}>
              <Search style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 16, height: 16, color: 'var(--text-muted)' }} />
              <input
                className="input-field"
                placeholder="검색..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ paddingLeft: '40px', fontSize: '0.9rem' }}
              />
            </div>
          </div>
        )}

        <div className="card animate-fade-in shadow-sm border-none p-10">
          {/* NOTICE TAB */}
          {activeTab === "notice" && (
            <div>
              <h3 className="section-title mb-8">공지사항</h3>
              <div className="list-group">
                {filterBySearch(notices).map((n) => (
                  <div key={n.id} className="list-item flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer hover:text-primary transition-colors">
                    <span className="font-bold text-lg">{n.title}</span>
                    <span className="text-muted text-sm">{n.date}</span>
                  </div>
                ))}
                {filterBySearch(notices).length === 0 && (
                  <div className="center py-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted mb-4" style={{display: 'inline-block'}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <h3 className="text-xl font-bold mb-2">검색 결과가 없습니다.</h3>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* FAQ TAB */}
          {activeTab === "faq" && (
            <div>
              <h3 className="section-title mb-8">자주 묻는 질문</h3>
              <div className="list-group">
                {filterBySearch(faqs).map((faq) => (
                  <div key={faq.id} className="border-b border-gray-200">
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="list-item flex justify-between items-center py-4 w-full text-left hover:text-primary transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="course-badge text-sm">{faq.category}</span>
                        <span className="font-bold text-lg">{faq.question}</span>
                      </div>
                      <ChevronRight style={{
                        width: 18, height: 18, color: 'var(--text-muted)',
                        transform: openFaq === faq.id ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }} />
                    </button>
                    {openFaq === faq.id && (
                      <div className="py-4 text-muted" style={{ paddingLeft: '80px', fontSize: '1.05rem', lineHeight: 1.6 }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
                {filterBySearch(faqs).length === 0 && (
                  <div className="center py-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted mb-4" style={{display: 'inline-block'}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <h3 className="text-xl font-bold mb-2">검색 결과가 없습니다.</h3>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* QNA TAB */}
          {activeTab === "qna" && (
            <div>
              <h3 className="section-title mb-8">Q&A</h3>
              <div className="list-group">
                {filterBySearch(qnas).map((q) => (
                  <div key={q.id} className="list-item flex justify-between items-center py-4 border-b border-gray-200 cursor-pointer hover:text-primary transition-colors">
                    <div className="flex items-center gap-4">
                      <span style={{
                        fontSize: '0.85rem', fontWeight: 600, padding: '4px 10px', borderRadius: '20px',
                        background: q.status === '답변완료' ? '#ecfdf5' : 'var(--bg-secondary)',
                        color: q.status === '답변완료' ? '#059669' : 'var(--text-muted)',
                      }}>
                        {q.status}
                      </span>
                      <span className="font-bold text-lg">{q.title}</span>
                    </div>
                    <div className="flex gap-6 text-muted text-sm">
                      <span>{q.name}</span>
                      <span>{q.date}</span>
                    </div>
                  </div>
                ))}
                {filterBySearch(qnas).length === 0 && (
                  <div className="center py-24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted mb-4" style={{display: 'inline-block'}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <h3 className="text-xl font-bold mb-2">검색 결과가 없습니다.</h3>
                  </div>
                )}
              </div>

              {/* Ask Box */}
              <div className="card mt-12 p-8" style={{ borderStyle: 'dashed', textAlign: 'center' }}>
                <div style={{
                  width: '64px', height: '64px', background: 'rgba(155, 34, 38, 0.08)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px'
                }}>
                  <MessageSquare style={{ width: 32, height: 32, color: 'var(--primary)' }} />
                </div>
                <h3 className="text-xl font-bold mb-2">무엇이든 물어보세요</h3>
                <p className="text-muted mb-8">궁금하신 점을 남겨주시면 담당자가 답변을 드립니다.</p>
                <a href="/contact" className="btn-primary">1:1 문의 작성하기</a>
              </div>
            </div>
          )}

          {/* REVIEW TAB */}
          {activeTab === "review" && (
            <div>
              <h3 className="section-title mb-8">수강후기</h3>
              <div className="grid col-2 gap-8">
                {reviews.map((r) => (
                  <div key={r.id} className="card flex flex-col p-8" style={{ background: '#fafafa' }}>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} style={{
                            width: 16, height: 16,
                            color: i < r.rating ? '#f59e0b' : '#e5e7eb',
                            fill: i < r.rating ? '#f59e0b' : 'none'
                          }} />
                        ))}
                      </div>
                      <span className="text-muted text-sm">{r.date}</span>
                    </div>
                    <p className="text-main leading-relaxed flex-1 mb-6">{r.content}</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                      <div style={{
                        width: '40px', height: '40px', background: 'var(--bg-secondary)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        <User style={{ width: 20, height: 20, color: 'var(--text-muted)' }} />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{r.name}</p>
                        <p className="text-primary text-xs font-bold">{r.course}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {reviews.length === 0 && (
                  <div className="center py-24" style={{ gridColumn: '1/-1' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mx-auto text-muted mb-4" style={{display: 'inline-block'}}><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                    <h3 className="text-xl font-bold mb-2">등록된 후기가 없습니다.</h3>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
