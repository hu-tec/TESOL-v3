import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import cert1 from "figma:asset/0d7ed677fd179d2d644aa7d28b2cbe4c3a5c24f2.png";
import cert2 from "figma:asset/f0afac9ce648186d1aaceb74a91d73f9e88b423e.png";
import cert3 from "figma:asset/42f15d19c0f4e519b4a8ff92b07700de332b508f.png";

export function CertificateBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-4 block" style={{ fontWeight: 600 }}>
            Official Certificates
          </span>
          <h2 className="text-[24px] lg:text-[30px] text-[#1a1a2e]" style={{ fontWeight: 800 }}>
            수료 및 자격 인증
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[cert1, cert2, cert3].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className="w-full aspect-[1/1.41] overflow-hidden bg-gray-50 flex items-center justify-center border border-gray-100">
                <ImageWithFallback
                  src={img}
                  alt={`Certificate ${i + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CoreDesignProps {
  courseName: string;
}

export function CoreDesign({ courseName }: CoreDesignProps) {
  return (
    <section className="py-20 bg-[#faf8f6]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-[#8B1A2B] text-[12px] tracking-[0.2em] uppercase mb-5 block" style={{ fontWeight: 600 }}>
          Core Design
        </span>
        <h2 className="text-[26px] lg:text-[32px] text-[#1a1a2e] mb-6" style={{ fontWeight: 800 }}>
          타임스 {courseName} 핵심 설계
        </h2>
        <p className="text-gray-600 text-[15px] max-w-2xl mx-auto mb-4" style={{ lineHeight: 1.8 }}>
          읽기·쓰기·듣기·말하기 네 가지 영어 핵심 스킬을 프레젠테이션, 팀 회의, 영업, 마케팅, 협상 등
          모든 실무 상황에서 활용할 수 있도록 설계되었습니다.
        </p>
        <p className="text-[#8B1A2B] text-[15px] max-w-2xl mx-auto" style={{ fontWeight: 600, lineHeight: 1.8 }}>
          토익·토플처럼 시험 점수로만 끝나는 것이 아니라,
          즉시 현장에서 쓰이는 실무형 영어 커뮤니케이션 능력을 갖추게 됩니다.
        </p>
      </div>
    </section>
  );
}

export interface DetailInfoItem {
  label: string;
  value: string;
}

export function DetailInfoGrid({ items }: { items: DetailInfoItem[] }) {
  return (
    <div className="bg-white border-y border-gray-100 mb-12">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
        {items.map((item, i) => (
          <li key={i} className="px-8 py-6 flex flex-col gap-1">
            <span className="text-[#8B1A2B] text-[11px] font-black tracking-widest uppercase opacity-80">{item.label}</span>
            <span className="text-[#1a1a2e] text-[15px] font-bold">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface CurriculumTableItem {
  week: string;
  content: string;
  topic?: string;
}

export function HorizontalScrollTable({ items, title }: { items: CurriculumTableItem[], title?: string }) {
  return (
    <div className="py-12 border-t border-gray-100">
      {title && (
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-6 bg-[#8B1A2B]" />
          <h3 className="text-[20px] text-[#1a1a2e] font-black">{title}</h3>
        </div>
      )}
      <div className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b-2 border-[#1a1a2e]">
              <th className="py-4 px-6 text-left text-[13px] font-black text-[#1a1a2e] w-[120px]">주차</th>
              <th className="py-4 px-6 text-left text-[13px] font-black text-[#1a1a2e]">학습 및 교육 내용</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {items.map((item, i) => (
              <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                <td className="py-5 px-6 text-[14px] font-black text-[#8B1A2B]">{item.week}</td>
                <td className="py-5 px-6">
                  <div className="flex flex-col gap-1">
                    {item.topic && <span className="text-[15px] font-bold text-[#1a1a2e]">{item.topic}</span>}
                    <span className="text-[14px] text-gray-600 leading-relaxed font-medium">{item.content}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
