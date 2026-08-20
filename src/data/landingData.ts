import { CaseStudy, FaqItem, TrainerCredential } from '../types';

export const WHATSAPP_PHONE = '85292881234';
export const WHATSAPP_DISPLAY = '+852 9288 1234';

export const generateWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

export const DEFAULT_WHATSAPP_MESSAGE = 
  '你好任 Sir，我於 DoggyMon 網站看到您的教育心理學正向訓練。我家狗狗目前面臨一些急切的行為問題，希望能向您初步諮詢並了解上門評估安排。';

export const CREDENTIALS: TrainerCredential[] = [
  {
    title: '教育心理學碩士 (MA in Educational Psychology)',
    institution: '香港教育大學 (EdUHK)',
    highlight: '深入掌握大腦認知發展、學習歷程與行為動機分析',
    description: '具備扎實的實證研究與心理學術背景，專門將人類教育心理學的行為塑造與鷹架學習理論，轉化為犬隻認知行為矯正方案。'
  },
  {
    title: '心理學一級榮譽學士 (First Class Honours in Psychology)',
    institution: '主修心理學・專研行為主義與認知心理學',
    highlight: '嚴謹的實驗心理學邏輯與行為數據分析能力',
    description: '以行為科學（Operant & Classical Conditioning）為基石，精確拆解犬隻問題行為的前因（Antecedents）與誘發情緒。'
  },
  {
    title: 'CPDT-KA 國際認證犬隻訓練師',
    institution: 'CCPDT (Certification Council for Professional Dog Trainers)',
    highlight: '全球公認最高標準的專業犬隻行為執業資格',
    description: '通過嚴格的犬隻行為學、人道訓練標準及倫理審核，持守 LIMA (Least Intrusive, Minimally Aversive) 人道行為干預原則。'
  },
  {
    title: 'APDT 美國專業狗隻訓練師協會會員',
    institution: 'Association of Professional Dog Trainers (APDT USA)',
    highlight: '持續同步國際頂尖正向訓練與動物福祉科研進展',
    description: '嚴格恪守非暴力、非強迫的正向教育方針，堅決反對任何電圈、刺圈或肢體體罰。'
  },
  {
    title: '前正規中學教師教學背景',
    institution: '多年正規學校前線教學與家長溝通經驗',
    highlight: '將「主人教學」系統化，把複雜的行為學轉化為狗主能輕鬆落實的步驟',
    description: '狗狗的行為改善，90% 取決於主人的日常引導。任 Sir 運用教師的教學法（Pedagogy），能清晰無痛地教會主人掌握正確的操作手法。'
  }
];

export const PAIN_POINTS = [
  {
    id: 'biting',
    title: '狗狗咬人或咬傷家人 / 訪客',
    tag: '極高危險性',
    situation: '摸特定部位、剪指甲、擦腳、甚至無預警下突然開口咬人，導致家人出血受傷，家庭成員相處充滿恐懼。',
    psychologyNote: '咬人是犬隻在恐懼或壓力臨界點時的防禦性反應。若此時施加體罰，只會證實狗狗的「恐懼威脅是真實的」，導致下次攻擊更猛烈。'
  },
  {
    id: 'guarding',
    title: '嚴重護食、護物與低吼警戒',
    tag: '日常生活危機',
    situation: '只要靠近狗碗、玩具、或牠撿到的骨頭，狗狗便眼神僵硬、露出牙齒、發出威嚇低吼，甚至飛撲咬向靠近的手。',
    psychologyNote: '護食源於「資源即將被奪走」的焦慮。強行搶走或打罵，會強化「人類靠近 = 失去資源」的負面關聯，演變成更激烈的攻擊。'
  },
  {
    id: 'barking',
    title: '持續狂吠不止・遭鄰居與管理處投訴',
    tag: '環境逼切危機',
    situation: '聽到走廊腳步聲、門鐘響起、窗外動靜、或主人離家時瘋狂嚎叫抓門，面臨大廈業主立案法團或甚至政府部門警告信。',
    psychologyNote: '吠叫是情緒的警報器（警戒、恐懼、或分離焦慮）。若只用滅聲器或斥責，只是強行關閉警報器，內部焦慮卻無從釋放。'
  },
  {
    id: 'reactivity',
    title: '出街散步暴衝・見狗見人失控狂撲',
    tag: '社交與外出困境',
    situation: '每次落街散步都像打仗，一見其他犬隻或陌生人就拉緊牽繩、狂吠前衝，狗主雙手拉傷，甚至不敢在人多時段帶狗出門。',
    psychologyNote: '繩上過度反應（Leash Reactivity）通常源於「活動受限下的挫折感」或「恐懼引發的先發制人反應」。必須透過距離控制與去敏感化解決。'
  }
];

export const METHOD_COMPARISON = [
  {
    dimension: '行為矯正機制',
    punitive: '透過痛楚、驚嚇或體罰（如打罵、扯繩、壓地）強行壓抑外顯行為',
    doggyMon: '以教育心理學分析「行為背後的情緒動機」，從大腦認知根源消除恐懼與焦慮'
  },
  {
    dimension: '對犬隻心理的影響',
    punitive: '建立「習得性無助 (Learned Helplessness)」，長期處於慢性壓力，易誘發突發性咬人',
    doggyMon: '建立「安全依附 (Secure Attachment)」與自信，激發犬隻自主選擇平靜行為的內在動機'
  },
  {
    dimension: '復發風險',
    punitive: '極高。一旦懲罰者不在場或刺激超過閾值，行為會以更具破壞力的方式「反彈爆發」',
    doggyMon: '極低。透過「反古典制約」重塑神經迴路連結，使狗狗真正對刺激感到放鬆與安全'
  },
  {
    dimension: '主狗關係',
    punitive: '基於恐懼與警戒，狗狗對主人產生提防心，甚至出現防禦性反咬',
    doggyMon: '基於信任與明確的溝通默契，主人成為狗狗在未知環境中的定海神針'
  },
  {
    dimension: '訓練工具',
    punitive: '依賴刺圈、電圈、P繩、打狗棒等造成身體疼痛之器具',
    doggyMon: '標準胸背帶、一般牽繩、高價值獎勵、環境管理與科學去敏感化步驟'
  }
];

export const THREE_STEPS = [
  {
    step: '01',
    title: 'WhatsApp 初步溝通與急迫度分流',
    desc: '透過 WhatsApp 簡述犬隻品種、年齡及當前行為危機（可附上簡短影片）。任 Sir 會先進行客觀評估，並即時提供臨時安全防範指引，避免意外再度發生。',
    time: '當日即時回覆',
    badge: '安全第一'
  },
  {
    step: '02',
    title: '上門實地環境行為評估（約 90-120 分鐘）',
    desc: '任 Sir 親自前往您的家居現場。在狗狗最放鬆的真實環境中，精確分析觸發行為的前因（Antecedents）、環境空間盲點及家庭成員的互動模式。',
    time: '一對一深入診斷',
    badge: '實地考察'
  },
  {
    step: '03',
    title: '定制專屬行為改善方案 & 系統化跟進',
    desc: '制定清晰、可落實的日常訓練處方，任 Sir 親身示範並指導主人掌握手法。課後提供完整文字摘要及 WhatsApp 影片跟進支援，確保成效穩固。',
    time: '持續追蹤進度',
    badge: '全程支援'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-shiba',
    dogName: '豆豆',
    breed: '柴犬 (Shiba Inu)',
    age: '2 歲 8 個月',
    problem: '嚴重護食與護玩具，曾兩度咬傷男主人至手指流血',
    trigger: '家人行近狗碗、或嘗試取走其撿到的拖鞋/潔齒骨',
    ownerPain: '「每次餵食都提心吊膽，甚至想過是否要把牠送走，內心非常愧疚又無助。」',
    psychologyDiagnosis: '典型資源防禦行為（Resource Guarding）。過往主人曾嘗試用「搶走 + 大聲斥責」懲罰，令豆豆大腦確立了「人類接近 = 失去寶物 = 必須用牙齒保護」的強烈負面聯想。',
    solutionSteps: [
      '第一階段：環境管理與安全防線建立，全面停止所有正面搶奪與肢體對抗。',
      '第二階段：應用古典制約（Classical Conditioning）進行去敏感化（人類接近 = 掉落更高價值的鮮肉凍乾）。',
      '第三階段：建立「物品交換（Drop & Trade）」認知反射，將防禦心態轉化為主動合作。'
    ],
    outcome: '訓練 4 星期後，家人可在進食時自由走動；8 星期後，豆豆能平靜放開口中物品並搖尾等待獎勵，咬人紀錄歸零。',
    timelineWeeks: 8
  },
  {
    id: 'case-poodle',
    dogName: 'Mochi',
    breed: '玩具貴婦犬 (Toy Poodle)',
    age: '3 歲',
    problem: '對門鐘及走廊聲響極度敏感狂吠，收到管理處最後警告信',
    trigger: '走廊腳步聲、電梯開門聲、快遞按鈴',
    ownerPain: '「鄰居多次拍門投訴，管業處警告若不改善將會採取行動，全家人每天精神極度緊繃。」',
    psychologyDiagnosis: '環境警戒與恐懼引發的警報性吠叫（Alert / Fear Barking）。Mochi 將走廊聲響評估為潛在入侵威脅，並在每次吠叫後（剛好送件員離開）獲得了「吠叫成功趕走入侵者」的負強化。',
    solutionSteps: [
      '第一階段：聲響音量去敏感化（Desensitization），錄製走廊聲音從極微弱音量開始播放配對獎賞。',
      '第二階段：塑造「替代行為（Differential Reinforcement of Alternative behavior, DRA）」，聽到門鐘聲自動跑回特定軟墊坐下。',
      '第三階段：逐步增加刺激強度，模擬真實訪客情境。'
    ],
    outcome: '經 3 次上門指導與 6 星期居家練習，吠叫次數由每天 20+ 次驟降至偶爾輕微低鳴，順利化解鄰里危機。',
    timelineWeeks: 6
  },
  {
    id: 'case-mongrel',
    dogName: '黑仔 (Lucky)',
    breed: '唐狗 (Mixed Breed)',
    age: '1 歲半',
    problem: '散步時見其他犬隻即失控暴衝狂撲、狂吠發出攻擊聲',
    trigger: '散步時在 10 米範圍內看見其他犬隻',
    ownerPain: '「主人兩次被拉跌擦傷，只敢在半夜一點或清晨五點帶牠落街，生活作息完全崩潰。」',
    psychologyDiagnosis: '繩上挫折與恐懼引起的反應性（Leash Reactivity）。緊繃的牽繩剝奪了犬隻正常嗅聞與繞道社交的肢體語言，激發了「戰鬥或逃跑（Fight or Flight）」中的戰鬥本能。',
    solutionSteps: [
      '第一階段：更換人體工學 Y 型減壓胸背帶，教授主人「鬆繩隨行」核心技巧與身體重心轉移。',
      '第二階段：界定「臨界安全距離（Threshold Distance）」，在狗狗尚能保持理性的距離進行「觀察刺激即給予高階強化」訓練。',
      '第三階段：建立「自發性看主人（Check-in）」習慣，重塑注意力焦點。'
    ],
    outcome: '現在能在 2-3 米正常距離與其他犬隻擦身而過，主人已能於日間正常時段輕鬆帶黑仔外出散步。',
    timelineWeeks: 7
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'methodology',
    question: '咬人或嚴重護食問題這麼危險，真的不需要用打罵或打電圈來懲罰嗎？',
    answer: '絕對不需要，且科學研究證實體罰極度危險。咬人與護食的根源通常是「恐懼」與「自我防衛」。如果使用打罵或電圈，雖然短時間內可能因恐懼而壓抑行為，但同時也消除了狗狗的預警訊號（如低吼）。狗狗下次遇到壓力時，會跳過警告直接發動致命性咬人。教育心理學著重於消除恐懼根源，建立安全感，才是長久解決之道。'
  },
  {
    id: 'faq-2',
    category: 'effect',
    question: '正向訓練會不會只依賴零食？如果出街沒有零食，狗狗還會聽話嗎？',
    answer: '這是一個常見的誤解。零食只是早期建立「新行為大腦迴路」與「情緒反古典制約」的強效工具（Positive Reinforcer）。在行為穩固後，我們會透過心理學上的「間歇性強化排程（Intermittent Reinforcement Schedule）」與「生活性獎勵（如嗅聞、前進、讚賞）」逐步淡化對食物的依賴，最終讓平靜合作成為狗狗的自然習慣。'
  },
  {
    id: 'faq-3',
    category: 'effect',
    question: '成犬或已經養了幾年的老狗，壞習慣已經定型，還能改得過來嗎？',
    answer: '大腦具備「神經可塑性 (Neuroplasticity)」，任何年齡的犬隻都能學習新行為。成年犬雖然需要更多耐心來消退舊有習慣，但成犬的專注力與理解力往往比幼犬更成熟。任 Sir 處理過大量 5 至 9 歲的嚴重個案，只要方法切合犬隻的認知節奏，依然能取得顯著改善。'
  },
  {
    id: 'faq-4',
    category: 'process',
    question: '一般需要上多少堂才能看到明顯改善？',
    answer: '每個家庭的環境、犬隻歷史與行為嚴重程度各異。通常在第 1 次上門評估後，透過即時的環境管理與初步介入，當天即可大幅減少意外發生率。完整的行為重塑通常建議 3 至 6 堂（相隔 2-3 週進行一堂，給予狗狗與主人充足的消化與練習時間），並配合期間無限制的 WhatsApp 影片作業跟進。'
  },
  {
    id: 'faq-5',
    category: 'process',
    question: '全家人都需要參與訓練嗎？長輩或外傭照顧能配合嗎？',
    answer: '強烈建議主要照顧者（包括家人或家傭）一同出席。教育心理學強調「學習環境的一致性 (Consistency)」。任 Sir 曾擔任多年中學教師，擅長將訓練步驟簡化為清晰、具體、容易執行的「日常行動清單」，即使是家中長輩或菲傭印傭姐姐，也能輕鬆理解並正確執行。'
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: '服務涵蓋香港哪些地區？收費模式如何？',
    answer: 'DoggyMon 的上門行為評估與訓練服務涵蓋全港主要地區（包括九龍、香港島及新界大部分住宅區，偏遠或離島地區可另議）。收費公開透明，無隱藏附加費或強銷套票。歡迎直接 WhatsApp 任 Sir 描述情況，我們會先為您提供清晰的收費表及評估預約時間。'
  }
];
