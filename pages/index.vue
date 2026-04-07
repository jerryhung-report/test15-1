<script setup lang="ts">

import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { UserFormData, Persona } from '~/types';
import { PERSONAS } from '~/utils/constants';

const route = useRoute();
const router = useRouter();

const getInitialStep = () => {
  const s = route.query.step as string;
  if (s) {
    if (s.startsWith('quiz')) return 'quiz';
    if (["intro", "form", "results", "login", "cart"].includes(s)) return s as any;
  }
  return "intro";
};

const step = ref<"intro" | "form" | "quiz" | "results" | "login" | "cart">(getInitialStep());
const formData = ref<UserFormData>({ gender: "", age: "", phone: "", email: "", allocation: "" });
const persona = ref<Persona>(PERSONAS[0]!);
const selectedFunds = ref<string[]>([]);

const P1 = 105; // Max score

// URL State Sync
watch(() => route.query.step, (newStep) => {
  if (newStep && newStep !== step.value) {
    if ((newStep as string).startsWith('quiz')) {
      step.value = 'quiz';
    } else if (["intro", "form", "results", "login", "cart"].includes(newStep as string)) {
      step.value = newStep as any;
    }
  }
});

onMounted(() => {
  const savedForm = localStorage.getItem('pocket_form');
  if (savedForm) {
    try {
      const parsed = JSON.parse(savedForm);
      if (parsed && typeof parsed === 'object') {
        formData.value = { ...formData.value, ...parsed };
      }
    } catch (e) {
      console.error('Failed to parse saved form data', e);
    }
  }
});

watch(step, (newStep) => {
  if (newStep !== 'quiz') {
    router.push({ query: { ...route.query, step: newStep } });
  }
});

const handleStart = () => {
  console.log("handleStart called, changing step to form");
  step.value = 'form';
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleFormChange = (d: UserFormData) => {
  formData.value = d;
  localStorage.setItem('pocket_form', JSON.stringify(d));
};

const handleQuizComplete = (answers: Record<number, number>) => {
  let total = 0;
  Object.values(answers).forEach(v => total += v);
  const index = Math.max(0, Math.min(Math.floor((total - 15) / 90 * 10), 9));
  const p = PERSONAS[index];
  if (p) {
    persona.value = p;
    selectedFunds.value = [];
    step.value = "results";
  }
};

const toggleFund = (code: string) => {
  if (selectedFunds.value.includes(code)) {
    selectedFunds.value = selectedFunds.value.filter(c => c !== code);
  } else {
    selectedFunds.value.push(code);
  }
};

const resetAnalysis = () => {
  selectedFunds.value = [];
  router.push({ query: { ...route.query, step: 'quiz1' } });
  step.value = "quiz";
};

const openExternalLink = () => {
  window.location.href = 'https://nimble-churros-b57ef7.netlify.app/';
};
</script>

<template>
  <div class="min-h-screen font-sans text-slate-900 relative">
    <AppBackground />
    <nav class="sticky top-0 z-[60] bg-white/60 backdrop-blur-xl border-b border-slate-200/50 py-1 sm:py-2 px-6 sm:px-10">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center cursor-pointer group" @click="openExternalLink">
          <img src="https://www.cmoneyfund.com.tw/api/v1.0/File/Download/e9cabd5a-7aed-4e43-a7a4-5dae1a969544" alt="Logo" referrerpolicy="no-referrer" class="h-10 sm:h-[50px] w-auto object-contain transition-transform group-hover:scale-105" />
        </div>
      </div>
    </nav>

    <main class="relative z-10">
      <Intro v-if="step === 'intro'" @start="handleStart" />
      <InfoForm 
        v-else-if="step === 'form'" 
        :data="formData" 
        @change="handleFormChange" 
        @next="step = 'quiz'" 
      />
      <QuizStep v-else-if="step === 'quiz'" @complete="handleQuizComplete" />
      <Results 
        v-else-if="step === 'results'" 
        :persona="persona" 
        @continue="step = 'login'" 
      />
      <Login 
        v-else-if="step === 'login'" 
        @success="step = 'cart'" 
      />
      <Cart 
        v-else-if="step === 'cart'" 
        :persona="persona" 
        :selected="selectedFunds" 
        @toggle="toggleFund"
        @reset="resetAnalysis"
      />
    </main>

    <footer class="py-12 px-6 text-left border-t border-slate-200/50 bg-white/20 backdrop-blur-md">
      <div class="max-w-5xl mx-auto space-y-4 text-[12px] sm:text-[14px] text-black font-bold leading-relaxed">
        <p>口袋投顧 獨立經營管理</p>
        <p>各基金經金管會核准或同意生效，惟不表示絕無風險。基金經理公司以往之經理績效不保證基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱投資人須知或/與基金公開說明書。</p>
        <p>有關基金應負擔之費用（含分銷費用）已揭露於基金公開說明書及投資人須知，投資人可至公開資訊觀測站或境外基金資訊觀測站中查詢。</p>
        <p>依金融消費者保護法最新相關規定，您於本公司網站完成「風險屬性評估表」，本公司將依客戶屬性做商品適合度規範並至少每年請您更新一次，若未能完成風險屬性評估屆時將會影響您的交易。</p>
        <p>投資外國證券市場，投資人應留意該市場國家之政治、經濟及主權評等變動所可能帶來之投資風險，以確保自身投資權益。</p>
        <p>本基金涉及投資新興市場部份，因其波動性與風險程度可能較高，且其政治與經濟情勢穩定度可能低於已開發國家，也可能使資產價值受不同程度之影響。依金管會規定：</p>
        <p>投信基金直接投資大陸地區有價證券僅限掛牌上市有價證券，投資人須留意中國市場特定政治、經濟與市場等投資風險。</p>
        <p>境外基金投資大陸地區有價證券不得超過該基金資產淨值之20%，投資人須留意中國市場特定政治、經濟與市場等投資風險。</p>
        <p class="text-[#8B0000]">由於非投資等級債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故非投資等級 債券基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。非投資等級債券基金不適合無法承擔相關風險之投資人，投資人投資以非投資等級債券為訴求之基金不宜占其投資組合過高之比重。部份基金或所投資之債券子基金，可能投資美國Rule144A債券，該等債券屬私募性質，較可能發生流動性不足，財務訊息揭露不完整或因價格不透明導致波動性較大之風險，投資人須留意相關風險。</p>
        <p>外幣計價之基金，投資人須承擔取得收益分配或贖回價金時轉換回新臺幣可能產生之匯率風險。若轉換當時之新臺幣兌換外幣匯率相較於原始投資日之匯率升值時，投資人將承受匯兌損失。</p>
        <p>各基金所採用之「公平價格調整」（或「反稀釋」）、短線交易及「價格調整機制（或「擺動定價」）」等機制，相關說明請詳各基金公開說明書。投資人應遵守基金公開說明書所列相關交易規定與限制。</p>
        <p>基金配息率不代表基金報酬率，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動。部分基金配息前未先扣除應負擔之相關費用。基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。各基金由本金支付配息之相關資料，投資人可至各投信基金公司及總代理人網站查詢。</p>
        <p>投資人因不同時間進場，將有不同之投資績效，過去之績效亦不代表未來績效之保證，本文提及之經濟走勢預測不必然代表基金之績效，基金投資風險請詳閱基金公開說明書。</p>
        <p>投資人應注意貨幣基金投資之風險包括利率風險、債券交易市場流動性不足之風險及投資無擔保公司債之風險；本基金或有因利率變動、債券交易市場流動性不足及定期存單提前解約而影響基金淨值下跌之風險，同時或有受益人大量贖回時，至延遲給付贖回價款之可能。</p>
        <p>風險報酬等級係依基金類型、投資區域或主要投資標的／產業，由低至高，區分為RR1~RR5五個風險報酬等級。計算過去五年基金淨值波動度標準差，以標準差區間予以分類等級，基金成立未滿五年，將以較短區間或適當參考標的作為評估標準。此等級分類係基於一般市場狀況反映市場價格波動風險，無法涵蓋所有風險，亦不宜作為投資唯一依據，投資人應充分評估基金之投資風險。基金主要相關投資風險已揭露於基金公開說明書或投資人須知。</p>
        <p>有關基金之ESG資訊，投資人應於申購前詳閱基金公開說明書或投資人須知所載之基金所有特色或目標等資訊。相關資訊請至基金資訊觀測站-ESG基金專區查詢。</p>
        <p>本公司與所推介分析之個別有價證券無不當之財務利益關係，本公司提供資訊僅供參考，投資人應獨立判斷，審慎評估並自負投資風險。</p>
      </div>
    </footer>
  </div>
</template>
