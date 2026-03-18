import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Zap,
  Award,
  Target,
  Sparkles,
  Command,
  GraduationCap,
  CheckCircle,
  Cpu,
  BookOpen,
  Layout,
  Briefcase,
  Search,
  Code
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

const heroImg = "https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYSUyMGNvbXB1dGluZyUyMG1haW5mcmFtZXxlbnwxfHx8fDE3NzE3OTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  { 
    icon: Sparkles, 
    title: "PROMPT DESIGN", 
    subtitle: "그리디안 프롬프트 설계", 
    desc: "AI의 답변 품질을 결정하는 정교한 프롬프트 구성 능력을 배우고, 상황별 최적의 명령어를 설계합니다." 
  },
  { 
    icon: Command, 
    title: "TOOL MASTERY", 
    subtitle: "다양한 생성형 AI 마스터", 
    desc: "ChatGPT, Claude, Midjourney 등 텍스트부터 이미지까지 다양한 AI 툴을 실무에 즉시 적용하는 법을 익힙니다." 
  },
  { 
    icon: Zap, 
    title: "PRODUCTIVITY", 
    subtitle: "업무 효율 10배 향상", 
    desc: "기획서 작성, 데이터 분석, 마케팅 문구 생성 등 단순 반복 업무를 자동화하고 고부가가치 업무에 집중합니다." 
  },
  { 
    icon: GraduationCap, 
    title: "FUTURE SKILL", 
    subtitle: "미래 직무 핵심 역량", 
    desc: "모든 산업군에서 요구하는 AI 리터러시를 갖추고 프롬프트 엔지니어 및 AI 활용 전문가로 거듭납니다." 
  }
];

const grades = [
  {
    title: "교육급수 (1~8급)",
    icon: GraduationCap,
    target: "초·중·고, 일반 학습자",
    goal: "기초 문서·창의 활용 능력 습득",
    core: "문서 만들기(과제, 리포트, 안내문)\n창의적 업무(스토리, 웹툰, 에세이)",
    project: "나만의 학습노트 만들기",
    achievement: "AI 기초 활용 인증 (교육급수 시험 대비)",
    extended: "문서 만들기, 창의력 업무"
  },
  {
    title: "비즈니스 급수 (1~3급)",
    icon: Briefcase,
    target: "대학생, 직장인",
    goal: "업무 자동화·기획·보고서 작성 역량 강화",
    core: "비즈니스 문서(보고서, 계약서, 이메일)\n마케팅·광고 콘텐츠(카피, 제안서)",
    project: "기업 보고서·마케팅 기획서 제작",
    achievement: "실무 적용 중심 역량 인증 (비즈니스급수 시험 대비)",
    extended: "문서·창의력 + 영상, 이미지, 리서치"
  },
  {
    title: "전문급수 (1~2급)",
    icon: Search,
    target: "전문가, 강사, 연구자",
    goal: "고급 문서·창의 콘텐츠 설계 및 멀티도구 연계",
    core: "고급 문서(정책 보고서, 연구자료)\n전문 창의 콘텐츠(출판, 교육자료)",
    project: "연구·정책 제안서, 고급 사례 프로젝트",
    achievement: "고급 설계 능력 인증 (전문급수 시험 대비)",
    extended: "멀티모달 + 코딩, 음악, 프로그램 고도화"
  }
];

const curriculumData = {
  education: [
    { week: "1주차", content: "프롬프트 개론: AI와 대화하는 기초" },
    { week: "2주차", content: "문서 만들기: 과제·리포트·안내문" },
    { week: "3주차", content: "문서 만들기: 콘텐츠·관광·문화 분야" },
    { week: "4주차", content: "창의적 업무: 스토리·웹툰·에세이" },
    { week: "5주차", content: "문서·창의 융합 실습" },
    { week: "6주차", content: "AI 윤리·안전 기초 학습" },
    { week: "7주차", content: "프로젝트: 나만의 AI 학습 노트" },
    { week: "8주차", content: "최종 시연·피드백 & 교육급수 시험대비" },
  ],
  business: [
    { week: "1주차", content: "실무형 프롬프트 개론 (보고서·기획서 중심)" },
    { week: "2주차", content: "기업 문서: 보고서·계약서·이메일" },
    { week: "3주차", content: "비즈니스 제안서·회의 자료" },
    { week: "4주차", content: "마케팅 카피·광고 콘텐츠" },
    { week: "5주차", content: "보고서·마케팅 프로젝트 실습" },
    { week: "6주차", content: "실무 윤리 사례 데이터 보안" },
    { week: "7주차", content: "팀 프로젝트 기업 기획서 제작" },
    { week: "8주차", content: "프레젠테이션 & 비즈니스급수 시험 대비" },
  ],
  professional: [
    { week: "1주차", content: "고급 프롬프트 전략 멀티턴 설계" },
    { week: "2주차", content: "고급문서 정책 보고서·연구자료" },
    { week: "3주차", content: "산업별 전문 문서 (법률·교육·IT 사례)" },
    { week: "4주차", content: "전문 창의 콘텐츠 출판·교육 자료" },
    { week: "5주차", content: "고급 프로젝트 설계 다문서 결합" },
    { week: "6주차", content: "산업별 윤리 적용 법률·의료·금융" },
    { week: "7주차", content: "팀 프로젝트 산업별 문제 해결" },
    { week: "8주차", content: "최종 프레젠테이션 & 전문급수 시험 대비" },
  ],
};

const highlights = [
  { icon: Cpu, label: "최신 기술", desc: "매일 업데이트되는 AI 트렌드 반영" },
  { icon: Target, label: "실습 위주", desc: "이론보다 강력한 100% 실습 수업" },
  { icon: Zap, label: "즉각 활용", desc: "배운 즉시 내 업무에 바로 적용" },
  { icon: Award, label: "수료증 발급", desc: "AI 활용 능력을 증명하는 수료증" },
];

export function AiPromptPage() {
  const [activeTab, setActiveTab] = useState<"education" | "business" | "professional">("education");

  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />

      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="AI Prompt" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl border-l-4 border-[#8B1A2B]">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                Generative AI Prompt Engineering
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                명령 한 줄로<br />
                세상을 바꾸는 기술
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  생성형 AI 실무 마스터 8주
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  프롬프트 엔지니어 양성
                </span>
              </div>
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B1A2B] text-white text-[14px] hover:bg-[#6d1422] transition-colors"
                style={{ fontWeight: 600 }}
              >
                수강 신청하기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          <div className="mt-12 hidden md:block">
            <CourseMenuBar />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-5 block" style={{ fontWeight: 600 }}>
                Mastering AI Interaction
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                프롬프트 교육이란?
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                AI와 대화하는 능력은 이제 선택이 아닌 생존의 필수 역량이 되었습니다. 
                똑같은 AI를 사용하더라도 어떤 질문을 던지느냐에 따라 결과물의 수준은 천차만별입니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 AI 프롬프트 과정은 단순히 AI 사용법을 넘어, AI의 논리 구조를 이해고 
                내가 원하는 최고의 답을 끌어내는 '설계 능력'을 가르칩니다. 당신의 비즈니스와 일상을 AI로 혁신하세요.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  질문의 차이가 결과의 차이를 만듭니다.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-start"
                  >
                    <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#8B1A2B]" />
                    </div>
                    <h4 className="text-[14px] text-[#1a1a2e] mb-1.5" style={{ fontWeight: 700 }}>{h.label}</h4>
                    <p className="text-[12px] text-gray-500 leading-relaxed">{h.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CoreDesign courseName="AI 프롬프트" />

      {/* Grade Config */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-8 bg-[#8B1A2B]" />
            <h3 className="text-[24px] lg:text-[28px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
              AI 프롬프트 교육과정 - 급수별 구성
            </h3>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {grades.map((grade, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                  <grade.icon className="w-7 h-7 text-[#8B1A2B]" />
                </div>
                <h4 className="text-[20px] text-[#1a1a2e] font-black mb-6 border-b border-gray-100 pb-4">
                  {grade.title}
                </h4>
                <div className="space-y-6">
                  <div>
                    <span className="text-[#8B1A2B] text-[11px] font-black uppercase tracking-wider block mb-1">Target</span>
                    <p className="text-[#1a1a2e] text-[14px] font-bold">{grade.target}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] font-black uppercase tracking-wider block mb-1">Goal</span>
                    <p className="text-gray-600 text-[13px] leading-relaxed">{grade.goal}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-[11px] font-black uppercase tracking-wider block mb-1">Core Area</span>
                    <p className="text-gray-600 text-[13px] leading-relaxed whitespace-pre-line">{grade.core}</p>
                  </div>
                  <div className="pt-4 border-t border-dashed border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Layout className="w-4 h-4 text-[#8B1A2B]" />
                      <span className="text-[13px] font-black text-[#1a1a2e]">Project</span>
                    </div>
                    <p className="text-gray-500 text-[13px]">{grade.project}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-[#8B1A2B]" />
                      <span className="text-[13px] font-black text-[#1a1a2e]">Achievement</span>
                    </div>
                    <p className="text-gray-500 text-[13px]">{grade.achievement}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              8 Weeks Journey
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-[#1a1a2e] mb-4" style={{ fontWeight: 800 }}>
              AI 프롬프트 교육과정 (1단계 중심 운영)
            </h2>
            <p className="text-gray-500 text-[15px] font-medium">8주간 진행되는 단계별 전문 커리큘럼</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {(Object.keys(curriculumData) as Array<keyof typeof curriculumData>).map((type, typeIdx) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: typeIdx * 0.1 }}
                className="bg-[#fafafa] border border-gray-100 rounded-3xl overflow-hidden shadow-sm flex flex-col"
              >
                <div className="bg-[#1a1a2e] p-6 text-center">
                  <h4 className="text-white text-[18px] font-black tracking-tight">
                    {type === "education" ? "교육급수 (1~8급)" : type === "business" ? "비즈니스급수 (1~3급)" : "전문급수 (1~2급)"}
                  </h4>
                </div>
                <div className="p-4 space-y-2">
                  {curriculumData[type].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white p-4 border border-gray-100 flex items-center gap-4 group hover:border-[#8B1A2B] transition-colors"
                    >
                      <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-[#8B1A2B] text-[12px] font-black">W{i + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] text-[#8B1A2B] font-bold mb-0.5">{item.week}</div>
                        <p className="text-gray-600 text-[13px] font-bold leading-tight tracking-tight">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info (2nd/3rd phase) */}
          <div className="mt-24 space-y-16 border-t border-gray-100 pt-20">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-[22px] lg:text-[26px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
                    2단계 (멀티모달 번역 확장)
                  </h3>
                </div>
                <ul className="space-y-4 text-gray-600 pl-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <p className="text-[15px] font-medium leading-relaxed">
                      <strong>영상 만들기 :</strong> 홍보 영상 시나리오 작성 및 제작
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <p className="text-[15px] font-medium leading-relaxed">
                      <strong>이미지 만들기 :</strong> 제품 홍보·SNS 콘텐츠 제작
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <p className="text-[15px] font-medium leading-relaxed">
                      <strong>리서치 & 분석 :</strong> 데이터 탐색·비교·표·통계 활용
                    </p>
                  </li>
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center">
                    <Code className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-[22px] lg:text-[26px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
                    3단계 (고도화 과정)
                  </h3>
                </div>
                <ul className="space-y-4 text-gray-600 pl-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p className="text-[15px] font-medium leading-relaxed">
                      <strong>코딩 :</strong> 간단한 코드·자동화 지시문 설계
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p className="text-[15px] font-medium leading-relaxed">
                      <strong>음악 만들기 :</strong> AI 음악·사운드 트랙 기획
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <p className="text-[15px] font-medium leading-relaxed">
                      <strong>산업별 고급 프로젝트 :</strong> 의료·금융·교육·IT 특화 프롬프트 실습
                    </p>
                  </li>
                </ul>
              </motion.div>
            </div>
            
            <p className="text-gray-400 text-[13px] text-center font-bold">
              * 세부 교육 영역 및 영역별 교육 오픈 일정은 추후 공지됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              AI 프롬프트 교육의 강점
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {strengths.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#1f1f3a] p-10 border border-white/5 hover:border-[#8B1A2B]/50 transition-all group"
                >
                  <div className="w-14 h-14 bg-[#8B1A2B] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white text-[16px] mb-1 font-black tracking-tight">{s.title}</h3>
                  <p className="text-[#e8a0a0] text-[13px] mb-4 font-bold">{s.subtitle}</p>
                  <p className="text-white/40 text-[14px] leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#8B1A2B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-[26px] lg:text-[32px] mb-3" style={{ fontWeight: 800 }}>
            당신의 창의력을 AI로 완성하세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            프롬프트 엔지니어링으로 앞서가는 미래 전문가가 되세요
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admission"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8B1A2B] text-[16px] hover:bg-gray-100 transition"
              style={{ fontWeight: 700 }}
            >
              수강 신청하기 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
