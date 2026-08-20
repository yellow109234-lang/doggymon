import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS, generateWhatsAppLink, WHATSAPP_DISPLAY } from '../data/landingData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white text-[#111c2c] border-b border-[#c5c6ce]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdcbd]/50 text-[#6f3800] text-xs font-semibold border border-[#f0bd8b]/50">
            <HelpCircle className="w-3.5 h-3.5 text-[#8e4e14]" />
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031632] tracking-tight">
            以客觀科學角度，解答您對犬隻行為訓練的顧慮
          </h2>
          
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
            我們堅持資訊透明，為您提供基於行為心理學的真實解答。
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 overflow-hidden transition-all duration-200 ambient-shadow"
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f0f3ff] transition-colors"
                >
                  <span className="font-headline text-sm sm:text-base font-bold text-[#031632] leading-snug">
                    {faq.question}
                  </span>
                  <div className="shrink-0 text-[#8e4e14]">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-2 text-xs sm:text-sm text-[#44474d] leading-relaxed border-t border-[#c5c6ce]/20 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question CTA Box */}
        <div className="mt-12 max-w-2xl mx-auto bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-8 text-center space-y-3 ambient-shadow">
          <h4 className="font-headline text-base sm:text-lg font-bold text-[#031632]">
            還有其他關於狗狗行為的特殊疑問？
          </h4>
          <p className="text-xs sm:text-sm text-[#75777e]">
            每個家庭與犬隻的狀況都是獨一無二的。歡迎隨時 WhatsApp 任 Sir 獲取專屬解答。
          </p>
          <div className="pt-2">
            <a
              id="faq-custom-whatsapp-btn"
              href={generateWhatsAppLink('你好任 Sir，我於常見問題中未找到我的特定疑難，希望能向您諮詢我家狗狗的狀況。')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ffab69] hover:bg-[#ffab69]/90 text-[#783d01] font-bold py-2.5 px-5 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover-lift"
            >
              <MessageCircle className="w-4 h-4" />
              <span>直接 WhatsApp 諮詢任 Sir ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

