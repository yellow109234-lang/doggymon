import React, { useState } from 'react';
import { AlertOctagon, AlertTriangle, ShieldAlert, ArrowRight, Info, MessageCircle, Sparkles } from 'lucide-react';
import { PAIN_POINTS, generateWhatsAppLink } from '../data/landingData';

export const PainPoints: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('biting');

  const activePain = PAIN_POINTS.find((p) => p.id === selectedTab) || PAIN_POINTS[0];

  return (
    <section id="pain-points" className="py-16 md:py-24 bg-white text-[#111c2c] border-b border-[#c5c6ce]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdcbd]/50 text-[#6f3800] text-xs font-semibold border border-[#f0bd8b]/50">
            <AlertOctagon className="w-3.5 h-3.5 text-[#8e4e14]" />
            <span>Urgent Behavioral Diagnostic</span>
          </div>
          
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031632] tracking-tight">
            這些每天重複發生的困境，是否正讓您承受極大壓力？
          </h2>
          
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
            犬隻的攻擊、護食或狂吠，絕非「故意作對」或「想當老大」，而是大腦在壓力臨界點下的求救警報。如果不以科學方法及時介入，問題只會隨時間惡化。
          </p>
        </div>

        {/* 4 Pain Points Grid / Tab Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PAIN_POINTS.map((item) => {
            const isSelected = item.id === selectedTab;
            return (
              <button
                key={item.id}
                id={`pain-tab-${item.id}`}
                onClick={() => setSelectedTab(item.id)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#f0f3ff] border-[#031632] shadow-sm ring-1 ring-[#031632]/20'
                    : 'bg-[#f9f9ff] border-[#c5c6ce]/30 hover:bg-white hover:border-[#c5c6ce] shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#ffdcbd] text-[#2c1600] border border-[#f0bd8b]">
                      {item.tag}
                    </span>
                    {isSelected && (
                      <span className="text-[11px] font-semibold text-[#8e4e14]">目前檢視</span>
                    )}
                  </div>
                  <h3 className="font-headline font-bold text-base sm:text-lg text-[#031632] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#44474d] line-clamp-3">
                    {item.situation}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#c5c6ce]/20 flex items-center text-xs font-semibold text-[#031632]">
                  <span>查看心理學根源剖析</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Psychological Breakdown Box for Selected Pain Point */}
        <div className="mt-8 bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-8 ambient-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* Left: Problem Details (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8e4e14]">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>常見生活典型場景</span>
              </div>
              <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#031632]">
                {activePain.title}
              </h3>
              <div className="p-4 bg-white rounded-lg border border-[#c5c6ce]/30 text-xs sm:text-sm text-[#44474d] leading-relaxed shadow-2xs">
                <strong className="text-[#031632] block mb-1">具體困境：</strong>
                {activePain.situation}
              </div>
              <p className="text-xs text-[#75777e]">
                很多狗主在此階段會嘗試大聲喝止、用報紙打地、或強行壓制，但往往發現狗狗下次反應更加激烈。
              </p>
            </div>

            {/* Right: Educational Psychology Root Cause (6 cols) */}
            <div className="lg:col-span-6 space-y-4 bg-white p-5 sm:p-6 rounded-lg border border-[#c5c6ce]/30 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#031632]">
                <Info className="w-4 h-4 shrink-0" />
                <span>教育心理學・根源動機剖析</span>
              </div>
              <h4 className="font-headline font-bold text-base sm:text-lg text-[#031632]">
                大腦神經迴路在發生甚麼事？
              </h4>
              <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
                {activePain.psychologyNote}
              </p>
              
              <div className="pt-3 border-t border-[#c5c6ce]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="text-xs text-[#75777e]">
                  面臨相同危機？可即時諮詢任 Sir：
                </div>
                <a
                  href={generateWhatsAppLink(`你好任 Sir，我家狗狗出現了【${activePain.title}】的危機，希望能諮詢專業正向改善方法。`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#031632] hover:bg-[#111c2c] text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#ffab69]" />
                  <span>針對此問題諮詢</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Crucial Scientific Warning: Why Physical Punishment Backfires */}
        <div className="mt-10 bg-[#ffdcbd]/25 border border-[#f0bd8b]/60 rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#ffdcbd] rounded-lg border border-[#f0bd8b] text-[#6f3800] shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h4 className="font-headline font-bold text-base sm:text-lg text-[#031632] flex items-center gap-2">
                心理學重要警示：為何「打罵、強壓、電圈」只會製造隱形咬人炸彈？
              </h4>
              <div className="text-xs sm:text-sm text-[#44474d] space-y-2 leading-relaxed">
                <p>
                  <strong className="text-[#031632]">1. 消除預警信號（低吼被壓抑）：</strong>低吼是狗狗表達「我感到害怕，請保持距離」的禮貌警告。如果主人在狗狗低吼時打罵牠，狗狗學到的是「低吼會被打」，於是在下次壓力來臨時，牠會直接跳過警告，<strong className="text-[#8e4e14]">無預警開口咬人</strong>。
                </p>
                <p>
                  <strong className="text-[#031632]">2. 恐懼與壓力泛化（Fear Generalization）：</strong>體罰引發的強烈恐懼，會促使大腦杏仁核分泌皮質醇（壓力荷爾蒙）。狗狗會將打罵時的環境（如伸出的手、特定的家庭成員、訪客）與痛楚連結，導致攻擊範圍不斷擴大。
                </p>
                <p>
                  <strong className="text-[#031632]">3. 習得性無助（Learned Helplessness）：</strong>狗狗在無法逃避的痛苦中雖然表面「服從」，但內在極度崩潰，一旦某天忍受限度超標，便會爆發無法控制的毀滅性攻擊。
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

