import React, { useState } from 'react';
import { Compass, CheckSquare, Square, AlertCircle, ShieldAlert, Sparkles, MessageCircle, Copy, Check } from 'lucide-react';
import { generateWhatsAppLink, WHATSAPP_DISPLAY } from '../data/landingData';

interface AssessmentState {
  dogName: string;
  breed: string;
  age: string;
  symptoms: string[];
  duration: string;
  biteHistory: string;
}

const SYMPTOM_OPTIONS = [
  { id: 'bite_skin', label: '曾咬傷家人或訪客（破皮或流血）', severityScore: 5, category: 'urgent' },
  { id: 'guard_food', label: '護食、護骨頭或護玩具（露齒低吼/威嚇）', severityScore: 4, category: 'urgent' },
  { id: 'bark_complaint', label: '持續吠叫（聽到聲響、門鐘或獨處），收到鄰居或管業處投訴', severityScore: 4, category: 'urgent' },
  { id: 'leash_lunge', label: '散步時見狗/見人失控暴衝狂吠、前撲攻擊', severityScore: 3, category: 'high' },
  { id: 'touch_sensitive', label: '剪甲、擦腳、摸身體特定部位時試圖咬人', severityScore: 3, category: 'high' },
  { id: 'separation_panic', label: '主人出門時極度焦慮、抓門破壞、哀鳴嚎叫', severityScore: 3, category: 'high' },
  { id: 'refuse_punishment', label: '曾嘗試打罵或大聲斥責，但狗狗出現反咬或更加激動', severityScore: 4, category: 'urgent' },
];

export const AssessmentTool: React.FC = () => {
  const [formData, setFormData] = useState<AssessmentState>({
    dogName: '',
    breed: '柴犬',
    age: '1-3 歲',
    symptoms: ['guard_food'],
    duration: '1-3 個月',
    biteHistory: '曾有輕微咬傷或露齒低吼',
  });

  const [hasCalculated, setHasCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleSymptom = (id: string) => {
    if (formData.symptoms.includes(id)) {
      setFormData({
        ...formData,
        symptoms: formData.symptoms.filter((s) => s !== id),
      });
    } else {
      setFormData({
        ...formData,
        symptoms: [...formData.symptoms, id],
      });
    }
  };

  // Calculate score
  const totalScore = formData.symptoms.reduce((acc, currId) => {
    const found = SYMPTOM_OPTIONS.find((opt) => opt.id === currId);
    return acc + (found ? found.severityScore : 0);
  }, 0);

  const isUrgent = totalScore >= 7 || formData.symptoms.includes('bite_skin');
  const isHigh = totalScore >= 4 && !isUrgent;

  const getSeverityBadge = () => {
    if (isUrgent) {
      return {
        text: '🔴 行為危機急迫度：極高（需立即停止肢體對抗）',
        bg: 'bg-red-50 border-red-200 text-red-950',
        summary: '犬隻已建立深層的防衛攻擊神經迴路，或處於極高恐懼閾值。若繼續採取常規斥責或強硬手法，極易演變為嚴重人身傷害。建議盡快安排專業上門行為評估與環境隔離管理。',
      };
    }
    if (isHigh) {
      return {
        text: '🟠 行為問題急迫度：中高（處於習慣定型關鍵期）',
        bg: 'bg-[#ffdcbd]/40 border-[#f0bd8b] text-[#6f3800]',
        summary: '問題行為已開始規律化，犬隻在特定刺激下表現出明顯的情緒失調。此階段及早以教育心理學的反古典制約介入，矯正成本最低且成效最快。',
      };
    }
    return {
      text: '🟡 行為輔導：早期預防階段',
      bg: 'bg-[#f0f3ff] border-[#c5c6ce]/40 text-[#031632]',
      summary: '犬隻出現零星的不安或溝通障礙。透過正確的環境豐富化、肢體語言解讀與正向引導，可迅速消除隱患，預防問題惡化。',
    };
  };

  const severityInfo = getSeverityBadge();

  // Generate customized WhatsApp Message
  const getSelectedSymptomLabels = () => {
    return formData.symptoms
      .map((id) => SYMPTOM_OPTIONS.find((opt) => opt.id === id)?.label)
      .filter(Boolean)
      .join('、');
  };

  const whatsappMessage = `你好任 Sir，我於 DoggyMon 完成了行為急迫度自測：
• 狗狗：${formData.dogName || '我的狗狗'}（品種：${formData.breed}，年齡：${formData.age}）
• 當前面臨問題：${getSelectedSymptomLabels() || '行為困擾'}
• 問題持續時間：${formData.duration}
• 歷史狀況：${formData.biteHistory}
• 系統評估等級：${isUrgent ? '急迫度極高' : isHigh ? '急迫度中高' : '早期預防'}
希望能向任 Sir 諮詢初步應對方案及預約上門評估安排。謝謝！`;

  const copyAssessment = () => {
    navigator.clipboard.writeText(whatsappMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="assessment" className="py-16 md:py-24 bg-[#f9f9ff] text-[#111c2c] border-b border-[#c5c6ce]/20 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdcbd]/50 text-[#6f3800] text-xs font-semibold border border-[#f0bd8b]/50">
            <Compass className="w-3.5 h-3.5 text-[#8e4e14]" />
            <span>Interactive Canine Triage</span>
          </div>
          
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031632] tracking-tight">
            1 分鐘犬隻行為危機程度自測
          </h2>
          
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
            透過客觀的行為科學指標，快速檢視您愛犬的危機等級，並即時獲取任 Sir 的防護指引。
          </p>
        </div>

        {/* Assessment Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl border border-[#c5c6ce]/30 ambient-shadow p-6 sm:p-8">
          
          <div className="space-y-6">
            
            {/* Step 1: Basic Info */}
            <div>
              <label className="text-xs font-bold text-[#75777e] uppercase tracking-wider block mb-3 font-headline">
                步驟 1：基本資料
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#44474d] mb-1.5">
                    狗狗名字（選填）
                  </label>
                  <input
                    type="text"
                    placeholder="例如：波波 / 豆豆"
                    value={formData.dogName}
                    onChange={(e) => setFormData({ ...formData, dogName: e.target.value })}
                    className="w-full bg-[#f9f9ff] border border-[#c5c6ce]/60 rounded-lg px-3.5 py-2.5 text-sm text-[#031632] focus:bg-white focus:outline-none focus:border-[#031632] focus:ring-2 focus:ring-[#031632]/10 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#44474d] mb-1.5">
                    犬隻品種
                  </label>
                  <select
                    value={formData.breed}
                    onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                    className="w-full bg-[#f9f9ff] border border-[#c5c6ce]/60 rounded-lg px-3.5 py-2.5 text-sm text-[#031632] focus:bg-white focus:outline-none focus:border-[#031632] focus:ring-2 focus:ring-[#031632]/10 transition-colors"
                  >
                    <option value="柴犬">柴犬 (Shiba Inu)</option>
                    <option value="貴婦犬 / 泰迪">貴婦犬 / 泰迪 (Poodle)</option>
                    <option value="唐狗 / 混種犬">唐狗 / 混種犬 (Mongrel)</option>
                    <option value="哥基犬">哥基犬 (Corgi)</option>
                    <option value="松鼠犬 / 博美">松鼠犬 / 博美 (Pomeranian)</option>
                    <option value="法國鬥牛犬 / 八哥">法國鬥牛犬 / 八哥</option>
                    <option value="金毛 / 拉布拉多">金毛 / 拉布拉多</option>
                    <option value="雪橇 / 哈士奇">雪橇 / 哈士奇</option>
                    <option value="其他品種">其他品種</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#44474d] mb-1.5">
                    犬隻年齡
                  </label>
                  <select
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    className="w-full bg-[#f9f9ff] border border-[#c5c6ce]/60 rounded-lg px-3.5 py-2.5 text-sm text-[#031632] focus:bg-white focus:outline-none focus:border-[#031632] focus:ring-2 focus:ring-[#031632]/10 transition-colors"
                  >
                    <option value="6 個月以下 (幼犬)">6 個月以下 (幼犬)</option>
                    <option value="6-12 個月 (青春期)">6-12 個月 (青春期)</option>
                    <option value="1-3 歲 (成年期)">1-3 歲 (成年期)</option>
                    <option value="3-7 歲 (成熟期)">3-7 歲 (成熟期)</option>
                    <option value="7 歲以上 (熟齡犬)">7 歲以上 (熟齡犬)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 2: Symptoms Selection */}
            <div className="pt-4 border-t border-[#c5c6ce]/20">
              <label className="text-xs font-bold text-[#75777e] uppercase tracking-wider block mb-3 font-headline">
                步驟 2：請勾選目前遇到的行為問題（可複選）
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SYMPTOM_OPTIONS.map((opt) => {
                  const isChecked = formData.symptoms.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleSymptom(opt.id)}
                      className={`text-left p-3.5 rounded-lg border flex items-start gap-3 transition-colors cursor-pointer ${
                        isChecked
                          ? 'bg-[#f0f3ff] border-[#031632] text-[#031632] shadow-2xs'
                          : 'bg-[#f9f9ff] border-[#c5c6ce]/30 text-[#44474d] hover:bg-white hover:border-[#c5c6ce]'
                      }`}
                    >
                      <div className="mt-0.5 shrink-0 text-[#031632]">
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-[#031632]" />
                        ) : (
                          <Square className="w-5 h-5 text-[#c5c6ce]" />
                        )}
                      </div>
                      <div className="text-xs sm:text-sm leading-snug">
                        {opt.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Duration & Bite history */}
            <div className="pt-4 border-t border-[#c5c6ce]/20 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#44474d] mb-1.5">
                  問題已持續多久？
                </label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full bg-[#f9f9ff] border border-[#c5c6ce]/60 rounded-lg px-3.5 py-2.5 text-sm text-[#031632] focus:bg-white focus:outline-none focus:border-[#031632] focus:ring-2 focus:ring-[#031632]/10 transition-colors"
                >
                  <option value="最近 2 星期內剛出現">最近 2 星期內剛出現</option>
                  <option value="1-3 個月">1-3 個月</option>
                  <option value="3-6 個月">3-6 個月</option>
                  <option value="半年至 1 年以上">半年至 1 年以上</option>
                  <option value="自幼犬一直存在">自幼犬一直存在</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#44474d] mb-1.5">
                  是否曾嘗試過其他訓練或處罰？
                </label>
                <select
                  value={formData.biteHistory}
                  onChange={(e) => setFormData({ ...formData, biteHistory: e.target.value })}
                  className="w-full bg-[#f9f9ff] border border-[#c5c6ce]/60 rounded-lg px-3.5 py-2.5 text-sm text-[#031632] focus:bg-white focus:outline-none focus:border-[#031632] focus:ring-2 focus:ring-[#031632]/10 transition-colors"
                >
                  <option value="曾有輕微咬傷或露齒低吼">曾有輕微咬傷或露齒低吼</option>
                  <option value="曾咬傷家人需就醫包紮">曾咬傷家人需就醫包紮</option>
                  <option value="曾被鄰居/管業處當面投訴警告">曾被鄰居/管業處當面投訴警告</option>
                  <option value="曾嘗試打罵/威嚇但無效反彈">曾嘗試打罵/威嚇但無效反彈</option>
                  <option value="尚未採取過任何訓練介入">尚未採取過任何訓練介入</option>
                </select>
              </div>
            </div>

            {/* Calculate Trigger Button */}
            <div className="pt-2">
              <button
                type="button"
                id="calculate-assessment-btn"
                onClick={() => setHasCalculated(true)}
                className="w-full bg-[#031632] hover:bg-[#111c2c] text-white font-semibold py-3.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#ffab69]" />
                <span>產生教育心理學分析與即時防護指引</span>
              </button>
            </div>

          </div>

          {/* Results Display Area */}
          {hasCalculated && (
            <div className="mt-8 pt-8 border-t border-[#c5c6ce]/20 space-y-6">
              
              {/* Severity Banner */}
              <div className={`p-4 sm:p-5 rounded-lg border ${severityInfo.bg}`}>
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-headline font-bold text-sm sm:text-base">
                      {severityInfo.text}
                    </h4>
                    <p className="text-xs sm:text-sm mt-1 leading-relaxed opacity-95">
                      {severityInfo.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Immediate Safety Protocols */}
              <div className="bg-[#f9f9ff] p-5 rounded-lg border border-[#c5c6ce]/30 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8e4e14]">
                  <AlertCircle className="w-4 h-4" />
                  <span>任 Sir 建議：在上門評估前，請即刻執行的 3 項安全原則</span>
                </div>
                <ul className="text-xs sm:text-sm text-[#44474d] space-y-2 list-disc list-inside">
                  <li>
                    <strong className="text-[#031632]">全面停止肢體搶奪與正面對抗：</strong>若狗狗咬住物品，切勿強行掰開狗嘴或打罵，請使用高價值零食在遠處拋投進行「轉移引導」。
                  </li>
                  <li>
                    <strong className="text-[#031632]">建立進食隔離安全區：</strong>餵食時確保其他家人及小孩不走近 2 米範圍內，給予狗狗完全放鬆的進食空間。
                  </li>
                  <li>
                    <strong className="text-[#031632]">避免引發臨界點的肢體接觸：</strong>暫停強行剪甲、洗澡或擦腳等高壓力動作，避免再次觸發大腦攻擊防衛記憶。
                  </li>
                </ul>
              </div>

              {/* One-Click WhatsApp CTA Pre-filled */}
              <div className="bg-[#ffdcbd]/20 border border-[#f0bd8b]/60 rounded-xl p-5 space-y-4">
                <div>
                  <h5 className="font-headline text-sm font-bold text-[#031632] flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-[#8e4e14]" />
                    將此自測分析直接傳送給任 Sir，獲取初步上門評估建議
                  </h5>
                  <p className="text-xs text-[#75777e] mt-1">
                    點擊下方按鈕將自動開啟 WhatsApp 並帶入已整理好的狗狗狀況：
                  </p>
                </div>

                {/* Message preview snippet */}
                <div className="p-3.5 bg-white rounded-lg text-xs font-mono text-[#44474d] whitespace-pre-line border border-[#c5c6ce]/40 max-h-36 overflow-y-auto shadow-2xs">
                  {whatsappMessage}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    id="assessment-send-whatsapp-btn"
                    href={generateWhatsAppLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#ffab69] hover:bg-[#ffab69]/90 text-[#783d01] font-bold py-3 px-5 rounded-lg transition-colors text-sm shadow-sm hover-lift"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>以 WhatsApp 傳送自測結果並諮詢任 Sir</span>
                  </a>

                  <button
                    type="button"
                    onClick={copyAssessment}
                    className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-[#f9f9ff] text-[#031632] font-semibold py-3 px-4 rounded-lg border border-[#c5c6ce] text-xs transition-colors shadow-2xs cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? '已複製內容' : '複製自測內容'}</span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

