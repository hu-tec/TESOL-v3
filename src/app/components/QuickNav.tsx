import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Languages, 
  Info,
  ChevronRight
} from "lucide-react";

const navItems = [
  { name: "시험 공통", path: "/admission", icon: Info },
  { name: "TESOL", path: "/courses/tesol", icon: BookOpen },
  { name: "AI 번역", path: "/courses/ai-translation", icon: Globe },
  { name: "AI 프롬프트", path: "/courses/ai-prompt", icon: Cpu },
  { name: "AI 윤리", path: "/courses/ai-ethics", icon: ShieldCheck },
  { name: "ITT 통번역", path: "/courses/itt", icon: Languages },
];

export function CourseMenuBar() {
  const location = useLocation();

  return (
    <div className="w-full bg-gray-50 border-y border-gray-200">
      <div className="container overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-center min-w-max h-full">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center justify-center gap-3 px-10 py-6 text-[16px] font-bold border-x -ml-[1px] transition-all relative min-w-[200px] ${
                  isActive 
                    ? "bg-white text-[#8B1A2B] border-t-4 border-t-[#8B1A2B] z-10 shadow-[0_-5px_15px_rgba(0,0,0,0.05)]" 
                    : "bg-transparent text-gray-400 border-t-4 border-t-transparent hover:bg-white hover:text-[#1a1a2e]"
                } border-gray-200`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-[#8B1A2B]' : 'text-gray-300'}`} />
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function QuickNav() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero section (~500px)
      setIsVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show on course pages or admission page
  const isCoursePage = location.pathname.startsWith("/courses/") || location.pathname === "/admission";
  if (!isCoursePage) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-[70px] left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm hidden md:block"
        >
          <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
            <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-[13px] font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                      isActive ? "text-[#8B1A2B]" : "text-gray-500 hover:text-[#8B1A2B]"
                    }`}
                  >
                    {item.name}
                    {isActive && <motion.div layoutId="course-nav-active" className="w-1 h-1 rounded-full bg-[#8B1A2B]" />}
                  </Link>
                );
              })}
            </div>
            <Link 
              to="/apply/orientation" 
              className="bg-[#8B1A2B] text-white px-4 py-1.5 rounded text-[12px] font-bold hover:bg-[#6d1422] transition-colors flex items-center gap-1"
            >
              수강신청 <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CourseSubNav() {
  // We'll keep it as null for now as it's redundant with QuickNav and CourseMenuBar
  return null;
}

// Mobile Version (Sticky Bottom Bar)
export function MobileQuickNav() {
  const location = useLocation();
  const isCoursePage = location.pathname.startsWith("/courses/") || location.pathname === "/admission";
  
  if (!isCoursePage) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#1a1a2e] border-t border-white/10 px-2 py-2 shadow-2xl">
      <div className="flex justify-between items-center overflow-x-auto gap-1 no-scrollbar px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center min-w-[65px] py-1.5 px-1 rounded-md transition-all ${
                isActive ? "text-white bg-[#8B1A2B]" : "text-white/40"
              }`}
            >
              <Icon className="w-4 h-4 mb-1" />
              <span className="text-[9px] font-bold whitespace-nowrap">{item.name.replace(" 교육", "")}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
