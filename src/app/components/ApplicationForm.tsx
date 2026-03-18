import { useState } from "react";
import { useForm } from "react-hook-form";
import { 
  CheckCircle, 
  Send, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  BookOpen, 
  MessageSquare,
  Building,
  GraduationCap,
  MapPin,
  Clock,
  Briefcase,
  Target,
  FileCheck,
  ChevronDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "./ui/select";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "./ui/form";

type ApplicationType = "level-test" | "tip" | "corporate" | "seminar" | "orientation" | "admission";

const CATEGORY_DATA: Record<string, { label: string; medium: Record<string, string[]> }> = {
  tesol: {
    label: "TESOL 영어교육",
    medium: {
      "교육": ["1급", "2급", "3급"],
      "일반": ["수료과정"],
      "전문": ["전문가과정"],
    }
  },
  prompt: {
    label: "AI 프롬프트",
    medium: {
      "교육": ["1급", "2급", "3급", "4급", "5급", "6급", "7급", "8급"],
      "일반": ["1급", "2급", "3급"],
      "전문": ["1급", "2급"]
    }
  },
  translation: {
    label: "AI 번역",
    medium: {
      "교육": ["1급", "2급", "3급", "4급", "5급", "6급", "7급", "8급"],
      "일반": ["1급", "2급", "3급"],
      "전문": ["1급", "2급"]
    }
  },
  ethics: {
    label: "AI 윤리",
    medium: {
      "교육": ["1급", "2급", "3급", "4급", "5급", "6급", "7급", "8급"],
      "일반": ["1급", "2급", "3급"],
      "전문": ["1급", "2급"]
    }
  },
  itt: {
    label: "ITT 번역교육",
    medium: {
      "전문": ["1급", "2급"],
      "일반": ["1급", "2급", "3급"],
      "교육": ["강사과정"]
    }
  }
};

interface FormProps {
  type: ApplicationType;
  title: string;
  subtitle: string;
}

export function ApplicationForm({ type, title, subtitle }: FormProps) {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm({
    defaultValues: {
      application_type: type === "level-test" ? "level-test" : type === "seminar" ? "seminar" : type === "tip" ? "tip" : "course",
      name: "",
      birth_date: "",
      phone: "",
      email: "",
      domain: "",
      category_medium: "",
      category_small: "",
      region: "",
      apply_month: "",
      apply_day: "",
      apply_hour: "",
      education: "",
      job: "",
      interests: [] as string[],
      other_interest: "",
      message: "",
      agreement: false,
    },
  });

  const onSubmit = async (data: any) => {
    if (!data.agreement) {
      toast.error("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    // console.log("Form data:", data);
    setSubmitted(true);
    toast.success("신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.");
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto py-20 text-center"
      >
        <div className="w-16 h-16 bg-[#8B1A2B] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-[24px] font-bold text-[#1a1a2e] mb-4">신청 완료!</h2>
        <p className="text-gray-600 mb-8">
          정상적으로 접수되었습니다. <br />
          입력하신 연락처로 빠른 시일 내에 안내드리겠습니다.
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          className="bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white px-8 py-6 h-auto text-[16px] rounded-lg"
        >
          홈으로 돌아가기
        </Button>
      </motion.div>
    );
  }

  const interestOptions = [
    { id: "employment", label: "취업" },
    { id: "certification", label: "자격증 취득" },
    { id: "skill", label: "업무 능력향상" },
    { id: "other", label: "그외" },
  ];

  return (
    <div className="max-w-[1100px] mx-auto py-4 px-6">
      <div className="mb-4 text-center">
        <h1 className="text-[24px] lg:text-[28px] font-extrabold text-[#1a1a2e] mb-1 tracking-tight">
          {title}
        </h1>
        <p className="text-gray-500 text-[13px]">{subtitle}</p>
      </div>

      <div className="bg-white border border-gray-100 rounded-xl shadow-2xl shadow-gray-200/50 overflow-hidden">
        <div className="bg-[#8B1A2B] py-3 px-6">
          <h2 className="text-white font-bold text-[16px] flex items-center gap-2">
            <FileCheck className="w-4 h-4" /> 수강 신청서 작성
          </h2>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 space-y-6">
            
            {/* Top Row: 신청 구분 (Full width but compact) */}
            <div className="bg-gray-50/50 p-6 rounded-lg border border-gray-200 flex flex-wrap items-center gap-10">
              <div className="flex items-center gap-2 text-[#8B1A2B]">
                <Target className="w-5 h-5" />
                <span className="text-[16px] font-black uppercase">신청 구분</span>
              </div>
              <FormField
                control={form.control}
                name="application_type"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormControl>
                      <div className="flex flex-wrap gap-8">
                        {[
                          { value: "course", label: "수업신청" },
                          { value: "level-test", label: "레벨테스트" },
                          { value: "seminar", label: "설명회신청" },
                          { value: "tip", label: "TIP신청" },
                        ].map((item) => (
                          <div key={item.value} className="flex items-center space-x-3 cursor-pointer">
                            <Checkbox
                              checked={field.value === item.value}
                              onCheckedChange={() => field.onChange(item.value)}
                              className="size-6 border-[#8B1A2B] data-[state=checked]:bg-[#8B1A2B] data-[state=checked]:border-[#8B1A2B]"
                            />
                            <Label 
                              onClick={() => field.onChange(item.value)}
                              className="text-[15px] font-bold text-gray-800 cursor-pointer"
                            >
                              {item.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-x-10 gap-y-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Section 2: 기본정보 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#8B1A2B] border-b border-gray-100 pb-1.5">
                    <User className="w-4 h-4" />
                    <span className="text-[14px] font-bold uppercase">기본 정보</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[12px] font-bold text-gray-600">성명</FormLabel>
                          <FormControl>
                            <Input placeholder="성함" {...field} required className="h-9 bg-gray-50/50" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="birth_date"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[12px] font-bold text-gray-600">생년월일</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} required className="h-9 bg-gray-50/50" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[12px] font-bold text-gray-600">연락처</FormLabel>
                          <FormControl>
                            <Input placeholder="010-0000-0000" {...field} required className="h-9 bg-gray-50/50" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[12px] font-bold text-gray-600">이메일</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="example@email.com" {...field} required className="h-9 bg-gray-50/50" />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Section 3: 신청 영역 및 지역 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#8B1A2B] border-b border-gray-100 pb-1.5">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-[14px] font-bold uppercase">신청 영역 및 지역</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <FormField
                      control={form.control}
                      name="domain"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[12px] font-bold text-gray-600">신청 영역</FormLabel>
                          <Select 
                            onValueChange={(val) => {
                              field.onChange(val);
                              form.setValue("category_medium", "");
                              form.setValue("category_small", "");
                            }} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-9 bg-gray-50/50 text-[12px]">
                                <SelectValue placeholder="영역 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {Object.entries(CATEGORY_DATA).map(([key, data]) => (
                                <SelectItem key={key} value={key}>{data.label}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="category_medium"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[12px] font-bold text-gray-600">분류</FormLabel>
                          <Select 
                            onValueChange={(val) => {
                              field.onChange(val);
                              form.setValue("category_small", "");
                            }} 
                            defaultValue={field.value}
                            disabled={!form.watch("domain")}
                          >
                            <FormControl>
                              <SelectTrigger className="h-9 bg-gray-50/50 text-[12px]">
                                <SelectValue placeholder="분류 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {form.watch("domain") && Object.keys(CATEGORY_DATA[form.watch("domain")].medium).map((med) => (
                                <SelectItem key={med} value={med}>{med}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="category_small"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[12px] font-bold text-gray-600">급수</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                            disabled={!form.watch("category_medium")}
                          >
                            <FormControl>
                              <SelectTrigger className="h-9 bg-gray-50/50 text-[12px]">
                                <SelectValue placeholder="급수 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {form.watch("domain") && form.watch("category_medium") && 
                                CATEGORY_DATA[form.watch("domain")].medium[form.watch("category_medium")].map((small) => (
                                  <SelectItem key={small} value={small}>{small}</SelectItem>
                                ))
                              }
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="region"
                      render={({ field }) => (
                        <FormItem className="space-y-1.5">
                          <FormLabel className="text-[12px] font-bold text-gray-600">수업 신청지역</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-9 bg-gray-50/50">
                                <SelectValue placeholder="지역 선택" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="seoul">서울 강남</SelectItem>
                              <SelectItem value="busan">부산 서면</SelectItem>
                              <SelectItem value="daegu">대구</SelectItem>
                              <SelectItem value="gwangju">광주</SelectItem>
                              <SelectItem value="gyeonggi">경기도</SelectItem>
                              <SelectItem value="chungnam">충남</SelectItem>
                              <SelectItem value="gangwon">강원도</SelectItem>
                              <SelectItem value="jeju">제주도</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                    <div className="grid grid-cols-3 gap-1.5">
                      <FormField
                        control={form.control}
                        name="apply_month"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[12px] font-bold text-gray-600">희망 일정</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-9 bg-gray-50/50 px-2">
                                  <SelectValue placeholder="월" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => (
                                  <SelectItem key={i + 1} value={`${i + 1}`}>{i + 1}월</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="apply_day"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[12px] font-bold text-gray-600 invisible">일</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-9 bg-gray-50/50 px-2">
                                  <SelectValue placeholder="일" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Array.from({ length: 31 }, (_, i) => (
                                  <SelectItem key={i + 1} value={`${i + 1}`}>{i + 1}일</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="apply_hour"
                        render={({ field }) => (
                          <FormItem className="space-y-1.5">
                            <FormLabel className="text-[12px] font-bold text-gray-600 invisible">시</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-9 bg-gray-50/50 px-2">
                                  <SelectValue placeholder="시" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Array.from({ length: 24 }, (_, i) => (
                                  <SelectItem key={i} value={`${i}`}>{i}시</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Section 4: 학력 및 직업 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#8B1A2B] border-b border-gray-100 pb-1.5">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-[14px] font-bold uppercase">추가 배경 정보</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="education"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-[12px] font-bold text-gray-600">최종 학력</FormLabel>
                          <div className="grid grid-cols-2 gap-2">
                            {["현재 학생", "대학교", "석사", "박사", "해외대학"].map((edu) => (
                              <div key={edu} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={field.value === edu}
                                  onCheckedChange={() => field.onChange(edu)}
                                  className="size-4.5 border-gray-300 data-[state=checked]:bg-[#1a1a2e] data-[state=checked]:border-[#1a1a2e]"
                                />
                                <Label className="text-[12px] font-medium cursor-pointer" onClick={() => field.onChange(edu)}>
                                  {edu}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="job"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel className="text-[12px] font-bold text-gray-600">현재 직업</FormLabel>
                          <div className="grid grid-cols-2 gap-2">
                            {["강사", "번역사", "직장인", "취업준비생"].map((job) => (
                              <div key={job} className="flex items-center space-x-2">
                                <Checkbox
                                  checked={field.value === job}
                                  onCheckedChange={() => field.onChange(job)}
                                  className="size-4.5 border-gray-300 data-[state=checked]:bg-[#1a1a2e] data-[state=checked]:border-[#1a1a2e]"
                                />
                                <Label className="text-[12px] font-medium cursor-pointer" onClick={() => field.onChange(job)}>
                                  {job}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Section 5: 관심영역 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[#8B1A2B] border-b border-gray-100 pb-1.5">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-[14px] font-bold uppercase">관심 영역</span>
                  </div>
                  <FormField
                    control={form.control}
                    name="interests"
                    render={() => (
                      <FormItem className="space-y-2">
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                          {interestOptions.map((option) => (
                            <FormField
                              key={option.id}
                              control={form.control}
                              name="interests"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={option.id}
                                    className="flex flex-row items-center space-x-1.5 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(option.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, option.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== option.id
                                                )
                                              )
                                        }}
                                        className="size-5 border-gray-400 data-[state=checked]:bg-[#1a1a2e] data-[state=checked]:border-[#1a1a2e]"
                                      />
                                    </FormControl>
                                    <FormLabel className="text-[12px] font-normal cursor-pointer">
                                      {option.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="other_interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="그외 관심 분야 직접 입력" {...field} className="h-8 text-[12px] bg-gray-50/50" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Section 6: 추가 메시지 */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-[12px] font-bold text-gray-600 flex items-center gap-2">
                        <MessageSquare className="w-3.5 h-3.5" /> 추가 문의 사항
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="상담 시 참고 사항이나 궁금한 점" 
                          className="min-h-[60px] text-[12px] bg-gray-50/50 resize-none py-2"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Bottom Section: Agreement & Submit */}
            <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <FormField
                control={form.control}
                name="agreement"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 bg-[#faf8f6] p-3 rounded-lg border border-gray-100 max-w-xl">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1 size-5 border-gray-400 data-[state=checked]:bg-[#8B1A2B] data-[state=checked]:border-[#8B1A2B]"
                      />
                    </FormControl>
                    <div className="space-y-1">
                      <FormLabel className="text-[12px] font-bold text-gray-700 cursor-pointer">
                        개인정보 수집 및 이용에 동의합니다 (필수)
                      </FormLabel>
                      <p className="text-[10px] text-gray-500">
                        입력하신 정보는 상담 안내 목적으로만 활용되며 관련 법령에 따라 보호됩니다.
                      </p>
                    </div>
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full md:w-64 h-14 bg-[#8B1A2B] hover:bg-[#6d1422] text-white text-[16px] font-bold rounded-xl shadow-xl shadow-red-900/10 transition-all flex items-center justify-center gap-3 group"
              >
                신청 완료하기 <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </form>
        </Form>
      </div>

      {/* Compact Info Footer */}
      <div className="mt-4 flex justify-center gap-8">
        {[
          { icon: Phone, text: "유선 상담" },
          { icon: Calendar, text: "일정 안내" },
          { icon: FileCheck, text: "커리큘럼 제공" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <item.icon className="w-3.5 h-3.5 text-[#8B1A2B]" />
            <span className="text-[11px] font-bold text-gray-500">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
