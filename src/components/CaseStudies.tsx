import React, { useState } from 'react';
import { CASE_STUDIES, generateWhatsAppLink } from '../data/landingData';
import { CheckCircle2, Clock, Sparkles, MessageCircle, Quote } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeCaseId, setActiveCaseId] = useState<string>(CASE_STUDIES[0].id);

  const currentCase = CASE_STUDIES.find((c) => c.id === activeCaseId) || CASE_STUDIES[0];

  return (
    <section id="cases" className="py-16 md:py-24 bg-[#f9f9ff] text-[#111c2c] border-b border-[#c5c6ce]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdcbd]/50 text-[#6f3800] text-xs font-semibold border border-[#f0bd8b]/50">
            <Sparkles className="w-3.5 h-3.5 text-[#8e4e14]" />
            <span>Clinical Case Files</span>
          </div>
          
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031632] tracking-tight">
            以心理學視角，拆解真實香港犬隻行為逆轉歷程
          </h2>
          
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
            每一個失控的行為背後，都有一個被誤解的大腦。看看我們如何一步步引導狗狗走出焦慮與攻擊。
          </p>
        </div>

        {/* Case selector buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CASE_STUDIES.map((c) => {
            const isActive = c.id === activeCaseId;
            return (
              <button
                key={c.id}
                id={`case-tab-${c.id}`}
                onClick={() => setActiveCaseId(c.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#031632] border-[#031632] text-white shadow-sm'
                    : 'bg-white border-[#c5c6ce]/40 text-[#44474d] hover:bg-[#f0f3ff] hover:border-[#c5c6ce]'
                }`}
              >
                <span>{c.breed}・{c.dogName}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-normal ${
                  isActive ? 'bg-white/20 text-[#ffdcbd]' : 'bg-[#f0f3ff] text-[#75777e]'
                }`}>
                  {c.problem.slice(0, 8)}...
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Card */}
        <div className="bg-white rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-10 ambient-shadow">
          
          {/* Top Banner of the case */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#c5c6ce]/20">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-headline font-bold text-2xl text-[#031632]">
                  {currentCase.dogName}
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#f0f3ff] text-[#031632] border border-[#c5c6ce]/30">
                  {currentCase.breed} ({currentCase.age})
                </span>
              </div>
              <p className="text-sm font-semibold text-[#8e4e14] mt-1.5">
                原發問題：{currentCase.problem}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#6f3800] bg-[#ffdcbd]/50 border border-[#f0bd8b]/50 px-3.5 py-2 rounded-lg shrink-0 self-start sm:self-auto shadow-2xs">
              <Clock className="w-4 h-4 text-[#8e4e14]" />
              <span>改善週期：{currentCase.timelineWeeks} 星期</span>
            </div>
          </div>

          {/* Grid Layout: Diagnosis & Steps */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Pain & Diagnosis (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              
              {/* Owner Quote Box */}
              <div className="p-5 bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 space-y-2 relative">
                <Quote className="w-5 h-5 text-[#8e4e14]" />
                <p className="text-xs sm:text-sm text-[#44474d] italic leading-relaxed">
                  "{currentCase.ownerPain}"
                </p>
                <div className="text-right text-[11px] text-[#75777e] font-medium pt-1">
                  — 狗主求助時自白
                </div>
              </div>

              {/* Psychological Diagnosis */}
              <div className="p-5 bg-[#d8e3fa]/40 rounded-xl border border-[#c5c6ce]/40 space-y-2">
                <h4 className="font-headline text-xs font-bold text-[#031632] uppercase tracking-wider">
                  教育心理學深度診斷
                </h4>
                <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                  {currentCase.psychologyDiagnosis}
                </p>
              </div>

            </div>

            {/* Right: Intervention Steps & Outcome (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              
              <div>
                <h4 className="font-headline text-sm font-bold text-[#031632] uppercase tracking-wider mb-3">
                  任 Sir 的 3 階段科學矯正步驟
                </h4>
                <div className="space-y-2.5">
                  {currentCase.solutionSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#f9f9ff] rounded-lg border border-[#c5c6ce]/30 text-xs sm:text-sm text-[#44474d] flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#031632] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome Banner */}
              <div className="p-5 bg-[#ffdcbd]/25 rounded-xl border border-[#f0bd8b]/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#6f3800]">
                  <CheckCircle2 className="w-4 h-4 text-[#8e4e14]" />
                  <span>最終改善成果與現況</span>
                </div>
                <p className="text-xs sm:text-sm text-[#031632] font-medium leading-relaxed">
                  {currentCase.outcome}
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Action */}
          <div className="mt-8 pt-6 border-t border-[#c5c6ce]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#75777e] text-center sm:text-left">
              您的狗狗也出現類似的 {currentCase.breed} 行為問題？
            </div>
            <a
              id={`case-whatsapp-btn-${currentCase.id}`}
              href={generateWhatsAppLink(`你好任 Sir，我看到 ${currentCase.dogName} (${currentCase.breed}) 的個案，我家狗狗也有類似的【${currentCase.problem}】情況，希望能向您諮詢。`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ffab69] hover:bg-[#ffab69]/90 text-[#783d01] font-bold py-2.5 px-5 rounded-lg text-xs sm:text-sm transition-colors shadow-sm hover-lift"
            >
              <MessageCircle className="w-4 h-4" />
              <span>就此類個案諮詢任 Sir</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

