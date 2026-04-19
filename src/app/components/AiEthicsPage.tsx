import { Link } from "react-router";
import { motion } from "motion/react";
import { QuickNav, MobileQuickNav, CourseMenuBar } from "./QuickNav";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Users,
  Briefcase,
  Target,
  Scale,
  Lock,
  MessageSquare,
  ChevronRight
} from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYSUyMGV0aGljc3xlbnwwfHx8fDE3NzE3OTA0NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  { 
    icon: Scale, 
    title: "ETHICAL LITERACY", 
    subtitle: "AI 윤리적 사고 배양", 
    desc: "AI 기술의 파격적 위험을 인지하고, 공정성, 책임성, 투명성을 바탕으로 한 윤리적 판단 능력을 배양합니다." 
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
    <div>
      <QuickNav />
      <MobileQuickNav />

      {/* Hero Section */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="course-badge mb-4" style={{display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>모집중</span>
            <h1 className="theme-title mb-4">AI 윤리 전문가 과정</h1>
            <p className="text-lg opacity-80" style={{maxWidth: '1000px', margin: '0 auto'}}>
              기술의 진보만큼 가치관의 성숙이 중요합니다.<br/>
              AI 시대에 인간의 존엄과 가치를 지키는 조화로운 발전 방향을 제시합니다.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky Menu Bar */}
      <div className="sticky top-[72px] z-30 shadow-sm">
        <CourseMenuBar />
      </div>

      <div className="container py-20 course-detail animate-fade-in">
        
        {/* Course Header */}
        <div className="course-header flex items-center justify-between mb-8">
          <h2 className="course-title text-2xl font-bold">과정 상세 정보</h2>
          <span className="course-badge">정규과정</span>
        </div>

        <div className="course-info-grid card mb-12">
          <div className="course-image">
            <ImageWithFallback src={heroImg} alt="AI 윤리 과정" className="w-full h-full object-cover" />
          </div>
          <ul className="course-info-list" style={{display: 'flex', flexDirection: 'column'}}>
            <li>
              <span className="label">과정구분</span>
              <span className="value">AI 윤리 전문가 과정</span>
            </li>
            <li>
              <span className="label">교육기간</span>
              <span className="value">8주 완성</span>
            </li>
            <li>
              <span className="label">교육대상</span>
              <span className="value">기업 임직원, 교육 기획자, 개발자</span>
            </li>
            <li>
              <span className="label">자격인증</span>
              <span className="value">AI 윤리 전문가 자격 (예정)</span>
            </li>
            <li className="mt-6 border-none pb-0">
              <Link to="/admission" className="btn-primary w-full text-center" style={{width: '100%'}}>
                수강신청 바로가기
              </Link>
            </li>
          </ul>
        </div>

        <div className="course-section mb-12">
          <h3 className="section-title">과정소개</h3>
          <div className="rich-text card p-8">
            <div className="mb-8">
              <p className="font-bold text-lg text-primary mb-2">AI 윤리 교육이란 무엇인가요?</p>
              <p className="leading-relaxed mb-4">AI 기술이 우리 삶의 모든 영역에 깊숙이 들어오면서, 기술적 성능만큼이나 '질서 있는 사용'이 중요해졌습니다. 원칙 없는 AI 기술은 사회적 불신을 초래하고 기업에 치명적인 리스크를 줄 수 있습니다.</p>
              <p className="leading-relaxed">타임스 AI 윤리 과정은 단순히 '하지 마라'는 법을 배우는 것을 넘어, AI 시대에 인간의 존엄과 가치를 지키며 조화롭게 발전할 수 있는 방향을 제시합니다.</p>
            </div>
          </div>
        </div>

        <div className="course-section mb-12">
          <h3 className="section-title">학습 특징</h3>
          <div className="rich-text card p-8">
             <ul className="bullet-list">
               {highlights.map((h, i) => (
                  <li key={i}>{h.label} - {h.desc}</li>
               ))}
             </ul>
          </div>
        </div>

        <div className="course-section mb-12">
          <h3 className="section-title">강점 및 효과</h3>
          <div className="flow-grid pb-2">
            {strengths.map((s, idx) => (
              <div key={idx} className="card flow-card p-6 border border-gray-200" style={{background: '#fafafa', display: 'flex', flexDirection: 'column'}}>
                <span className="flow-step text-primary font-bold mb-2 text-sm">{s.subtitle}</span>
                <h4 className="flow-title font-bold text-lg mb-2">{s.title}</h4>
                <p className="flow-content text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="course-section mb-12">
          <h3 className="section-title">주차별 커리큘럼</h3>
          <div className="table-wrap">
            <table className="schedule-table m-0">
              <thead>
                <tr>
                  <th style={{ width: '20%', textAlign: 'center' }}>주차</th>
                  <th style={{ width: '80%' }}>교육내용</th>
                </tr>
              </thead>
              <tbody>
                {curriculum.map((item, idx) => (
                  <tr key={idx}>
                    <td className="text-center font-bold text-main">{item.week}</td>
                    <td className="text-muted">{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
