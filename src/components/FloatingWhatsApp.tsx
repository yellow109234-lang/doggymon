import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { generateWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../data/landingData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5">
      {/* Speech Bubble / Status Card */}
      {showTooltip && (
        <div className="bg-white text-[#111c2c] rounded-xl p-3.5 ambient-shadow border border-[#c5c6ce]/30 max-w-[280px] sm:max-w-xs relative animate-bounce-short">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-[#75777e] hover:text-[#031632] p-1 cursor-pointer"
            aria-label="關閉提示"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 mb-1.5 pr-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8e4e14] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8e4e14]"></span>
            </span>
            <span className="font-headline text-xs font-bold text-[#031632]">任 Sir 今日在線諮詢</span>
          </div>

          <p className="text-xs text-[#44474d] leading-snug">
            狗狗出現咬人、護食或狂吠困境？可即時發送狀況影片或文字，獲取初步應對建議。
          </p>

          <div className="mt-2.5 pt-2 border-t border-[#c5c6ce]/20 flex items-center justify-between text-[11px] text-[#75777e]">
            <span className="text-[#8e4e14] font-medium">通常 30 分鐘內回覆</span>
            <a
              href={generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#031632] hover:text-[#8e4e14] font-bold underline underline-offset-2"
            >
              開啟對話 →
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        id="floating-whatsapp-trigger"
        href={generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp 諮詢任 Sir"
        className="group relative flex items-center gap-2.5 bg-[#ffab69] hover:bg-[#ffab69]/90 text-[#783d01] font-bold py-3 px-4 sm:px-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 relative shrink-0 text-[#783d01]" />
        <span className="relative text-sm hidden sm:inline font-headline font-bold">
          WhatsApp 諮詢任 Sir
        </span>
      </a>
    </div>
  );
};

