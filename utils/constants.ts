
import type { Fund, Question, Persona } from '~/types';

export const MOCK_FUNDS: Fund[] = [
  {
    "code": "98641176",
    "name": "PGIM保德信全球生態友善ESG多重資產基金-累積型(台幣)(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
    "isin": "TW000T0848A9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於全球生態友善及ESG相關之多重資產，追求長期穩健回報。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641767",
    "name": "元大臺灣ESG永續ETF連結基金A不配息(本基金之配息來源可能為收益平準金)",
    "isin": "TW000T05C3A3",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "連結元大臺灣ESG永續ETF，參與台灣ESG表現優異企業之投資。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641425",
    "name": "中國信託ESG金融收益多重資產基金-A累積型(台幣)(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)",
    "isin": "TW000T2623A4",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於全球ESG表現優良之金融資產，追求穩定收益。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98640652",
    "name": "台新ESG環保愛地球成長基金-A不配息(台幣)",
    "isin": "TW000T4769A3",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於全球環保及ESG相關產業，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0115029",
    "name": "法盛全球永續股票基金 R/A NPF USD",
    "isin": "LU1623119135",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於全球致力於永續發展之企業，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641053",
    "name": "中國信託ESG碳商機多重資產基金-A累積型(台幣)(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)",
    "isin": "TW000T2622A6",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "聚焦全球減碳趨勢與碳商機，投資於相關之多重資產。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "00850",
    "name": "元大臺灣ESG永續ETF",
    "isin": "TW0000085006",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤臺灣永續指數，投資於台灣ESG表現優異之企業。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "73998065",
    "name": "PGIM保德信大中華基金(台幣)",
    "isin": "TW000T0809Y1",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於大中華地區(中、港、台)之上市股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637127",
    "name": "PGIM保德信中國品牌基金-累積型(台幣)",
    "isin": "TW000T0832Y3",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "聚焦中國具備品牌優勢與內需成長潛力之企業，追求資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637551",
    "name": "統一大龍騰中國基金(台幣)",
    "isin": "TW000T0931Y3",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於中國大陸及香港等大中華經濟圈之股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637537",
    "name": "PGIM保德信中國中小基金(台幣)",
    "isin": "TW000T0836Y4",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於中國中小型企業，掌握其高成長潛力。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637078",
    "name": "統一大中華中小基金(台幣)",
    "isin": "TW000T0924Y8",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於大中華地區之中小型股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637071",
    "name": "台新中國精選中小基金(台幣)",
    "isin": "TW000T4711Y5",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "精選中國具備高成長潛力之中小型企業進行投資。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "0061",
    "name": "元大寶滬深ETF",
    "isin": "TW0000061007",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤滬深300指數，提供投資人參與中國A股市場之管道。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638350",
    "name": "PGIM保德信策略成長ETF組合基金(台幣)",
    "isin": "TW000T0839A8",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "透過投資全球ETF，進行動態資產配置，追求長期穩健成長。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98636726",
    "name": "元大全球ETF穩健組合基金A不配息(台幣)",
    "isin": "TW000T0575Y8",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於全球各類資產之ETF，追求穩健之投資回報。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638113",
    "name": "台新全球多元資產組合基金-A不配息(台幣)(本基金得投資於非投資等級之高風險債券基金且配息來源可能為本金)",
    "isin": "TW000T4753A7",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "透過投資組合基金，分散佈局全球多元資產，追求穩健增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641041",
    "name": "PGIM保德信全球新供應鏈基金-累積型(台幣)",
    "isin": "TW000T0847A1",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於全球供應鏈重組趨勢下之受惠企業，追求資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98636878",
    "name": "元大全球地產建設入息基金A不配息(本基金之配息來源可能為本金且並無保證收益及配息)",
    "isin": "TW000T0542A8",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於全球不動產及基礎建設相關證券，追求穩定入息與資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638435",
    "name": "華南永昌Shiller US CAPE ETF組合基金A不配息(台幣)(本基金之配息來源可能為本金)",
    "isin": "TW000T1259A8",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤Shiller US CAPE指數，透過價值投資策略參與美國股市。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "00910",
    "name": "第一金太空衛星ETF",
    "isin": "",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤太空衛星相關產業指數，掌握太空科技發展商機。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "97978047",
    "name": "PGIM保德信貨幣市場基金",
    "isin": "TW000T0805Y9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "追求基金資產之穩定收益，主要投資於中華民國境內之貨幣市場標的。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0109004",
    "name": "PGIM美國公司債基金T美元累積",
    "isin": "IE00BDZVHR40",
    "currency": "USD",
    "risk": 4,
    "type": "Core",
    "desc": "主要投資於美元計價之投資等級公司債，以獲取穩健之利息收益及資本利得。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "92017204",
    "name": "元大得利貨幣市場基金",
    "isin": "TW000T0569Y1",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於高流動性、低風險之貨幣市場工具，以維持本金之安全及較高之流動性，並追求穩定之收益。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639616",
    "name": "PGIM保德信美國投資級企業債券基金-累積型(台幣)(本基金有一定比重得投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
    "isin": "TW000T0842A2",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "透過投資於美國投資等級企業債券，追求長期資本增值及穩定之收益。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641524",
    "name": "華南永昌全球投資等級債券基金A不配息(台幣)(本基金配息來源可能為本金)",
    "isin": "TW000T1286A1",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "佈局全球投資等級債券，以獲取穩健收益及長期資本增值為目標。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0054057",
    "name": "法盛盧米斯賽勒斯投資等級債券基金R/A USD",
    "isin": "LU0411266801",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "透過投資於全球投資等級債券，追求高於平均水準之收益及資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "00713",
    "name": "元大台灣高息低波ETF",
    "isin": "TW0000071303",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤「臺灣指數公司特選高股息低波動指數」，兼具高股息與低波動特性。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "83866508",
    "name": "PGIM保德信中小型股基金-A類型",
    "isin": "TW000T0810Y9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於台灣中小型上市公司，掌握其爆發性成長潛力。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "97988636",
    "name": "PGIM保德信店頭市場基金",
    "isin": "TW000T0806Y7",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於台灣上櫃股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "97977878",
    "name": "統一中小基金",
    "isin": "TW000T0906Y5",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於台灣中小型股票，發掘具備高成長潛力之企業。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98636611",
    "name": "PGIM保德信全球中小基金(台幣)",
    "isin": "TW000T0817Y4",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於全球中小型企業，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "17605622",
    "name": "統一大滿貫基金-A類型",
    "isin": "TW000T0911Y5",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於台灣上市上櫃股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0054121",
    "name": "法盛-盧米斯賽勒斯債券基金R/DG USD(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
    "isin": "IE000D6HVBY0",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "透過彈性配置全球各類債券，追求高於平均水準之總報酬。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "006201",
    "name": "元大富櫃50ETF",
    "isin": "TW0000062013",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤櫃買富櫃50指數，涵蓋台灣上櫃市場具代表性之50檔股票。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "01032183",
    "name": "PGIM保德信高成長基金-A類型",
    "isin": "TW000T0802Y6",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於具高成長潛力之台灣上市上櫃公司股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0109006",
    "name": "PGIM JENNISON全球股票機會",
    "isin": "IE00BGJVXP15",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於全球具備強勁成長潛力之優質企業，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639403",
    "name": "元大台灣卓越50ETF連結基金A不配息(台幣)",
    "isin": "TW000T05B2A6",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "連結元大台灣50ETF，提供投資人參與台灣市值前50大企業之表現。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98642116",
    "name": "中國信託美國聚焦成長基金-A累積型(台幣)",
    "isin": "TW000T2628A3",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "聚焦投資於美國具備高成長潛力之企業，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "01031699",
    "name": "統一全天候基金",
    "isin": "TW000T0902Y4",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "透過靈活調整持股比例，因應市場多空變化，追求長期穩健之資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641594",
    "name": "中國信託成長轉機多重資產基金-A累積型(台幣)(本基金有相當比重投資於非投資等級之高風險債券且本基金之配息來源可能為本金)",
    "isin": "TW000T2625A9",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於具備成長潛力與轉機題材之多重資產，追求資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "009803",
    "name": "保德信市值動能50ETF",
    "isin": "TW0000098033",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤臺灣指數公司特選臺灣上市上櫃市值動能50指數。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "73990649",
    "name": "PGIM保德信科技島基金",
    "isin": "TW000T0808Y3",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "聚焦台灣科技產業，投資於具全球競爭力之科技類股，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0109015",
    "name": "PGIM Jennison美國成長基金",
    "isin": "IE00BYWYQY37",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於美國具備長期成長潛力之大型企業，追求資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "81584335",
    "name": "元大高科技基金",
    "isin": "TW000T0508Y9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於國內高科技產業股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98642010",
    "name": "台新美日台半導體基金-A不配息(台幣)",
    "isin": "TW000T4775A0",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "聚焦美國、日本及台灣之半導體產業，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0115024",
    "name": "法盛AI及機器人基金R/A USD",
    "isin": "LU1923623000",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於全球AI及機器人相關產業，掌握科技創新趨勢。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638079",
    "name": "統一全球新科技基金(台幣)",
    "isin": "TW000T0933A9",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於全球具備創新科技與破壞式創新之企業，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "0050",
    "name": "元大台灣50ETF",
    "isin": "TW0000050000",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤臺灣50指數，涵蓋台灣市值前50大之上市公司。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0054008",
    "name": "法盛漢瑞斯全球股票基金R/A USD",
    "isin": "LU0130103400",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "透過價值投資策略，投資於全球被低估之優質企業。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "92029139",
    "name": "PGIM保德信亞太基金",
    "isin": "TW000T0804Y2",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於亞太地區(不含日本)之股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641172",
    "name": "元大全球優質龍頭平衡基金A不配息(台幣)",
    "isin": "TW000T05B6A7",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於全球各產業龍頭企業之股票及債券，追求穩健之長期報酬。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98640076",
    "name": "中國信託越南機會基金(台幣)",
    "isin": "TW000T2691A1",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於越南股票市場，掌握越南經濟快速成長之契機。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637051",
    "name": "PGIM保德信拉丁美洲基金",
    "isin": "TW000T0830Y7",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於拉丁美洲地區之股票，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641587",
    "name": "元大日本龍頭企業基金A不配息(台幣)",
    "isin": "TW000T05C1A7",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於日本各產業之龍頭企業，追求長期資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "009810",
    "name": "保德信全球跨國藍籌100ETF",
    "isin": "TW0000098108",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤全球跨國藍籌企業表現。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638122",
    "name": "PGIM保德信多元收益組合基金-月配息型(台幣)(本基金配息來源可能為本金)",
    "isin": "TW000T0837B0",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "透過動態資產配置，投資於全球多元資產，追求長期穩健之收益與資本利得。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98642423",
    "name": "中國信託策略優利多重資產基金-B分配型(台幣)(本基金有相當比重投資於非投資等級之高風險債券且配息來源可能為本金且基金並無保證收益及配息)",
    "isin": "TW000T2629B9",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於多重資產，結合高股息股票與債券，追求穩定之收益與資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641177",
    "name": "PGIM保德信全球生態友善ESG多重資產基金-月配息型(台幣)(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
    "isin": "TW000T0848B7",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於全球具備生態友善與ESG概念之企業，追求長期資本增值.",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98638532",
    "name": "元大亞太優質高股息100指數基金B配息(台幣)(基金之收益分配由經理公司得依收益之情況自行決定當季配息型受益權單位配息與否及分配之金額，故每季分配之金額並非一定相同且並無保證收益及配息)",
    "isin": "TW000T05A7B4",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤亞太地區優質高股息企業，追求長期穩定的股息收益。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637275",
    "name": "台新北美收益資產證券化基金-B配息(台幣)(本基金配息來源可能為本金)",
    "isin": "TW000T4717B0",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於北美地區之不動產證券化商品(REITs)，追求穩定收益及資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639936",
    "name": "中國信託亞太實質收息多重資產基金-B分配型(台幣)(基金之配息來源可能為本金且基金並無保證收益及配息)",
    "isin": "TW000T2683B6",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於亞太地區實質資產及高息資產，追求長期穩健收益。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "00646",
    "name": "元大S&P500ETF",
    "isin": "TW0000064605",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤美國標普500指數，提供投資人參與美國大型企業成長之機會。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98640605",
    "name": "PGIM保德信美元非投資等級債券基金-月配息型(台幣)(本基金之配息來源可能為本金)",
    "isin": "TW000T0845C1",
    "currency": "USD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於美元計價之非投資等級債券，追求較高之利息收益。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0109011",
    "name": "PGIM美國全方位非投等債",
    "isin": "IE00BN47NK81",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "廣泛投資於美國非投資等級債券市場，追求高收益與資本增值。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639310",
    "name": "台新優先順位資產抵押非投資等級債券基金-B配息(台幣)(本基金之配息來源可能為本金)",
    "isin": "TW000T4761B8",
    "currency": "TWD",
    "risk": 4,
    "type": "Core",
    "desc": "投資於具備優先擔保地位之非投資等級債券，兼顧收益與風險控管。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98639036",
    "name": "PGIM保德信印度機會債券基金-月配息型(台幣)(本基金有相當比重投資於非投資等級之高風險債券且基金之配息來源可能為本金)",
    "isin": "TW000T0841B2",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於印度債券市場，掌握印度經濟成長帶來之收益機會。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98637868",
    "name": "統一亞洲非投資等級債券基金-月配型(台幣)(基金之配息來源可能為本金)",
    "isin": "TW000T0932B9",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "投資於亞洲地區非投資等級債券，追求較高之收益。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "98641204",
    "name": "台新美國策略時機非投資等級債券基金-B配息(台幣)(本基金之配息來源可能為本金)",
    "isin": "TW000T4772B5",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "透過策略性配置美國非投資等級債券，追求長期總報酬。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "0056",
    "name": "元大高股息ETF",
    "isin": "TW0000056007",
    "currency": "TWD",
    "risk": 4,
    "type": "Satellite",
    "desc": "追蹤臺灣高股息指數，精選預期殖利率較高之成分股。",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0115012",
    "name": "法盛智慧安保基金CT/A USD",
    "isin": "LU2228205295",
    "currency": "美元",
    "risk": 4,
    "type": "Satellite",
    "desc": "本基金至少會投資總資產之三分之二於全球之股權證券......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012019",
    "name": "首源投資環球傘型基金-首源全球基建基金第一類股(美元-配息型)(本基金之配息來源可能為本金)",
    "isin": "IE00B29SXL02",
    "currency": "美元",
    "risk": 4,
    "type": "Satellite",
    "desc": "本基金的投資目標是為達致總投資報酬與收益及長期資本成長一致......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012003",
    "name": "首源投資環球傘型基金-首域盈信印度次大陸基金第一類股(美元-累積)",
    "isin": "IE0008369930",
    "currency": "美元",
    "risk": 5,
    "type": "Satellite",
    "desc": "本基金的投資目標係為達致長期資本增值......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012002",
    "name": "首源投資環球傘型基金-首源全球債券基金第一類股(美元-累積)",
    "isin": "IE0008370482",
    "currency": "美元",
    "risk": 2,
    "type": "Satellite",
    "desc": "本基金淨資產價值至少 70%投資於上述債務證券......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012001",
    "name": "首源投資環球傘型基金-盈信世界領先基金第一類股(美元-累積)",
    "isin": "IE0008368304",
    "currency": "美元",
    "risk": 3,
    "type": "Satellite",
    "desc": "本基金的投資目標係為達致長期資本增值......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012005",
    "name": "首源投資環球傘型基金-首域盈信東協全市值基金第一類股(美元-累積)",
    "isin": "IE0031814969",
    "currency": "美元",
    "risk": 5,
    "type": "Satellite",
    "desc": "本基金的投資目標係為達致長期資本增值......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012017",
    "name": "首源投資環球傘型基金-首源亞洲優質債券基金第一類股(美元-累積)",
    "isin": "IE0032834990",
    "currency": "美元",
    "risk": 3,
    "type": "Satellite",
    "desc": "本基金主要投資（其淨資產價值至少70%）於亞洲政府或準政府機構......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012018",
    "name": "首源投資環球傘型基金-首源亞洲優質債券基金第一類股(美元-月配息)(本基金之配息來源可能為本金)",
    "isin": "IE00B8GCJK88",
    "currency": "美元",
    "risk": 3,
    "type": "Satellite",
    "desc": "本基金主要投資（其淨資產價值至少70%）於亞洲政府或準政府機構......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012020",
    "name": "首源投資環球傘型基金-首源亞洲優質債券基金第一類股(澳幣避險N)月配息(本基金之配息來源可能為本金)",
    "isin": "IE00BMW4XW63",
    "currency": "澳幣",
    "risk": 3,
    "type": "Satellite",
    "desc": "本基金主要投資（其淨資產價值至少70%）於亞洲政府或準政府機構......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
  },
  {
    "code": "C0012034",
    "name": "首源投資環球傘型基金-首源全球基建基金第一類股(美元-月配息)(本基金之配息來源可能為本金)",
    "isin": "IE0008RSOEY0",
    "currency": "美元",
    "risk": 4,
    "type": "Satellite",
    "desc": "本基金的投資目標是為達致總投資報酬與收益及長期資本成長一致......",
    "perf": "+10.5%",
    "perf2y": "+20.1%",
    "perf3y": "+35.2%"
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
  {title:"口袋拉拉",enName:"Lab",desc:"拉布拉多型投資人高度重視「有沒有產出」，對現金流與紀律特別敏感。能定期看到成果的配息型基金或穩定投入機制，最能讓他們安心守住投資節奏。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/152f4e06-2380-4730-a086-09ad9dcb308e"},
  {title:"口袋獒",enName:"Mastiff",desc:"藏獒型投資人重視責任與守護，對風險高度警覺。核心配置、穩定性高的基金，是他們為資產築起防線的首選，寧可慢，也不能失守。",riskLevel:6,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/056f600d-6ff0-4d03-84bf-f9dd277ac487"},
  {title:"口袋阿金",enName:"Golden",desc:"黃金獵犬型投資人性格溫暖、陽光，理財目的不是擊敗市場，而是讓生活更安心。他們親近長期投資、穩健累積的策略，就像釀酒一樣，時間越久，收穫越醇。",riskLevel:5,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/f866fc51-a815-4bf6-8e28-d3639d5a1600"},
  {title:"口袋柴",enName:"Shiba",desc:"柴犬型投資人個性獨立、自我，不輕易追逐市場風向，常以旁觀者視角看待波動。這種傲嬌而固執的氣質，使他們偏好有長期邏輯、能經得起時間考驗的基金，而非短線熱門題材。",riskLevel:3,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/79ebfa32-abd4-4d6e-97c3-de47b3eae5cc"},
  {title:"口袋土狗",enName:"Tugou",desc:"台灣土狗型投資人擁有極強的環境適應力，不追求華麗報酬，而是能在各種市場條件下活得下來。分散、耐震、長期有效的基金配置，最符合他們的生存智慧。",riskLevel:4,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/9653082c-0970-44c8-b4cb-44a326c7651f"},
  {title:"口袋西施",enName:"ShihTzu",desc:"西施犬型投資人講究生活品質與節奏，不急著進出市場。穩健、管理風格一致的基金，讓資產在不被打擾的狀態下，優雅累積。",riskLevel:2,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/7e82c005-61b0-4685-80f5-87475fdf9002"},
  {title:"口袋邊牧",enName:"Border",desc:"邊境牧羊犬型投資人理性且高度系統化，相信規則勝過情緒。具備明確策略、可自動執行的基金投資方式，正好符合他們追求最佳化的思維。",riskLevel:5,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/18896e37-c685-4aa1-8234-ddf9d4a326de"},
  {title:"口袋濟斯",enName:"Maltese",desc:"馬爾濟斯型投資人資金規模不一定大，但對世界充滿好奇。他們偏好低門檻、可探索不同市場的基金配置，在控制風險的前提下，體驗投資帶來的視野擴張。",riskLevel:1,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/545a1226-05a7-43d0-ab65-4f13a847e211"},
  {title:"口袋貴賓",enName:"Poodle",desc:"貴賓犬型投資人重視差異化與質感，不想與市場雷同。具有特色主題、選股邏輯清楚的基金，能滿足他們對獨特性的期待。",riskLevel:3,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/7398bfc6-b0cb-4673-a018-aab8ecd13c45"},
  {title:"口袋吉娃",enName:"Chi",desc:"吉娃娃型投資人情緒敏感、反應快速，容易受市場波動影響。透過分散配置與小額定期投入的基金策略，有助於在高壓情緒中維持投資穩定度。",riskLevel:2,image:"https://www.cmoneyfund.com.tw/api/v1.0/File/Download/8db30b13-bdba-4633-be21-41e484eee9df"}
];

export const FUND_MAPPING: Record<string, {core: string[], sat: string[], etf: string}> = {
  "口袋拉拉": {
    "core": [
      "98641176",
      "98641767",
      "98641425"
    ],
    "sat": [
      "98640652",
      "C0115029",
      "98641053"
    ],
    "etf": "0050"
  },
  "口袋獒": {
    "core": [
      "73998065",
      "98637127",
      "98637551"
    ],
    "sat": [
      "C0012003",
      "C0012005",
      "98640652"
    ],
    "etf": "0050"
  },
  "口袋阿金": {
    "core": [
      "98638350",
      "98636726",
      "98638113"
    ],
    "sat": [
      "C0012003",
      "C0012005",
      "98640652"
    ],
    "etf": "0050"
  },
  "口袋柴": {
    "core": [
      "C0109004",
      "83866508",
      "97988636"
    ],
    "sat": [
      "C0012001",
      "C0012017",
      "C0012002"
    ],
    "etf": "00713"
  },
  "口袋土狗": {
    "core": [
      "97977878",
      "01032183",
      "C0109006"
    ],
    "sat": [
      "00850",
      "98637537",
      "98637078"
    ],
    "etf": "0050"
  },
  "口袋西施": {
    "core": [
      "98639403",
      "73990649",
      "C0109015"
    ],
    "sat": [
      "C0012002",
      "C0012001",
      "C0012017"
    ],
    "etf": "0061"
  },
  "口袋邊牧": {
    "core": [
      "81584335",
      "C0054008",
      "92029139"
    ],
    "sat": [
      "C0012003",
      "C0012005",
      "98640652"
    ],
    "etf": "009810"
  },
  "口袋濟斯": {
    "core": [
      "98641172",
      "98638122",
      "98642423"
    ],
    "sat": [
      "C0012002",
      "C0012001",
      "C0012017"
    ],
    "etf": "00850"
  },
  "口袋貴賓": {
    "core": [
      "98641177",
      "98640605",
      "C0109011"
    ],
    "sat": [
      "C0012001",
      "C0012017",
      "C0012002"
    ],
    "etf": "0050"
  },
  "口袋吉娃": {
    "core": [
      "98639310",
      "98641176",
      "98641767"
    ],
    "sat": [
      "C0012002",
      "C0012001",
      "C0012017"
    ],
    "etf": "0050"
  }
};

export const ETF_LINKS: Record<string, string> = {
  "00713": "https://www.pocket.tw/etf/tw/00713",
  "00646": "https://www.pocket.tw/etf/tw/00646",
  "009803": "https://www.pocket.tw/etf/tw/009803",
  "0050": "https://www.pocket.tw/etf/tw/0050",
  "00850": "https://www.pocket.tw/etf/tw/00850",
  "0056": "https://www.pocket.tw/etf/tw/0056",
  "0061": "https://www.pocket.tw/etf/tw/0061",
  "009810": "https://www.pocket.tw/etf/tw/009810",
  "006201": "https://www.pocket.tw/etf/tw/006201",
  "00910": "https://www.pocket.tw/etf/tw/00910"
};
