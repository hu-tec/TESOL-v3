import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Contact Info */}
        <div className="contact-info" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.3rem' }}>A. TESOL</span>
              <span style={{ borderLeft: '1px solid #374151', paddingLeft: '10px', color: '#9ca3af', fontSize: '0.85rem' }}>국제 영어교사 양성과정</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
              <p>상호명 : 주식회사 타임스미디어</p>
              <p>대표이사 : 김국진</p>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin style={{ width: 16, height: 16, marginTop: 3, flexShrink: 0 }} />
                서울 서초구 양재천로 19길 26, 6층(양재동)
              </p>
              <p>사업자번호 : 101-86-07479</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone style={{ width: 14, height: 14, flexShrink: 0 }} />
                02-6207-9090
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail style={{ width: 14, height: 14, flexShrink: 0 }} />
                hutechc01@gmail.com
              </p>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>교육프로그램</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <Link to="/courses/tesol" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>TESOL 영어교육</Link>
              <Link to="/courses/ai-translation" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>AI 번역·통역</Link>
              <Link to="/courses/itt" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>ITT 정통 통번역</Link>
              <Link to="/courses/ai-prompt" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>AI 프롬프트</Link>
              <Link to="/courses/ai-ethics" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>AI 윤리</Link>
            </div>
          </div>

          {/* Links 2 */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>학사소개</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <Link to="/about" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>교육원 소개</Link>
              <Link to="/admission" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>입학 안내</Link>
            </div>
          </div>

          {/* Links 3 */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1rem', fontWeight: 700, marginBottom: '16px' }}>지원 서비스</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a href="#" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>레벨테스트 신청</a>
              <a href="#" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>설명회 신청</a>
              <a href="#" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>자격증 발급 신청</a>
              <Link to="/contact" style={{ color: '#d1d5db', transition: 'color 0.2s' }}>1:1 문의</Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copy">
          <p>&copy; 2025 Times Media Inc. All rights reserved.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '8px' }}>
            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.2s', fontSize: '0.8rem' }}>이용약관</a>
            <a href="#" style={{ color: '#9ca3af', transition: 'color 0.2s', fontSize: '0.8rem' }}>개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
