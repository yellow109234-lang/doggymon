import React from 'react';
import { MessageCircle, Home, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { THREE_STEPS, generateWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE, WHATSAPP_DISPLAY } from '../data/landingData';

export const ServiceProcess: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-24 bg-white text-[#111c2c] border-b border-[#c5c6ce]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdcbd]/50 text-[#6f3800] text-xs font-semibold border border-[#f0bd8b]/50">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#8e4e14]" />
            <span>Standardized Methodology</span>
          </div>
          
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031632] tracking-tight">
            清晰 3 個步驟，展開科學行為改善
          </h2>
          
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
            告別盲目嘗試與焦慮。我們提供極度透明、無銷售壓力的專業跟進流程。
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {THREE_STEPS.map((item, index) => (
            <div
              key={item.step}
              className="bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-7 space-y-4 relative flex flex-col justify-between ambient-shadow hover-lift"
            >
              <div>
                {/* Step badge & Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-headline text-3xl font-extrabold text-[#031632] tracking-tight">
                    STEP {item.step}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-[#8e4e14] border border-[#f0bd8b]/60 shadow-2xs">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-headline text-lg sm:text-xl font-bold text-[#031632] mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Footer item info */}
              <div className="pt-4 border-t border-[#c5c6ce]/20 flex items-center justify-between text-xs text-[#75777e]">
                <span className="font-medium text-[#031632] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8e4e14]" />
                  {item.time}
                </span>
                {index === 0 && (
                  <span className="text-[#8e4e14] font-medium">免費初步評估</span>
                )}
              </div>
            </div>
          ))}

        </div>

        {/* In-Home Assessment Deep Dive Box */}
        <div className="mt-12 bg-[#031632] text-white rounded-xl p-6 sm:p-10 ambient-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffab69] text-xs font-semibold">
                <Home className="w-3.5 h-3.5" />
                <span>為什麼「上門實地評估」對行為改善至關重要？</span>
              </div>
              <h4 className="font-headline font-bold text-lg sm:text-2xl text-white">
                狗狗在陌生犬舍的表現，無法反映家中真實的誘發機制
              </h4>
              <p className="text-xs sm:text-sm text-[#c5c6ce] leading-relaxed">
                咬人、護食、門鐘狂吠大多發生於熟悉的家居領地。任 Sir 親自上門，能即時察覺家中空間動線、狗碗擺放位置、家人肢體習慣等細微盲點，並在狗狗最自然的狀態下精確制定方案。
              </p>
              <div className="flex items-center gap-4 text-xs text-[#c5c6ce] pt-1 flex-wrap">
                <span className="flex items-center gap-1.5 text-white/90">
                  <MapPin className="w-3.5 h-3.5 text-[#ffab69]" />
                  服務地區：九龍、港島、新界各區住宅
                </span>
                <span className="flex items-center gap-1.5 text-white/90">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#ffab69]" />
                  無任何隱藏收費與推銷套票
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <a
                id="process-whatsapp-btn"
                href={generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ffab69] hover:bg-[#ffab69]/90 text-[#783d01] font-bold py-3.5 px-6 rounded-lg text-sm transition-colors shadow-sm hover-lift"
              >
                <MessageCircle className="w-5 h-5" />
                <span>立即 WhatsApp 預約第一步</span>
              </a>
              <div className="text-center text-[11px] text-[#c5c6ce]">
                任 Sir 親自聯絡 • 今日諮詢專線：{WHATSAPP_DISPLAY}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

