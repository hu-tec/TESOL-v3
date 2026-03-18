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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

const notices = [
  { id: 1, title: "2026년 3월 서울 TESOL 과정 개강 안내", date: "2026.02.15", category: "공지", mainType: "tesol", subType: "class" },
  { id: 2, title: "AI 번역 교정 전문가 과정 신규 오픈", date: "2026.02.10", category: "이벤트", mainType: "tesol", subType: "ai-trans" },
  { id: 3, title: "타임스미디어 교육센터 설 연휴 휴무 안내", date: "2026.01.25", category: "공지", mainType: "common" },
  { id: 4, title: "홈페이지 리뉴얼 기념 수강료 할인 이벤트", date: "2026.01.20", category: "이벤트", mainType: "orientation", subType: "tuition" },
  { id: 5, title: "AI 프롬프트 과정 주말반 모집중", date: "2026.01.15", category: "공지", mainType: "tesol", subType: "prompt" },
];

const faqs = [
  { 
    id: 1,
    mainType: "common",
    category: "수강신청",
    question: "비전공자도 TESOL 과정을 수강할 수 있나요?", 
    answer: "네, 전공에 상관없이 영어 교육에 열정이 있는 분이라면 누구나 수강 가능합니다. 레벨테스트를 통해 적합한 반을 추천해 드립니다." 
  },
  { 
    id: 2,
    mainType: "tesol",
    subType: "itt",
    category: "자격증",
    question: "수료 후 발급되는 자격증은 공신력이 있나요?", 
    answer: "타임스미디어에서 발급하는 TESOL 및 ITT 자격증은 국내외 교육기관 및 기업에서 널리 인정받는 공신력 있는 민간 자격증입니다." 
  },
  { 
    id: 3,
    mainType: "kids-tesol",
    category: "어린이테솔",
    question: "어린이 테솔 과정의 특징은 무엇인가요?", 
    answer: "어린이들의 발달 단계에 맞춘 놀이 중심의 영어 교육법과 교실 관리 전략을 배웁니다. 실제 유치원 및 초등 방과후 교실에서 바로 활용 가능한 실습 중심 과정입니다." 
  }
];

const qnas = [
  { id: 1, title: "어린이 테솔 주말반 개설 계획이 있나요?", name: "김*철", date: "2026.03.05", status: "답변완료", mainType: "kids-tesol" },
  { id: 2, title: "테솔 대비반 수강 후 정규 과정 할인 혜택이 있나요?", name: "박*연", date: "2026.03.04", status: "답변대기", mainType: "tesol-prep" },
  { id: 3, title: "AI 프롬프트 과정 수강료 할인이 가능한가요?", name: "최*호", date: "2026.03.02", status: "답변완료", mainType: "tesol", subType: "prompt" },
];

const reviews = [
  {
    id: 1,
    name: "김*아",
    course: "TESOL 8주 완성반",
    mainType: "tesol",
    rating: 5,
    content: "8주라는 짧은 시간 동안 영어로 수업을 구성하고 진행하는 능력이 몰라보게 향상되었습니다. 강사님의 열정적인 피드백이 큰 도움이 되었습니다.",
    date: "2026.01.20"
  },
  {
    id: 2,
    name: "이*준",
    course: "AI 프롬프트 실무 전문가",
    mainType: "tesol",
    subType: "prompt",
    rating: 5,
    content: "막연했던 AI 활용법이 업무에 즉각 적용 가능한 무기가 되었습니다. 특히 업무 자동화 워크플로우를 직접 짜보는 실습이 백미였습니다.",
    date: "2026.01.15"
  }
];

export function CommunityPage() {
  const [search, setSearch] = useState("");
  const [mainFilter, setMainFilter] = useState("all");
  const [subFilter, setSubFilter] = useState("all");

  const handleMainFilterChange = (id: string) => {
    setMainFilter(id);
    setSubFilter("all");
  };

  const showSubMenu = useMemo(() => {
    return mainFilter !== "all";
  }, [mainFilter]);

  const subMenuItems = useMemo(() => {
    return [
      { id: "all", label: "전체보기" },
      { id: "orientation", label: "설명회" },
      { id: "job", label: "취업" },
      { id: "level", label: "레벨테스트" },
      { id: "teacher", label: "강사관련" },
      { id: "class", label: "수업관련" },
      { id: "tuition", label: "수업료" },
    ];
  }, []);

  const filterItems = (items: any[]) => {
    return items.filter(item => {
      const matchSearch = item.title ? item.title.toLowerCase().includes(search.toLowerCase()) : true;
      const matchMain = mainFilter === "all" || item.mainType === mainFilter;
      const matchSub = subFilter === "all" || item.subType === subFilter;
      return matchSearch && matchMain && matchSub;
    });
  };

  const FilterBar = () => (
    <div className="mb-10 space-y-4">
      {/* 1단계 (Major Category Area) */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-100 overflow-x-auto scrollbar-hide">
        {[
          { id: "all", label: "전체보기" },
          { id: "tesol", label: "TESOL" },
          { id: "itt", label: "정통통역번역교육" },
          { id: "prompt", label: "프롬프트 교육" },
          { id: "ethics", label: "윤리 교육" },
          { id: "ai-trans", label: "AI번역 교육" },
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => handleMainFilterChange(btn.id)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all whitespace-nowrap ${
              mainFilter === btn.id
                ? "bg-[#8B1A2B] text-white shadow-md" 
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      
      {/* 2단계 (Minor Category Area) - Dynamic */}
      {showSubMenu && (
        <motion.div 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2 pt-1 overflow-x-auto scrollbar-hide"
        >
          <div className="text-[12px] font-bold text-gray-300 mr-2 uppercase tracking-wider shrink-0">Sub Category</div>
          {subMenuItems.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setSubFilter(btn.id)}
              className={`px-4 py-2 rounded-lg text-[13px] font-bold transition-all whitespace-nowrap ${
                subFilter === btn.id 
                  ? "bg-[#1a1a2e] text-white shadow-md" 
                  : "bg-white border border-gray-200 text-gray-400 hover:border-[#8B1A2B] hover:text-[#8B1A2B]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-[32px] lg:text-[40px] font-extrabold text-[#1a1a2e] mb-4">커뮤니티</h1>
        <p className="text-gray-500">타임스미디어의 최신 소식과 다양한 수강생 이야기를 만나보세요.</p>
      </div>

      <Tabs defaultValue="notice" className="w-full" onValueChange={() => setSearch("")}>
        <TabsList className="w-full justify-start border-b border-gray-100 bg-transparent rounded-none p-0 mb-8 h-auto gap-8 overflow-x-auto scrollbar-hide">
          <TabsTrigger 
            value="notice" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400 shrink-0"
          >
            공지사항
          </TabsTrigger>
          <TabsTrigger 
            value="faq" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400 shrink-0"
          >
            자주 묻는 질문 (FAQ)
          </TabsTrigger>
          <TabsTrigger 
            value="qna" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400 shrink-0"
          >
            Q&A
          </TabsTrigger>
          <TabsTrigger 
            value="review" 
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#8B1A2B] data-[state=active]:bg-transparent data-[state=active]:text-[#8B1A2B] px-0 py-4 font-bold text-[16px] text-gray-400 shrink-0"
          >
            졸업생 후기
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notice" className="mt-0">
          <FilterBar />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <h3 className="text-[18px] font-bold text-[#1a1a2e]">최신 공지사항</h3>
            <div className="relative w-full md:w-64">
              <Input 
                placeholder="공지사항 검색" 
                className="pl-9 bg-gray-50 border-gray-100 rounded-full h-10 text-[13px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div className="bg-white border-y border-gray-100">
            {filterItems(notices).map((n) => (
              <div key={n.id} className="group flex items-center justify-between py-5 px-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-md font-bold text-[10px] px-2 py-0.5 border-none bg-blue-50 text-blue-600">
                      {n.mainType === 'common' ? '공통' : '과목별'}
                    </Badge>
                  </div>
                  <span className="text-[15px] text-gray-800 group-hover:text-[#8B1A2B] transition-colors">{n.title}</span>
                </div>
                <span className="text-[13px] text-gray-400">{n.date}</span>
              </div>
            ))}
            {filterItems(notices).length === 0 && (
              <div className="py-20 text-center text-gray-400">검색 결과가 없습니다.</div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="faq" className="mt-0">
          <FilterBar />
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filterItems(faqs).map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-4 bg-white overflow-hidden border-gray-100 shadow-sm">
                  <AccordionTrigger className="hover:no-underline py-5 text-left gap-4">
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="rounded-md font-bold text-[10px] px-2 py-0.5 border-none bg-blue-50 text-blue-600">
                          {faq.mainType === 'common' ? '공통' : '과목별'}
                        </Badge>
                        <span className="text-[12px] text-gray-400 font-medium">[{faq.category}]</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[#8B1A2B] font-bold text-[18px]">Q.</span>
                        <span className="text-[15px] font-bold text-[#1a1a2e]">{faq.question}</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] text-gray-600 leading-relaxed pb-6 pt-2 pl-10">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
              {filterItems(faqs).length === 0 && (
                <div className="py-20 text-center text-gray-400">등록된 질문이 없습니다.</div>
              )}
            </Accordion>
          </div>
        </TabsContent>

        <TabsContent value="qna" className="mt-0">
          <FilterBar />
          <div className="bg-white border-y border-gray-100 mb-10">
            {filterItems(qnas).map((q) => (
              <div key={q.id} className="group flex items-center justify-between py-5 px-4 border-b border-gray-50 hover:bg-gray-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="rounded-md font-bold text-[10px] px-2 py-0.5 border-none bg-blue-50 text-blue-600">
                      {q.mainType === 'common' ? '공통' : '과목별'}
                    </Badge>
                    <Badge variant="outline" className={`rounded-md font-medium text-[11px] ${q.status === '답변완료' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-gray-100 text-gray-500 border-gray-100'}`}>
                      {q.status}
                    </Badge>
                  </div>
                  <span className="text-[15px] text-gray-800 group-hover:text-[#8B1A2B] transition-colors">{q.title}</span>
                </div>
                <div className="flex items-center gap-4 text-[13px] text-gray-400">
                  <span>{q.name}</span>
                  <span>{q.date}</span>
                </div>
              </div>
            ))}
            {filterItems(qnas).length === 0 && (
              <div className="py-20 text-center text-gray-400">문의 내역이 없습니다.</div>
            )}
          </div>
          <div className="max-w-2xl mx-auto py-8 text-center bg-[#faf8f6] rounded-2xl border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-[#8B1A2B]" />
            </div>
            <h3 className="text-[20px] font-bold text-[#1a1a2e] mb-2">무엇이든 물어보세요</h3>
            <p className="text-gray-500 mb-8">궁금하신 점을 남겨주시면 담당자가 답변을 드립니다.</p>
            <Button 
              onClick={() => window.location.href = "/contact"}
              className="bg-[#8B1A2B] hover:bg-[#6d1422] text-white px-8 h-12 rounded-lg"
            >
              1:1 문의 작성하기
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="review" className="mt-0">
          <FilterBar />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterItems(reviews).map((r) => (
              <motion.div 
                key={r.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col gap-2">
                    <Badge variant="outline" className="w-fit rounded-md font-bold text-[9px] px-1.5 py-0.5 border-none bg-orange-50 text-orange-600">
                      수강후기
                    </Badge>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3.5 h-3.5 ${i < r.rating ? "text-orange-400 fill-orange-400" : "text-gray-200"}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-[12px] text-gray-400">{r.date}</span>
                </div>
                <div className="relative mb-4">
                  <Quote className="w-8 h-8 text-gray-50 absolute -top-4 -left-2 -z-0" />
                  <p className="text-[14px] text-gray-700 leading-relaxed relative z-10">
                    {r.content}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-[13px] font-bold text-[#1a1a2e]">{r.name}</p>
                    <p className="text-[11px] text-[#8B1A2B] font-medium">{r.course}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            {filterItems(reviews).length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400">등록된 후기가 없습니다.</div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
