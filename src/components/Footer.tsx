import React from 'react';
import { GraduationCap, Award, ShieldCheck, MessageCircle, MapPin, Phone, Mail, CheckCircle2, Shield } from 'lucide-react';
import { WHATSAPP_DISPLAY, generateWhatsAppLink, DEFAULT_WHATSAPP_MESSAGE } from '../data/landingData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#031632] text-[#c5c6ce] text-xs sm:text-sm">
      {/* Top Banner / Final Conversion Strip */}
      <div className="bg-[#111c2c] py-16 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffab69] text-xs font-semibold">
            <span>The Science of Lasting Behavioral Transformation</span>
          </div>
          
          <h3 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            別讓恐懼與焦慮，破壞您與愛犬的一生羈絆
          </h3>
          
          <p className="text-xs sm:text-sm text-[#c5c6ce] max-w-2xl mx-auto leading-relaxed">
            及早以科學介入，能有效防止咬人意外升級與鄰里投訴。歡迎即時透過 WhatsApp 與任 Sir 進行初步情況分流。
          </p>

          <div className="pt-4 flex justify-center">
            <a
              id="footer-final-whatsapp-btn"
              href={generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#ffab69] hover:bg-[#ffab69]/90 text-[#783d01] font-bold py-3.5 px-8 rounded-lg text-sm sm:text-base shadow-md hover-lift transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp 初步諮詢任 Sir ({WHATSAPP_DISPLAY})</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Credentials Info */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Mission (5 cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center font-bold text-[#031632] text-base shadow-sm">
                <Shield className="w-5 h-5 fill-[#031632]" />
              </div>
              <span className="font-headline text-lg font-bold text-white tracking-tight">
                DoggyMon 犬隻行為改善所
              </span>
            </div>
            <p className="text-xs text-[#c5c6ce] leading-relaxed max-w-sm">
              香港專業犬隻正向行為訓練品牌。創辦人任 Sir (Jacob Yam) 以教育心理學碩士及 CPDT-KA 國際認證背景，專門處理咬人、嚴重護食、狂吠等行為危機，恪守人道非暴力原則。
            </p>
            <div className="text-[11px] text-[#8e4e14] bg-[#ffdcbd]/20 px-3 py-1.5 rounded border border-[#f0bd8b]/30 inline-block">
              持守國際 LIMA (Least Intrusive, Minimally Aversive) 動物行為干預倫理守則。
            </div>
          </div>

          {/* Core Credentials (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-headline text-xs font-bold text-white uppercase tracking-wider">
              學術及專業資歷
            </div>
            <ul className="space-y-2 text-xs text-[#c5c6ce]">
              <li className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>香港教育大學教育心理學碩士</span>
              </li>
              <li className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>心理學一級榮譽學士</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>CPDT-KA 國際認證犬隻訓練師</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>APDT 美國專業狗隻訓練師協會會員</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>前中學正規教師（教育學專業）</span>
              </li>
            </ul>
          </div>

          {/* Service Area & Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-headline text-xs font-bold text-white uppercase tracking-wider">
              服務與聯絡
            </div>
            <ul className="space-y-2.5 text-xs text-[#c5c6ce]">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>香港各區上門實地評估</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#ffab69] shrink-0" />
                <a
                  href={generateWhatsAppLink(DEFAULT_WHATSAPP_MESSAGE)}
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#ffab69] shrink-0" />
                <span>info@doggymon.hk</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#c5c6ce]/70">
          <div>
            © {new Date().getFullYear()} DoggyMon 犬隻訓練所. 版權所有.
          </div>
          <div>
            以教育心理學為本・科學正向犬隻行為改善
          </div>
        </div>
      </div>
    </footer>
  );
};
