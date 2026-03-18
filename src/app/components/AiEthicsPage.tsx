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
  Scale,
  Lock,
  MessageSquare
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseSubNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign } from "./CourseCommon";

const heroImg = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYSUyMGV0aGljc3xlbnwwfHx8fDE3NzE3OTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  { 
    icon: Scale, 
    title: "ETHICAL LITERACY", 
    subtitle: "AI 윤리적 사고 배양", 
    desc: "AI 기술의 파급력과 잠재적 위험을 인지하고, 공정성, 책임성, 투명성을 바탕으로 한 윤리적 판단 능력을 배양합니다." 
  },
  { 
    icon: Lock, 
    title: "COMPLIANCE", 
    subtitle: "신뢰할 수 있는 AI 구현", 
    desc: "글로벌 AI 가이드라인과 국내외 법규를 이해하고, 조직 내 AI 도입 시 발생할 수 있는 리스크를 선제적으로 관리합니다." 
  },
  { 
    icon: ShieldCheck, 
    title: "TRUSTWORTHY AI", 
    subtitle: "사회적 영향과 거버넌스", 
    desc: "사용자가 안심하고 사용할 수 있는 AI 서비스 기획 및 운영을 위한 AI 거버넌스 체계를 학습하고 구축합니다." 
  },
  { 
    icon: MessageSquare, 
    title: "SOCIETAL IMPACT", 
    subtitle: "새로운 접근 및 현장성 강화", 
    desc: "AI 기술이 사회 구조와 인간의 삶에 미치는 영향을 심층적으로 탐구하고, 건전한 AI 생태계 조성을 위한 역할을 고민합니다." 
  }
];

const curriculum = [
  { week: "1주차", content: "AI 윤리의 기초: AI의 사회적 영향과 윤리 가이드라인 (국내외 AI 윤리 원칙 및 거버넌스 이해)" },
  { week: "2주차", content: "데이터 윤리: 개인정보 보호와 데이터 편향성 관리 (데이터 수집 및 활용 시 발생할 수 있는 윤리적 이슈)" },
  { week: "3주차", content: "알고리즘의 공정성: 차별 없는 AI 기술 구현 전략 (알고리즘 편향성 측정 및 완화 기법 실습)" },
  { week: "4주차", content: "책임과 투명성: 설명 가능한 AI(XAI)와 법적 책임 (AI 결정 과정의 투명성 확보 및 책임 소재 규명)" },
  { week: "5주차", content: "생성형 AI의 윤리: 저작권, 딥페이크 및 가짜 뉴스 대응 (생성형 AI 활용 시의 윤리적 리스크와 가이드라인)" },
  { week: "6주차", content: "산업별 AI 윤리: 의료, 금융, 공공 분야의 특화 사례 (도메인별 특화된 윤리적 쟁점 분석 및 대응)" },
  { week: "7주차", content: "AI 거버넌스 설계: 조직 내 AI 윤리 체계 구축 실무 (윤리 위원회 구성 및 리스크 관리 프로세스 설계)" },
  { week: "8주차", content: "종합 토론 및 수료: AI 윤리 전문가로서의 로드맵 수립 (윤리적 딜레마 사례 연구 및 수료 과제 발표)" },
];

const highlights = [
  { icon: Users, label: "전문 강사진", desc: "학계 및 산업계 AI 윤리 전문가 초빙" },
  { icon: ShieldCheck, label: "윤리 원칙 습득", desc: "글로벌 표준 기반의 핵심 원칙 학습" },
  { icon: Zap, label: "새로운 접근", desc: "기술과 인문학이 융합된 입체적 시각" },
  { icon: Target, label: "현장성 강화", desc: "실제 비즈니스 사례 기반의 문제 해결" },
];

export function AiEthicsPage() {
  return (
    <div className="pb-24">
      <CourseSubNav />
      <QuickNav />
      <MobileQuickNav />

      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback src={heroImg} alt="AI Ethics" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="bg-[#1a1a2e]/80 backdrop-blur-sm p-8 lg:p-12 max-w-xl border-l-4 border-[#8B1A2B]">
              <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
                Responsible Technology
              </span>
              <h1 className="text-[26px] lg:text-[36px] text-white mb-4" style={{ fontWeight: 700, lineHeight: 1.3 }}>
                AI 윤리 교육이란?
              </h1>
              <div className="flex flex-wrap gap-3 text-white/70 text-[14px] mb-6">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  지능정보사회의 필수 역량
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#e8a0a0]" />
                  신뢰할 수 있는 기술의 토대
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
                Human-Centered AI
              </span>
              <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-5" style={{ fontWeight: 800, lineHeight: 1.35 }}>
                AI 윤리 교육의 필요성
              </h2>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                AI 기술이 우리 삶의 모든 영역에 깊숙이 들어오면서, 기술적 성능만큼이나 '질서 있는 사용'이 
                중요해졌습니다. 원칙 없는 AI 기술은 사회적 불신을 초래하고 기업에 치명적인 리스크를 줄 수 있습니다.
              </p>
              <p className="text-gray-600 text-[15px] mb-6" style={{ lineHeight: 1.9 }}>
                타임스 AI 윤리 과정은 단순히 '하지 마라'는 법을 배우는 것을 넘어, AI 시대에 인간의 존엄과 가치를 
                지키며 조화롭게 발전할 수 있는 방향을 제시합니다.
              </p>
              <div className="bg-red-50 p-5 border-l-4 border-[#8B1A2B]">
                <p className="text-[#8B1A2B] text-[15px]" style={{ fontWeight: 700 }}>
                  기술의 진보만큼 가치관의 성숙이 중요합니다.
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

      <CoreDesign courseName="AI 윤리" />

      {/* Strengths */}
      <section className="py-24 bg-[#1a1a2e]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#e8a0a0] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
              Strengths
            </span>
            <h2 className="text-[28px] lg:text-[36px] text-white" style={{ fontWeight: 800 }}>
              AI 윤리 교육의 핵심
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
            올바른 AI 사용으로 내일을 준비하세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            기술의 힘에 책임감을 더하는 가치 중심 교육
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
