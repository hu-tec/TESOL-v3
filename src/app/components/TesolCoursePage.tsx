import { Link } from "react-router";
import { motion } from "motion/react";
import { QuickNav, MobileQuickNav, CourseMenuBar } from "./QuickNav";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  Zap,
  Globe,
  Award,
  Users,
  CheckCircle,
  Clock,
  Mic,
  BookOpen,
  Presentation,
  Handshake,
  GraduationCap,
  Briefcase,
  Target,
  Star,
} from "lucide-react";
import { ChevronRight } from "lucide-react";

import book1 from "figma:asset/d7f50a4487fd4631fc9eb9187afdfd969c599330.png";
import book2 from "figma:asset/c8f9f248d34e3e489f1e6f368703df912a3a4326.png";
import book3 from "figma:asset/aeede0a4b727f0e5754ea6824dab2f05bdcb292f.png";

import cert1 from "figma:asset/30c333215be129840212727ef672f75487779a11.png";
import cert2 from "figma:asset/39448fbc26655b6bf288f44b2d87b72d531d4b84.png";
import cert3 from "figma:asset/b279d833aeeeffecb0798cc79ee329dd76d539e7.png";

const heroImg = "https://images.unsplash.com/photo-1764720573370-5008f1ccc9fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MTc5MDMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const strengths = [
  {
    icon: Zap,
    title: "FAST TRACK",
    subtitle: "8주 완성 · 120시간 몰입",
    desc: "주중·주말반 선택, 핵심만 압축한 단기 집중 과정으로 빠르게 자격을 취득하고 실무에 바로 투입됩니다.",
  },
  {
    icon: Globe,
    title: "GLOBAL CLASS",
    subtitle: "전세계 학생과 함께하는 100% 영어 수업",
    desc: "미국·캐나다·유럽·아시아 수강생이 한 교실에서 배우는 다국적 몰입 환경으로 글로벌 감각이 자연스럽게 길러집니다.",
  },
  {
    icon: Award,
    title: "INTERNATIONAL POWER",
    subtitle: "세계 어디서나 통하는 자격증",
    desc: "TESOL + ITT 국제 공신력의 자격증과 20년간 3만 명이 넘는 졸업생 네트워크, 해외 진출이 가능합니다.",
  },
  {
    icon: Presentation,
    title: "PRACTICAL TRAINING",
    subtitle: "발표·수업 관리 실습",
    desc: "실제 교실 상황을 반영한 발표, 수업 기획 및 운영 실습을 통해 실무 능력을 강화하고 교수 자신감을 키웁니다.",
  },
];

const curriculum = [
  { week: "1주차", content: "TESOL 개론, 글로벌 커뮤니케이션 개념, 학습자 분석" },
  { week: "2주차", content: "Speaking & Listening 지도법, 발음·억양 실습" },
  { week: "3주차", content: "Reading & Writing 지도법, 문법·어휘 지도전략" },
  { week: "4주차", content: "Lesson Planning - 교육용 비즈니스용 발표 기획" },
  { week: "5주차", content: "Teaching & Presentation Techniques - 회의·강연·세일즈 활용" },
  { week: "6주차", content: "Classroom & Meeting Management - 학습자/팀원 관리, 진행 스킬" },
  { week: "7주차", content: "실무 영어 프로젝트 - 영업·마케팅·협상 롤플레이" },
  { week: "8주차", content: "최종 시연 피드백, 국제 TESOL 자격증 발급 준비" },
];

const outcomes = [
  { icon: Award, title: "국제 TESOL 자격증", desc: "국제적으로 통용되는 TESOL 영어교사 자격증 취득" },
  { icon: Mic, title: "영어 수업·발표 자신감", desc: "영어로 수업·발표·프레젠테이션을 이끄는 자신감 확보" },
  { icon: Briefcase, title: "국내 교사·강사 취업", desc: "영어학원, 국제학교, 대학 부설 어학원 등 교사·강사로 진출" },
  { icon: Globe, title: "글로벌 교사 커리어", desc: "해외 교육기관·어학원에서 글로벌 교사 커리어 확장" },
  { icon: Target, title: "비즈니스 활용 능력", desc: "기업 연수, 프레젠테이션·협상 등 비즈니스 현장 활용 능력 강화" },
];

const highlights = [
  { icon: Clock, label: "8주 집중 몰입, 집중 훈련", desc: "120시간 집중 훈련으로 영어로 수업을 할 수 있는 능력개발" },
  { icon: Users, label: "다국적 클래스", desc: "100% 영어 클래스 글로벌 소통 능력 극대화" },
  { icon: Target, label: "능력 확장", desc: "단순 영어교육뿐만 아니라 발표, 협상, 마케팅까지 확장" },
  { icon: Handshake, label: "네트워킹", desc: "네트워킹을 통한 국제 파트너와의 관계 형성" },
];

const textbooks = [
  { title: "Techniques and Principles in Language Teaching", image: book1 },
  { title: "Learning Teaching", image: book2 },
  { title: "TESOL Student Book (Binder)", image: book3 },
];

export function TesolCoursePage() {
  return (
    <div>
      <QuickNav />
      <MobileQuickNav />

      {/* Hero match theme-bg of course detail or simple page-header */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="course-badge mb-4" style={{display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)'}}>모집중</span>
            <h1 className="theme-title mb-4">TESOL 교육 과정</h1>
            <p className="text-lg opacity-80" style={{maxWidth: '1000px', margin: '0 auto'}}>
              당신의 영어, 이제는 교실을 넘어 세계 무대로 나아갈 시간입니다.<br/>
              8주 집중 훈련으로 완성하는 국제 공인 영어교사 커리어.
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
            <ImageWithFallback src={heroImg} alt="TESOL 과정" className="w-full h-full object-cover" />
          </div>
          <ul className="course-info-list" style={{display: 'flex', flexDirection: 'column'}}>
            <li>
              <span className="label">과정구분</span>
              <span className="value">국제 TESOL 커리큘럼</span>
            </li>
            <li>
              <span className="label">교육기간</span>
              <span className="value">8주 완성 (120시간)</span>
            </li>
            <li>
              <span className="label">수업방식</span>
              <span className="value">100% 영어 원어민 집중 수업</span>
            </li>
            <li>
              <span className="label">자격인증</span>
              <span className="value">수료증 및 국제 자격증 발급</span>
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
              <p className="font-bold text-lg text-primary mb-2">TESOL 교육이란 무엇인가요?</p>
              <p className="leading-relaxed mb-4">TESOL(Teaching English to Speakers of Other Languages)은 영어를 모국어로 하지 않는 사람들에게 영어를 가르치는 국제 공인 영어교사 양성 과정입니다.</p>
              <p className="leading-relaxed">타임스 TESOL은 단순히 이론에 그치지 않고, 100% 원어민 수업을 통해 실제 교실 상황에서 필요한 교수법과 커뮤니케이션 스킬을 체득하는 실전 중심의 교육을 지향합니다.</p>
            </div>
          </div>
        </div>

        <div className="course-section mb-12">
          <h3 className="section-title">타임스 TESOL의 특별함</h3>
          <div className="rich-text card p-8">
             <ul className="bullet-list">
                <li>8주 집중 몰입 - 120시간 핵심 교육으로 빠른 자격 취득</li>
                <li>실무 프레젠테이션 - 수업 시연 및 발표 중심의 실습 교육</li>
                <li>글로벌 네트워크 - 전 세계 교육기관에서 통용되는 자격</li>
                <li>방과후지도사 연계 - 추가 자격증 취득 및 취업 지원</li>
             </ul>
          </div>
        </div>

        <div className="course-section mb-12">
          <h3 className="section-title">타임스 TESOL의 강점</h3>
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
          <h3 className="section-title">수료 후 진로 및 목표</h3>
          <div className="flow-grid">
            {outcomes.map((o, idx) => (
              <div key={idx} className="card flow-card p-6 border border-gray-200" style={{background: '#fafafa', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-4">
                   <o.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="flow-title font-bold text-[15px] mb-2 w-full">{o.title}</h4>
                <p className="flow-content text-muted text-[13px] leading-relaxed w-full">{o.desc}</p>
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

        <div className="course-section mb-12">
          <h3 className="section-title">교재 안내</h3>
          <div className="grid col-3 gap-6" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px'}}>
            {textbooks.map((book) => (
              <div key={book.title} className="card p-6 flex flex-col items-center text-center shadow-sm">
                <div className="w-full aspect-[3/4] mb-4 flex items-center justify-center">
                  <ImageWithFallback src={book.image} alt={book.title} className="w-full object-contain" />
                </div>
                <h4 className="font-bold text-sm text-main">{book.title}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="course-section mb-12">
          <h3 className="section-title">수료 및 자격 인증</h3>
          <div className="card bg-[var(--bg-secondary)] border border-[var(--border)] p-6 rounded-xl">
             <p className="text-[var(--text-muted)] leading-relaxed">자격증 수료 시 전 세계 교육기관에서 통용되는 국제 TESOL 교육 수료증, 테솔지도사, 방과후영어지도사 등 관련 자격증들의 추가 발급 기회가 주어집니다.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
