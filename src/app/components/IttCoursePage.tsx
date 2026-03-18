import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Users,
  CheckCircle,
  Briefcase,
  Target,
  FileText,
  Languages,
  Search,
  MonitorPlay,
  MessageSquareQuote,
  FileSearch,
  Check
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

const heroImg = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFuc2xhdGlvbiUyMGJvb2tzfGVufDB8fHx8MTc3MTc5MDQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  { 
    icon: Languages, 
    title: "PROFESSIONAL ITT", 
    subtitle: "정통 통번역 수업 환경", 
    desc: "ITT(Interpretation and Translation Test) 전문 자격증 취득을 위한 최적화된 교육 환경과 전문 커리큘럼을 제공합니다." 
  },
  { 
    icon: FileText, 
    title: "DOCUMENT MASTERY", 
    subtitle: "실무 문서 번역 전문가 양성", 
    desc: "비즈니스 서신, 계약서, 공문서 등 현업에서 즉각적으로 활용 가능한 다양한 실무 문서 번역 기술을 연마합니다." 
  },
  { 
    icon: Users, 
    title: "INTERPRETATION", 
    subtitle: "현장 통역 실무 훈련", 
    desc: "세미나, 비즈니스 미팅 등 다양한 통역 현장에서 유연하게 대처할 수 있는 순차 통역 역량을 강화합니다." 
  },
  { 
    icon: Search, 
    title: "DETAIL-ORIENTED", 
    subtitle: "철저한 피드백과 교정", 
    desc: "전문 통번역사의 1:1 맞춤형 피드백을 통해 번역의 정확도와 표현의 적절성을 정밀하게 교정합니다." 
  }
];

const highlights = [
  { icon: ShieldCheck, label: "공신력 확보", desc: "국가공인 ITT 자격증 취득 대비" },
  { icon: Award, label: "ITT 자격", desc: "통번역 능력을 입증하는 공식 자격" },
  { icon: Briefcase, label: "직무 역량", desc: "실무에 바로 쓰이는 전문 기술" },
  { icon: Target, label: "실전 중심", desc: "이론보다 강력한 현장 밀착형 수업" },
];

const curriculumConfig = [
  {
    module: "Module 1",
    professional: {
      title: "인문사회",
      desc: "정치, 사회, 문화, 법률 등",
      sub: "중급, 패러그래프 통번역연습 / 피드백, 첨삭지도",
      tag: "ITT 전문시험"
    },
    business: {
      title: "Management",
      desc: "인사, 회계, 세무, 프로젝트, 글로벌 무역",
      sub: "단문, 중급, 패러그래프 통번역연습 / 피드백, 첨삭지도",
      tag: "ITT 비즈니스시험"
    },
    basic: {
      title: "Business Conversation",
      desc: "호텔, 관광영어 / 한국, 관광영어 / 레스토랑영어 / 쇼핑, 엔터테인먼트영어 / 병원영어",
      sub: "",
      tag: "ITT 비즈니스3급시험"
    }
  },
  {
    module: "Module 2",
    professional: {
      title: "경제경영",
      desc: "비즈니스, 무역, 금융, 재정, 회계, 통계, 특허 등",
      sub: "중급, 패러그래프 통번역연습 / 피드백, 첨삭지도",
      tag: "ITT 전문시험"
    },
    business: {
      title: "Document",
      desc: "브로슈어, 웹페이지, 이메일, 상세보고서, 회의자료, 프리젠테이션, 규정집 등",
      sub: "단문, 중급, 패러그래프 통번역연습 / 피드백, 첨삭지도",
      tag: "ITT 비즈니스시험"
    },
    basic: {
      title: "Business English",
      desc: "감사, 사과 표현, 차용, 인사관리 / 의견제시, 컴플레인 처리 / 공지, 안내, 정보 전달 / 조건, 정보, 협력 요청 / 비즈니스 이메일 및 서신 / 주문하기, 비즈니스 계약, 협상 / 비즈니스 관계구축 및 고객 서비스 제공 / 출장, 미팅, 프레젠테이션 / 안부, 근황, 축하메시지 전하기",
      sub: "",
      tag: "ITT 비즈니스3급시험"
    }
  },
  {
    module: "Module 3",
    professional: {
      title: "과학기술",
      desc: "공학, IT, Bio, 의약학, 정치, 우주, 물질, 환경, 에너지 등",
      sub: "중급, 패러그래프 통번역연습 / 피드백, 첨삭지도",
      tag: "ITT 전문시험"
    },
    business: {
      title: "Marketing",
      desc: "홍보, 광고, 사업계획서, 제안서, 차트, 웹페이지 등 홍보자료 등",
      sub: "단문, 중급, 패러그래프 통번역연습 / 피드백, 첨삭지도",
      tag: "ITT 비즈니스시험"
    },
    basic: null
  }
];

export function IttCoursePage() {
  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />

      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="ITT Translation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl border-l-4 border-[#8B1A2B]">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                Professional Communication
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                ITT 정통 통번역 과정이란?
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  글로벌 비즈니스의 핵심 역량
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  실전형 전문 통번역사 양성
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
                Mastering Translation
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                ITT 정통 통번역 교육의 가치
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                단순히 언어를 옮기는 것을 넘어, 문화적 맥락과 전문 분야의 지식을 정확하게 전달하는 능력은 
                글로벌 시대 비즈니스의 승패를 결정짓는 핵심 요소입니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 ITT 정통 통번역 과정은 공신력 있는 자격증 취득과 함께, 현장에서 즉시 인정받는 
                실전 역량을 갖춘 진정한 소통 전문가를 길러냅니다.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  정확한 언어의 전달로 비즈니스의 가치를 높이십시오.
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

      <CoreDesign courseName="ITT 정통 통번역" />

      {/* Curriculum Configuration */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[32px] lg:text-[42px] text-[#1a1a2e] mb-4" style={{ fontWeight: 900 }}>교육과정 구성</h2>
            <div className="space-y-2">
              <p className="text-[#1a1a2e] text-[15px] font-bold">
                <span className="text-[#8B1A2B]">ITT 전문 통번역 과정 (전문 1·2급)</span> 경제, 법률, IT, 과학기술 등 고급 전문 분야 번역·통역 → 전문 통번역사 및 외국어 강사 양성
              </p>
              <p className="text-[#1a1a2e] text-[15px] font-bold">
                <span className="text-[#c19a3e]">ITT 비즈니스 통번역 과정 (1~3급)</span> 비즈니스 상담, 계약 관리, 해외 영업 실무 중심 → 글로벌 기업 외국어 전문가 양성
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 overflow-x-auto">
            <div className="min-w-[1000px]">
              {/* Header */}
              <div className="grid grid-cols-[100px_1fr_1fr_1fr] bg-[#1a1a2e] text-white">
                <div className="p-4 flex items-center justify-center border-r border-white/10 font-bold text-[14px]">구분</div>
                <div className="p-4 flex items-center justify-center border-r border-white/10 font-bold text-[14px]">ITT 전문 통번역 과정</div>
                <div className="p-4 flex items-center justify-center border-r border-white/10 font-bold text-[14px]">ITT 비즈니스 통번역 과정</div>
                <div className="p-4 flex items-center justify-center font-bold text-[14px]">ITT 비즈니스 베이직(3급) 과정</div>
              </div>

              {/* Rows */}
              {curriculumConfig.map((row, idx) => (
                <div key={idx} className="grid grid-cols-[100px_1fr_1fr_1fr] border-b border-gray-100 min-h-[220px]">
                  {/* Module Name */}
                  <div className="p-4 bg-gray-100/50 flex items-center justify-center border-r border-gray-200 font-black text-[#1a1a2e] text-[16px]">
                    {row.module}
                  </div>
                  
                  {/* Professional Column */}
                  <div className="p-8 border-r border-gray-100 flex flex-col justify-center text-center">
                    <h4 className="text-[#c19a3e] text-[18px] font-black mb-3">{row.professional.title}</h4>
                    <p className="text-gray-600 text-[13px] mb-2 font-medium">{row.professional.desc}</p>
                    <p className="text-gray-400 text-[12px] mb-4 leading-relaxed">{row.professional.sub}</p>
                    <div className="mt-auto">
                      <span className="text-[#1a1a2e] text-[12px] font-black">* {row.professional.tag}</span>
                    </div>
                  </div>

                  {/* Business Column */}
                  <div className="p-8 border-r border-gray-100 flex flex-col justify-center text-center">
                    <h4 className="text-[#c19a3e] text-[18px] font-black mb-3">{row.business.title}</h4>
                    <p className="text-gray-600 text-[13px] mb-2 font-medium">{row.business.desc}</p>
                    <p className="text-gray-400 text-[12px] mb-4 leading-relaxed">{row.business.sub}</p>
                    <div className="mt-auto">
                      <span className="text-[#1a1a2e] text-[12px] font-black">* {row.business.tag}</span>
                    </div>
                  </div>

                  {/* Basic Column */}
                  <div className="p-8 flex flex-col justify-center text-center">
                    {row.basic ? (
                      <>
                        <h4 className="text-[#c19a3e] text-[18px] font-black mb-3">{row.basic.title}</h4>
                        <div className="space-y-1 mb-4">
                          {row.basic.desc.split('/').map((item, i) => (
                            <p key={i} className="text-gray-600 text-[13px] font-medium">- {item.trim()}</p>
                          ))}
                        </div>
                        <div className="mt-auto">
                          <span className="text-[#1a1a2e] text-[12px] font-black">* {row.basic.tag}</span>
                        </div>
                      </>
                    ) : (
                      <div className="bg-gray-50/50 h-full rounded-xl" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Method */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[32px] lg:text-[42px] text-[#1a1a2e] mb-16 text-center" style={{ fontWeight: 900 }}>수업 방식</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-10 text-center shadow-sm border border-gray-100 rounded-[30px]"
            >
              <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MonitorPlay className="w-8 h-8 text-[#8B1A2B]" />
              </div>
              <h3 className="text-[20px] font-black text-[#1a1a2e] mb-4">운영형태</h3>
              <p className="text-gray-600 text-[15px] font-bold">ZOOM 실시간 온라인 + 오프라인 병행</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-10 text-center shadow-sm border border-gray-100 rounded-[30px]"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageSquareQuote className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-[20px] font-black text-[#1a1a2e] mb-4">학습지원</h3>
              <p className="text-gray-600 text-[15px] font-bold">1:1 첨삭 및 피드백 지원</p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-10 text-center shadow-sm border border-gray-100 rounded-[30px]"
            >
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSearch className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-[20px] font-black text-[#1a1a2e] mb-4">입학 테스트</h3>
              <p className="text-gray-600 text-[15px] font-bold">스피킹·리딩·라이팅 레벨테스트</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="py-24 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              ITT 교육의 특장점
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
            검증된 통번역 실력으로 앞서가세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            ITT 자격증 취득부터 실전 비즈니스 통번역까지 한 번에
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
