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
  FileText,
  Languages,
  Search,
  MonitorPlay,
  MessageSquareQuote,
  FileSearch,
  ChevronRight
} from "lucide-react";

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
    <div>
      <QuickNav />
      <MobileQuickNav />

      {/* Hero Section */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="course-badge mb-4" style={{display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>모집중</span>
            <h1 className="theme-title mb-4">ITT 정통 통번역 과정</h1>
            <p className="text-lg opacity-80" style={{maxWidth: '1000px', margin: '0 auto'}}>
              글로벌 비즈니스의 핵심 역량, 실전형 전문 통번역사 양성.<br/>
              진정한 소통 전문가를 길러냅니다.
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
            <ImageWithFallback src={heroImg} alt="ITT 과정" className="w-full h-full object-cover" />
          </div>
          <ul className="course-info-list" style={{display: 'flex', flexDirection: 'column'}}>
            <li>
              <span className="label">과정구분</span>
              <span className="value">ITT 정통 통번역 교육</span>
            </li>
            <li>
              <span className="label">교육기간</span>
              <span className="value">8주 집중 교육</span>
            </li>
            <li>
              <span className="label">교육대상</span>
              <span className="value">통번역 전문가 희망자</span>
            </li>
            <li>
              <span className="label">자격인증</span>
              <span className="value">공인 ITT 자격증</span>
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
              <p className="font-bold text-lg text-primary mb-2">ITT 정통 통번역 교육의 가치</p>
              <p className="leading-relaxed mb-4">단순히 언어를 옮기는 것을 넘어, 문화적 맥락과 전문 분야의 지식을 정확하게 전달하는 능력은 글로벌 시대 비즈니스의 승패를 결정짓는 핵심 요소입니다.</p>
              <p className="leading-relaxed">타임스 ITT 정통 통번역 과정은 공신력 있는 자격증 취득과 함께, 현장에서 즉시 인정받는 실전 역량을 갖춘 진정한 소통 전문가를 길러냅니다.</p>
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
          <h3 className="section-title">교육과정 구성</h3>
          <div className="space-y-4 mb-4 mt-8 pb-2 border-b">
            <p className="text-[#1a1a2e] text-[15px] font-medium leading-relaxed">
              <strong className="text-primary font-black">ITT 전문 통번역 과정 (전문 1·2급)</strong> <br />
              경제, 법률, IT, 과학기술 등 고급 전문 분야 번역·통역 → 전문 통번역사 및 외국어 강사 양성
            </p>
            <p className="text-[#1a1a2e] text-[15px] font-medium leading-relaxed">
              <strong className="text-[#c19a3e] font-black">ITT 비즈니스 통번역 과정 (1~3급)</strong> <br />
              비즈니스 상담, 계약 관리, 해외 영업 실무 중심 → 글로벌 기업 외국어 전문가 양성
            </p>
          </div>
          <div className="table-wrap">
            <table className="schedule-table m-0">
              <thead>
                <tr>
                  <th style={{ width: '15%', textAlign: 'center' }}>구분</th>
                  <th style={{ width: '30%' }}>ITT 전문 통번역 (전문 1·2급)</th>
                  <th style={{ width: '30%' }}>ITT 비즈니스 통번역 (1~2급)</th>
                  <th style={{ width: '25%' }}>ITT 비즈니스 베이직 (3급)</th>
                </tr>
              </thead>
              <tbody>
                {curriculumConfig.map((row, idx) => (
                  <tr key={idx}>
                    <td className="text-center font-bold text-main">{row.module}</td>
                    <td>
                      <p className="font-bold mb-1">{row.professional.title}</p>
                      <p className="text-sm text-muted mb-2">{row.professional.desc}</p>
                      <p className="text-xs text-muted/70">{row.professional.sub}</p>
                    </td>
                    <td>
                      <p className="font-bold mb-1">{row.business.title}</p>
                      <p className="text-sm text-muted mb-2">{row.business.desc}</p>
                      <p className="text-xs text-muted/70">{row.business.sub}</p>
                    </td>
                    <td>
                      {row.basic ? (
                         <>
                          <p className="font-bold mb-1">{row.basic.title}</p>
                          <ul className="bullet-list text-xs text-muted/70" style={{marginTop: 0}}>
                            {row.basic.desc.split('/').map((item, i) => (
                              <li key={i} className="mb-0 leading-tight py-0.5">{item.trim()}</li>
                            ))}
                          </ul>
                         </>
                      ) : (
                         <div className="text-center text-muted">-</div>
                      )}
                    </td>
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
