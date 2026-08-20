import React from 'react';
import { Brain, Layers, GitBranch, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { METHOD_COMPARISON } from '../data/landingData';

export const ScienceSolution: React.FC = () => {
  return (
    <section id="solution" className="py-16 md:py-24 bg-white text-[#111c2c] border-b border-[#c5c6ce]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdcbd]/50 text-[#6f3800] text-xs font-semibold border border-[#f0bd8b]/50">
            <Brain className="w-3.5 h-3.5 text-[#8e4e14]" />
            <span>The Science of Learning</span>
          </div>
          
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031632] tracking-tight">
            為何「教育心理學」能根治問題，而非僅僅壓抑行為？
          </h2>
          
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
            狗隻的行為不是隨機發生的機械動作。每個攻擊、狂吠或護食反應，都是大腦在接收環境刺激後所作出的「認知決策」。我們透過心理學的學習機制，從根本重塑神經迴路。
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-7 space-y-4 relative ambient-shadow hover-lift">
            <div className="w-12 h-12 rounded-lg bg-[#d8e3fa] flex items-center justify-center text-[#031632] shadow-2xs">
              <Layers className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-[#8e4e14] uppercase tracking-wider font-headline">
              理論支柱 01
            </div>
            <h3 className="font-headline font-bold text-lg sm:text-xl text-[#031632]">
              A-B-C 行為功能動機剖析
            </h3>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              拆解行為的前因（<strong className="text-[#031632]">A</strong>ntecedent）、外顯行為（<strong className="text-[#031632]">B</strong>ehavior）與獲得的後果反饋（<strong className="text-[#031632]">C</strong>onsequence）。精確找出維持問題行為的真正「增強物」，從源頭調整環境觸發點。
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-7 space-y-4 relative ambient-shadow hover-lift">
            <div className="w-12 h-12 rounded-lg bg-[#ffdcbd]/70 flex items-center justify-center text-[#8e4e14] shadow-2xs">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-[#8e4e14] uppercase tracking-wider font-headline">
              理論支柱 02
            </div>
            <h3 className="font-headline font-bold text-lg sm:text-xl text-[#031632]">
              反古典制約與系統去敏感
            </h3>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              將令狗狗感到威脅的刺激（如人類靠近狗碗、門鐘聲響、陌生狗隻），透過微弱刺激階梯與高價值正向經驗重新配對，徹底將大腦的「恐懼警報」改寫為「安全放鬆」。
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#f9f9ff] rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-7 space-y-4 relative ambient-shadow hover-lift">
            <div className="w-12 h-12 rounded-lg bg-[#d8e3fa] flex items-center justify-center text-[#031632] shadow-2xs">
              <GitBranch className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold text-[#8e4e14] uppercase tracking-wider font-headline">
              理論支柱 03
            </div>
            <h3 className="font-headline font-bold text-lg sm:text-xl text-[#031632]">
              替代行為塑造 (DRA)
            </h3>
            <p className="text-xs sm:text-sm text-[#44474d] leading-relaxed">
              單純叫狗狗「不要做甚麼」只會製造挫折。心理學方法教導狗狗「可以用甚麼平靜的行為來取代」（例如：門鐘響時跑向軟墊坐下，而非衝向大門狂吠）。
            </p>
          </div>

        </div>

        {/* Detailed Comparison Table / Matrix */}
        <div className="mt-14">
          <div className="text-center mb-6">
            <h3 className="font-headline font-bold text-xl sm:text-2xl text-[#031632]">
              科學對比：傳統打罵處罰 vs DoggyMon 教育心理學正向訓練
            </h3>
            <p className="text-xs sm:text-sm text-[#75777e] mt-1">
              兩種截然不同的訓練哲學，決定了狗狗長遠的心理健康與行為穩定性。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px] bg-white rounded-xl overflow-hidden border border-[#c5c6ce]/30 ambient-shadow text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#c5c6ce]/30 bg-[#f0f3ff]">
                  <th className="py-4 px-5 font-headline font-bold text-[#031632] w-1/4">評估維度</th>
                  <th className="py-4 px-5 font-headline font-bold text-[#8e4e14] bg-[#ffdcbd]/30 w-3/8 border-l border-[#c5c6ce]/30">
                    傳統體罰 / 壓制威嚇訓練 (舊式)
                  </th>
                  <th className="py-4 px-5 font-headline font-bold text-[#031632] bg-[#f0f3ff] w-3/8 border-l border-[#c5c6ce]/30">
                    DoggyMon 教育心理學正向訓練 (科學)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c5c6ce]/20">
                {METHOD_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f9f9ff] transition-colors">
                    <td className="py-4 px-5 font-semibold text-[#031632]">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-5 text-[#44474d] bg-[#ffdcbd]/10 leading-relaxed border-l border-[#c5c6ce]/20">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.punitive}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-[#031632] bg-[#f0f3ff]/40 leading-relaxed border-l border-[#c5c6ce]/20 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#031632] shrink-0 mt-0.5" />
                        <span>{row.doggyMon}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
};

