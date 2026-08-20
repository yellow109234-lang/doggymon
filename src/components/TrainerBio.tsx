import React from 'react';
import { GraduationCap, Award, BookOpen, ShieldCheck, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { CREDENTIALS, generateWhatsAppLink, WHATSAPP_DISPLAY } from '../data/landingData';

export const TrainerBio: React.FC = () => {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-[#f9f9ff] border-b border-[#c5c6ce]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdcbd]/50 text-[#6f3800] text-xs font-semibold border border-[#f0bd8b]/50">
            <Award className="w-3.5 h-3.5 text-[#8e4e14]" />
            <span>Expert Leadership • Proven Results</span>
          </div>
          
          <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-[#031632] tracking-tight">
            專業教練團隊與教育心理學資歷
          </h2>
          
          <p className="text-sm sm:text-base text-[#44474d] leading-relaxed">
            訓練狗狗本質上是一場「學習與溝通的過程 (Learning Process)」。我們結合教育心理學碩士與國際頂尖犬隻行為執業資格，為每個家庭打造可靠的行為轉化。
          </p>
        </div>

        {/* Trainers Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          
          {/* Trainer 1: Ren Sir (Jacob Yam) - Founder & Lead Behaviorist */}
          <div className="bg-white rounded-xl border border-[#c5c6ce]/30 p-6 flex flex-col h-full ambient-shadow hover-lift relative overflow-hidden group">
            <div className="aspect-square w-full rounded-lg overflow-hidden mb-5 relative bg-[#e7eeff]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB33uEj_QB8qSZ5roJ7XdxiZlabzzgVjgNnUwVDyobRhQXVPL1DccxC1tA9F59C9PBqePns6jUxK15yasLjDP9TEpqnl4sRa79lR79uCHoux4UkQz-Gshncl9vFqUO6pE2Std0FlYnivw17LRdIfAAVO5qtUUEBl_Zi0Stpi2LazlBptAotjoqvq5IAslRz6HWVTf1M1hbs5oyCLbR_zJv7nrayqcp0DTCrqRnKiflZX3beYpW7w7KF"
                alt="Ren Sir (Jacob Yam) - Lead Behaviorist"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-grow flex flex-col">
              <h3 className="font-headline font-bold text-xl text-[#031632] mb-1">
                任 Sir (Jacob Yam)
              </h3>
              <p className="font-semibold text-xs text-[#8e4e14] mb-3">
                創辦人 / 首席行為專家・教育心理學碩士
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  咬人防禦
                </span>
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  嚴重護食
                </span>
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  教育心理學
                </span>
              </div>

              <p className="text-xs text-[#44474d] leading-relaxed mb-4 flex-grow">
                香港教育大學教育心理學碩士與前中學教師。專精於複雜攻擊性行為與嚴重焦慮逆轉，將「鷹架學習」與「反古典制約」轉化為狗主日常清單。
              </p>

              <div className="flex items-center gap-2 mb-4 text-[#031632] font-semibold text-xs">
                <Award className="w-4 h-4 text-[#8e4e14]" />
                <span>CPDT-KA 認證 • 12+ 年前線行為干預</span>
              </div>

              <a
                href={generateWhatsAppLink('你好任 Sir，我希望能直接向您預約諮詢我家狗狗的行為改善方案。')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-[#031632] text-[#031632] hover:bg-[#031632] hover:text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex justify-center items-center gap-1.5"
              >
                <span>向任 Sir 預約諮詢</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Trainer 2: Behavioral Modification Specialist */}
          <div className="bg-white rounded-xl border border-[#c5c6ce]/30 p-6 flex flex-col h-full ambient-shadow hover-lift relative overflow-hidden group">
            <div className="aspect-square w-full rounded-lg overflow-hidden mb-5 relative bg-[#e7eeff]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfN2t_dTcmufGRcyB22svLJAaRq4AZX3cOlTLo2wRAKXdH58Zj60xC9Ue-zxn_ux5fvrQPY2Qrhndj1n_gUH2BmJYVZo8yp8Fq8V2bWVISeMR_mmc-fplZx-KZmvIwcidcGCwbtaDVZGwIu0gBfFAaE4KhVzr5zS7fpXusoq0GcL8KrkyOXLeD4x-ZZJ--jwBtBvhJg7ELRTHOnHjO27prPAmxpi2MHvF4uQ93I1FeSCOMDshhznQT"
                alt="Senior Canine Behaviorist"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-grow flex flex-col">
              <h3 className="font-headline font-bold text-xl text-[#031632] mb-1">
                Sarah Miller (資深行為師)
              </h3>
              <p className="font-semibold text-xs text-[#8e4e14] mb-3">
                犬隻反應性與焦慮調節專科
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  散步暴衝
                </span>
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  見狗吠叫
                </span>
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  分離焦慮
                </span>
              </div>

              <p className="text-xs text-[#44474d] leading-relaxed mb-4 flex-grow">
                專精於散步反應性（Leash Reactivity）與恐懼性狂吠。透過系統性距離控制與環境豐容，幫助狗狗重拾戶外冷靜。
              </p>

              <div className="flex items-center gap-2 mb-4 text-[#031632] font-semibold text-xs">
                <Award className="w-4 h-4 text-[#8e4e14]" />
                <span>國際專業認證 • 10+ 年實務經驗</span>
              </div>

              <a
                href={generateWhatsAppLink('你好，我想向 DoggyMon 諮詢散步見狗暴衝/分離焦慮的訓練服務。')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-[#031632] text-[#031632] hover:bg-[#031632] hover:text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex justify-center items-center gap-1.5"
              >
                <span>預約反應性評估</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Trainer 3: Puppy Development & Foundations */}
          <div className="bg-white rounded-xl border border-[#c5c6ce]/30 p-6 flex flex-col h-full ambient-shadow hover-lift relative overflow-hidden group">
            <div className="aspect-square w-full rounded-lg overflow-hidden mb-5 relative bg-[#e7eeff]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwP_T2KjK_9UC2rtlhmd0Co3EAgewsvyaL5H8zGBiIeH-BFyfUiXAcYwvJWcan1O-btAwt6QobCtwiUJ7tBscrA2OqNPRev_rsVl9CKp-dBYGjBy4jGDcMdgO8kF8bucVuKhVaF_a-7amBa_i7EoKGqt-2DxIKSx66vVCxo0e5aB9aFWYg2I1bwYvHiSvJkG0L52nyOzItMdQOXlxe2BX6tN0XoYgej_iLSgRJOuGt6X8zpMYzs1jX"
                alt="Puppy Development Specialist"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-grow flex flex-col">
              <h3 className="font-headline font-bold text-xl text-[#031632] mb-1">
                Jessica Chen (幼犬培訓師)
              </h3>
              <p className="font-semibold text-xs text-[#8e4e14] mb-3">
                黃金期社會化與家庭生活習慣奠基
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  幼犬社會化
                </span>
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  定點如廁
                </span>
                <span className="bg-[#ffdcbd] text-[#2c1600] font-semibold text-[11px] px-2.5 py-0.5 rounded-full border border-[#f0bd8b]">
                  籠內訓練
                </span>
              </div>

              <p className="text-xs text-[#44474d] leading-relaxed mb-4 flex-grow">
                把握 3-6 個月黃金大腦發育期，運用正向強化預先建立自信、抗挫折與親人社交能力，預防未來行為危機。
              </p>

              <div className="flex items-center gap-2 mb-4 text-[#031632] font-semibold text-xs">
                <Award className="w-4 h-4 text-[#8e4e14]" />
                <span>正向行為認證 • 6+ 年專研幼犬</span>
              </div>

              <a
                href={generateWhatsAppLink('你好，我想諮詢【幼犬黃金期社會化與基礎生活訓練】。')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-[#031632] text-[#031632] hover:bg-[#031632] hover:text-white font-semibold text-xs py-2.5 rounded-lg transition-colors flex justify-center items-center gap-1.5"
              >
                <span>預約幼犬方案</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Ren Sir Credentials Deep-Dive Grid */}
        <div className="bg-white rounded-xl border border-[#c5c6ce]/30 p-6 sm:p-8 ambient-shadow">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#c5c6ce]/20 mb-6">
            <div>
              <h3 className="font-headline font-bold text-lg text-[#031632]">
                任 Sir (Jacob Yam) 學術資歷與教育學背景
              </h3>
              <p className="text-xs text-[#75777e] mt-0.5">
                以教育心理學碩士與前中學正規教師專業，提供極致嚴謹的行為干預
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#f0f3ff] text-[#031632] font-semibold text-xs border border-[#c5c6ce]/30 shrink-0 self-start sm:self-auto">
              LIMA 人道原則審核通過
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CREDENTIALS.map((cred, idx) => (
              <div key={idx} className="p-4 bg-[#f9f9ff] rounded-lg border border-[#c5c6ce]/30 space-y-1.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold text-[#031632] leading-snug">
                    {cred.title}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white text-[#44474d] border border-[#c5c6ce]/30 whitespace-nowrap font-medium">
                    {cred.institution}
                  </span>
                </div>
                <p className="text-xs text-[#8e4e14] font-semibold">
                  {cred.highlight}
                </p>
                <p className="text-xs text-[#44474d] leading-relaxed">
                  {cred.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

