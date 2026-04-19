import { Link } from "react-router";
import { motion } from "motion/react";
import { QuickNav, MobileQuickNav, CourseMenuBar } from "./QuickNav";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  Zap,
  Award,
  Target,
  Globe,
  Cpu,
  BookOpen
} from "lucide-react";
import { ChevronRight } from "lucide-react";

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
    <div>
      <QuickNav />
      <MobileQuickNav />

      {/* Hero Section */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="course-badge mb-4" style={{display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>모집중</span>
            <h1 className="theme-title mb-4">AI 번역 교정 과정</h1>
            <p className="text-lg opacity-80" style={{maxWidth: '1000px', margin: '0 auto'}}>
              AI 기술과 전문 번역이 만나는 새로운 가능성.<br/>
              단순 번역을 넘어 AI를 도구로 부리는 번역 전문가가 되십시오.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sticky Menu Bar */}
      <div className="sticky top-[72px] z-30 shadow-sm">
        <CourseMenuBar />
      </div>

      <div className="container py-20 course-detail animate-fade-in">
        
        {/* Course Header equivalent */}
        <div className="course-header flex items-center justify-between mb-8">
          <h2 className="course-title text-2xl font-bold">과정 상세 정보</h2>
          <span className="course-badge">정규과정</span>
        </div>

        <div className="course-info-grid card mb-12">
          <div className="course-image">
            <ImageWithFallback src={heroImg} alt="AI 번역 과정" className="w-full h-full object-cover" />
          </div>
          <ul className="course-info-list" style={{display: 'flex', flexDirection: 'column'}}>
            <li>
              <span className="label">과정구분</span>
              <span className="value">AI 번역 교정 전문가</span>
            </li>
            <li>
              <span className="label">교육기간</span>
              <span className="value">8주 완성</span>
            </li>
            <li>
              <span className="label">교육대상</span>
              <span className="value">번역가 희망자 및 실무자</span>
            </li>
            <li>
              <span className="label">자격인증</span>
              <span className="value">ITT 자격증 및 수료증</span>
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
              <p className="font-bold text-lg text-primary mb-2">AI 번역 교정 교육이란 무엇인가요?</p>
              <p className="leading-relaxed mb-4">단순 번역을 넘어 AI가 산출한 결과물의 오류를 찾아내고 문맥을 완성하는 '포스트 에디팅' 능력은 이제 전문 번역사의 필수 역량입니다.</p>
              <p className="leading-relaxed">타임스 AI 번역 교정 과정은 전문 분야별 지식과 AI 활용 능력을 결합하여 번역의 속도와 퀄리티를 동시에 잡는 진정한 미래형 번역 전문가를 양성합니다.</p>
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
