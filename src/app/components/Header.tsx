import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

const navItems = [
  { label: "홈", path: "/" },
  { label: "교육원 소개", path: "/about" },
  { label: "입학안내", path: "/admission" },
  {
    label: "과목 소개",
    path: "/courses/tesol",
    children: [
      { label: "TESOL 영어교육", path: "/courses/tesol" },
      { label: "AI 번역·통역", path: "/courses/ai-translation" },
      { label: "AI 프롬프트", path: "/courses/ai-prompt" },
      { label: "AI 윤리", path: "/courses/ai-ethics" },
      { label: "ITT 정통 통번역", path: "/courses/itt" },
    ],
  },
  { label: "커뮤니티", path: "/community" },
  { label: "문의", path: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  return (
    <>
      {/* Main Nav - GNB */}
      <header className="gnb-header">
        <div className="container flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="logo flex items-center" style={{ textDecoration: 'none' }}>
            <h1>A. TESOL</h1>
            <span className="subtitle">국제 영어교사 양성과정</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-links" style={{ display: 'flex' }}>
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                item.children?.some((c) => location.pathname === c.path);

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="nav-item"
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center gap-1 ${isActive ? "active" : ""}`}
                    >
                      {item.label}
                      <ChevronDown style={{ width: 14, height: 14, marginTop: 2 }} />
                    </Link>
                    {dropdownOpen === item.label && (
                      <div className="dropdown" style={{ opacity: 1, visibility: 'visible', transform: 'translateX(-50%) translateY(0)' }}>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`dropdown-item ${location.pathname === child.path ? "text-primary font-bold bg-secondary/30" : ""}`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={item.label} className="nav-item">
                  <Link
                    to={item.path}
                    className={isActive ? "active" : ""}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/apply/orientation" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', display: 'none' }} id="desktop-cta">
              수강 신청
            </Link>
            <style>{`@media (min-width: 1024px) { #desktop-cta { display: inline-block !important; } }`}</style>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ display: 'none', padding: '8px', color: 'var(--text-main)' }}
              id="mobile-toggle"
            >
              {mobileOpen ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
            </button>
            <style>{`@media (max-width: 768px) { #mobile-toggle { display: block !important; } .nav-links { display: none !important; } }`}</style>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            position: 'absolute',
            top: '72px',
            left: 0,
            right: 0,
            background: 'var(--white)',
            borderTop: '1px solid var(--border)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            zIndex: 100,
            padding: '16px 20px'
          }}>
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => !item.children && setMobileOpen(false)}
                  style={{
                    display: 'block',
                    padding: '12px 16px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text-main)',
                    borderRadius: '8px',
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div style={{ paddingLeft: '24px' }}>
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block',
                          padding: '8px 16px',
                          fontSize: '0.9rem',
                          color: location.pathname === child.path ? 'var(--primary)' : 'var(--text-muted)',
                          fontWeight: location.pathname === child.path ? 600 : 400,
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div style={{ padding: '16px', borderTop: `1px solid var(--border)`, marginTop: '8px' }}>
              <Link
                to="/apply/orientation"
                onClick={() => setMobileOpen(false)}
                className="btn-primary"
                style={{ display: 'block', textAlign: 'center', padding: '14px' }}
              >
                수강 신청
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
