import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Zap,
  Award,
  Target,
  Globe,
  CheckCircle,
  Cpu,
  BookOpen,
  Users
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

const heroImg = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5fGVufDB8fHx8MTc3MTc5MDQ1OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  { 
    icon: Cpu, 
    title: "AI-DRIVEN", 
    subtitle: "지능형 AI 번역 및 전문 툴 활용", 
    desc: "단순 번역을 넘어 DeepL, ChatGPT 등 최신 AI 도구를 활용한 효율적인 번역 알고리즘을 전수합니다." 
  },
  { 
    icon: BookOpen, 
    title: "PROFESSIONAL", 
    subtitle: "실무 중심 교정 전문가 양성", 
    desc: "비즈니스, IT, 의학 등 전문 분야별 전문 용어의 맥락을 읽는 자연스러운 고급 실무를 훈련합니다." 
  },
  { 
    icon: Award, 
    title: "CERTIFIED", 
    subtitle: "ITT 자격증 및 수료 인증", 
    desc: "ITT 국제 통번역 자격증 및 AI 번역 교정 전문가 자격증을 통해 실력을 검증하고 공신력을 확보합니다." 
  },
  { 
    icon: Target, 
    title: "JOB READY", 
    subtitle: "즉각적인 실무 투입 가능", 
    desc: "번역 에이전시, 기업 홍보팀, 외교 기관 등 실제 현장에서 요구하는 결과물을 만들어내는 역량을 키웁니다." 
  }
];

const curriculum = [
  { week: "1주차", content: "AI 번역의 이해: 생성형 AI 개요 (AI 번역 모델과 프롬프트 엔지니어링 기초)" },
  { week: "2주차", content: "번역 기획: 맥락 분석 및 번역 전략 수립 (언어별 특징과 AI 번역 데이터 정제 및 최적화)" },
  { week: "3주차", content: "실전 번역: 분야별 비즈니스 번역 실습 (IT/비즈니스 마케팅 보고서 번역 및 Localization)" },
  { week: "4주차", content: "포스트 에디팅: 전문 교정 기법 (AI 번역 결과물 검증 및 품질 관리 프로세스 구축)" },
  { week: "5주차", content: "창의 번역: 콘텐츠 및 미디어 번역 실습 (영상 자막, 웹툰, 문학 등 창의적 콘텐츠 번역)" },
  { week: "6주차", content: "번역 고도화: 도메인별 전문 지식 활용 (법률, 의학, 금융 등 고난도 전문 문서 번역 전략)" },
  { week: "7주차", content: "종합 프로젝트: 실제 비즈니스 사례 적용 (실무 프로젝트 시뮬레이션 및 포트폴리오 제작)" },
  { week: "8주차", content: "최종 시험 및 수료: 역량 평가 및 수료 인증 (자격시험 및 비즈니스 번역 실전 테스트)" },
];

const highlights = [
  { icon: BookOpen, label: "학습 영역", desc: "분야별 맞춤 커리큘럼 설계" },
  { icon: Cpu, label: "AI 최적화", desc: "최신 AI 모델 활용 능력 배양" },
  { icon: Zap, label: "강좌 기여", desc: "실무 밀착형 현장 중심 교육" },
  { icon: Globe, label: "네트워크", desc: "글로벌 번역 네트워크 파트너십" },
];

export function AiTranslationPage() {
  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />

      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="AI Translation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl border-l-4 border-[#8B1A2B]">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                Future of Translation
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                AI 번역 교정 전문가란?
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  AI 시대의 새로운 전문 통번역사
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  고부가가치 교정 기술 습득
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
                AI Enhanced Translation
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                AI 번역 교정 교육이란?
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                단순 번역을 넘어 AI가 산출한 결과물의 오류를 찾아내고 문맥을 완성하는 '포스트 에디팅' 능력은 
                이제 전문 번역사의 필수 역량입니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 AI 번역 교정 과정은 전문 분야별 지식과 AI 활용 능력을 결합하여 
                번역의 속도와 퀄리티를 동시에 잡는 진정한 미래형 번역 전문가를 양성합니다.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  AI를 도구로 부리는 번역가가 되십시오.
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

      <CoreDesign courseName="AI 번역" />

      {/* Strengths */}
      <section className="py-24 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              AI 번역 교육의 차별점
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

      {/* Curriculum */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Curriculum
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
              세부 커리큘럼
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {curriculum.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-6 border border-gray-100 hover:border-[#8B1A2B] transition-all group shadow-sm flex flex-col items-center text-center rounded-xl"
              >
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#8B1A2B] transition-colors">
                  <span className="text-[#8B1A2B] text-[13px] group-hover:text-white font-black">W{i + 1}</span>
                </div>
                <h4 className="text-[15px] text-[#1a1a2e] font-black mb-2">{item.week}</h4>
                <p className="text-gray-500 text-[13px] font-medium leading-relaxed">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#8B1A2B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-[26px] lg:text-[32px] mb-3" style={{ fontWeight: 800 }}>
            전문 번역의 한계를 뛰어넘으세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            AI와 인간의 협업으로 완성하는 최고의 번역 퀄리티
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
