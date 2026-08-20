import React from 'react';
import { School, Brain, Shield, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_DISPLAY } from '../data/landingData';

export const ProgramsSection: React.FC = () => {
  return (
    <section id="programs" className="py-16 md:py-24 bg-[#f9f9ff] border-b border-[#c5c6ce]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdcbd]/50 text-[#6f3800] text-xs font-semibold border border-[#f0bd8b]/50">
            <Sparkles className="w-3.5 h-3.5 text-[#8e4e14]" />
            <span>Structured For Success</span>
          </div>
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031632] tracking-tight">
            以教育心理學為本・三大階梯式專業方案
          </h2>
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
            告別模糊概念與短期壓抑。我們將行為修正拆解為清晰、科學且可持續的專業教學步驟。
          </p>
        </div>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Beginner */}
          <div className="bg-white rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-7 flex flex-col h-full ambient-shadow hover-lift">
            <div className="h-12 w-12 rounded-lg bg-[#d8e3fa] flex items-center justify-center text-[#031632] mb-6 shadow-2xs">
              <School className="w-6 h-6" />
            </div>
            
            <div className="mb-4">
              <span className="inline-block bg-[#ffdcbd] text-[#2c1600] font-semibold text-xs px-3 py-1 rounded-full mb-3 border border-[#f0bd8b]">
                基礎服從・幼犬發展
              </span>
              <h3 className="font-headline font-bold text-xl text-[#031632] mb-2">
                Basic Obedience
              </h3>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                建立人犬清晰的溝通橋樑。專注於基礎生活指令、鬆繩隨行與衝動控制（Impulse Control），打造和諧家庭默契。
              </p>
            </div>

            <ul className="space-y-2.5 mt-auto mb-6 text-xs sm:text-sm text-[#111c2c]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#031632] shrink-0" />
                <span>Sit, Stay, Down, Recall（穩定召回）</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#031632] shrink-0" />
                <span>Loose Leash Walking（鬆繩隨行不暴衝）</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#031632] shrink-0" />
                <span>幼犬社會化與定點如廁引導</span>
              </li>
            </ul>

            <a
              href={generateWhatsAppLink('你好任 Sir，我對【Basic Obedience 基礎服從與幼犬課程】有興趣，希望向您諮詢細節。')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto py-2.5 border border-[#031632] text-[#031632] font-semibold text-xs sm:text-sm rounded-lg hover:bg-[#f0f3ff] transition-colors text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>了解方案細節</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: Intermediate / Crisis */}
          <div className="bg-white rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-7 flex flex-col h-full ambient-shadow hover-lift relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffab69]/15 rounded-bl-full -z-10" />
            
            <div className="h-12 w-12 rounded-lg bg-[#ffdcbd]/70 flex items-center justify-center text-[#8e4e14] mb-6 shadow-2xs">
              <Brain className="w-6 h-6" />
            </div>

            <div className="mb-4">
              <span className="inline-block bg-[#ffdcbd] text-[#2c1600] font-semibold text-xs px-3 py-1 rounded-full mb-3 border border-[#f0bd8b]">
                行為重塑・情緒矯正
              </span>
              <h3 className="font-headline font-bold text-xl text-[#031632] mb-2">
                Behavioral Modification
              </h3>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                以反古典制約與系統去敏感化技術，根本解決散步見狗狂吠、嚴重護食護物、門鐘焦慮與防禦性低吼。
              </p>
            </div>

            <ul className="space-y-2.5 mt-auto mb-6 text-xs sm:text-sm text-[#111c2c]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#031632] shrink-0" />
                <span>Leash Reactivity（散步反應性/衝狗化解）</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#031632] shrink-0" />
                <span>Resource Guarding（護食、護物脫敏）</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#031632] shrink-0" />
                <span>門鐘狂吠與鄰里投訴即時阻斷</span>
              </li>
            </ul>

            <a
              href={generateWhatsAppLink('你好任 Sir，我家狗狗面臨嚴重的【Behavioral Modification 行為與情緒問題（如護食/吠叫/反應性）】，希望能向您預約諮詢。')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto py-2.5 bg-[#ffdcbd] text-[#2c1600] font-semibold text-xs sm:text-sm rounded-lg hover:bg-[#f0bd8b] transition-colors text-center inline-flex items-center justify-center gap-1.5 shadow-2xs"
            >
              <span>預約行為諮詢</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: In-Home Diagnostic & Private Protocol */}
          <div className="bg-[#031632] rounded-xl border border-[#1a2b48] p-6 sm:p-7 flex flex-col h-full shadow-lg relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10" />
            
            <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center text-white mb-6 border border-white/10">
              <Shield className="w-6 h-6 text-[#ffab69]" />
            </div>

            <div className="mb-4">
              <span className="inline-block bg-[#ffab69] text-[#783d01] font-semibold text-xs px-3 py-1 rounded-full mb-3">
                1對1 上門實地診斷
              </span>
              <h3 className="font-headline font-bold text-xl text-white mb-2">
                In-Home Private Protocol
              </h3>
              <p className="text-xs sm:text-sm text-[#8293b5] leading-relaxed">
                任 Sir 親身上門進入真實家居環境。深入評估動線盲點、前因誘發刺激，並現場示範及指導全家人掌握正確手法。
              </p>
            </div>

            <ul className="space-y-2.5 mt-auto mb-6 text-xs sm:text-sm text-[#d7e2ff]">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>環境動線與咬傷危機實地防護</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>全家人及家傭一致性手勢培訓</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>課後無限制 WhatsApp 影片作業追蹤</span>
              </li>
            </ul>

            <a
              href={generateWhatsAppLink('你好任 Sir，我希望能預約【1對1 上門實地深度評估與訓練方案】，請教近期的檔期與安排。')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto py-2.5 bg-white text-[#031632] hover:bg-[#f0f3ff] font-bold text-xs sm:text-sm rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1.5"
            >
              <span>立即預約上門評估</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
