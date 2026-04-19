import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  GraduationCap,
  Globe,
  Bot,
  Shield,
  Languages,
  Calendar,
  ClipboardCheck,
  ChevronRight,
  Zap,
  BookOpen,
  Award,
  Users,
  Clock,
  Building,
  Target,
  Handshake,
} from "lucide-react";

const mainCourses = [
  {
    id: "tesol",
    icon: GraduationCap,
    title: "TESOL 과정",
    tag: "8주 완성",
    path: "/courses/tesol",
    desc1: "글로벌 영어 교사 양성",
    desc2: "8주 완성 집중 프로그램 제공"
  },
  {
    id: "ai-trans",
    icon: Languages,
    title: "AI번역 코칭 전문가",
    tag: "미래 직업",
    path: "/courses/ai-translation",
    desc1: "AI를 활용한 번역 실무스킬",
    desc2: "최신 AI 번역 트렌드 반영"
  },
  {
    id: "ai-prompt",
    icon: Bot,
    title: "AI프롬프트 전문가",
    tag: "업무 생산성",
    path: "/courses/ai-prompt",
    desc1: "AI 도구 활용 전문가 양성",
    desc2: "실전 AI 과업수행 전략 교육"
  },
  {
    id: "ai-ethics",
    icon: Shield,
    title: "AI윤리/보안",
    tag: "필수 교육",
    path: "/courses/ai-ethics",
    desc1: "기업/개인 AI 윤리 가이드",
    desc2: "안전한 활용을 위한 필수교육"
  },
  {
    id: "itt",
    icon: Globe,
    title: "ITT 통번역",
    tag: "25년 전통",
    path: "/courses/itt",
    desc1: "25년 전통의 공신력",
    desc2: "실무번역 전문자격 취득과정"
  },
];

const quickServices = [
  { title: "레벨테스트", subtitle: "실력 진단", path: "/apply/level-test", icon: ClipboardCheck },
  { title: "학습 TIP", subtitle: "노하우 전수", path: "/apply/tip", icon: BookOpen },
  { title: "기업 견적", subtitle: "B2B 문의", path: "/apply/corporate", icon: Building },
  { title: "세미나", subtitle: "참가 신청", path: "/apply/seminar", icon: Users },
  { title: "입학설명회", subtitle: "방문 상담", path: "/apply/orientation", icon: GraduationCap },
];

const stats = [
  { label: "교육경험", value: 23, suffix: "년+", icon: Clock },
  { label: "TESOL졸업생", value: 30000, suffix: "+", icon: Users },
  { label: "글로벌네트워크", value: 12, suffix: "개국+", icon: Globe },
  { label: "전문과정", value: 6, suffix: "개 분야", icon: Target },
];

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export function HomePage() {
  // Particle system
  const particles = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: 4 + Math.random() * 2,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 3,
    }));
  }, []);

  return (
    <div style={{ background: 'var(--bg-main)' }}>
      {/* ═══ HERO SECTION ═══ */}
      <section className="hero-section">
        {/* Grid Background */}
        <div className="hero-grid-bg" />

        {/* Floating Particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              '--duration': `${p.duration}s`,
              '--delay': `${p.delay}s`,
            } as React.CSSProperties}
          />
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '40px' }}>
            {/* Pill Tag */}
            <div className="hero-pill">
              GLOBAL NO.1 TESOL ACADEMY
            </div>

            {/* Accent Line */}
            <div style={{ width: '60px', height: '3px', background: 'var(--primary)', borderRadius: '2px', marginBottom: '32px' }} />

            {/* Title */}
            <h1 className="hero-title" style={{ textAlign: 'center' }}>
              글로벌 시대,<br />
              <span className="highlight">영어로 가르치는</span> 전문가를<br />
              양성합니다
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle" style={{ textAlign: 'center' }}>
              23년 교육 노하우와 글로벌 네트워크로<br />
              대체 불가능한 역량을 완성합니다.
            </p>

            {/* Hero Buttons */}
            <div className="hero-buttons">
              <Link to="/courses/tesol" className="btn-primary" style={{ padding: '15px 30px', fontSize: '1rem', fontWeight: 600 }}>
                교육과정 보기
              </Link>
              <Link to="/apply/orientation" className="btn-white">
                수강 신청하기
              </Link>
              <Link to="/contact" className="btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)' }}>
                1:1 문의하기
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats">
              {stats.map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div className="hero-stat-num">
                    <CountUp end={stat.value} />
                    <span style={{ fontSize: '0.9rem', marginLeft: '2px' }}>{stat.suffix}</span>
                  </div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT US SECTION ═══ */}
      <section style={{ padding: '6rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-title">글로벌 교육의 기준, A. TESOL</div>
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.8, fontSize: '1.05rem' }}>
                A. TESOL은 23년여 동안 3만 명 이상의 수강생 인재를 배출해온 대한민국의 대표 교육 전문기관입니다. 국내 유일하게 TESOL, ITT 통번역 과정을 명문대학교와 함께 진행하고 있습니다.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.8, fontSize: '1.05rem' }}>
                미래 사회의 리더를 양성하기 위해 체계적인 커리큘럼으로 실무 현장에서 즉시 활용 가능한 전문 인재를 키워내고 있습니다.
              </p>
              <Link to="/about" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                더 알아보기 <ChevronRight style={{ width: 16, height: 16 }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMS (5 COURSES) ═══ */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-title center-inline">미래를 준비하는 5가지 전문 과정</div>
            <p style={{ color: 'var(--text-muted)', marginTop: '12px' }}>
              AI 시대를 맞은 체계적인 교육으로 글로벌 전문가를 꿈꾸세요
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {mainCourses.map((course) => {
              const Icon = course.icon;
              return (
                <Link key={course.id} to={course.path} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'rgba(155, 34, 38, 0.08)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Icon style={{ width: 24, height: 24, color: 'var(--primary)' }} />
                    </div>
                    <span className="course-badge">{course.tag}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '12px' }}>
                    {course.title}
                  </h3>
                  <ul className="bullet-list" style={{ flex: 1 }}>
                    <li>{course.desc1}</li>
                    <li>{course.desc2}</li>
                  </ul>
                  <div style={{ marginTop: '16px', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    바로가기 <ChevronRight style={{ width: 14, height: 14 }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section style={{ padding: '6rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-title center-inline">맞춤형 교육 서비스</div>
            <p style={{ color: 'var(--text-muted)', marginTop: '12px' }}>
              필요하신 서비스를 선택하여 간편하게 진행하세요.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px' }}>
            {quickServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} to={service.path} className="card" style={{ textAlign: 'center', textDecoration: 'none' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: 'rgba(155, 34, 38, 0.06)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    border: '1px solid rgba(155, 34, 38, 0.1)',
                  }}>
                    <Icon style={{ width: 28, height: 28, color: 'var(--primary)' }} />
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>{service.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{service.subtitle}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ STATS SECTION (Dark) ═══ */}
      <section style={{
        padding: '6rem 0',
        background: 'linear-gradient(165deg, #0f0f0f 0%, #1a1015 30%, #0f0f0f 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '48px', textAlign: 'center' }}>
            {[
              { label: "교육경험", value: 23, suffix: "년+" },
              { label: "인재배출", value: 30000, suffix: "명+" },
              { label: "설립년도", value: 2001, suffix: "년" },
              { label: "단기속성", value: 8, suffix: "주" },
              { label: "응시생", value: 30, suffix: "만명+" },
              { label: "네트워크", value: 12, suffix: "개국" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--white)', marginBottom: '8px', letterSpacing: '-0.03em' }}>
                  <CountUp end={stat.value} />
                  <span style={{ color: 'var(--primary)', fontSize: '1.1rem', marginLeft: '4px' }}>{stat.suffix}</span>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NETWORK & PARTNERS ═══ */}
      <section style={{ padding: '6rem 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-title center-inline">글로벌 교육 네트워크</div>
            <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>전국 주요 대학 및 해외 명문 교육기관과 함께합니다.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {/* Universities */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '10px', borderBottom: '2px solid var(--primary)', marginBottom: '16px' }}>
                <Building style={{ width: 20, height: 20, color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>전 대학 교육장 소개</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {["연세대학교", "한동대학교", "단국대학교", "동국대학교", "부산대학교", "영남대학교", "한림대학교", "동아대학교", "서울교육대학교", "충남대학교"].map((name) => (
                  <div key={name} style={{
                    fontSize: '0.85rem', color: 'var(--text-muted)', background: 'var(--white)',
                    padding: '10px 16px', border: '1px solid var(--border)', fontWeight: 500,
                    transition: 'all 0.2s', cursor: 'default'
                  }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* Media & Associations */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '10px', borderBottom: '2px solid var(--border)', marginBottom: '16px' }}>
                <Handshake style={{ width: 20, height: 20, color: 'var(--text-muted)' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>전 언론/ 학회 협약처</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {["코리아 헤럴드 교육센터", "코리아 타임스 교육센터", "CBS교육 센터", "부산 KNN 교육센터", "중앙일보 IT 데일리", "국제통역번역협회", "한국 번역학회"].map((name) => (
                  <div key={name} style={{
                    fontSize: '0.85rem', color: 'var(--text-muted)', background: 'var(--white)',
                    padding: '10px 16px', border: '1px solid var(--border)', fontWeight: 500,
                  }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* International Universities */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '10px', borderBottom: '2px solid var(--primary)', marginBottom: '16px' }}>
                <Globe style={{ width: 20, height: 20, color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>해외 대학 / 업무 협약</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {["캐나다 교육 센터", "중국 교육센터", "미국 교육센터", "캘리포니아 주립대학교-롱비치", "캘리포니아 주립대학교-샌버나디노", "플로리다 대학교"].map((name) => (
                  <div key={name} style={{
                    fontSize: '0.85rem', color: 'var(--text-muted)', background: 'var(--white)',
                    padding: '10px 16px', border: '1px solid var(--border)', fontWeight: 500,
                  }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>

            {/* Partner Institutions */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingBottom: '10px', borderBottom: '2px solid var(--border)', marginBottom: '16px' }}>
                <Users style={{ width: 20, height: 20, color: 'var(--text-muted)' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>해외 제휴 및 협업 기관</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {["UBC", "STIBC", "Purdue University", "CSULB", "USM", "IVY Tech", "호주 NATTI"].map((name) => (
                  <div key={name} style={{
                    fontSize: '0.85rem', color: 'var(--text-muted)', background: 'var(--white)',
                    padding: '10px 16px', border: '1px solid var(--border)', fontWeight: 500,
                  }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{
        padding: '6rem 0',
        background: 'var(--primary)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
          <h2 style={{ color: 'var(--white)', fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '24px' }}>
            지금, 당신의 꿈에<br />A. TESOL을 더하세요.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginBottom: '48px', maxWidth: '500px', margin: '0 auto 48px' }}>
            23년 교육 노하우가 집약된 커리큘럼으로<br />AI 시대에도 흔들리지 않는 전문가가 되십시오.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/admission" className="btn-white" style={{ fontSize: '1.05rem' }}>
              무료 수강상담 신청
            </Link>
            <Link to="/apply/orientation" className="btn-outline" style={{ borderColor: 'var(--white)', color: 'var(--white)', fontSize: '1.05rem' }}>
              입학설명회 신청
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
