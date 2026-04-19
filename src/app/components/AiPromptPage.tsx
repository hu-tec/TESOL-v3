import { Link } from "react-router";
import { motion } from "motion/react";
import { QuickNav, MobileQuickNav, CourseMenuBar } from "./QuickNav";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  Zap,
  Award,
  Target,
  Sparkles,
  Command,
  GraduationCap,
  Briefcase,
  Search,
  Layout,
  Code,
  Cpu,
  ChevronRight
} from "lucide-react";

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
  return (
    <div>
      <QuickNav />
      <MobileQuickNav />

      {/* Hero Section */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="course-badge mb-4" style={{display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>모집중</span>
            <h1 className="theme-title mb-4">AI 프롬프트 전문가 과정</h1>
            <p className="text-lg opacity-80" style={{maxWidth: '1000px', margin: '0 auto'}}>
              명령 한 줄로 세상을 바꾸는 기술.<br/>
              모든 산업군에서 요구하는 AI 리터러시를 갖추고 프롬프트 엔지니어로 거듭납니다.
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
            <ImageWithFallback src={heroImg} alt="AI 프롬프트 과정" className="w-full h-full object-cover" />
          </div>
          <ul className="course-info-list" style={{display: 'flex', flexDirection: 'column'}}>
            <li>
              <span className="label">과정구분</span>
              <span className="value">AI 프롬프트 엔지니어 1~8급</span>
            </li>
            <li>
              <span className="label">교육기간</span>
              <span className="value">8주 완성 (단계별)</span>
            </li>
            <li>
              <span className="label">교육대상</span>
              <span className="value">초·중·고, 대학생, 직장인, 강사</span>
            </li>
            <li>
              <span className="label">자격인증</span>
              <span className="value">교육/비즈/전문 급수 인증</span>
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
              <p className="font-bold text-lg text-primary mb-2">프롬프트 교육이란 무엇인가요?</p>
              <p className="leading-relaxed mb-4">AI와 대화하는 능력은 이제 선택이 아닌 생존의 필수 역량이 되었습니다. 똑같은 AI를 사용하더라도 어떤 질문을 던지느냐에 따라 결과물의 수준은 천차만별입니다.</p>
              <p className="leading-relaxed">타임스 AI 프롬프트 과정은 단순히 AI 사용법을 넘어, AI의 논리 구조를 이해하고 내가 원하는 최고의 답을 끌어내는 '설계 능력'을 가르칩니다.</p>
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
          <h3 className="section-title">급수별 상세 교육 과정 (1~8주차)</h3>
          
          <h4 className="font-bold mb-4 mt-8 pb-2 border-b">교육급수 (1~8급)</h4>
          <div className="table-wrap mb-8">
            <table className="schedule-table m-0">
              <thead>
                <tr>
                  <th style={{ width: '20%', textAlign: 'center' }}>주차</th>
                  <th style={{ width: '80%' }}>교육내용</th>
                </tr>
              </thead>
              <tbody>
                {curriculumData.education.map((item, idx) => (
                  <tr key={idx}>
                    <td className="text-center font-bold text-main">{item.week}</td>
                    <td className="text-muted">{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="font-bold mb-4 mt-8 pb-2 border-b">비즈니스급수 (1~3급)</h4>
          <div className="table-wrap mb-8">
            <table className="schedule-table m-0">
              <thead>
                <tr>
                  <th style={{ width: '20%', textAlign: 'center' }}>주차</th>
                  <th style={{ width: '80%' }}>교육내용</th>
                </tr>
              </thead>
              <tbody>
                {curriculumData.business.map((item, idx) => (
                  <tr key={idx}>
                    <td className="text-center font-bold text-main">{item.week}</td>
                    <td className="text-muted">{item.content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h4 className="font-bold mb-4 mt-8 pb-2 border-b">전문급수 (1~2급)</h4>
          <div className="table-wrap mb-8">
            <table className="schedule-table m-0">
              <thead>
                <tr>
                  <th style={{ width: '20%', textAlign: 'center' }}>주차</th>
                  <th style={{ width: '80%' }}>교육내용</th>
                </tr>
              </thead>
              <tbody>
                {curriculumData.professional.map((item, idx) => (
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
