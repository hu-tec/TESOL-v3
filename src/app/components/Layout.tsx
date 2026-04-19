import { Outlet, useLocation, Link } from "react-router";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ChatBot } from "./ChatBot";
import { ArrowUp, GraduationCap } from "lucide-react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />

      {/* Floating CTA */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 60, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
        <ChatBot />
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              width: '48px', height: '48px', background: 'var(--white)', color: 'var(--text-muted)',
              borderRadius: '50%', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', border: '1px solid var(--border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <ArrowUp style={{ width: 20, height: 20 }} />
          </button>
        )}
        <Link
          to="/admission"
          style={{
            width: '56px', height: '56px', background: 'var(--primary)', color: 'var(--white)',
            borderRadius: '50%', boxShadow: '0 4px 20px rgba(155, 34, 38, 0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s'
          }}
          title="수강 신청"
        >
          <GraduationCap style={{ width: 24, height: 24 }} />
        </Link>
      </div>
    </div>
  );
}
