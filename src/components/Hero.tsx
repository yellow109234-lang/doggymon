import React from 'react';
import { MessageCircle, ShieldCheck, CheckCircle2, ArrowRight, Award, Compass, Sparkles, GraduationCap } from 'lucide-react';
import { generateWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_DISPLAY } from '../data/landingData';

export const Hero: React.FC = () => {
  return (
    <>
      <header className="relative bg-white overflow-hidden border-b border-[#c5c6ce]/20">
        {/* Soft background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10 hidden md:block" />
        <div className="absolute inset-0 bg-white/80 z-10 md:hidden" />

        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="bg-cover bg-center w-full h-full object-cover opacity-35 md:opacity-45"
            style={{ 
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSclEhtAEIB4q-1kLHW3eB8MQJWM_TDc9OR7ItWUsnwOGsD87Fvh9CDe-3aIDSp0Bmq57Kd5lDpRGRjZ1dZ3TR2H00CLOdqBIDNlVWwePBWUy5ZbRkSLfdpPTql2r3vMAsaoS0wdayH0NDLRaSnJjNjeqxgioULRxIouOhOpH8NPt1bMMurR5KLtxdiphwXTbL7Nxr3iakj0DLfOcID_NpnoNvQZCZtxyMeeyYaRqrmF0jDYwr3VzE')` 
            }}
          />
        </div>

        <div className="relative z-20 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[75vh]">
          
          {/* Main Hero Copy (Col 7) */}
          <div className="md:col-span-7 lg:col-span-7 space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ffdcbd]/50 text-[#6f3800] px-3.5 py-1.5 rounded-full font-semibold text-xs sm:text-sm border border-[#f0bd8b]/60 shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#8e4e14]" />
              <span>Professional Grade Training • 香港教育大學教育心理學碩士主理</span>
            </div>

            {/* Main Headline in Montserrat */}
            <h1 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-[#031632] tracking-tight leading-[1.2]">
              Mastering Discipline.<br />
              <span className="text-[#8e4e14]">Building Connection.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-[#44474d] max-w-xl font-normal leading-relaxed">
              當狗狗出現<strong className="text-[#031632]">咬人、護食、暴衝狂吠</strong>等危機時，體罰只會壓抑恐懼，科學才能真正改變行為。任 Sir (Jacob Yam) 結合教育心理學與 CPDT-KA 國際行為學，在溫暖家庭中打造長效紀律與深厚信任。
            </p>

            {/* Bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-[#111c2c]">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#031632]" />
                <span>專門處理咬傷、嚴重護食危機</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#031632]" />
                <span>解決走廊狂吠鄰居投訴</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#031632]" />
                <span>全港各區一對一上門實地診斷</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#031632]" />
                <span>100% 零體罰・LIMA 人道原則</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-3">
              <a
                id="hero-primary-cta"
                href={generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ffab69] text-[#783d01] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-lg hover:bg-[#ffab69]/90 transition-all text-center inline-flex items-center justify-center gap-2 shadow-sm hover-lift"
              >
                <span>立即預約初步諮詢</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                id="hero-secondary-cta"
                href="#programs"
                className="bg-[#f9f9ff] text-[#031632] border border-[#c5c6ce] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-lg hover:bg-[#f0f3ff] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>查看訓練方案</span>
              </a>
            </div>

            {/* Micro Response time notice */}
            <div className="flex items-center gap-2 text-xs text-[#75777e] pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>任 Sir 親自回覆 • 通常 30 分鐘內跟進 • 諮詢專線：{WHATSAPP_DISPLAY}</span>
            </div>

          </div>

          {/* Right Card: Quick Authority Card (Col 5) */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-7 ambient-shadow hover-lift relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffab69]/10 rounded-bl-full -z-10" />
              
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#c5c6ce]/20">
                <div className="w-12 h-12 rounded-full bg-[#031632] text-[#ffab69] flex items-center justify-center font-bold text-lg shadow-sm">
                  任
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-[#031632]">
                    任 Sir (Jacob Yam)
                  </h3>
                  <p className="text-xs text-[#8e4e14] font-semibold">
                    教育心理學碩士 • CPDT-KA 認證訓練師
                  </p>
                </div>
              </div>

              <div className="py-4 space-y-3 text-xs sm:text-sm text-[#44474d]">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-[#031632] shrink-0 mt-0.5" />
                  <span><strong>香港教育大學</strong> 教育心理學碩士（學習與動機專研）</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-[#031632] shrink-0 mt-0.5" />
                  <span><strong>CPDT-KA & APDT</strong> 全球認證犬隻行為執業資格</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#031632] shrink-0 mt-0.5" />
                  <span><strong>前中學正規教師</strong> 擅長將複雜心理學轉化為具體操作手冊</span>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-[#c5c6ce]/20 text-xs text-[#44474d] italic">
                「處罰只能壓抑外顯行為，科學引導才能重建內在安全感。我們讓狗狗在理智與平靜中學會信任主人。」
              </div>

              <div className="mt-4 pt-3 border-t border-[#c5c6ce]/20 flex items-center justify-between text-xs">
                <span className="text-[#75777e]">香港九龍新界各區上門</span>
                <a href="#assessment" className="text-[#031632] font-semibold hover:underline">
                  1 分鐘行為自測 →
                </a>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* Trust Bar (from Stitch design) */}
      <section className="bg-[#f0f3ff] border-b border-[#c5c6ce]/20 py-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-6 text-[#44474d] font-semibold text-xs sm:text-sm uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#031632]" />
            Certified by Global K9 Associations (CPDT-KA & APDT)
          </span>
          <span className="hidden md:inline text-[#c5c6ce]">•</span>
          <span className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-[#031632]" />
            Master in Educational Psychology (EdUHK)
          </span>
          <span className="hidden md:inline text-[#c5c6ce]">•</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#031632]" />
            Non-Punitive LIMA Humane Standards
          </span>
        </div>
      </section>
    </>
  );
};

