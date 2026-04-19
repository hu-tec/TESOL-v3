import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast, Toaster } from "sonner";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div>
      <Toaster position="top-center" />

      {/* Hero Section */}
      <div className="theme-bg">
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="theme-title mb-4">1:1 문의</h1>
            <p className="text-lg opacity-80" style={{maxWidth: '1000px', margin: '0 auto'}}>
              궁금한 점이 있으시면 편하게 문의해주세요
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid col-2 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="section-title mb-6">연락처 정보</h3>
            <div className="flex flex-col gap-4">
              {[
                { icon: Phone, label: "대표전화", value: "02-6207-9090" },
                { icon: Mail, label: "이메일", value: "hutechc01@gmail.com" },
                { icon: MapPin, label: "주소", value: "서울 서초구 양재천로 19길 26, 6층(양재동)" },
                { icon: Clock, label: "운영시간", value: "평일 09:00 - 18:00" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="card flex items-center p-6 gap-4 border-none shadow-sm pb-4">
                    <div className="shrink-0 flex items-center justify-center p-3 rounded-full bg-primary text-white">
                      <Icon className="text-white" style={{color: 'var(--white)'}} width={20} height={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted mb-1">{item.label}</p>
                      <p className="font-bold text-main">{item.value}</p>
                    </div>
                  </div>
                );
              })}
              <div className="bg-main text-white p-8 rounded-xl center mt-4 shadow-lg">
                <MessageCircle style={{ width: 40, height: 40, color: 'rgba(255,255,255,0.6)', margin: '0 auto 12px' }} />
                <h3 className="text-lg font-bold mb-1 text-white">빠른 상담</h3>
                <p className="text-sm opacity-80 mb-6">카카오톡으로 빠르게 상담받으세요</p>
                <a href="#" style={{
                  display: 'inline-block', padding: '12px 28px', background: '#FEE500',
                  color: '#3C1E1E', fontWeight: 700, borderRadius: '6px', fontSize: '0.95rem'
                }}>
                  카카오톡 상담
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 className="section-title mb-6">문의하기</h3>
            <div className="card p-8 border-none shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid col-2 gap-4">
                  <div>
                    <label className="font-bold mb-2 block" style={{fontSize: '1rem'}}>이름 *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="input-field"
                      placeholder="이름을 입력하세요"
                    />
                  </div>
                  <div>
                    <label className="font-bold mb-2 block" style={{fontSize: '1rem'}}>이메일 *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="input-field"
                      placeholder="이메일을 입력하세요"
                    />
                  </div>
                </div>
                <div className="grid col-2 gap-4">
                  <div>
                    <label className="font-bold mb-2 block" style={{fontSize: '1rem'}}>연락처</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="input-field"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="font-bold mb-2 block" style={{fontSize: '1rem'}}>문의 유형 *</label>
                    <select
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="input-field"
                    >
                      <option value="">선택해주세요</option>
                      <option>TESOL 과정 문의</option>
                      <option>AI 번역 과정 문의</option>
                      <option>AI 프롬프트 과정 문의</option>
                      <option>AI 윤리 과정 문의</option>
                      <option>ITT 정통 번역 문의</option>
                      <option>수강료 및 할인 문의</option>
                      <option>기타 문의</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="font-bold mb-2 block" style={{fontSize: '1rem'}}>문의 내용 *</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input-field"
                    placeholder="문의 내용을 입력하세요"
                    style={{ resize: 'none' }}
                  />
                </div>
                <button type="submit" className="btn-primary py-4 text-lg font-bold w-full flex items-center justify-center gap-2">
                  <Send width={18} height={18} />
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
