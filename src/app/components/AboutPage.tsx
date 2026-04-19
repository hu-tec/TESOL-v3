import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Award,
  Globe,
  Users,
  Shield,
  BookOpen,
  Building,
  Handshake,
  GraduationCap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const timeline = [
  { year: "2026", event: "누적학생수 23,000명 달성" },
  { year: "2017", event: "타임스미디어 누적졸업생 12000명 돌파" },
  { year: "2016", event: "유비쿼티스 교육진행" },
  { year: "2015", event: "실무 비즈니스 ProMBA과정 개설 / 중국대 비즈니스 통역과정 개설" },
  { year: "2014", event: "ITT 미국 캘리포니아 시험센터 오픈 / 경남 ICS국제학교 개교 / 용산교육연수원 교사교육" },
  { year: "2013", event: "ITT 법무부 통역번역 자격증 공증 자격증 체택 / 미국 캘리포니아 대학 성인수 교육과정 개설" },
  { year: "2012", event: "IVY Junior 어학원, 공부방 프랜차이즈 오픈 / 미국 Concordia 코네티컷 협약" },
  { year: "2011", event: "세계최초 LGBT기반 ITT 시험시행 / 캐나다 ITT 시험센터 오픈 (KGIC)" },
  { year: "2010", event: "서울교육대 영어문모교사 양성과정 개설" },
  { year: "2009", event: "미국 AEF 한국센터 자정 / 아이비리그 유명 교수초청 특강" },
  { year: "2008", event: "서울시교육청 교원직무연수기관 지정" },
  { year: "2007", event: "영어회화전문강사 고객 발간 및 교육과정 진행" },
  { year: "2006", event: "국제통역번역시험위원회 문화관광부 비영리단체 등록" },
  { year: "2005", event: "의료관광 및 의료 통역 교육진행 / Pro-MBA 비지니스 과정 진행" },
  { year: "2004", event: "태솔 과정 오픈 / (서울 및 부산 - 각 대학)" },
  { year: "1997~2004", event: "타임스 미디어 설립 / 기업체 유고교육 진행 / 통번역 시업진행" }
];

const features = [
  {
    icon: Globe,
    title: "23년 글로벌 교육 전문",
    desc: "미국, 캐나다, 중국 등 해외대학과 연세대 등 국내 명문대학 공동 운영",
  },
  {
    icon: Shield,
    title: "국내최초 AI 윤리·보안 시험",
    desc: "AI 프롬프트, AI 통역·번역 교육과 전통 교육의 결합",
  },
  {
    icon: Award,
    title: "28년 시험운영",
    desc: "법무부 공증 자격 시험(ITT), 다언어 전문인력 평가",
  },
  {
    icon: Handshake,
    title: "2030년 실무 현장 중심 기업 연계",
    desc: "전문가 협업, 미래 인재양성, 국제 글로벌 네트워크",
  },
];

const aiFeatures = [
  "AI활용을 통해 차세대 미래 인재 양성",
  "20년 전문가 집단지성 활용 AI 감시, 평가, 검증, 승인 전문 인재 양성",
  "공통 AI윤리교육과 보안교육을 통한 기초 인력 양성",
  "로봇, 바이오, 방산, 마케팅 등 분야 활용 가능한 실무형 인재 양성",
  "전문가(20년 전문)의 노하우와 AI를 결합한 교육",
];

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="theme-title mb-4">교육원 소개</h1>
            <p className="text-lg opacity-80" style={{maxWidth: '1000px', margin: '0 auto'}}>
              AI 시대에도, 사람을 키우는 건 결국 사람입니다.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Key Numbers */}
      <section style={{ padding: '3rem 0', background: 'var(--white)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { num: "3만명+", label: "TESOL 전문교사 양성" },
              { num: "30만명+", label: "ITT 인재평가시험" },
              { num: "10개+", label: "국내 대학 센터" },
              { num: "12개", label: "지원 언어" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 800 }}>{s.num}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-title center-inline">타임스미디어의 핵심 가치</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card"
                >
                  <div style={{
                    width: '56px', height: '56px', background: 'rgba(155, 34, 38, 0.08)',
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'
                  }}>
                    <Icon style={{ width: 28, height: 28, color: 'var(--primary)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
                    {f.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '56px', alignItems: 'center' }}>
            <div>
              <div className="section-title">글로벌 교육의 기준을 제시합니다</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '32px', lineHeight: 1.8 }}>
                정통 TESOL 교육을 바탕으로 통번역 자격 과정까지, 
                세계 시장에서 경쟁력 있는 인재를 양성하는 데 집중합니다.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  "실무 중심의 현장 밀착형 커리큘럼",
                  "전 세계 어디서나 인정받는 공신력 있는 자격증",
                  "23년 전통의 교육 노하우와 검증된 강사진",
                  "학업부터 취업까지 연계되는 토탈 지원 시스템"
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <CheckCircle style={{ width: 20, height: 20, color: 'var(--primary)', marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: '40px', textAlign: 'center' }}>
              <div style={{
                width: '100px', height: '100px', background: 'var(--primary)', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'
              }}>
                <BookOpen style={{ width: 48, height: 48, color: 'var(--white)' }} />
              </div>
              <h4 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '8px' }}>TESOL & ITT</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>글로벌 리더로 성장하는 가장 빠른 길</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section style={{ padding: '5rem 0', background: 'var(--text-main)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--white)', fontWeight: 700, lineHeight: 1.4, marginBottom: '24px' }}>
            단어를 '이해'하고, 맥락을 '전달'하는 일은<br />
            <span style={{ color: '#e8a0a0' }}>결국 사람의 영역</span>입니다.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 40px' }}>
            <p>TESOL 교사교육, ITT 정통 언어(통역·번역)교육은 글로벌 시장에서 활약하기 위한 핵심 역량입니다.</p>
            <p>우수한 교수진의 노하우를 통해 실무에 바로 적용 가능한 실력을 완성하십시오.</p>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section style={{ padding: '5rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <div className="card" style={{ padding: '48px', textAlign: 'center' }}>
            <div style={{
              width: '80px', height: '80px', background: 'var(--primary)', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
            }}>
              <span style={{ color: 'var(--white)', fontSize: '1.5rem', fontWeight: 700 }}>TM</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px' }}>A. TESOL 교육팀 일동</h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.9, textAlign: 'left' }}>
              <p style={{ marginBottom: '16px' }}>
                A. TESOL은 2001년 사업을 시작하며 ITT 정통 통역·번역 수업과 TESOL 과정을 운영하며,
                수많은 전문가를 배출해왔습니다.
              </p>
              <p style={{ marginBottom: '16px' }}>
                앞으로는 그 전통 위에 AI 통역·번역 교육을 더해, 미래 세대가 세계 어디서든 경쟁력 있는
                커뮤니케이터가 될 수 있도록 하겠습니다.
              </p>
              <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '16px' }}>
                "23년간 3만 명" - 저희가 배출한 졸업생들은 학교, 기업, 정부, 해외 현장에서 세계와 연결되는 다리가 되었습니다.
              </p>
              <p>
                여러분이 해외 교육이나 취업을 꿈꾸든, 글로벌 시장에서 프로젝트를 이끌든,
                그 길에 A. TESOL 교육팀이 든든한 동반자가 되겠습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-title center-inline">타임스미디어 연혁</div>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {timeline.map((item, i) => (
              <motion.div
                key={`${item.year}-${i}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                style={{
                  display: 'flex',
                  gap: '24px',
                  paddingBottom: '24px',
                  marginBottom: '24px',
                  borderBottom: i < timeline.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{
                  minWidth: '100px',
                  fontWeight: 700,
                  color: i < 4 ? 'var(--primary)' : 'var(--text-muted)',
                  fontSize: '1rem',
                }}>
                  {item.year}
                </div>
                <div style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                }}>
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Network */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-title center-inline">교육 네트워크 현황</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              {
                icon: Building, title: "전 대학 교육장 소개",
                items: ["연세대학교", "한동대학교", "단국대학교", "동국대학교", "부산대학교", "영남대학교", "한림대학교", "동아대학교", "서울교육대학교", "충남대학교"]
              },
              {
                icon: Handshake, title: "언론 교육센터 및 학회 협약처",
                items: ["코리아 헤럴드 교육센터", "코리아 타임스 교육센터", "CBS교육 센터", "부산 KNN 교육센터", "중앙일보 IT 데일리 교육센터", "국제통역번역협회", "한국 번역학회"]
              },
              {
                icon: Globe, title: "해외 교육 센터 및 교육 협약처",
                items: ["캐나다 교육 센터", "중국 교육센터", "미국 교육센터", "캘리포니아 주립대학교-롱비치", "캘리포니아 주립대학교-샌버나디노"]
              },
              {
                icon: Users, title: "해외 제휴 협업 기관",
                items: ["UBC", "STIBC", "Purdue University", "CSULB", "USM", "IVY TECH", "호주 NATTI", "미국 콩코디아 대학교"]
              },
            ].map((col) => {
              const Icon = col.icon;
              return (
                <div key={col.title}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '10px', borderBottom: '2px solid var(--primary)', marginBottom: '16px' }}>
                    <Icon style={{ width: 20, height: 20, color: 'var(--primary)' }} />
                    <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{col.title}</h3>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {col.items.map((name) => (
                      <div key={name} style={{
                        background: 'var(--white)', padding: '10px 16px', border: '1px solid var(--border)',
                        fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-main)',
                      }}>
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 0', background: 'var(--primary)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '2rem', fontWeight: 800, marginBottom: '16px' }}>
            곧 전국 교실을 넘어 전세계에서 만나겠습니다
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', marginBottom: '32px' }}>
            AI 시대, 당신의 경쟁력을 타임스미디어와 함께 시작하세요
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/admission" className="btn-white" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              수강 신청하기 <ArrowRight style={{ width: 20, height: 20 }} />
            </Link>
            <Link to="/contact" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'var(--white)' }}>
              1:1 문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}