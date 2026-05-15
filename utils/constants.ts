import type { Fund, Question, Persona } from '~/types';

export const MOCK_FUNDS: Fund[] = [
  {
    "code": "C0125004",
    "risk": 2,
    "type": "Core",
    "desc": "廣泛佈局全球投資等級與公債市場，作為資產配置的穩定核心層。",
    "perf": "+5.2%",
    "name": "安盛環球基金-全球綜合債券基金A CAP歐元(本基金之配息來源可能為本金，且非屬環境、社會及治理相關主題基金)",
    "isin": "LU0184633773",
    "currency": "EUR"
  },
  {
    "code": "C0109004",
    "risk": 2,
    "type": "Core",
    "desc": "深耕美國投資等級企業債券，獲取優於公債之息差與相對低之違約風險。",
    "perf": "+6.1%",
    "name": "PGIM美國公司債基金T級別美元累積型",
    "isin": "IE00BDZVHR40",
    "currency": "USD"
  },
  {
    "code": "C0016400",
    "risk": 2,
    "type": "Core",
    "desc": "精選全球投資等級公司債與政府債，透過本幣避險降低匯率干擾。",
    "perf": "+5.8%",
    "name": "富達基金-全球優質債券基金(A股C月配息美元)(本基金有相當比重投資於非投資等級之高風險債券且配息來源可能為本金)",
    "isin": "LU2156566916",
    "currency": "USD"
  },
  {
    "code": "17612497",
    "risk": 4,
    "type": "Core",
    "desc": "以長期投資為目標，選取台灣具產業領先地位之績優龍頭企業。",
    "perf": "+13.8%",
    "name": "國泰國泰基金-新台幣A",
    "isin": "TW000T3701Y7",
    "currency": "TWD"
  },
  {
    "code": "C0026212",
    "risk": 3,
    "type": "Core",
    "desc": "以總報酬為導向之全球平衡配置，追求資本穩定增長且不偏廢收益。",
    "perf": "+8.5%",
    "name": "摩根投資基金-核心總報酬基金-JPM核心總報酬(美元)-A股(累計)(本基金有相當比重投資於非投資等級之高風險債券)",
    "isin": "LU0235842555",
    "currency": "USD"
  },
  {
    "code": "C0038019",
    "risk": 3,
    "type": "Core",
    "desc": "聚焦擁有強大無形資產與品牌護城河之領先企業，具備防禦性。",
    "perf": "+10.5%",
    "name": "摩根士丹利環球品牌基金A(美元)",
    "isin": "LU0119620416",
    "currency": "USD"
  },
  {
    "code": "19330754",
    "risk": 4,
    "type": "Core",
    "desc": "主要投資於台股優質企業，透過主動管理獲取長期優異回報。",
    "perf": "+15.2%",
    "name": "野村優質基金-累積類型新臺幣計價",
    "isin": "TW000T3201Y8",
    "currency": "TWD"
  },
  {
    "code": "01032183",
    "risk": 4,
    "type": "Core",
    "desc": "鎖定高成長潛力之台股標的，分享台灣經濟長期增長成果。",
    "perf": "+14.6%",
    "name": "玉山高成長基金",
    "isin": "TW000T0802Y6",
    "currency": "TWD"
  },
  {
    "code": "C0057147",
    "risk": 3,
    "type": "Core",
    "desc": "靈活調整股債比例與避險策略，追求各種市場環境下的穩定收益。",
    "perf": "+7.5%",
    "name": "歐義銳榮靈活策略入息基金RM(本基金配息來源可能為本金)",
    "isin": "LU1158069127",
    "currency": "EUR"
  },
  {
    "code": "C0025280",
    "risk": 4,
    "type": "Satellite",
    "desc": "鎖定AI核心技術與應用，追求長期資本增值的同時提供固定現金流。",
    "perf": "+19.8%",
    "name": "安聯AI人工智慧基金-AMf2固定月配類股(美元)(基金之配息來源可能為本金)",
    "isin": "LU2664909848",
    "currency": "USD"
  },
  {
    "code": "73990649",
    "risk": 4,
    "type": "Satellite",
    "desc": "佈局台灣世界級科技供應鏈，掌握半導體與關鍵零組件成長契機。",
    "perf": "+18.7%",
    "name": "玉山科技島基金",
    "isin": "TW000T0808Y3",
    "currency": "TWD"
  },
  {
    "code": "73990253",
    "risk": 5,
    "type": "Satellite",
    "desc": "聚焦具爆發力之台股成長股，追求超越大盤之高額報酬潛力。",
    "perf": "+22.4%",
    "name": "統一奔騰基金",
    "isin": "TW000T0910Y7",
    "currency": "TWD"
  },
  {
    "code": "18037937",
    "risk": 5,
    "type": "Satellite",
    "desc": "專注於電子資訊與科技前瞻產業，精挑細選台股科技領航者。",
    "perf": "+21.5%",
    "name": "野村e科技基金",
    "isin": "TW000T3205Y9",
    "currency": "TWD"
  },
  {
    "code": "C0016030",
    "risk": 4,
    "type": "Satellite",
    "desc": "聚焦全球具創新能力與長期成長潛力之科技領先企業。",
    "perf": "+22.5%",
    "name": "富達基金-全球科技基金(A股歐元)",
    "isin": "LU0099574567",
    "currency": "EUR"
  },
  {
    "code": "C0025113",
    "risk": 5,
    "type": "Satellite",
    "desc": "透過專業團隊選股，廣泛佈局全球新興市場，掌握輪動商機。",
    "perf": "+10.2%",
    "name": "安聯新興市場股票基金-AT累積類股(歐元)",
    "isin": "LU1282651980",
    "currency": "EUR"
  },
  {
    "code": "98640076",
    "risk": 5,
    "type": "Satellite",
    "desc": "掌握東南亞最具成長力之越南市場，佈局其工業化與內需升級機遇。",
    "perf": "+16.8%",
    "name": "中國信託越南機會基金-台幣",
    "isin": "TW000T2691A1",
    "currency": "TWD"
  },
  {
    "code": "C0109015",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選美國市場中具備顯著成長動能之大型權值股，追求超額報酬。",
    "perf": "+18.5%",
    "name": "PGIM Jennison美國成長基金A級別美元累積型",
    "isin": "IE00BYWYQY37",
    "currency": "USD"
  },
  {
    "code": "98639401",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選高股息成分股，適合追求穩定配息與中長期增值之投資人。",
    "perf": "+11.5%",
    "name": "元大台灣高股息ETF連結基金-新台幣A類型不配息",
    "isin": "TW000T05B3A4",
    "currency": "TWD"
  },
  {
    "code": "98639403",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤台灣50指數，佈局台灣市值最大之績優龍頭企業。",
    "perf": "+14.8%",
    "name": "元大台灣卓越50ETF連結基金-新台幣A類型不配息",
    "isin": "TW000T05B2A6",
    "currency": "TWD"
  },
  {
    "code": "98642376",
    "risk": 4,
    "type": "Satellite",
    "desc": "連結美國S&P 500指數，一次掌握美國最強大的500家企業成長動能。",
    "perf": "+18.2%",
    "name": "元大標普500ETF連結基金",
    "isin": "TW000T05C4Y1",
    "currency": "TWD"
  },
  {
    "code": "98641765",
    "risk": 4,
    "type": "Satellite",
    "desc": "策略兼顧高股息與低波動，強化資產抗震能力。",
    "perf": "+12.5%",
    "name": "元大台灣高股息低波動ETF連結基金-新台幣A類型不配息",
    "isin": "TW000T05C2A5",
    "currency": "TWD"
  },
  {
    "code": "98641767",
    "risk": 4,
    "type": "Satellite",
    "desc": "符合ESG永續規範，結合社會責任與長期獲利潛力。",
    "perf": "+13.2%",
    "name": "元大臺灣ESG永續ETF連結基金-新台幣A類型不配息",
    "isin": "TW000T05C3A3",
    "currency": "TWD"
  },
  {
    "code": "98639405",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於上櫃市場市值最大、流動性最佳之50檔企業標的。",
    "perf": "+16.3%",
    "name": "元大富櫃50ETF連結基金-新台幣A類型不配息",
    "isin": "TW000T05B4A2",
    "currency": "TWD"
  }
];

export const QUESTIONS: Record<string, Question[]> = {
  type2: [
    {id:1,text:"好東西本來就貴，\n高品質值得砸錢。",type:"range"},
    {id:2,text:"市場大崩盤？\n那是特價入場券。",type:"range"},
    {id:3,text:"為了翻身，\n適度融資或加碼我OK。",type:"range"},
    {id:4,text:"慢慢存股超無聊，\n我沒空等三十年。",type:"range"},
    {id:5,text:"買東西憑感覺，\n看數據不如靠直覺。",type:"range"},
    {id:6,text:"計畫太死，\n我喜歡看狀況隨機應變。",type:"range"},
    {id:7,text:"我不喜歡賠錢，\n但更怕錯過翻倍機會。",type:"range"},
    {id:8,text:"抽獎就拚 1% 大獎，\n小獎太無聊。",type:"range"},
    {id:9,text:"比起高底薪，\n我更喜歡高獎金。",type:"range"}
  ],
  type4: [
    {id:10,q:"來到宇宙樹苗交易所，\n我想種哪棵？",type:"choice",options:[{val:1,text:"安心麵包樹"},{val:4,text:"全能混種樹"},{val:7,text:"傑克魔豆樹"}]},
    {id:11,q:"我不求果樹長青，\n一結果子就盡量摘。",type:"bool"},
    {id:12,q:"澆一桶沒用過的實驗肥料，\n賭個未來。",type:"bool"},
    {id:13,q:"我不急著收成，\n寧願養分全回流。",type:"bool"},
    {id:14,q:"我想在最短時間內，\n追求金幣自由。",type:"bool"},
    {id:15,q:"這棵樹不傳後代，\n是我這輩子翻身用的。",type:"bool"}
  ]
};

export const PERSONAS: Persona[] = [
  {title:"口袋拉拉",enName:"Lab",desc:"拉布拉多型投資人高度重視「有沒有產出」，對現金流與紀律特別敏感。能定期看到成果的配息型基金或穩定投入機制，最能讓他們安心守住投資節奏。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/152f4e06-2380-4730-a086-09ad9dcb308e"}, // Score 15-23, RR3-RR4
  {title:"口袋獒",enName:"Mastiff",desc:"藏獒型投資人重視責任與守護，對風險高度警覺。核心配置、穩定性高的基金，是他們為資產築起防線的首選，寧可慢，也不能失守。",riskLevel:3,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/056f600d-6ff0-4d03-84bf-f9dd277ac487"}, // Score 24-32, RR2-RR3
  {title:"口袋阿金",enName:"Golden",desc:"黃金獵犬型投資人性格溫暖、陽光，理財目的不是擊敗市場，而是讓生活更安心。他們親近長期投資、穩健累積的策略，就像釀酒一樣，時間越久，收穫越醇。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/f866fc51-a815-4bf6-8e28-d3639d5a1600"}, // Score 33-41, RR3-RR4
  {title:"口袋柴",enName:"Shiba",desc:"柴犬型投資人個性獨立、自我，不輕易追逐市場風向，常以旁觀者視角看待波動。這種傲嬌而固執的氣質，使他們偏好有長期邏輯、能經得起時間考驗的基金，而非短線熱門題材。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/79ebfa32-abd4-4d6e-97c3-de47b3eae5cc"}, // Score 42-50, RR2-RR4
  {title:"口袋土狗",enName:"Tugou",desc:"台灣土狗型投資人擁有極強的環境適應力，不追求華麗報酬，而是能在各種市場條件下活得下來。分散、耐震、長期有效的基金配置，最符合他們的生存智慧。",riskLevel:5,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/9653082c-0970-44c8-b4cb-44a326c7651f"}, // Score 51-59, RR4-RR5
  {title:"口袋西施",enName:"ShihTzu",desc:"西施犬型投資人講究生活品質與節奏，不急著進出市場。穩健、管理風格一致的基金，讓資產在不被打擾的狀態下，優雅累積。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/7e82c005-61b0-4685-80f5-87475fdf9002"}, // Score 60-68, RR3-RR4
  {title:"口袋邊牧",enName:"Border",desc:"邊境牧羊犬型投資人理性且高度系統化，相信規則勝過情緒。具備明確策略、可自動執行的基金投資方式，正好符合他們追求最佳化的思維。",riskLevel:5,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/18896e37-c685-4aa1-8234-ddf9d4a326de"}, // Score 69-77, RR4-RR5
  {title:"口袋濟斯",enName:"Maltese",desc:"馬爾濟斯型投資人資金規模不一定大，但對世界充滿好奇。他們偏好低門檻、可探索不同市場的基金配置，在控制風險的前提下，體驗投資帶來的視野擴張。",riskLevel:5,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/545a1226-05a7-43d0-ab65-4f13a847e211"}, // Score 78-86, RR4-RR5
  {title:"口袋貴賓",enName:"Poodle",desc:"貴賓犬型投資人重視差異化與質感，不想與市場雷同。具有特色主題、選股邏輯清楚的基金，能滿足他們對獨特性的期待。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/7398bfc6-b0cb-4673-a018-aab8ecd13c45"}, // Score 87-95, RR3-RR4
  {title:"口袋吉娃",enName:"Chi",desc:"吉娃娃型投資人情緒敏感、反應快速，容易受市場波動影響。透過分散配置與小額定期投入的基金策略，有助於在高壓情緒中維持投資穩定度。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/8db30b13-bdba-4633-be21-41e484eee9df"} // Score 96-105, RR3-RR4
];

export const FUND_MAPPING: Record<string, {core: string[], sat: string[], etf: string}> = {
  "口袋拉拉": {
    "core": [
      "C0125004",
      "C0109004",
      "C0016400"
    ],
    "sat": [
      "C0025280",
      "73990649",
      "73990253"
    ],
    "etf": "98639401"
  },
  "口袋獒": {
    "core": [
      "C0109004",
      "C0016400",
      "17612497"
    ],
    "sat": [
      "73990649",
      "73990253",
      "18037937"
    ],
    "etf": "98639403"
  },
  "口袋阿金": {
    "core": [
      "C0016400",
      "17612497",
      "C0026212"
    ],
    "sat": [
      "73990253",
      "18037937",
      "C0016030"
    ],
    "etf": "98642376"
  },
  "口袋柴": {
    "core": [
      "17612497",
      "C0026212",
      "C0038019"
    ],
    "sat": [
      "18037937",
      "C0016030",
      "C0025113"
    ],
    "etf": "98641765"
  },
  "口袋土狗": {
    "core": [
      "C0026212",
      "C0038019",
      "19330754"
    ],
    "sat": [
      "C0016030",
      "C0025113",
      "98640076"
    ],
    "etf": "98641767"
  },
  "口袋西施": {
    "core": [
      "C0038019",
      "19330754",
      "01032183"
    ],
    "sat": [
      "C0025113",
      "98640076",
      "C0109015"
    ],
    "etf": "98639405"
  },
  "口袋邊牧": {
    "core": [
      "19330754",
      "01032183",
      "C0057147"
    ],
    "sat": [
      "98640076",
      "C0109015",
      "C0025280"
    ],
    "etf": "98639401"
  },
  "口袋濟斯": {
    "core": [
      "01032183",
      "C0057147",
      "C0125004"
    ],
    "sat": [
      "C0109015",
      "C0025280",
      "73990649"
    ],
    "etf": "98639403"
  },
  "口袋貴賓": {
    "core": [
      "C0057147",
      "C0125004",
      "C0109004"
    ],
    "sat": [
      "C0025280",
      "73990649",
      "73990253"
    ],
    "etf": "98642376"
  },
  "口袋吉娃": {
    "core": [
      "C0125004",
      "C0109004",
      "C0016400"
    ],
    "sat": [
      "73990649",
      "73990253",
      "18037937"
    ],
    "etf": "98641765"
  }
};

export const ETF_LINKS: Record<string, string> = {
  "98639401": "https://www.pocket.tw/etf/tw/0056",
  "98639403": "https://www.pocket.tw/etf/tw/0050",
  "98639405": "https://www.pocket.tw/etf/tw/006201",
  "98641765": "https://www.pocket.tw/etf/tw/00713",
  "98641767": "https://www.pocket.tw/etf/tw/00850",
  "98642376": "https://www.pocket.tw/etf/tw/00646"
};
