import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  FileText,
  CreditCard,
  ClipboardCheck,
  Trophy,
  BookOpen,
  Upload,
  ChevronRight,
  Briefcase,
  Globe,
  GraduationCap,
  Award,
  MapPin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { QuickNav, MobileQuickNav, CourseMenuBar } from "./QuickNav";
import { CoreDesign, DetailInfoGrid, HorizontalScrollTable } from "./CourseCommon";
import { Button } from "../components/ui/button";

const globalImg = "https://images.unsplash.com/photo-1709054172839-17880c040f22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBnbG9iYWwlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzcxODE3NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const steps = [
  { num: "01", icon: FileText, title: "지원서 작성", desc: "온라인 지원서 작성" },
  { num: "02", icon: CreditCard, title: "전형료 입금", desc: "5만원 납부" },
  { num: "03", icon: ClipboardCheck, title: "레벨테스트", desc: "페이퍼/인터뷰" },
  { num: "04", icon: Trophy, title: "합격자 발표", desc: "시험 결과 안내" },
  { num: "05", icon: BookOpen, title: "등록·납부", desc: "수강료 납부" },
  { num: "06", icon: Upload, title: "서류 제출", desc: "입학 원본 제출" },
];

const comparisonData = [
  { category: "레벨테스트", content: "TESOL: Paper+Interview / AI번역: 분석 인터뷰 / AI프롬프트: 과제+인터뷰 / ITT: Speaking+Reading+Writing" },
  { category: "응시자격", content: "대학생, 교사, 강사, 번역가 희망자 및 실무 관심자 누구나" },
  { category: "수업료", content: "과정별 1,800,000원 ~ 2,800,000원 대 (상세 문의)" },
  { category: "수업운영", content: "120시간 / 8주 집중 과정 (ITT는 모듈별 상이)" },
];

const scheduleItems = [
  { week: "서울", content: "26.03.01~ / 수목금(10~14시) / 테솔 및 AI 교육" },
  { week: "부산", content: "26.04. 예정 / 토일(주말반) / 테솔 및 AI 교육" },
  { week: "대구", content: "26.05. 확정 / 수목금(10~14시) / AI 번역" },
  { week: "대전", content: "26.05. 확정 / 토일(주말반) / AI 번역, 윤리" },
  { week: "경기도", content: "26.06. 확정 / 수목금(10~14시) / ITT 번역" },
];

const certificates = [
  { icon: Briefcase, title: "국내 취업", desc: "AI번역, 콘텐츠 직무\n다국어 검수" },
  { icon: Globe, title: "해외 취업", desc: "글로벌 기업, 로컬라이저\n프리랜서 번역" },
  { icon: GraduationCap, title: "교육·포트폴리오", desc: "비교과 활동, 입시·취업\n자료로 활용" },
  { icon: Award, title: "자격 입증", desc: "후편집 전문 능력\n인증서 취득" },
];

export function AdmissionPage() {
  const detailItems = [
    { label: "전형방법", value: "온라인 지원 및 레벨테스트" },
    { label: "전형료", value: "50,000원" },
    { label: "교육장소", value: "서울, 부산, 대구, 대전 등 전국" },
    { label: "문의전화", value: "02-1234-5678" },
  ];

  return (
    <div className="bg-white">
      <QuickNav />
      <MobileQuickNav />

      {/* Hero Section */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="theme-title mb-4">입학 안내 및 전형 절차</h1>
            <p className="text-lg opacity-80 mb-8" style={{maxWidth: '1000px', margin: '0 auto'}}>
              미국, 유럽, 아시아 전 세계 학생들과 함께하는 글로벌 교육. <br className="hidden md:block" />
              타임스와 함께 당신의 커리어를 한 단계 높이십시오.
            </p>
            <div className="flex justify-center flex-wrap gap-4">
              <Link
                to="/apply/level-test"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white text-[15px] font-bold transition-all rounded shadow-lg hover:-translate-y-1"
              >
                지원서 작성하기 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticky Menu Bar */}
      <div className="sticky top-[70px] z-30 shadow-sm md:shadow-none bg-white border-b border-gray-100">
        <CourseMenuBar />
      </div>

      <div className="container py-20">
        <DetailInfoGrid items={detailItems} />
      </div>

      {/* Steps */}
      <section className="py-24 border-b border-gray-100">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-[#8B1A2B] text-[13px] font-black tracking-[0.2em] uppercase mb-4 block">
              Admission Process
            </span>
            <h2 className="section-title">
              수강 신청 절차
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 gap-y-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto border border-gray-200 group hover:border-[#8B1A2B] hover:shadow-lg transition-all">
                  <step.icon className="w-8 h-8 text-[#8B1A2B]" />
                </div>
                <div>
                  <div className="text-[12px] text-[#8B1A2B] font-black mb-2 opacity-80">STEP {step.num}</div>
                  <h4 className="text-[#1a1a2e] font-bold text-[16px] mb-2">{step.title}</h4>
                  <p className="text-gray-500 text-[13px] font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Tables */}
      <section className="py-24 bg-gray-50">
        <div className="container space-y-24">
          <div>
            <div className="text-center mb-12">
              <h3 className="section-title">
                교육 과정 통합 비교
              </h3>
            </div>
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="p-6 font-black text-[14px] text-[#1a1a2e] w-[180px]">항목</th>
                      <th className="p-6 font-bold text-[14px] text-gray-700">상세 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors">
                        <td className="p-6 font-bold text-[14px] text-[#8B1A2B]">{row.category}</td>
                        <td className="p-6 text-[15px] text-gray-600 leading-relaxed font-medium">{row.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h3 className="section-title">
                전국 교육 일정 (예정)
              </h3>
            </div>
            <HorizontalScrollTable title="지역별 일정" items={scheduleItems} />
            <p className="text-gray-400 text-[12px] mt-6 text-center font-medium">
              * 위 일정은 교육원 사정에 따라 확정 또는 변동될 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-24 border-b border-gray-100">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-10">
              <div>
                <span className="text-[#8B1A2B] text-[13px] font-black tracking-[0.2em] uppercase mb-6 block">
                  Documentation
                </span>
                <h2 className="section-title text-left !ml-0 after:!mx-0 after:!mt-6">
                  제출 서류 안내
                </h2>
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="text-[#1a1a2e] font-bold text-[16px] mb-4 flex items-center gap-2">
                       <CheckCircle className="w-4 h-4 text-[#8B1A2B]" /> 필수 서류
                    </h4>
                    <ul className="space-y-3 text-[14px] text-gray-600 font-medium">
                      <li>• 입학원서 1부 (다운로드 가능)</li>
                      <li>• 반명함판 사진 2매 (최근 3개월)</li>
                      <li>• 최종학력 증명서 (졸업/재학)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="text-[#1a1a2e] font-bold text-[16px] mb-4 flex items-center gap-2">
                       <CheckCircle className="w-4 h-4 text-[#8B1A2B]" /> 선택/해당자 서류
                    </h4>
                    <ul className="space-y-3 text-[14px] text-gray-600 font-medium">
                      <li>• 공인 영어성적표 (TOEIC 등)</li>
                      <li>• 해외 체류 증빙 (여권, 비자 등)</li>
                      <li>• 경력증명서 (교육계 종사자)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="text-[18px] text-[#1a1a2e] font-black mb-8 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-[#8B1A2B]" />
                접수 및 유의사항
              </h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a2e] text-white flex items-center justify-center text-[13px] font-bold shrink-0">1</div>
                  <div>
                    <h5 className="text-[#1a1a2e] font-bold text-[15px] mb-1">온라인 접수</h5>
                    <p className="text-gray-500 text-[13px] font-medium">홈페이지 지원서 작성을 통한 실시간 접수</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1a1a2e] text-white flex items-center justify-center text-[13px] font-bold shrink-0">2</div>
                  <div>
                    <h5 className="text-[#1a1a2e] font-bold text-[15px] mb-1">방문/우편 접수</h5>
                    <p className="text-gray-500 text-[13px] font-medium">서울 강남교육센터 방문 또는 등기 우편 발송</p>
                  </div>
                </div>
                <div className="mt-10 p-5 bg-red-50 rounded-xl border border-red-100">
                  <div className="flex items-center gap-2 text-[#8B1A2B] font-bold text-[14px] mb-2">
                    <AlertCircle className="w-4 h-4" /> 안내사항
                  </div>
                  <p className="text-[#8B1A2B] text-[12px] font-medium leading-relaxed">
                    제출된 서류와 전형료는 반환되지 않으며, 허위 기재 시 합격이 취소될 수 있으니 신중히 작성해 주시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h3 className="section-title">
              자격증 활용 및 커리어
            </h3>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {certificates.map((cert, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 hover:border-[#8B1A2B] transition-colors shadow-sm">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
                  <cert.icon className="w-6 h-6 text-[#8B1A2B]" />
                </div>
                <h4 className="text-[#1a1a2e] text-[16px] font-black mb-3">{cert.title}</h4>
                <p className="text-gray-500 text-[13px] leading-relaxed font-medium whitespace-pre-line">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#8B1A2B]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-white text-[26px] lg:text-[32px] mb-3" style={{ fontWeight: 800 }}>
            당신의 글로벌 도전을 시작하세요
          </h2>
          <p className="text-white/70 text-[15px] mb-8">
            타임스와 함께라면 당신의 꿈은 실력이 됩니다
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/apply/level-test"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#8B1A2B] text-[16px] hover:bg-gray-100 transition"
              style={{ fontWeight: 700 }}
            >
              온라인 지원하기 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
